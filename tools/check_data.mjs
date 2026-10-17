#!/usr/bin/env node
/**
 * 内容校验脚本 —— 不需要浏览器，直接扫描 data/site-data.js 和 index.html
 *
 *   node tools/check_data.mjs
 *   node tools/check_data.mjs --strict   # 把警告也算作失败（适合 CI 上线前）
 *
 * 退出码：0 = 通过；1 = 有错误（--strict 下含警告）
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STRICT = process.argv.includes('--strict');

const errors = [];
const warnings = [];
const E = (code, msg) => errors.push({ code, msg });
const W = (code, msg) => warnings.push({ code, msg });

/* ────────────────────────── 载入数据 ────────────────────────── */

const DATA_PATH = join(ROOT, 'data', 'site-data.js');
if (!existsSync(DATA_PATH)) {
  console.error('✗ 找不到 data/site-data.js');
  process.exit(1);
}

let data;
try {
  const code = readFileSync(DATA_PATH, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: 'site-data.js' });
  data = sandbox.window.SITE_DATA;
} catch (e) {
  console.error('✗ data/site-data.js 语法错误，无法解析：');
  console.error('  ' + e.message);
  process.exit(1);
}

if (!data || typeof data !== 'object' || Array.isArray(data)) {
  console.error('✗ data/site-data.js 没有正确导出 window.SITE_DATA 对象');
  process.exit(1);
}

/* ────────────────────────── 分组与 id ────────────────────────── */

const RESERVED = new Set([
  'meta', 'categories', 'characters', 'items', 'mechanics',
  'terrains', 'changelog', 'relations', 'posters', 'sections',
]);

// [数据键, 中文名]
const groups = [
  ['characters', '角色'],
  ['items', '物品'],
  ['mechanics', '机制'],
  ['terrains', '地形'],
  ['changelog', '更新'],
];
for (const key of Object.keys(data)) {
  if (!RESERVED.has(key) && Array.isArray(data[key])) {
    groups.push([key, key]);
  }
}

const ids = new Map();      // id → "分组/名称"
const names = new Set();    // 所有可被 [[双链]] 命中的名称
const entries = [];         // { group, label, id, title, entry }

for (const [key, label] of groups) {
  const list = Array.isArray(data[key]) ? data[key] : [];
  for (const entry of list) {
    if (!entry || typeof entry !== 'object') {
      E('ENTRY_INVALID', `${label} 中有非对象条目，已跳过`);
      continue;
    }
    const title = entry.name || entry.title || entry.version || '(未命名)';
    if (!entry.id) {
      E('ID_MISSING', `${label}「${title}」缺少 id 字段`);
      continue;
    }
    if (ids.has(entry.id)) {
      E('ID_DUPLICATE', `id「${entry.id}」重复：${ids.get(entry.id)} 与 ${label}「${title}」`);
    } else {
      ids.set(entry.id, `${label}「${title}」`);
    }
    if (entry.name) names.add(entry.name);
    if (entry.title) names.add(entry.title);
    entries.push({ group: key, label, id: entry.id, title, entry });
  }
}

// relations 里手动指定的展示名也算合法双链目标
if (data.relations && typeof data.relations === 'object') {
  for (const value of Object.values(data.relations)) {
    if (typeof value === 'string' && value) names.add(value);
  }
}

/* ────────────────────────── meta ────────────────────────── */

const meta = data.meta || {};
for (const key of ['site_title', 'author', 'version', 'workshop_url']) {
  if (!meta[key]) E('META_MISSING', `meta.${key} 缺失或为空`);
}
if (meta.workshop_url && !/^https?:\/\//.test(meta.workshop_url)) {
  E('META_URL', `meta.workshop_url 不是完整 URL：${meta.workshop_url}`);
}
if (!meta.manifesto || /占位/.test(meta.manifesto)) {
  W('META_PLACEHOLDER', 'meta.manifesto（站点宣言）仍是占位内容');
}
if (Array.isArray(meta.links)) {
  meta.links.forEach((link, i) => {
    if (!link || !link.label || !link.url) {
      E('META_LINK', `meta.links[${i}] 缺少 label 或 url`);
    } else if (!/^https?:\/\//.test(link.url)) {
      E('META_LINK', `meta.links[${i}].url 不是完整 URL：${link.url}`);
    } else if (/github\.com\/example\//.test(link.url)) {
      W('META_LINK_PLACEHOLDER', `meta.links[${i}] 仍是模板占位链接：${link.url}`);
    }
  });
}

/* ────────────────────────── 分类 ────────────────────────── */

const categoryIds = new Set();
if (!Array.isArray(data.categories) || data.categories.length === 0) {
  E('CATEGORY_EMPTY', 'categories 为空，物品筛选将没有分类可选项');
} else {
  for (const cat of data.categories) {
    if (!cat || !cat.id || !cat.name) {
      E('CATEGORY_INVALID', 'categories 中存在缺少 id 或 name 的条目');
      continue;
    }
    if (categoryIds.has(cat.id)) E('CATEGORY_DUPLICATE', `分类 id「${cat.id}」重复`);
    categoryIds.add(cat.id);
  }
}

/* ────────────────────────── 角色硬约束 ────────────────────────── */

const REQUIRED_CHARACTERS = { pangtouyu: 'zuo', gaojiaoniao: 'you' };
const characters = Array.isArray(data.characters) ? data.characters : [];
if (characters.length < 2) {
  E('CHAR_COUNT', `characters 至少需要 2 个角色，当前 ${characters.length} 个`);
}
if (characters.length > 2) {
  W('CHAR_COUNT', `characters 有 ${characters.length} 个，但页面只渲染前两个（胖头鱼 / 高脚鸟），多余的不会显示`);
}
for (const [id, side] of Object.entries(REQUIRED_CHARACTERS)) {
  const found = characters.find((c) => c && c.id === id);
  if (!found) {
    E('CHAR_ID', `缺少 id 为「${id}」的角色 —— assets/js/data.js 把角色 id 写死了，改 id 会导致首页塌掉`);
    continue;
  }
  if (found.side !== side) {
    E('CHAR_SIDE', `角色「${found.name || id}」的 side 应为「${side}」，当前是「${found.side}」`);
  }
  const stats = found.stats || {};
  for (const [k, zh] of [['hp', '生命'], ['san', '理智'], ['hunger', '饥饿']]) {
    if (typeof stats[k] !== 'number') {
      E('CHAR_STATS', `角色「${found.name || id}」的 stats.${k}（${zh}）必须是数字`);
    }
  }
  if (!Array.isArray(found.setting) || found.setting.length === 0) {
    W('CHAR_SETTING', `角色「${found.name || id}」没有 setting 设定条目`);
  }
}

/* ────────────────────────── 资源路径 ────────────────────────── */

const isRemote = (p) => /^(https?:)?\/\//.test(p) || /^data:/.test(p);

function checkAsset(pathValue, where) {
  if (typeof pathValue !== 'string' || !pathValue) return;
  if (isRemote(pathValue)) return;
  const clean = pathValue.split(/[?#]/)[0];
  if (!existsSync(join(ROOT, clean))) {
    E('ASSET_MISSING', `${where} 引用的文件不存在：${clean}`);
  }
}

// 站点模板里硬编码、改路径就白屏的 UI 图
for (const p of [
  'assets/img/ui/pangtouyu.png',
  'assets/img/ui/gaojiaoniao.png',
  'assets/img/ui/sheding.png',
  'assets/img/ui/zhuanshu.png',
  'assets/img/placeholders/missing.svg',
  'assets/js/vendor/mustache.min.js',
  'data/site-data.js',
]) {
  if (!existsSync(join(ROOT, p))) E('ASSET_MISSING', `站点硬编码依赖的文件不存在：${p}`);
}

for (const { label, title, id, entry } of entries) {
  const where = `${label}「${title}」(${id})`;
  checkAsset(entry.image, `${where}.image`);
  checkAsset(entry.portrait, `${where}.portrait`);
  checkAsset(entry.illustration, `${where}.illustration`);
  checkAsset(entry.cover, `${where}.cover`);
  if (Array.isArray(entry.detail_blocks)) {
    entry.detail_blocks.forEach((block, i) => {
      if (!block || typeof block !== 'object') return;
      if (block.type === 'image') {
        if (!block.src) E('BLOCK_NO_SRC', `${where}.detail_blocks[${i}] 是 image 类型但没有 src`);
        else checkAsset(block.src, `${where}.detail_blocks[${i}].src`);
        if (!block.caption) W('BLOCK_NO_CAPTION', `${where}.detail_blocks[${i}] 图片没有 caption 说明`);
      } else if (block.type === 'text') {
        if (!block.content) E('BLOCK_NO_CONTENT', `${where}.detail_blocks[${i}] 是 text 类型但没有 content`);
      } else if (block.type) {
        E('BLOCK_TYPE', `${where}.detail_blocks[${i}] 的 type 只能是 "text" 或 "image"，当前是「${block.type}」`);
      }
    });
  }
}

if (Array.isArray(data.posters)) {
  data.posters.forEach((p, i) => {
    if (!p || !p.src) {
      E('POSTER_NO_SRC', `posters[${i}] 缺少 src`);
      return;
    }
    checkAsset(p.src, `posters[${i}].src`);
    if (!p.caption) W('POSTER_NO_CAPTION', `posters[${i}] 缺少 caption（会用作 alt 文本）`);
  });
}

/* ────────────────────────── 交叉引用 ────────────────────────── */

for (const { label, title, id, entry } of entries) {
  const where = `${label}「${title}」(${id})`;

  // related → 必须指向存在的条目
  if (entry.related !== undefined) {
    if (!Array.isArray(entry.related)) {
      E('RELATED_TYPE', `${where}.related 必须是数组`);
    } else {
      for (const relId of entry.related) {
        if (!ids.has(relId)) E('RELATED_DEAD', `${where}.related 指向不存在的 id：${relId}`);
        else if (relId === id) W('RELATED_SELF', `${where}.related 指向了自己`);
      }
    }
  }

  // recipe 里的 [id] 必须是可识别的条目 id
  if (typeof entry.recipe === 'string' && entry.recipe) {
    for (const m of entry.recipe.matchAll(/\[([^\]]+)\]/g)) {
      if (!ids.has(m[1])) E('RECIPE_DEAD', `${where}.recipe 里的 [${m[1]}] 不是任何条目的 id`);
    }
  }

  // owner 必须是角色 id 或 common
  if (entry.owner !== undefined) {
    if (entry.owner !== 'common' && !characters.some((c) => c && c.id === entry.owner)) {
      E('OWNER_INVALID', `${where}.owner 只能是角色 id 或 "common"，当前是「${entry.owner}」`);
    }
  }

  // category 必须在分类表里
  if (entry.category !== undefined && !categoryIds.has(entry.category)) {
    E('CATEGORY_UNKNOWN', `${where}.category「${entry.category}」不在 categories 列表中`);
  }

  // [[双链]] 必须能解析到名称
  const texts = [];
  if (typeof entry.summary === 'string') texts.push(entry.summary);
  for (const key of ['setting', 'exclusive_intro', 'changes']) {
    if (Array.isArray(entry[key])) texts.push(...entry[key].filter((t) => typeof t === 'string'));
  }
  if (Array.isArray(entry.detail_blocks)) {
    for (const b of entry.detail_blocks) {
      if (b && typeof b.content === 'string') texts.push(b.content);
    }
  }
  for (const text of texts) {
    for (const m of text.matchAll(/\[\[([^\]]+)\]\]/g)) {
      if (!names.has(m[1])) E('LINK_DEAD', `${where} 的 [[${m[1]}]] 找不到同名条目`);
    }
  }

  // 占位文案
  if (/占位|TODO|待补|未命名/.test(JSON.stringify(entry))) {
    W('PLACEHOLDER', `${where} 仍残留占位文案`);
  }

  // 更新日志日期格式
  if (label === '更新' || entry.version !== undefined && entry.date !== undefined) {
    if (entry.date !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(entry.date))) {
      E('DATE_FORMAT', `${where}.date 应为 YYYY-MM-DD，当前是「${entry.date}」`);
    }
  }
}

/* ────────────────────────── sections ────────────────────────── */

const HARD_CODED_ROOTS = { items: 'items-root', changelog: 'changelog-root' };
const sections = Array.isArray(data.sections) ? data.sections : [];
if (sections.length === 0) {
  E('SECTION_EMPTY', 'sections 为空，页面除了「序」以外什么都没有');
}
const sectionIds = new Set();
for (const sec of sections) {
  if (!sec || !sec.id || !sec.title) {
    E('SECTION_INVALID', 'sections 中存在缺少 id 或 title 的条目');
    continue;
  }
  if (sectionIds.has(sec.id)) E('SECTION_DUPLICATE', `分区 id「${sec.id}」重复`);
  sectionIds.add(sec.id);

  if (!sec.rootId) {
    E('SECTION_ROOT', `分区「${sec.title}」缺少 rootId`);
  } else if (HARD_CODED_ROOTS[sec.id] && sec.rootId !== HARD_CODED_ROOTS[sec.id]) {
    E(
      'SECTION_ROOT_HARDCODED',
      `分区「${sec.title}」的 rootId 必须是「${HARD_CODED_ROOTS[sec.id]}」—— assets/js/render.js 里写死了这个容器 id，改了会渲染不出来`
    );
  }

  const hasData = Object.prototype.hasOwnProperty.call(data, sec.id);
  if (!hasData) {
    E('SECTION_NO_DATA', `分区「${sec.title}」(id: ${sec.id}) 在数据里找不到同名字段，页面会是空的`);
  } else if (Array.isArray(data[sec.id]) && data[sec.id].length === 0) {
    W('SECTION_EMPTY_DATA', `分区「${sec.title}」的 ${sec.id} 是空数组`);
  }

  if (sec.themeClass && !['section--paper', 'section--ink'].includes(sec.themeClass)) {
    W('SECTION_THEME', `分区「${sec.title}」的 themeClass「${sec.themeClass}」不是 section--paper / section--ink`);
  }
}

/* ────────────────────────── index.html 静态引用 ────────────────────────── */

const INDEX = join(ROOT, 'index.html');
if (!existsSync(INDEX)) {
  E('INDEX_MISSING', '找不到 index.html');
} else {
  const html = readFileSync(INDEX, 'utf8');
  const refs = new Set();
  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    refs.add(m[1]);
  }
  for (const ref of refs) {
    if (/^(https?:)?\/\//.test(ref) || ref.startsWith('#') || ref.startsWith('mailto:')) continue;
    if (ref.includes('{{')) continue; // Mustache 运行时占位
    checkAsset(ref, 'index.html');
  }
  if (!/<html[^>]+lang="zh-CN"/.test(html)) W('HTML_LANG', 'index.html 的 <html> 缺少 lang="zh-CN"');
}

/* ────────────────────────── 汇总输出 ────────────────────────── */

const byGroup = groups.map(([key, label]) => {
  const list = Array.isArray(data[key]) ? data[key] : [];
  return `  ${String(list.length).padStart(3)} 条  ${key.padEnd(10)} ${label}`;
});

console.log('');
console.log('══ 我们饥佬是这样的 · 内容校验 ══');
console.log('');
console.log(`数据源 : data/site-data.js`);
console.log(`站点标题: ${meta.site_title || '(空)'}   版本: ${meta.version || '(空)'}   作者: ${meta.author || '(空)'}`);
console.log('');
console.log('条目统计:');
console.log(byGroup.join('\n'));
console.log('');

if (errors.length) {
  console.log(`✗ 错误 ${errors.length} 条`);
  for (const e of errors) console.log(`   [${e.code}] ${e.msg}`);
  console.log('');
}
if (warnings.length) {
  const shown = warnings.slice(0, 60);
  console.log(`⚠ 警告 ${warnings.length} 条${warnings.length > shown.length ? '（只显示前 60 条）' : ''}`);
  for (const w of shown) console.log(`   [${w.code}] ${w.msg}`);
  console.log('');
}

if (!errors.length && !warnings.length) {
  console.log('✓ 全部通过，没有发现错误或占位内容。');
} else if (!errors.length) {
  console.log('✓ 没有错误。警告主要是占位文案，属于「内容还没写完」，不影响站点运行。');
}

const failed = errors.length > 0 || (STRICT && warnings.length > 0);
process.exit(failed ? 1 : 0);

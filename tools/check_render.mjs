#!/usr/bin/env node
/**
 * 渲染自检 —— 在 Node 里真跑一遍数据管线与模板
 *
 *   node tools/check_render.mjs
 *
 * 和 check_data.mjs 的区别：
 *   check_data.mjs   → 静态扫描，检查「数据写得对不对」（路径、id、死链）
 *   check_render.mjs → 运行时验证，检查「数据真的能跑出页面」：用 node:vm 载入
 *                      assets/js/data.js 跑真实的数据规范化，再把 index.html 里
 *                      的 Mustache 模板用真实数据渲染一遍
 *
 * 适合放在 CI 或提交前，防止「改了个 id 导致页面空白」这类问题。
 *
 * ⚠️ 说明：模板视图对象是按 assets/js/render.js / modal.js 的组装方式复刻的。
 *    如果哪天大幅改了渲染逻辑，这里的断言可能不再反映真实页面，需要同步更新。
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

let pass = 0;
let fail = 0;
const check = (ok, label, extra = '') => {
  if (ok) {
    pass++;
    console.log(`  ✓ ${label}${extra ? '  → ' + extra : ''}`);
  } else {
    fail++;
    console.log(`  ✗ ${label}${extra ? '  → ' + extra : ''}`);
  }
};

/* ── 建立沙箱并载入真实的 JS ── */
const sandbox = {
  window: { location: { hash: '' } },
  console,
  URLSearchParams,
  Date,
  JSON,
  Object,
  Array,
  String,
  Number,
  Math,
  RegExp,
  Promise,
  setTimeout,
  clearTimeout,
};
sandbox.globalThis = sandbox;
sandbox.self = sandbox;
vm.createContext(sandbox);

const runFile = (rel) => {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) throw new Error(`缺少文件：${rel}`);
  vm.runInContext(readFileSync(abs, 'utf8'), sandbox, { filename: rel });
};

try {
  runFile('assets/js/vendor/mustache.min.js');
  if (!sandbox.window.Mustache) sandbox.window.Mustache = sandbox.Mustache;
  runFile('data/site-data.js');
  runFile('data/vanilla-icons.js');
  runFile('assets/js/data.js');
  runFile('assets/js/linkify.js');
  runFile('assets/js/recipe.js');
} catch (e) {
  console.error(`\n✗ JS 载入失败：${e.message}\n`);
  process.exit(1);
}

const App = sandbox.window.App;
const Mustache = sandbox.window.Mustache;

if (!App || !App.Data || typeof App.Data.load !== 'function') {
  console.error('\n✗ assets/js/data.js 没有正确暴露 App.Data.load()\n');
  process.exit(1);
}
if (!Mustache || typeof Mustache.render !== 'function') {
  console.error('\n✗ Mustache 模板引擎未载入\n');
  process.exit(1);
}

let S;
try {
  await App.Data.load();
  S = App.STATE;
} catch (e) {
  console.error(`\n✗ App.Data.load() 抛错：${e.message}\n`);
  process.exit(1);
}

/* ── 1. 数据管线 ── */
console.log('\n── 数据管线（assets/js/data.js 实际执行）──');
check(!!S, 'App.Data.load() 成功返回 STATE');
check(S.characters.length === 2, '角色数量为 2', S.characters.map((c) => c.id).join(', '));
check(S.characters[0] && S.characters[0].id === 'pangtouyu', '左角色 id = pangtouyu');
check(S.characters[1] && S.characters[1].id === 'gaojiaoniao', '右角色 id = gaojiaoniao');
check(S.characters[0].side === 'zuo' && S.characters[1].side === 'you', 'side 分别为 zuo / you');
check(/HP \d+/.test(S.characters[0].stats_line || ''), 'stats_line 正常拼接', S.characters[0].stats_line);

const entryCount = Object.keys(S.entries).length;
check(entryCount > 0, 'entries 索引已建立', `${entryCount} 条`);

const itemIds = S.items.map((i) => i.id);
check(itemIds.every((id) => S.entries[id]), '每个物品都进了 entries 索引');

const labelled = S.items.every((i) => i.category_label && i.owner_label);
check(labelled, '物品的 category_label / owner_label 都已生成');

const firstItem = S.items[0];
if (firstItem) {
  check(
    S.nameToId && S.nameToId[firstItem.name] === firstItem.id,
    'nameToId 反查可用（[[双链]] 依赖它）',
    `${firstItem.name} → ${firstItem.id}`
  );
  check(!!S.entries[firstItem.id].searchText, 'searchText 已构建（搜索依赖它）');
}

// 扩展字段（如 seasons）应被自动发现
const extraKeys = Object.keys(S).filter(
  (k) => !['meta', 'characters', 'items', 'mechanics', 'terrains', 'changelog', 'relations', 'nameToId', 'entries', 'posters', 'loadFailures'].includes(k)
);
if (Array.isArray(sandbox.window.SITE_DATA && sandbox.window.SITE_DATA.seasons)) {
  check(Array.isArray(S.seasons), '扩展字段 seasons 被自动发现并载入');
}

/* ── 2. 模板渲染 ── */
console.log('\n── 模板渲染（index.html 的真实模板 + 真实数据）──');

let html = '';
try {
  html = readFileSync(join(ROOT, 'index.html'), 'utf8');
} catch {
  console.error('\n✗ 读不到 index.html\n');
  process.exit(1);
}

const tpl = (id) => {
  const m = html.match(new RegExp(`<script id="${id}" type="x-tmpl-mustache">([\\s\\S]*?)<\\/script>`));
  if (!m) {
    fail++;
    console.log(`  ✗ index.html 里找不到模板 #${id}`);
    return '';
  }
  return m[1];
};

// hero —— 按 render.js renderAll 组装
const heroTpl = tpl('tpl-hero');
const hero = Mustache.render(heroTpl, {
  site_title: S.meta.site_title,
  subtitle_latin: S.meta.subtitle_latin,
  version: S.meta.version,
  author: S.meta.author,
  workshop_url: S.meta.workshop_url,
  character_a: { ...S.characters[0] },
  character_b: { ...S.characters[1] },
});
check(!!S.meta.site_title && hero.includes(S.meta.site_title), 'hero：站点标题已渲染', S.meta.site_title);
check(hero.includes(S.characters[0].name), 'hero：左角色名已渲染', S.characters[0].name);
check(hero.includes(S.characters[1].name), 'hero：右角色名已渲染', S.characters[1].name);
check(!/\{\{/.test(hero), 'hero：无 Mustache 残留占位符');

// items —— 按 render.js renderItems 组装
const itemsTpl = tpl('tpl-items');
const itemsHtml = Mustache.render(itemsTpl, {
  category_options: [{ label: '全部', value: 'all', active_class: 'is-active' }],
  items: S.items.map((i) => ({ ...i, image: i.display_image || '', icon: i.image || '', name_html: i.name, summary_html: i.summary || '' })),
  query: '',
  summary: `共 ${S.items.length} 项`,
});
check(S.items.length === 0 || itemsHtml.includes(S.items[0].name), 'items：物品卡片已渲染');
check(
  (itemsHtml.match(/<article class="item-card/g) || []).length === S.items.length,
  'items：卡片数量与数据一致',
  `${S.items.length} 张`
);
check(!/\{\{/.test(itemsHtml), 'items：无 Mustache 残留占位符');

// changelog —— 按 render.js renderChangelog 组装
const logHtml = Mustache.render(
  tpl('tpl-changelog'),
  {
    entries: S.changelog.map((e, i) => ({
      ...e,
      is_latest: i === 0,
      changes: (e.changes || []).map((t) => ({ text: t })),
    })),
  }
);
check(S.changelog.length === 0 || logHtml.includes(S.changelog[0].title), 'changelog：时间轴已渲染');
check(S.changelog.length === 0 || logHtml.includes('seal-mark--new'), 'changelog：首条带「新」印章');

// footer —— 按 render.js renderFooter 组装
const footHtml = Mustache.render(tpl('tpl-footer'), {
  ...S.meta,
  manifesto: S.meta.manifesto || '一黑一白，并立成道。',
  author: S.meta.author || '作者未署名',
  links: S.meta.links || [],
  copyright: S.meta.copyright || '',
});
check(!S.meta.author || footHtml.includes(S.meta.author), 'footer：作者已渲染');
check(!/\{\{/.test(footHtml), 'footer：无 Mustache 残留占位符');

// 详情弹窗 —— 按 modal.js genericView 组装一个物品
const modalTpl = tpl('tpl-modal-generic');
const sample = S.items[0];
if (sample) {
  const paragraphs = [];
  const modalHtml = Mustache.render(modalTpl, {
    id: sample.id,
    title: sample.name,
    subtitle: sample.summary || '',
    eyebrow: '物品',
    image: sample.display_image || sample.illustration || '',
    icon: sample.image || '',
    paragraphs: paragraphs.map((p) => ({ html: p })),
    detail_blocks: (sample.detail_blocks || []).map((b) => ({
      ...b,
      title: b.title || '',
      is_text: b.type === 'text',
      is_image: b.type === 'image',
      text_paragraphs: (b.content || '').split(/\n+/).filter(Boolean).map(text => ({ html: text })),
    })),
    has_detail_blocks: (sample.detail_blocks || []).length > 0,
    recipe_html: sample.recipe && App.Recipe ? App.Recipe.toBlockHtml(sample.recipe) : '',
    tech_html: sample.tech ? App.Linkify.textToHtml(sample.tech.replace(/金企鹅兑换/g, '[[金企鹅兑换]]')) : '',
    related: (sample.related || []).map((id) => ({ id, name: S.relations[id] || id })),
    has_related: (sample.related || []).length > 0,
  });
  check(modalHtml.includes(sample.name), 'modal：详情弹窗模板可渲染', sample.id);
  check(!/\{\{/.test(modalHtml), 'modal：无 Mustache 残留占位符');
}

/* ── 汇总 ── */
console.log(`\n结果：${pass} 通过 / ${fail} 失败\n`);
process.exit(fail ? 1 : 0);

#!/usr/bin/env node
// Exercise the real data, rendering, search and modal modules together.
// This DOM adapter checks generated markup and route state; it does not check browser layout.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const nodes = new Map();
const documentListeners = new Map();
const node = id => {
  if (!nodes.has(id)) {
    const template = html.match(new RegExp(`<script id="${id}"[^>]*>([\\s\\S]*?)<\\/script>`));
    nodes.set(id, {
      innerHTML: template?.[1] || '', hidden: true, textContent: '',
      querySelector: () => null, querySelectorAll: () => [],
      scrollIntoView() {}, focus() {},
    });
  }
  return nodes.get(id);
};
const sandbox = {
  window: { location: { hash: '', search: '?editor=1' } },
  document: {
    getElementById: node,
    querySelector: () => null, querySelectorAll: () => [],
    activeElement: null, body: { classList: { add() {}, remove() {} } },
    addEventListener(type, listener) {
      if (!documentListeners.has(type)) documentListeners.set(type, []);
      documentListeners.get(type).push(listener);
    },
  },
  history: { pushState(_a, _b, hash) { sandbox.window.location.hash = hash; }, replaceState(_a, _b, hash) { sandbox.window.location.hash = hash; } },
  URLSearchParams, console,
};
vm.createContext(sandbox);
for (const file of ['assets/js/vendor/mustache.min.js', 'data/site-data.js', 'data/vanilla-icons.js', 'assets/js/data.js',
  'assets/js/render.js', 'assets/js/recipe.js', 'assets/js/linkify.js', 'assets/js/filter.js',
  'assets/js/carousel.js', 'assets/js/modal.js', 'assets/js/editor.js']) {
  vm.runInContext(readFileSync(join(root, file), 'utf8'), sandbox, { filename: file });
  if (!sandbox.window.Mustache && sandbox.Mustache) sandbox.window.Mustache = sandbox.Mustache;
}
const App = sandbox.window.App;
await App.Data.load();
const state = App.STATE;
const standaloneItems = state.items.filter(item => item.category !== 'food');
function allItemCards() {
  const previous = { ...App.ui };
  const output = [];
  try {
    for (const cats of [[], ['food']]) {
      App.ui = { ...previous, cats, foodKind: '', q: '' };
      App.Render.renderItems();
      output.push(node('items-root').innerHTML);
    }
  } finally { App.ui = previous; App.Render.renderItems(); }
  return output.join('');
}
App.Modal.bind();
let passed = 0;
const check = (label, fn) => { fn(); passed++; console.log(`  ✓ ${label}`); };

check('分类和分区配置不进入条目与名称索引', () => {
  for (const config of [...sandbox.window.SITE_DATA.categories, ...sandbox.window.SITE_DATA.sections]) {
    assert.equal(state.entries[config.id], undefined);
    assert.equal(state.relations[config.id], undefined);
  }
});
check('内容有对应页面分区，外观归入物品且不再单列导航', () => {
  const sections = new Set(App.sections.map(s => s.id));
  assert.ok(!sections.has('skins'));
  for (const entry of Object.values(state.entries)) {
    assert.ok(entry.type === 'characters' || sections.has(entry.type === 'skins' ? 'items' : entry.type));
  }
});
check('真实渲染模块生成设置与节气卡片', () => {
  for (const id of ['settings', 'seasons']) {
    const config = App.sections.find(s => s.id === id);
    App.Render.renderGenericSection(config);
    const output = node(config.rootId).innerHTML;
    assert.equal((output.match(/data-open-entry=/g) || []).length, state[id].length + (id === 'seasons' ? 4 : 0));
    assert.ok(output.includes(state[id][0].name || state[id][0].title));
  }
});
check('机制按角色和通用分组，每条只展示一次且保留详情入口', () => {
  App.Render.renderGenericSection(App.sections.find(section => section.id === 'mechanics'));
  const output = node('mechanics-root').innerHTML;
  const groups = [...output.matchAll(/data-mechanics-group="([^"]+)"[\s\S]*?<\/section>/g)];
  assert.deepEqual(groups.map(group => group[1]), ['pangtouyu', 'gaojiaoniao', 'common']);
  for (const [content, owner] of groups) {
    const actualIds = [...content.matchAll(/data-entry-target="([^"]+)"/g)].map(match => match[1]);
    const expectedIds = Array.from(state.mechanics).filter(entry => entry.owner === owner).map(entry => entry.id);
    assert.deepEqual(actualIds, expectedIds);
    for (const id of actualIds) assert.ok(content.includes(`data-open-entry="${id}"`));
  }
  assert.equal((output.match(/data-entry-target=/g) || []).length, state.mechanics.length);
});
check('节气按四季分组，每季均展示真实满级效果，冬季另列满级兑换', () => {
  const config = App.sections.find(s => s.id === 'seasons');
  App.Render.renderGenericSection(config);
  const output = node(config.rootId).innerHTML;
  const groups = [...output.matchAll(/data-season-group="([^"]+)"([\s\S]*?)(?=<section class="season-group|<\/script>|$)/g)];
  assert.deepEqual(groups.map(group => group[1]), ['jq_chun', 'jq_xia', 'jq_qiu', 'jq_dong']);
  for (const [, id, content] of groups) {
    const terms = state.seasons.filter(entry => (entry.related || []).includes(id) && entry.id !== 'jq_dong10');
    assert.equal(terms.length, 6);
    assert.equal((content.match(/class="season-term"/g) || []).length, 6);
    assert.ok(content.includes(`data-open-entry="${id}"`));
    for (const term of terms) assert.ok(content.includes(`data-open-entry="${term.id}"`));
    const effect = state.entries[id].detail_blocks.find(block => block.title === '10级主动效果');
    assert.ok(effect, id);
    assert.ok(content.includes('class="season-level"'));
    assert.ok(content.includes(effect.content));
  }
  for (const entry of state.seasons) {
    assert.equal(output.split(`data-open-entry="${entry.id}"`).length - 1, ['jq_chun', 'jq_xia', 'jq_qiu', 'jq_dong'].includes(entry.id) ? 2 : 1, entry.id);
  }
  assert.ok(groups[3][2].includes('class="season-special"'));
  assert.ok(groups[3][2].includes('金企鹅兑换 · 9 Q币'));
});
check('首页立绘完整展示角色专属，专属制作的共用物品使用小图标单列', () => {
  const getElementById = sandbox.document.getElementById;
  sandbox.document.getElementById = id => id === 'sections-root' ? null : getElementById(id);
  try { App.Render.renderAll(); }
  finally { sandbox.document.getElementById = getElementById; }
  const hero = node('hero-root').innerHTML;
  const models = JSON.parse(readFileSync(join(root, 'data/character-models.json'), 'utf8')).characters;
  assert.equal(models.length, state.characters.length);
  assert.equal((hero.match(/class="duo-gear__item"/g) || []).length, state.items.filter(item => ['pangtouyu', 'gaojiaoniao'].includes(item.owner)).length);
  for (const character of state.characters) {
    const model = models.find(entry => entry.character === character.id);
    assert.ok(model, character.id);
    assert.equal(character.model_image, model.path);
    assert.equal(character.model_poster, model.poster);
    assert.notEqual(character.model_poster, character.portrait);
    const poster = readFileSync(join(root, model.poster));
    assert.deepEqual([poster.readUInt32BE(16), poster.readUInt32BE(20)], model.display_size);
    const animated = readFileSync(join(root, model.path));
    assert.equal(animated.subarray(8, 12).toString(), 'WEBP');
    assert.ok(animated.includes(Buffer.from('ANIM')), character.id);
    assert.ok(hero.includes(`src="${model.path}"`));
    assert.ok(hero.includes(`srcset="${model.poster}"`));
    const expected = state.items.filter(item => item.owner === character.id);
    const panel = hero.match(new RegExp(`<div class="duo-gear" id="gear-${character.id}"[\\s\\S]*?</article>`))?.[0];
    assert.ok(panel, character.id);
    assert.ok(panel.includes('aria-hidden="true" inert'));
    assert.equal((panel.match(/class="duo-gear__item"/g) || []).length, expected.length);
    for (const source of expected) {
      const id = source.id;
      const item = state.entries[id];
      assert.equal(item.type, 'items');
      assert.equal(item.owner, character.id);
      assert.ok(panel.includes(`data-open-entry="${id}"`));
      assert.ok(panel.includes(`src="${item.display_image}"`));
      assert.ok(!panel.includes(`src="${item.image}"`));
    }
    assert.ok(panel.includes('其他角色也可使用'));
    assert.equal((panel.match(/class="duo-gear__craft"/g) || []).length, character.shared_crafts.length);
    for (const id of character.shared_crafts) {
      assert.equal(state.entries[id].owner, 'common');
      assert.ok(panel.includes(`src="${state.entries[id].image}"`));
      assert.ok(panel.includes(`data-open-entry="${id}"`));
    }
  }
});
check('人物页使用独立分栏模板，属性、特点和全部专属物品各归其主', () => {
  const output = node('characters-root').innerHTML;
  assert.ok(output.includes('class="character-columns"'));
  assert.ok(!output.includes('duo__portrait-trigger'));
  assert.ok(!node('hero-root').innerHTML.includes('id="characters"'));
  assert.ok(!node('hero-root').innerHTML.includes('data-panel="setting"'));
  assert.ok(!output.includes('character-profile__more') && !output.includes('character-profile__item-art'));
  for (const character of state.characters) {
    const profile = output.match(new RegExp(`<article class="character-profile" data-char="${character.id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(profile, character.id);
    for (const stat of Object.values(character.stats)) assert.ok(profile.includes(`<dd>${stat}</dd>`));
    assert.equal((profile.match(/data-profile-skin=/g) || []).length, character.appearances.length);
    assert.equal((profile.match(/aria-pressed="true"/g) || []).length, 1);
    const abilities = profile.split('class="character-profile__abilities"')[1].split('</section>')[0];
    for (const text of character.setting.slice(1)) {
      assert.ok(abilities.includes(App.Linkify.textToHtml(text, { emphasizeNumbers: true })), character.id);
    }
    const exclusive = profile.split('class="character-profile__item-links"')[1].split('</div>')[0];
    assert.equal((exclusive.match(/data-open-entry=/g) || []).length, state.items.filter(item => item.owner === character.id).length);
    for (const item of state.items.filter(item => item.owner === character.id)) {
      assert.ok(exclusive.includes(`data-open-entry="${item.id}"`), item.id);
      assert.ok(exclusive.includes(`src="${item.image}"`), item.id);
      assert.ok(!exclusive.includes(`src="${item.display_image}"`), item.id);
    }
  }
});
check('人物皮肤使用9款已启用外观的原生待机动画，默认形象保留且每人仅选中一项', () => {
  const manifest = JSON.parse(readFileSync(join(root, 'data/character-models.json'), 'utf8'));
  assert.equal(manifest.skins.length, 9);
  assert.ok(!manifest.skins.some(skin => /_skin1$/.test(skin.id)), '注释停用的皮肤不展示');
  const expected = { pangtouyu: 6, gaojiaoniao: 5 };
  for (const character of state.characters) {
    assert.equal(character.appearances.length, expected[character.id]);
    assert.equal(new Set(character.appearances.map(skin => skin.id)).size, expected[character.id]);
    const original = character.appearances.find(skin => skin.id === 'default');
    assert.equal(original.image, character.model_image);
    assert.equal(original.poster, character.model_poster);
    for (const option of character.appearances.filter(skin => skin.id !== 'default')) {
      const record = manifest.skins.find(skin => skin.id === option.id);
      assert.equal(record.character, character.id);
      assert.equal(record.name, option.name);
      assert.equal(record.path, option.image);
      assert.equal(record.poster, option.poster);
      const png = readFileSync(join(root, option.poster));
      assert.deepEqual([png.readUInt32BE(16), png.readUInt32BE(20)], record.display_size);
      assert.deepEqual([option.width, option.height], record.display_size);
      assert.ok(readFileSync(join(root, option.image)).includes(Buffer.from('ANIM')));
      assert.equal(record.frames, 33);
      assert.equal(record.scale, 1);
    }
  }
  App.ui.characterSkins = { pangtouyu: 'bighead_skin3', gaojiaoniao: 'bb_gaojiaoniao_skin5' };
  const getElementById = sandbox.document.getElementById;
  sandbox.document.getElementById = id => id === 'sections-root' ? null : getElementById(id);
  try { App.Render.renderAll(); }
  finally { sandbox.document.getElementById = getElementById; }
  const hero = node('hero-root').innerHTML;
  for (const character of state.characters) {
    const markup = hero.match(new RegExp(`<article[^>]*data-char="${character.id}"[\\s\\S]*?<\\/article>`))[0];
    assert.equal((markup.match(/data-character-skin=/g) || []).length, expected[character.id]);
    assert.equal((markup.match(/aria-pressed="true"/g) || []).length, 1);
    const selected = character.appearances.find(skin => skin.id === App.ui.characterSkins[character.id]);
    assert.ok(markup.includes(`src="${selected.image}"`));
    assert.ok(markup.includes(`srcset="${selected.poster}"`));
  }
  delete App.ui.characterSkins;
});
check('建筑归入物品，食物独立展示，所有物品只收录一次', () => {
  App.Render.renderItems();
  assert.equal((node('items-root').innerHTML.match(/data-open-entry=/g) || []).length, standaloneItems.length);
  assert.ok(!node('items-root').innerHTML.includes('data-owner='));
  assert.deepEqual(Array.from(App.Filter.categoryOptions(), option => option.value), ['all', 'pangtouyu', 'gaojiaoniao', 'common', 'tool', 'crop', 'material', 'structure']);
  const cards = allItemCards();
  for (const item of state.items) assert.equal(cards.split(`data-entry-target="${item.id}"`).length - 1, 1, item.id);
  const previous = { ...App.ui };
  for (const item of state.items.filter(item => item.category === 'structure')) {
    App.Modal.open(item.id);
    assert.equal(App.ui.section, 'items');
    assert.equal(App.ui.cats[0], 'structure');
    assert.equal(App.route.read(`#items/${item.id}`).section, 'items');
    for (const route of [`#buildings/${item.id}`, `#terrains/${item.id}`]) {
      const migrated = App.route.read(route);
      assert.equal(migrated.section, 'items');
      assert.equal(migrated.cats[0], 'structure');
      assert.equal(migrated.detailId, item.id);
    }
  }
  App.ui = previous;
  assert.equal(App.route.read('#items?cat=structure').section, 'items');
  assert.equal(App.route.read('#buildings').cats[0], 'structure');
  App.ui.cats = ['food'];
  assert.equal(App.Filter.getFilteredItems().length, state.items.filter(e => e.category === 'food').length);
  App.ui.cats = [];
});
check('物品支持归属与工具、作物、材料、建筑单选筛选，停用类型链接回到全部', () => {
  const previous = { ...App.ui };
  for (const category of ['weapon', 'armor', 'misc']) {
    assert.equal(App.route.read(`#items?cat=${category}`).cats.length, 0);
  }
  for (const [owner, label] of [['pangtouyu', '鱼专属'], ['gaojiaoniao', '鸟专属'], ['common', '通用']]) {
    App.route.sync({ section: 'items', cats: [owner], q: '' });
    const options = App.Filter.categoryOptions();
    assert.equal(options.filter(option => option.active).length, 1);
    assert.equal(options.find(option => option.active).label, label);
    const filtered = App.Filter.getFilteredItems();
    const expected = standaloneItems.filter(item => item.owner === owner);
    assert.deepEqual(Array.from(filtered, item => item.id), Array.from(expected, item => item.id));
    assert.ok(filtered.length > 0);
    assert.equal(filtered.some(item => item.id === 'bighead_ybhz'), owner === 'common');
    App.Render.renderItems();
    assert.ok(node('items-root').innerHTML.includes(`共 ${expected.length} 项 · ${label}`));
    assert.equal(App.route.read(App.route.build(App.ui)).cats[0], owner);
  }
  for (const [category, label] of [['tool', '工具'], ['crop', '作物'], ['material', '材料'], ['structure', '建筑']]) {
    App.route.sync({ section: 'items', cats: [category, 'pangtouyu'], q: '' });
    assert.deepEqual(Array.from(App.ui.cats), [category]);
    const options = App.Filter.categoryOptions();
    assert.equal(options.filter(option => option.active).length, 1);
    assert.equal(options.find(option => option.active).label, label);
    const expected = standaloneItems.filter(item => item.category === category);
    assert.ok(expected.length > 0);
    const ordered = Array.from(expected).filter(item => item.owner === 'common')
      .concat(Array.from(expected).filter(item => item.owner !== 'common'));
    assert.deepEqual(Array.from(App.Filter.getFilteredItems(), item => item.id), ordered.map(item => item.id));
    App.Render.renderItems();
    assert.ok(node('items-root').innerHTML.includes(`共 ${expected.length} 项 · ${label}`));
    assert.equal(App.route.read(App.route.build(App.ui)).cats[0], category);
  }
  App.ui = previous;
});
check('物品图片以类型印章区分武护工材与宠，外观继承原物品类型', () => {
  const previous = { ...App.ui };
  App.ui = { ...previous, cats: [], q: '' };
  App.Render.renderItems();
  const cards = node('items-root').innerHTML;
  for (const [id, stamp, label] of [
    ['bighead_spear', '武', '武器'], ['bighead_armor', '护', '护具'],
    ['bighead_ybhz', '工', '工具'], ['bighead_mwgt', '材', '材料'],
    ['bighead_sanbao_builder', '宠', '宠物'], ['bb_gaojiaoniao_px_builder', '宠', '宠物']
  ]) {
    const card = cards.match(new RegExp(`<article[^>]*data-entry-target="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card?.includes(`class="type-stamp" role="img" aria-label="${label}" title="${label}">${stamp}</span>`), id);
    App.Modal.open(id);
    assert.ok(node('modal-root').innerHTML.includes(`>${stamp}</span>`), id);
    for (const skin of state.skins.filter(skin => skin.item_id === id)) {
      assert.equal(App.Data.ownerView(skin).type_stamp, stamp, skin.id);
    }
  }
  assert.equal(App.Data.ownerView(state.items.find(item => item.category === 'food')).type_stamp, '');
  App.ui = previous;
});
check('月饼盒子作为随身工具收录，旧建筑链接也回到物品栏目', () => {
  const previous = { ...App.ui };
  const box = state.entries.bighead_ybhz;
  assert.equal(box.category, 'tool');
  assert.equal(App.Data.entrySection(box), 'items');
  App.ui = { ...previous, cats: ['structure'], q: '' };
  App.Render.renderItems();
  assert.ok(!node('items-root').innerHTML.includes('data-entry-target="bighead_ybhz"'));
  App.ui = { ...previous, cats: ['tool'], q: '' };
  App.Render.renderItems();
  assert.ok(node('items-root').innerHTML.includes('data-entry-target="bighead_ybhz"'));
  for (const section of ['items', 'buildings', 'terrains']) {
    const route = App.route.read(`#${section}/bighead_ybhz`);
    assert.equal(route.section, 'items');
    assert.equal(route.detailId, box.id);
  }
  App.ui.q = '月饼盒子';
  assert.equal(App.Filter.getSearchResults().find(item => item.id === box.id).type_label, '物品');
  App.Modal.open(box.id);
  assert.equal(App.ui.section, 'items');
  assert.ok(node('modal-root').innerHTML.includes('>物品</p>'));
  App.ui = previous;
});
check('食物使用独立的单选分类，清空和详情返回不会混入物品分类', () => {
  const previous = { ...App.ui };
  const hash = sandbox.window.location.hash;
  try {
    App.route.sync({ section: 'items', cats: ['food'], foodKind: '', q: '' });
    App.Render.renderItems();
    const output = node('items-root').innerHTML;
    assert.ok(output.includes('aria-label="食物分类（单选）"'));
    assert.ok(output.includes('检索食物名称与效果'));
    assert.ok(!output.includes('data-cat='));
    assert.deepEqual(Array.from(App.Filter.categoryOptions(), option => option.label), ['全部', '食材', '料理', '月饼']);
    const foods = state.items.filter(item => item.category === 'food');
    assert.equal(App.Filter.getFilteredItems().length, foods.length);
    const orderedFoods = App.Filter.getFilteredItems();
    assert.deepEqual(Array.from(orderedFoods.slice(0, 3), item => item.name), ['草莓', '牛肉', '羊肉']);
    assert.deepEqual(Array.from(orderedFoods, item => item.id), Array.from(App.config.foodCategories).flatMap(kind =>
      foods.filter(item => item.food_category === kind.id).map(item => item.id)));
    const seen = new Set();
    for (const kind of App.config.foodCategories) {
      App.route.sync({ foodKind: kind.id });
      const filtered = App.Filter.getFilteredItems();
      assert.ok(filtered.length > 0, kind.id);
      assert.ok(filtered.every(item => item.category === 'food' && item.food_category === kind.id));
      for (const item of filtered) { assert.ok(!seen.has(item.id)); seen.add(item.id); }
      assert.equal(App.Filter.categoryOptions().filter(option => option.active).length, 1);
      assert.equal(App.route.read(App.route.build(App.ui)).foodKind, kind.id);
      App.Modal.open(filtered[0].id);
      assert.equal(App.ui.foodKind, kind.id);
      App.Modal.close();
      assert.equal(App.ui.cats[0], 'food');
      assert.equal(App.ui.foodKind, kind.id);
    }
    assert.equal(seen.size, foods.length);
    App.route.sync({ cats: ['pangtouyu'] });
    assert.equal(App.ui.foodKind, '');
    assert.equal(App.route.read('#items?cat=food&kind=unknown').foodKind, '');
    assert.ok(App.Filter.getFilteredItems().every(item => item.owner === 'pangtouyu'));
  } finally { App.ui = previous; sandbox.window.location.hash = hash; }
});
check('127张原生展示PNG与清单尺寸相符，物品、节气和外观全部有对应展示图', () => {
  const manifest = JSON.parse(readFileSync(join(root, 'data/display-assets.json'), 'utf8'));
  const assets = new Map(manifest.assets.map(asset => [asset.source, asset]));
  assert.equal(assets.size, 127);
  for (const asset of assets.values()) {
    const png = readFileSync(join(root, asset.path));
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', asset.source);
    assert.deepEqual([png.readUInt32BE(16), png.readUInt32BE(20)], asset.display_size, asset.source);
    assert.equal(asset.scale, 1);
    if (asset.icon_path) {
      const pngIcon = readFileSync(join(root, asset.icon_path));
      assert.deepEqual([pngIcon.readUInt32BE(16), pngIcon.readUInt32BE(20)], asset.icon_size);
    }
  }
  const lingqi = assets.get('status_bighead_lingqi');
  assert.equal(state.entries.mech_lingqi.image, lingqi.icon_path);
  assert.equal(state.entries.mech_lingqi.display_image, lingqi.path);
  assert.notEqual(state.entries.mech_lingqi.display_image, state.entries.bighead_xqlj.display_image);
  for (const binding of manifest.bindings) {
    assert.equal(state.entries[binding.id].display_image, assets.get(binding.source).path, binding.id);
  }
  for (const entry of [...state.items, ...state.seasons, ...state.skins]) {
    assert.ok(entry.display_image?.startsWith('assets/img/displays/'), entry.id);
    assert.notEqual(entry.display_image, entry.image, entry.id);
  }
});
check('实际卡片和详情使用落地图，名称前和配方仍使用原始小图标', () => {
  App.Render.renderItems();
  const cards = [allItemCards()];
  for (const id of ['seasons', 'mechanics']) {
    const config = App.sections.find(section => section.id === id);
    App.Render.renderGenericSection(config);
    cards.push(node(config.rootId).innerHTML);
  }
  for (const [i, group] of ['items', 'seasons', 'mechanics'].entries()) {
    for (const entry of state[group]) {
      const card = cards[i].match(new RegExp(`<article[^>]*data-entry-target="${entry.id}"[\\s\\S]*?<\\/article>`))?.[0];
      const image = entry.display_image || entry.illustration;
      assert.ok(card, entry.id);
      if (image) assert.ok(card.includes(`src="${image}"`), entry.id);
      else assert.ok(card.includes('card-link--text'), entry.id);
      if (entry.image) assert.ok(card.includes(`class="entry-icon" src="${entry.image}"`), entry.id);
      App.Modal.open(entry.id);
      if (image) assert.ok(node('modal-root').innerHTML.includes(`class="modal-card__hero" src="${image}"`), entry.id);
      else assert.ok(!node('modal-root').innerHTML.includes('class="modal-card__hero"'), entry.id);
      if (entry.image) assert.ok(node('modal-root').innerHTML.includes(`class="entry-icon" src="${entry.image}"`), entry.id);
    }
  }
  const item = state.items[0];
  const recipe = App.Recipe.toHtml(`[${item.id}] ×1`);
  assert.ok(recipe.includes(`src="${item.image}"`));
  assert.ok(!recipe.includes(item.display_image));
  App.Modal.open('config_bighead_speed_bonus');
  assert.ok(!node('modal-root').innerHTML.includes('class="modal-card__hero"'));
});
check('各分区、详情与外观统一显示专属印章，通用内容不误标角色', () => {
  const stampFor = owner => ({ pangtouyu: '鱼', gaojiaoniao: '鸟' }[owner] || '');
  for (const group of ['items', 'mechanics', 'seasons', 'terrains']) {
    const config = App.sections.find(section => section.id === group);
    if (group === 'items') App.Render.renderItems();
    else App.Render.renderGenericSection(config);
    const cards = group === 'items' ? allItemCards() : node(config.rootId).innerHTML;
    for (const entry of state[group]) {
      const card = cards.match(new RegExp(`<article[^>]*data-entry-target="${entry.id}"[\\s\\S]*?<\\/article>`))?.[0];
      assert.ok(card, entry.id);
      const stamp = stampFor(entry.owner);
      assert.equal(card.includes('owner-stamp'), !!stamp, entry.id);
      if (stamp) assert.ok(card.includes(`>${stamp}</span>`), entry.id);
      App.Modal.open(entry.id);
      const visual = node('modal-root').innerHTML.match(/<div class="modal-card__visual[^>]*>[\s\S]*?<\/div>/)?.[0] || '';
      assert.equal(visual.includes('owner-stamp'), !!stamp, entry.id);
      if (stamp) assert.ok(visual.includes(`>${stamp}</span>`), entry.id);
    }
  }
  for (const skin of state.skins) {
    const item = state.entries[skin.item_id];
    App.Modal.open(item.id);
    const preview = node('modal-root').innerHTML.match(new RegExp(`<button class="item-appearance"[^>]*data-open-entry="${skin.id}"[\\s\\S]*?<\\/button>`))?.[0];
    assert.ok(preview?.includes(`>${stampFor(item.owner)}</span>`), skin.id);
    App.Modal.open(skin.id);
    assert.ok(node('modal-root').innerHTML.includes(`>${stampFor(item.owner)}</span>`), skin.id);
  }
  App.Modal.open('mech_gardening');
  assert.equal((node('modal-root').innerHTML.match(/class="detail-image"/g) || []).length, 4);
  assert.equal((node('modal-root').innerHTML.match(/>鱼<\/span>/g) || []).length, 5);
  for (const id of ['mech_gold_penguin', 'mech_spirits', 'mech_parasite', 'loc_foyer']) {
    assert.equal(state.entries[id].owner, 'common', id);
  }
  assert.ok(state.seasons.every(entry => entry.owner === 'pangtouyu'));
  assert.equal(state.entries.mech_shixin.owner, 'gaojiaoniao');
  assert.equal(state.entries.mech_wudao.owner, 'gaojiaoniao');
});
check('建筑在物品中筛选，小房子保留独立栏目与搜索类型', () => {
  const previous = { ...App.ui };
  const house = App.sections.find(section => section.id === 'terrains');
  assert.ok(!App.sections.some(section => section.id === 'buildings'));
  assert.equal(house.title, '小房子');
  App.ui = { ...previous, cats: ['structure'], q: '' };
  App.Render.renderItems();
  App.Render.renderGenericSection(house);
  const cards = node('items-root').innerHTML;
  const rooms = node(house.rootId).innerHTML;
  assert.equal((cards.match(/class="item-card card"/g) || []).length, state.items.filter(item => item.category === 'structure').length);
  assert.ok(!cards.includes('building-list'));
  for (const room of state.terrains) {
    assert.ok(!cards.includes(`data-entry-target="${room.id}"`));
    assert.equal(App.Data.entrySection(state.entries[room.id]), 'terrains');
    assert.equal(App.route.read(`#terrains/${room.id}`).section, 'terrains');
  }
  for (const item of state.items.filter(item => item.category === 'structure')) assert.ok(!rooms.includes(`data-entry-target="${item.id}"`));
  App.ui = { ...previous };
  App.ui.q = '太极青玄阁';
  assert.equal(App.Filter.getSearchResults().find(item => item.id === 'loc_qingxuan').type_label, '小房子');
  App.Modal.open('loc_qingxuan');
  assert.equal(App.ui.section, 'terrains');
  assert.ok(node('modal-root').innerHTML.includes('小房子'));
  App.ui = previous;
});
check('屋外入口和四间独立房间均可查看，内景匹配各自墙面、地板与门的连接', () => {
  const config = App.sections.find(section => section.id === 'terrains');
  assert.equal(config.title, '小房子');
  App.Render.renderGenericSection(config);
  const cards = node(config.rootId).innerHTML;
  assert.ok(cards.includes('class="building-list"'));
  assert.ok(!cards.includes('building-structures'));
  assert.ok(!cards.includes('class="items-grid"'));
  assert.ok(cards.includes('室内有什么用'));
  assert.ok(cards.includes('房间中心'));
  assert.ok(cards.includes('怎么进去、怎么回来'));
  assert.ok(cards.includes('休息与回复'));
  const manifest = JSON.parse(readFileSync(join(root, 'data/terrain-previews.json'), 'utf8'));
  assert.equal(manifest.kind, 'original_room_composite');
  const roomSources = { loc_foyer: 'bighead_wall', loc_hall: 'bighead_wall1', loc_bedroom: 'bighead_wall2', loc_bedroom_right: 'bighead_wall3' };
  assert.equal(manifest.assets.length, 4);
  assert.equal(state.terrains.length, 5);
  assert.deepEqual(manifest.assets.map(asset => asset.id).sort(), Object.keys(roomSources).sort());
  for (const entry of state.terrains) {
    const image = entry.display_image || entry.illustration;
    assert.ok(image, entry.id);
    const card = cards.match(new RegExp(`<article[^>]*data-entry-target="${entry.id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card.includes(`src="${image}"`), entry.id);
    assert.ok(!card.includes('card-link--text'), entry.id);
    assert.ok(card.includes('class="building-entry__body"'), entry.id);
    assert.ok(!card.includes('building-entry__more'), entry.id);
    App.Modal.open(entry.id);
    assert.ok(node('modal-root').innerHTML.includes('>小房子</p>'));
    assert.ok(node('modal-root').innerHTML.includes(`class="modal-card__hero" src="${image}"`));
  }
  for (const asset of manifest.assets) {
    const entry = state.entries[asset.id];
    assert.equal(entry.illustration, asset.path);
    assert.ok(cards.includes(entry.preview_caption));
    assert.equal(asset.source, roomSources[asset.id]);
    assert.equal(asset.floor.source, roomSources[asset.id].replace('wall', 'floor'));
    assert.equal(asset.floor.animation, 'idle');
    assert.equal(asset.floor.quad.length, 4);
    const png = readFileSync(join(root, asset.path));
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.deepEqual([png.readUInt32BE(16), png.readUInt32BE(20)], asset.display_size);
    assert.ok(asset.display_size[0] > 1000);
    assert.equal(asset.scale, 1);
    const furnishings = asset.furnishings.filter(part => part.target);
    assert.equal(entry.scene_hotspots.length, furnishings.length, asset.id);
    for (const part of furnishings) {
      const hit = entry.scene_hotspots.find(hit => hit.target === part.target);
      assert.ok(hit, part.prefab);
      const [left, top, width, height] = part.bounds;
      assert.ok(left >= 0 && top >= 0 && left + width <= asset.display_size[0] && top + height <= asset.display_size[1]);
      assert.ok(Math.abs((left + width / 2) / asset.display_size[0] * 100 - hit.x) < .01);
      assert.ok(Math.abs((top + height / 2) / asset.display_size[1] * 100 - hit.y) < .01);
      assert.ok(Math.abs(width / asset.display_size[0] * 100 - hit.width) < .01);
      assert.ok(Math.abs(height / asset.display_size[1] * 100 - hit.height) < .01);
      assert.equal(hit.label, part.label);
    }
  }
  assert.equal(state.nameToId['阁主卧房'], 'loc_bedroom');
  for (const id of Object.keys(roomSources)) {
    assert.ok(state.entries.loc_qingxuan.related.includes(id));
    assert.ok(state.entries[id].related.includes('loc_qingxuan'));
    if (id !== 'loc_hall') {
      assert.ok(state.entries[id].related.includes('loc_hall'));
      assert.ok(state.entries.loc_hall.related.includes(id));
    }
  }
  App.Modal.open('loc_foyer');
  assert.match(node('modal-root').innerHTML, /鎏金太极铃/);
  assert.match(node('modal-root').innerHTML, /青石楼梯/);
  const foyerHtml = node('modal-root').innerHTML;
  assert.match(foyerHtml, /class="[^"]*\bscene-preview\b[^"]*"/);
  assert.match(foyerHtml, /class="scene-hotspot"[^>]+data-open-entry="loc_hall"[^>]+aria-label="鎏金太极铃：进入厅堂"/);
  const bell = manifest.assets.find(asset => asset.id === 'loc_foyer').furnishings[0];
  const foyer = manifest.assets.find(asset => asset.id === 'loc_foyer');
  assert.equal(bell.prefab, 'bighead_men1');
  assert.equal(bell.animation, 'men1');
  assert.equal(bell.target, 'loc_hall');
  const hotspot = state.entries.loc_foyer.scene_hotspots[0];
  const [x, y, width, height] = bell.bounds;
  assert.ok(Math.abs((x + width / 2) / 1616 * 100 - hotspot.x) < 0.1);
  assert.ok(Math.abs((y + height / 2) / foyer.display_size[1] * 100 - hotspot.y) < 0.1);
  const hall = manifest.assets.find(asset => asset.id === 'loc_hall');
  assert.equal(hall.furnishings.length, 4);
  const hallSteps = hall.furnishings.find(part => part.prefab === 'bighead_door_exit');
  const frontEdge = hall.floor.quad[2][1];
  assert.ok(hallSteps.bounds[1] < frontEdge && hallSteps.bounds[1] + hallSteps.bounds[3] > frontEdge,
    '出口台阶应跨过前侧地板边缘');
  assert.ok(hallSteps.bounds[1] + hallSteps.bounds[3] <= hall.display_size[1] - 8,
    '台阶必须完整显示，底部保留透明边距');
  for (const id of ['loc_foyer', 'loc_hall']) {
    const room = manifest.assets.find(asset => asset.id === id);
    const stair = room.furnishings.find(part => part.prefab === 'bighead_door_exit');
    assert.ok(stair);
    assert.equal(stair.source, 'bighead_door_exit');
    assert.equal(stair.animation, 'idle');
    assert.equal(stair.target, id === 'loc_foyer' ? 'loc_qingxuan' : 'loc_foyer');
    assert.ok(Math.abs(stair.bounds[1] - room.floor.quad[2][1]) <= 16,
      '出口台阶上沿应贴近前侧地板边缘，主体位于地板下方');
  }
  for (const room of manifest.assets) {
    for (const part of room.furnishings.filter(part => part.target)) {
      assert.ok(part.outline_width > 0, `${room.id} ${part.label} 应有白色轮廓`);
    }
  }
  for (const [id, prefab, animation] of [['loc_bedroom', 'bighead_men3', 'men3'], ['loc_bedroom_right', 'bighead_men4', 'men4']]) {
    const door = manifest.assets.find(asset => asset.id === id).furnishings[0];
    assert.equal(door.prefab, prefab);
    assert.equal(door.animation, animation);
    assert.equal(door.target, 'loc_hall');
    const room = manifest.assets.find(asset => asset.id === id);
    assert.equal(door.bounds[1] + door.bounds[3], room.floor.quad[2][1],
      '卧房门底边应与前侧墙口地面齐平');
  }
  assert.ok(hall.furnishings.some(part => part.prefab === 'bighead_yizi' && part.animation === 'yizi'));
  const vines = hall.furnishings.filter(part => part.prefab === 'bighead_men2');
  assert.deepEqual(vines.map(part => part.target), ['loc_bedroom', 'loc_bedroom_right']);
  assert.ok(!vines[0].mirror_x && vines[1].mirror_x);
  assert.ok(vines[0].bounds[0] > hall.floor.quad[3][0]
    && vines[0].bounds[0] + vines[0].bounds[2] < hall.floor.quad[0][0],
    '左侧灵藤应贴近侧梯内沿，不能落在最外侧栏杆');
  assert.ok(vines[1].bounds[0] > hall.floor.quad[1][0]
    && vines[1].bounds[0] + vines[1].bounds[2] < hall.floor.quad[2][0],
    '右侧灵藤应贴近侧梯内沿，不能落在最外侧栏杆');
  for (const vine of vines) {
    assert.ok(vine.bounds[1] + vine.bounds[3] < hall.floor.quad[2][1] * .8,
      '灵藤应上移到侧梯中上段');
    const hit = state.entries.loc_hall.scene_hotspots.find(part => part.target === vine.target);
    assert.ok(hit, vine.target);
    const [left, top, width, height] = vine.bounds;
    const [sceneWidth, sceneHeight] = hall.display_size;
    assert.ok(Math.abs((left + width / 2) / sceneWidth * 100 - hit.x) < .01);
    assert.ok(Math.abs((top + height / 2) / sceneHeight * 100 - hit.y) < .01);
    assert.ok(Math.abs(width / sceneWidth * 100 - hit.width) < .01);
    assert.ok(Math.abs(height / sceneHeight * 100 - hit.height) < .01);
    assert.match(cards, new RegExp('class="scene-hotspot"[^>]+data-building-room="' + vine.target + '"'));
  }
  App.Modal.open('loc_hall');
  for (const vine of vines) assert.ok(node('modal-root').innerHTML.includes(`data-open-entry="${vine.target}"`));
  App.Modal.open('loc_bedroom_right');
  assert.match(node('modal-root').innerHTML, /银翘古木门/);
  assert.match(node('modal-root').innerHTML, /class="scene-hotspot"[^>]+data-open-entry="loc_hall"/);
});
check('卧房保留屋外、前室和厅堂的完整入阁路线，先前节点可返回且不混入另一侧卧房', () => {
  const config = App.sections.find(section => section.id === 'terrains');
  App.Render.renderGenericSection(config);
  const cards = node(config.rootId).innerHTML;
  const paths = {
    loc_qingxuan: ['loc_qingxuan'],
    loc_foyer: ['loc_qingxuan', 'loc_foyer'],
    loc_hall: ['loc_qingxuan', 'loc_foyer', 'loc_hall'],
    loc_bedroom: ['loc_qingxuan', 'loc_foyer', 'loc_hall', 'loc_bedroom'],
    loc_bedroom_right: ['loc_qingxuan', 'loc_foyer', 'loc_hall', 'loc_bedroom_right'],
  };
  for (const [id, path] of Object.entries(paths)) {
    const card = cards.match(new RegExp(`<article[^>]*data-entry-target="${id}"[\\s\\S]*?<\\/article>`))[0];
    const route = card.match(/<nav class="building-route"[\s\S]*?<\/nav>/)[0];
    const targets = [...route.matchAll(/data-building-room="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(targets, path.slice(0, -1), id);
    assert.equal((route.match(/aria-current="step"/g) || []).length, 1, id);
    assert.ok(route.includes(`<span aria-current="step">${state.entries[id].title}</span>`), id);
    for (let step = 1; step < path.length; step++) {
      assert.ok(state.entries[path[step - 1]].building_exits.some(exit => exit.target === path[step]));
    }
  }
});
check('建筑大图原地进屋，铃铛和出口同步切换场景、说明、导览与焦点', () => {
  const config = App.sections.find(section => section.id === 'terrains');
  App.Render.renderGenericSection(config);
  const markup = node(config.rootId).innerHTML;
  assert.equal((markup.match(/data-entry-target="[^"]+" hidden/g) || []).length, 4);
  assert.match(markup, /class="building-entry__enter"[^>]+data-building-room="loc_foyer"/);
  assert.match(markup, /class="scene-hotspot"[^>]+data-building-room="loc_hall"/);
  for (const room of state.terrains) {
    for (const exit of room.building_exits) {
      assert.equal(state.entries[exit.target]?.type, 'terrains');
      assert.ok(exit.label);
    }
  }
  const container = node(config.rootId);
  const original = { querySelector: container.querySelector, querySelectorAll: container.querySelectorAll };
  let focused = '';
  const scenes = Array.from(state.terrains, room => ({
    dataset: { entryTarget: room.id }, hidden: room.id !== 'loc_qingxuan',
    querySelector: selector => selector === '.building-entry__title'
      ? { focus(options) { assert.equal(options.preventScroll, true); focused = room.id; } }
      : { scrollIntoView() { assert.fail('切换建筑不应滚动页面'); } },
  }));
  const tabs = Array.from(state.terrains, room => ({
    dataset: { buildingRoom: room.id },
    setAttribute(name, value) { this[name] = value; },
  }));
  container.querySelectorAll = selector => selector === '.building-entry' ? scenes : tabs;
  container.querySelector = selector => scenes.find(scene => selector.includes(`"${scene.dataset.entryTarget}"`));
  try {
    let previous = 'loc_qingxuan';
    for (const id of ['loc_foyer', 'loc_hall', 'loc_bedroom', 'loc_hall', 'loc_bedroom_right', 'loc_hall', 'loc_foyer', 'loc_qingxuan']) {
      assert.ok(state.entries[previous].building_exits.some(exit => exit.target === id));
      App.Render.selectBuilding(id, { focus: true });
      assert.deepEqual(scenes.filter(scene => !scene.hidden).map(scene => scene.dataset.entryTarget), [id]);
      assert.deepEqual(tabs.filter(tab => tab['aria-pressed'] === 'true').map(tab => tab.dataset.buildingRoom), [id]);
      assert.equal(focused, id);
      assert.equal(node('aria-live').textContent, '当前所在：' + state.entries[id].title);
      previous = id;
    }
    App.Render.selectBuilding('loc_hall', { focus: false });
    assert.equal(focused, 'loc_qingxuan', '导览按钮切换时不应把焦点移出按钮');
    App.Render.selectBuilding('loc_qingxuan', { focus: false });
    App.Render.selectBuilding('bighead_spear');
    assert.equal(App.ui.buildingId, 'loc_qingxuan');
    assert.equal(scenes.filter(scene => !scene.hidden).length, 1);
  } finally {
    Object.assign(container, original);
    delete App.ui.buildingId;
  }
});
check('切换分类再回到全部时，物品与建筑卡片直接显示且不混入食物', () => {
  for (const cats of [['pangtouyu'], []]) {
    App.ui.cats = cats;
    App.Render.renderItems();
    const output = node('items-root').innerHTML;
    const expected = cats.length ? standaloneItems.filter(item => item.owner === 'pangtouyu').length : standaloneItems.length;
    assert.equal((output.match(/data-open-entry=/g) || []).length, expected);
    const gridClass = output.match(/<div class="([^"]*)" id="items-grid-root">/)?.[1];
    assert.ok(gridClass);
    assert.ok(!gridClass.split(/\s+/).includes('reveal'));
  }
  assert.ok(node('items-root').innerHTML.includes(`共 ${standaloneItems.length} 项 · 全部分类`));
  for (const config of App.sections.filter(section => !['items', 'changelog'].includes(section.id))) {
    App.Render.renderGenericSection(config);
    assert.ok(!/class="[^"]*items-grid[^\"]*\breveal\b/.test(node(config.rootId).innerHTML));
  }
});
check('浏览器缺少滚动观察器时，动画内容仍可见', () => {
  const classes = new Set(['reveal']);
  const motionSandbox = {
    window: { App: {} },
    document: { querySelectorAll: () => [{ classList: { add: name => classes.add(name) } }] },
  };
  vm.createContext(motionSandbox);
  vm.runInContext(readFileSync(join(root, 'assets/js/motion.js'), 'utf8'), motionSandbox);
  motionSandbox.window.App.Motion.init();
  assert.ok(classes.has('in'));
});
check('搜索能找到新机制、外观与设置，类型标签不为空', () => {
  for (const [query, expected] of [['噬心', 'mech_shixin'], ['万籁华光', 'bighead_buran_skin5'], ['嫁接上限', 'config_bighead_graft_limit']]) {
    App.ui.q = query;
    const results = App.Filter.getSearchResults();
    assert.ok(results.some(e => e.id === expected));
    assert.ok(results.every(e => e.type_label));
  }
  App.ui.q = '';
});
check('真实详情模块显示配方、科技与正确的分区链接', () => {
  for (const id of ['bighead_spear', 'jq_lc', 'mech_gardening', 'bighead_buran_skin5', 'config_bighead_graft_limit']) {
    App.Modal.open(id);
    assert.equal(App.ui.section, state.entries[id].type === 'skins' ? 'items' : state.entries[id].type);
    assert.equal(App.route.read().detailId, id);
    assert.ok(node('modal-root').innerHTML.includes(state.entries[id].name || state.entries[id].title));
  }
  App.Modal.open('bighead_spear');
  const plain = node('modal-root').innerHTML.replace(/<[^>]*>/g, '');
  assert.ok(plain.includes('冰×6') && plain.includes('月亮碎片×6'));
  assert.equal((node('modal-root').innerHTML.match(/class="recipe-ingredient"/g) || []).length, 2);
  assert.ok(plain.includes('无需科技'));
  assert.ok(node('modal-root').innerHTML.includes('物品'));
});
check('原版材料使用新目录内24px图标，保留配方文字数量且不生成无效链接', () => {
  const icons = sandbox.window.VANILLA_ICONS;
  assert.equal(Object.keys(icons).length, 71);
  for (const [id, icon] of Object.entries(icons)) {
    const png = readFileSync(join(root, icon.image));
    assert.match(icon.image, /^assets\/img\/inventoryimages[1-4]\//);
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', id);
    const rendered = App.Recipe.toHtml(`${icon.name}×2`);
    assert.ok(rendered.includes(`src="${icon.image}"`), id);
    assert.equal(rendered.replace(/<[^>]*>/g, ''), `${icon.name}×2`);
    assert.ok(!rendered.includes('data-open-entry'), id);
    assert.equal(state.entries[id], undefined, 'original materials do not create Wiki entries');
  }
  for (const entry of Object.values(state.entries)) {
    if (!entry.recipe) continue;
    const rendered = App.Recipe.toHtml(entry.recipe);
    const expected = entry.recipe.replace(/\[([^\[\]]+)\]/g, (_, id) => state.entries[id].name || state.entries[id].title || id);
    assert.equal(rendered.replace(/<[^>]*>/g, ''), expected, entry.id);
    assert.equal((rendered.match(/data-open-entry=/g) || []).length, [...entry.recipe.matchAll(/\[[^\[\]]+\]/g)].length, entry.id);
  }
  for (const name of ['金色羽毛', '草', '活木', '伏特羊奶', '鱼肉']) assert.ok(App.Recipe.toHtml(`${name}×1`).includes('recipe-token--vanilla'), name);
  assert.ok(!App.Recipe.toHtml('理智×50；水果度≥2；不能加入蜂蜜').includes('<img'));
  assert.ok(!App.Recipe.toHtml('冰鲷鱼鳞×1').includes('<img'), 'partial names must not match');
  assert.equal(App.Recipe.toHtml('<script>×1'), '&lt;script&gt;×1');
});
check('制作站显示原版图标，配方已包含的科技条件不重复，额外限制仍保留', () => {
  App.Modal.open('bb_hhlct');
  const recipe = node('modal-root').innerHTML.split('<section class="recipe-row detail-block">')[1].split('</section>')[0];
  assert.equal((recipe.match(/炼金引擎/g) || []).length, 1);
  assert.ok(recipe.includes('src="assets/img/inventoryimages3/researchlab2.png"'));
  assert.ok(recipe.includes('烹饪指南×1'));
  for (const entry of Object.values(state.entries).filter(entry => entry.recipe?.includes('炼金引擎'))) {
    assert.ok(App.Recipe.toBlockHtml(entry.recipe).includes('src="assets/img/inventoryimages3/researchlab2.png"'), entry.id);
  }
  assert.equal(App.Recipe.techToHtml('炼金引擎；高脚鸟制作', '炼金引擎：活木×3'), '高脚鸟制作');
  assert.equal(App.Recipe.techToHtml('炼金引擎；高脚鸟制作 / 金企鹅兑换', '炼金引擎；高脚鸟制作：活木×3；金企鹅兑换：[bighead_qbi]×49'), '');
  assert.ok(App.Linkify.textToHtml('在科学机器或炼金引擎制作').includes('src="assets/img/inventoryimages3/researchlab.png"'));
});
check('替代配方逐组显示，材料与条件横排，保留取得方式、数量和材料跳转', () => {
  App.Modal.open('bighead_mwgt');
  const output = node('modal-root').innerHTML;
  const options = [...output.matchAll(/<li class="recipe-option">([\s\S]*?)<\/ul>/g)];
  assert.equal(options.length, 4);
  const expected = [
    ['牛肉×2', '铥矿×1', '肉×2', '高脚鸟蛋×1'],
    ['羊肉×1', '鱼肉×3', '铥矿×1', '高脚鸟蛋×1'],
    ['鸟腿×5', '铥矿×1', '小肉×5', '鸟蛋×3'],
    ['鱼肉×3', '无花果×2', '铥矿×1', '藤壶×3'],
  ];
  options.forEach((option, index) => {
    const text = option[1].replace(/<[^>]*>/g, '');
    for (const material of expected[index]) assert.ok(text.includes(material), material);
    assert.equal((option[1].match(/class="recipe-ingredient"/g) || []).length, 4);
  });
  assert.ok(output.includes('任选一组'));
  for (const id of ['bighead_nr', 'bighead_yr']) assert.ok(options.some(option => option[1].includes(`data-open-entry="${id}"`)));
  App.Modal.open('jq_dong');
  const winter = node('modal-root').innerHTML;
  assert.equal((winter.match(/class="recipe-option"/g) || []).length, 2);
  assert.ok(winter.includes('金企鹅兑换'));
  assert.ok(winter.includes('冰鲷鱼×6'));
  assert.ok(winter.includes('data-open-entry="bighead_qbi"'));
  App.Modal.open('bighead_cmgt');
  assert.ok(node('modal-root').innerHTML.includes('蜂蜜×至少1'));
  const conditions = App.Recipe.toBlockHtml('烹饪条件：蜂蜜×至少1；水果度≥2；不能加入蜂蜜');
  assert.ok(conditions.includes('水果度≥2') && conditions.includes('不能加入蜂蜜'));
  assert.ok(App.Recipe.toBlockHtml('<script>×1').includes('&lt;script&gt;×1'));
});
check('所有金企鹅兑换入口可查看召唤步骤，区分金块与Q币并说明限时库存', () => {
  for (const entry of Object.values(state.entries)) {
    if (!entry.recipe?.includes('金企鹅兑换')) continue;
    App.Modal.open(entry.id);
    const recipe = node('modal-root').innerHTML.split('<section class="recipe-row detail-block">')[1]?.split('</section>')[0];
    assert.ok(recipe?.includes('data-open-entry="mech_gold_penguin"'), entry.id);
  }
  const target = {
    closest: selector => selector === '[data-open-entry]' ? { dataset: { openEntry: 'mech_gold_penguin' } } : null,
    matches: () => false,
  };
  for (const listener of documentListeners.get('click') || []) listener({ target });
  assert.equal(App.route.read().detailId, 'mech_gold_penguin');
  const plain = node('modal-root').innerHTML.replace(/<[^>]*>/g, '');
  for (const text of ['同一只', '10块', '冬天', '480秒', '不是给10枚Q币', '不会定时自动刷新']) assert.ok(plain.includes(text), text);
  assert.equal(state.nameToId['金企鹅'], 'mech_gold_penguin');
  App.ui.q = '金企鹅';
  assert.ok(App.Filter.getSearchResults().some(entry => entry.id === 'mech_gold_penguin'));
  App.ui.q = '';
  App.Modal.open('bighead_qbi');
  assert.ok(node('modal-root').innerHTML.includes('data-open-entry="mech_gold_penguin"'));
});
check('27款外观全部在对应物品中横向展示，支持查看、返回、搜索和旧链接', () => {
  for (const item of state.items) {
    App.Modal.open(item.id);
    const output = node('modal-root').innerHTML;
    const expected = state.skins.filter(skin => skin.item_id === item.id);
    const gallery = output.split('class="item-appearances__grid">')[1]?.split('</section>')[0] || '';
    const targets = [...gallery.matchAll(/data-open-entry="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(targets, Array.from(expected, skin => skin.id), item.id);
    for (const skin of expected) assert.ok(gallery.includes(`src="${skin.display_image}"`), skin.id);
  }
  for (const skin of state.skins) {
    App.Modal.open(skin.id);
    const section = 'items';
    assert.equal(App.ui.section, section);
    const output = node('modal-root').innerHTML;
    assert.ok(output.includes(`class="modal-card__hero" src="${skin.display_image}"`), skin.id);
    assert.ok(output.includes(`data-open-entry="${skin.item_id}">← 返回`), skin.id);
    assert.ok(state.entries[skin.item_id].searchText.includes(skin.name), skin.id);
    assert.equal(App.route.read(`#skins/${skin.id}`).detailId, skin.id);
    assert.equal(App.route.read(`#skins/${skin.id}`).section, section);
  }
  assert.equal(App.route.read('#skins').section, 'items');
  App.ui.cats = [];
  App.ui.q = '万籁华光';
  assert.ok(App.Filter.getFilteredItems().some(item => item.id === 'bighead_buran'));
  App.ui.q = '';
});
check('每件物品详情均能显示使用步骤与效果，且概要不重复为正文', () => {
  for (const item of state.items) {
    App.Modal.open(item.id);
    const output = node('modal-root').innerHTML;
    assert.ok(/<h3>(?:怎么使用|用途)<\/h3>/.test(output), item.id);
    assert.ok(/<h3>(?:效果与限制|基础效果|击杀掉落)<\/h3>/.test(output), item.id);
    assert.equal(output.split(item.summary).length - 1, 1, item.id);
  }
});
check('获取状态在卡片和详情显式显示并可搜索，芙蓉保留已接入的特殊获取方式', () => {
  App.ui.cats = [];
  App.Render.renderItems();
  const cards = node('items-root').innerHTML;
  const flower = cards.match(/<article[^>]*data-entry-target="bb_gaojiaoniao_fr"[\s\S]*?<\/article>/)?.[0];
  assert.ok(flower?.includes('class="availability-badge">特殊获取'));
  App.Modal.open('bb_gaojiaoniao_fr');
  const output = node('modal-root').innerHTML;
  const plain = output.replace(/<[^>]*>/g, '');
  assert.ok(output.includes('class="availability-badge">特殊获取'));
  for (const text of ['10%', '暗影心房', '枯萎', '失败会消耗心房']) assert.ok(plain.includes(text), text);
  assert.ok(!plain.includes('未找到启用'));
  App.ui.q = '特殊获取';
  assert.ok(App.Filter.getFilteredItems().some(item => item.id === 'bb_gaojiaoniao_fr'));
  App.ui.q = '';
  App.Modal.open('bighead_spear');
  assert.ok(!node('modal-root').innerHTML.includes('class="availability-badge"'));
  // Exercise both real templates for future entries explicitly marked unimplemented.
  const item = { id: 'preview-unimplemented', title: '未开放物品', name_html: '未开放物品', availability: '未实装' };
  for (const [template, view] of [['tpl-items', { items: [item] }], ['tpl-modal-generic', item]]) {
    const html = sandbox.window.Mustache.render(node(template).innerHTML, view);
    assert.ok(html.includes('class="availability-badge">未实装'), template);
  }
});
check('灵气详情先解释被动与技能用途，区分当前值、上限和主动补充条件', () => {
  App.Modal.open('mech_lingqi');
  const output = node('modal-root').innerHTML;
  const plain = output.replace(/<[^>]*>/g, '');
  assert.ok(plain.indexOf('灵气到底有什么用') < plain.indexOf('基础灵气'));
  for (const text of ['至少10点', '照明', '至少50点', '踏水', '溺水', '至少100点', '50%', '食用灵魂', '当前灵气', '不是灵气上限', '严格大于75点', '75点整仍是5%', '102点', '剩98点', '每次消耗1个', '回复50点']) {
    assert.ok(plain.includes(text), text);
  }
  for (const id of ['bighead_spear', 'bighead_buran', 'bighead_fanhua', 'bighead_ygxlfw', 'jq_chun', 'bighead_qyq', 'mech_spirits']) {
    assert.ok(output.includes(`data-open-entry="${id}"`), id);
  }
  assert.equal((output.match(/class="detail-table"/g) || []).length, 3);
  App.ui.q = '踏水';
  assert.ok(App.Filter.getSearchResults().some(entry => entry.id === 'mech_lingqi'));
  App.ui.q = '';
});
check('无小标题的详情段落不继承整页标题，机制概要只出现一次', () => {
  for (const id of ['mech_lingqi', 'config_bighead_speed_bonus']) {
    App.Modal.open(id);
    const output = node('modal-root').innerHTML;
    const sections = [...output.matchAll(/<section class="detail-block[^\"]*">([\s\S]*?)<\/section>/g)];
    const titles = sections.flatMap(section => [...section[1].matchAll(/<h3>(.*?)<\/h3>/g)].map(match => match[1]));
    assert.deepEqual(titles, Array.from(state.entries[id].detail_blocks.filter(block => block.title).map(block => block.title)));
    assert.equal(output.split(state.entries[id].summary).length - 1, 1);
  }
});
check('五道条件与概率分表，圆满属性独立展示，技能图标仍横向分组', () => {
  App.Modal.open('mech_wudao');
  const output = node('modal-root').innerHTML;
  assert.equal((output.match(/<table class="detail-table">/g) || []).length, 2);
  for (const text of ['神道', '人道', '畜生道', '恶鬼道', '地狱道', '50%', '20%', '5%', '0.1%']) assert.ok(output.includes(text), text);
  for (const value of ['200', '150', '250']) assert.ok(output.includes(`<dd>${value}</dd>`), value);
  assert.ok(output.includes('detail-block--note'));
  assert.ok(output.includes('data-open-entry="mech_shixin"'));
  App.Modal.open('mech_gardening');
  const garden = node('modal-root').innerHTML;
  assert.equal((garden.match(/detail-block--image/g) || []).length, 4);
  assert.ok(garden.includes('detail-list'));
  assert.ok(garden.includes('detail-table'));
});
check('表格与列表文字参与搜索，数字强调不破坏链接与比较符号', () => {
  App.ui.q = '钢羊';
  assert.ok(App.Filter.getSearchResults().some(entry => entry.id === 'mech_wudao'));
  App.ui.q = '';
  const rich = App.Linkify.textToHtml('噬心>25，[[冬季(10级)]]，50% & 0.1%', { emphasizeNumbers: true });
  assert.ok(rich.includes('&gt;<strong class="detail-value">25</strong>'));
  assert.ok(rich.includes('data-open-entry="jq_dong10">冬季(10级)</button>'));
  assert.ok(rich.includes('<strong class="detail-value">50%</strong> &amp; <strong class="detail-value">0.1%</strong>'));
});
check('节气详情展示实际用途，机制页提供装配与升级指引', () => {
  for (const entry of state.seasons) {
    App.Modal.open(entry.id);
    const output = node('modal-root').innerHTML;
    assert.ok(output.includes('<h3>怎么使用</h3>'), entry.id);
    assert.ok(output.includes('<h3>效果与限制</h3>'), entry.id);
    assert.ok(output.includes('琦玉器'), entry.id);
  }
  App.Modal.open('mech_jieqi');
  const output = node('modal-root').innerHTML;
  assert.ok(output.includes('<h3>如何生效</h3>'));
  assert.ok(output.includes('<h3>怎样升级</h3>'));
  assert.ok(!/<h3>节气<\/h3>|STRINGS\.|包内动画|包内字符串/.test(output));
  assert.equal(output.split(state.entries.mech_jieqi.summary).length - 1, 1);
});
check('正文物品使用对应小图标，长名称完整匹配且保留原有关联目标', () => {
  const render = text => App.Linkify.textToHtml(text, { emphasizeNumbers: true });
  const products = render('[[四季之灵]]10枚，草制缚灵网4枚、缚灵网16枚、[[琦玉器]]10枚、[[月饼盒子]]49枚');
  assert.equal((products.match(/class="inline-item__icon"/g) || []).length, 5);
  assert.equal((products.match(/data-open-entry=/g) || []).length, 3);
  for (const name of ['草制缚灵网', '缚灵网', '琦玉器', '月饼盒子']) {
    const item = state.items.find(item => item.name === name);
    assert.ok(products.includes(`src="${item.image}"`), name);
  }
  assert.ok(products.includes('<strong class="detail-value">49</strong>枚'));
  const materials = render('金块6枚，冰淇淋与草莓罐头');
  assert.ok(materials.includes('src="assets/img/inventoryimages2/goldnugget.png"'));
  const jam = state.items.find(item => item.name === '草莓罐头');
  assert.ok(materials.includes(`src="${jam.image}"`));
  assert.equal((materials.match(/class="inline-item__icon"/g) || []).length, 2);
  const safe = render('<img src="x" onerror="x">金块 & [[琦玉器]]');
  assert.ok(safe.includes('&lt;img src=&quot;x&quot; onerror=&quot;x&quot;&gt;'));
  assert.ok(safe.includes('&amp;'));
});
check('通过实际用途能搜到物品及其制作喂养链', () => {
  for (const [query, expected] of [['踏水', 'bb_gaojiaoniao_cmyh'], ['范围耕地', 'bighead_ylry'],
    ['饥饿消耗', 'bighead_ywyb'], ['何三宝', 'bighead_mwgt'], ['2肉度', 'bighead_nr']]) {
    App.ui.q = query;
    assert.ok(App.Filter.getSearchResults().some(e => e.id === expected), `${query}: ${expected}`);
  }
  App.ui.q = '';
});
check('全文关联词和配方引用均生成可点击的正确目标，筛选不会阻止详情跳转', () => {
  let characterOpened = '';
  App.CharPopup = { openForCharacter(id) { characterOpened = id; } };
  App.ui.q = '不会命中任何物品的筛选词';
  App.Render.renderItems();
  assert.equal((node('items-root').innerHTML.match(/data-open-entry=/g) || []).length, 0);
  let inline = 0;
  let recipe = 0;
  function click(id) {
    const target = {
      closest: selector => selector === '[data-open-entry]' ? { dataset: { openEntry: id } } : null,
      matches: () => false,
    };
    for (const listener of documentListeners.get('click') || []) listener({ target });
    assert.equal(App.route.read().detailId, id);
    if (state.entries[id].type === 'characters') {
      assert.equal(characterOpened, id);
    } else {
      assert.equal(node('modal-root').hidden, false);
      assert.ok(node('modal-root').innerHTML.includes(`data-copy-link="${id}"`));
    }
  }
  for (const entry of Object.values(state.entries)) {
    const blockTexts = value => typeof value === 'string' ? [value]
      : Array.isArray(value) ? value.flatMap(blockTexts)
      : value && typeof value === 'object' ? Object.values(value).flatMap(blockTexts) : [];
    const texts = [entry.summary || '', entry.subtitle || '', ...(entry.setting || []),
      ...(entry.exclusive_intro || []), ...(entry.changes || []),
      ...blockTexts(entry.detail_blocks || [])];
    for (const text of texts) {
      const rendered = App.Linkify.textToHtml(text);
      const matches = [...text.matchAll(/\[\[([^\[\]]+)\]\]/g)];
      assert.equal((rendered.match(/data-open-entry=/g) || []).length, matches.length, entry.id);
      for (const match of matches) {
        const id = state.nameToId[match[1]];
        assert.ok(state.entries[id], `${entry.id}: ${match[1]}`);
        assert.ok(rendered.includes(`data-open-entry="${id}"`));
        click(id);
        inline++;
      }
    }
    for (const match of (entry.recipe || '').matchAll(/\[([^\[\]]+)\]/g)) {
      const id = match[1];
      const rendered = App.Recipe.toHtml(entry.recipe);
      assert.ok(rendered.includes(`data-open-entry="${id}"`), `${entry.id}: ${id}`);
      click(id);
      recipe++;
    }
  }
  assert.ok(inline >= 354);
  assert.ok(recipe >= 88);
  App.ui.q = '';
});
check('所有详情的关联按钮指向存在的条目，地点互通且装备与外观可双向访问', () => {
  for (const entry of Object.values(state.entries)) {
    assert.equal(new Set(entry.related || []).size, (entry.related || []).length, entry.id);
    for (const id of entry.related || []) assert.ok(state.entries[id], `${entry.id}: ${id}`);
    if (['characters', 'changelog'].includes(entry.type)) continue;
    App.Modal.open(entry.id);
    const related = node('modal-root').innerHTML.split('<div class="related-row">')[1] || '';
    const targets = [...related.matchAll(/data-open-entry="([^"]+)"/g)].map(match => match[1]);
    const expected = (entry.related || []).filter(id => !(entry.type === 'items' && state.entries[id].type === 'skins' && state.entries[id].item_id === entry.id));
    assert.deepEqual(targets, Array.from(expected), entry.id);
  }
  for (const id of ['loc_foyer', 'loc_hall', 'loc_bedroom', 'loc_bedroom_right']) {
    assert.ok(state.entries[id].related.includes('loc_qingxuan'));
    assert.ok(state.entries.loc_qingxuan.related.includes(id));
  }
  for (const skin of state.skins) {
    for (const id of skin.related) assert.ok(state.entries[id].related.includes(skin.id));
  }
});
check('关联按实际制作与技能整理，不混入同类物品或通用食物的虚假专属关系', () => {
  const absent = {
    bb_hhlct: ['bb_cct'], bighead_hy: ['pangtouyu', 'bighead_xqlj'],
    bighead_xqlj: ['bighead_hy', 'pangtouyu'], bighead_sucookpot_item: ['pangtouyu', 'bighead_hy'],
    bighead_spear: ['bighead_armor'], bighead_armor: ['bighead_spear'],
    bighead_ylss: ['mech_lingqi', 'pangtouyu'], bighead_ygxlfw: ['bighead_wcs'],
    bb_gaojiaoniao_cmyh: ['bb_gaojiaoniao_fh'], bb_gaojiaoniao_fr: ['bb_gaojiaoniao_fh'],
    bb_gaojiaoniao_lh: ['bb_gaojiaoniao_fh', 'mech_shixin'],
    bb_gaojiaoniao_gjsh: ['bb_gaojiaoniao_lh', 'mech_wudao', 'mech_shixin'],
    bb_gaojiaoniao_cs: ['mech_wudao'], bighead_qbi: ['pangtouyu'],
  };
  for (const [from, targets] of Object.entries(absent)) {
    for (const to of targets) assert.ok(!state.entries[from].related.includes(to), `${from} -> ${to}`);
  }
  for (const food of state.items.filter(item => item.category === 'food' && item.owner === 'common' && item.id !== 'bighead_cmklb')) {
    assert.ok(!food.related.includes('pangtouyu'), food.id);
  }
  for (const [from, to] of [['bb_gaojiaoniao_fqh', 'bb_gaojiaoniao_cmyh'], ['bb_gaojiaoniao_cmyh', 'bb_gaojiaoniao_fqh'],
    ['bb_cct', 'bighead_fanhua'], ['bighead_fanhua', 'bb_cct'], ['bb_gaojiaoniao_gjsh', 'bb_gaojiaoniao_fh'],
    ['bb_gaojiaoniao_fh', 'bb_gaojiaoniao_gjsh'], ['bighead_ylss', 'bighead_ylry']]) {
    assert.ok(state.entries[from].related.includes(to), `${from} -> ${to}`);
  }
  for (const entry of state.items.filter(item => item.recipe?.includes('金企鹅兑换'))) {
    assert.ok(entry.related.includes('mech_gold_penguin'), entry.id);
  }
  assert.equal(state.entries.bighead_wcs.owner, 'gaojiaoniao');
  App.Modal.open('bb_hhlct');
  assert.ok(!node('modal-root').innerHTML.includes('class="related-row"'), '无直接关联时隐藏空关联栏');
});
const labelFixture = JSON.parse(JSON.stringify(sandbox.window.SITE_DATA));
labelFixture.relations.bighead_spear = '测试用展示名';
const aliasSandbox = { window: { SITE_DATA: labelFixture, location: { hash: '' } }, URLSearchParams };
vm.createContext(aliasSandbox);
vm.runInContext(readFileSync(join(root, 'assets/js/data.js'), 'utf8'), aliasSandbox);
await aliasSandbox.window.App.Data.load();
check('别称与自定义展示名保留正式名称跳转，未知词与特殊字符安全显示', () => {
  for (const [name, id] of [['貔貅', 'bb_gaojiaoniao_px_builder'], ['三宝', 'bighead_sanbao_builder'],
    ['节气系统', 'mech_jieqi'], ['太极清玄阁', 'loc_qingxuan']]) {
    assert.equal(state.nameToId[name], id);
    assert.ok(App.Linkify.textToHtml(`[[${name}]]`).includes(`data-open-entry="${id}"`));
  }
  const fresh = aliasSandbox.window.App.STATE;
  assert.equal(fresh.relations.bighead_spear, '测试用展示名');
  assert.equal(fresh.nameToId['测试用展示名'], 'bighead_spear');
  assert.equal(fresh.nameToId['避尘'], 'bighead_spear');
  assert.ok(!App.Linkify.textToHtml('[[不存在的词]]').includes('data-open-entry'));
  assert.equal(App.Linkify.textToHtml('<b>未知 & 文本</b>'), '&lt;b&gt;未知 &amp; 文本&lt;/b&gt;');
});
check('点击弹窗外空白、遮罩或关闭按钮可关闭，点击内容不会误关闭', () => {
  const click = (surface) => {
    const target = {
      matches: selector => selector === '.modal-shell' && surface === 'shell',
      closest: selector => selector === '[data-modal-close]' && ['backdrop', 'close'].includes(surface) ? {} : null,
    };
    for (const listener of documentListeners.get('click') || []) listener({ target });
  };
  for (const surface of ['shell', 'backdrop', 'close']) {
    App.Modal.open('jq_cf', { fromHash: true });
    click('content');
    assert.equal(node('modal-root').hidden, false, '弹窗正文保持打开');
    click(surface);
    assert.equal(node('modal-root').hidden, true, surface);
    assert.equal(App.route.read().detailId, '', surface);
  }
  App.Modal.open('jq_cf', { fromHash: true });
  for (const listener of documentListeners.get('keydown') || []) listener({ key: 'Escape' });
  assert.equal(node('modal-root').hidden, true, 'Escape');
});
check('角色搜索结果进入独立人物页，深链刷新仍可打开', () => {
  let opened = '';
  App.CharPopup = { openForCharacter(id) { opened = id; } };
  App.Modal.open('gaojiaoniao');
  assert.equal(App.ui.section, 'characters');
  assert.equal(opened, 'gaojiaoniao');
  assert.equal(node('modal-root').hidden, true);
  opened = '';
  App.Modal.syncFromRoute();
  assert.equal(opened, 'gaojiaoniao');
});
check('校阅覆盖新增分区且当前无内容问题', () => {
  App.Editor.init();
  assert.equal(App.issues.length, 0);
});
check('v4.8 基础属性与数据版本一致', () => {
  assert.equal(state.meta.version, 'v4.8');
  assert.deepEqual(JSON.parse(JSON.stringify(state.characters[0].stats)), { hp: 150, san: 150, hunger: 150 });
  assert.deepEqual(JSON.parse(JSON.stringify(state.characters[1].stats)), { hp: 150, san: 100, hunger: 200 });
});
console.log(`\n交互模块检查：${passed} 通过。`);

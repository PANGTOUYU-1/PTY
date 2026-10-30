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
    addEventListener() {},
  },
  history: { pushState(_a, _b, hash) { sandbox.window.location.hash = hash; }, replaceState(_a, _b, hash) { sandbox.window.location.hash = hash; } },
  URLSearchParams, console,
};
vm.createContext(sandbox);
for (const file of ['assets/js/vendor/mustache.min.js', 'data/site-data.js', 'assets/js/data.js',
  'assets/js/render.js', 'assets/js/recipe.js', 'assets/js/linkify.js', 'assets/js/filter.js',
  'assets/js/carousel.js', 'assets/js/modal.js', 'assets/js/editor.js']) {
  vm.runInContext(readFileSync(join(root, file), 'utf8'), sandbox, { filename: file });
  if (!sandbox.window.Mustache && sandbox.Mustache) sandbox.window.Mustache = sandbox.Mustache;
}
const App = sandbox.window.App;
await App.Data.load();
const state = App.STATE;
let passed = 0;
const check = (label, fn) => { fn(); passed++; console.log(`  ✓ ${label}`); };

check('分类和分区配置不进入条目与名称索引', () => {
  for (const config of [...sandbox.window.SITE_DATA.categories, ...sandbox.window.SITE_DATA.sections]) {
    assert.equal(state.entries[config.id], undefined);
    assert.equal(state.relations[config.id], undefined);
  }
});
check('所有内容条目都具有对应页面分区', () => {
  const sections = new Set(App.sections.map(s => s.id));
  for (const entry of Object.values(state.entries)) {
    assert.ok(entry.type === 'characters' || sections.has(entry.type));
  }
});
check('真实渲染模块生成外观、设置与节气卡片', () => {
  for (const id of ['skins', 'settings', 'seasons']) {
    const config = App.sections.find(s => s.id === id);
    App.Render.renderGenericSection(config);
    const output = node(config.rootId).innerHTML;
    assert.equal((output.match(/data-open-entry=/g) || []).length, state[id].length);
    assert.ok(output.includes(state[id][0].name || state[id][0].title));
  }
});
check('真实物品渲染保留全部条目，归属筛选有效', () => {
  App.Render.renderItems();
  assert.equal((node('items-root').innerHTML.match(/data-open-entry=/g) || []).length, state.items.length);
  App.ui.owner = 'gaojiaoniao';
  assert.ok(App.Filter.getFilteredItems().every(e => e.owner === 'gaojiaoniao'));
  App.ui.owner = 'all';
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
    assert.equal(App.ui.section, state.entries[id].type);
    assert.equal(App.route.read().detailId, id);
    assert.ok(node('modal-root').innerHTML.includes(state.entries[id].name || state.entries[id].title));
  }
  App.Modal.open('bighead_spear');
  assert.ok(node('modal-root').innerHTML.includes('冰×6 + 月亮碎片×6'));
  assert.ok(node('modal-root').innerHTML.includes('recipe-tech'));
  assert.ok(node('modal-root').innerHTML.includes('物品'));
});
check('角色搜索结果进入角色面板，深链刷新仍可打开', () => {
  let opened = '';
  App.CharPopup = { openForCharacter(id) { opened = id; } };
  App.Modal.open('gaojiaoniao');
  assert.equal(App.ui.section, 'intro');
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

(function () {
  const App = (window.App = window.App || {});

  /**
   * === 应用配置 App.config ===
   *
   * - placeholderImage: 图片加载失败时的占位图路径。
   * - categoryLabels: 物品分类 id → 中文名映射，用于分类筛选和展示。
   * - ownerLabels: 角色归属 id → 中文标签映射，用于归属筛选。
   */
  App.config = {
    placeholderImage: "assets/img/placeholders/missing.svg",  // 缺图占位资源
    // categoryLabels 和 categoryList 由 normalizeData 从 site-data.js 的 categories 动态构建
    categoryLabels: {},
    categoryList: [],
    ownerLabels: {
      all: "全部",
      pangtouyu: "属胖头鱼",
      gaojiaoniao: "属高脚鸟",
      common: "通用"
    }
  };

  App.issues = [];
  App.missingImages = [];
  App.ui = {
    section: "intro",
    detailId: "",
    cats: [],
    owner: "all",
    q: ""
  };

  App.onImageError = function (img) {
    if (!img || img.dataset.fallback === "true") {
      return;
    }
    img.dataset.fallback = "true";
    img.dataset.originalSrc = img.currentSrc || img.src;
    img.src = App.config.placeholderImage;
    if (App.Editor) {
      App.Editor.reportImageIssue(img);
    }
  };

  function readHash(hash) {
    const raw = (hash || window.location.hash || "").replace(/^#/, "");
    const parts = raw.split("?");
    const path = parts[0] || "intro";
    const search = new URLSearchParams(parts[1] || "");
    const pathParts = path.split("/").filter(Boolean);
    const section = pathParts[0] === "序" ? "intro" : pathParts[0];
    return {
      section: section || "intro",
      detailId: pathParts[1] || "",
      cats: (search.get("cat") || "").split(",").filter(Boolean),
      owner: search.get("owner") || "all",
      q: search.get("q") || ""
    };
  }

  function buildHash(ui) {
    const params = new URLSearchParams();
    if (ui.cats && ui.cats.length) {
      params.set("cat", ui.cats.join(","));
    }
    if (ui.owner && ui.owner !== "all") {
      params.set("owner", ui.owner);
    }
    if (ui.q) {
      params.set("q", ui.q);
    }
    const path = ui.detailId ? ui.section + "/" + ui.detailId : ui.section;
    const query = params.toString();
    return "#" + path + (query ? "?" + query : "");
  }

  function ensureArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function createPlaceholderCharacter(side) {
    const isZuo = side === "zuo";
    return {
      id: isZuo ? "pangtouyu" : "gaojiaoniao",
      side: side,
      name: isZuo ? "未命名甲" : "未命名乙",
      epithet: isZuo ? "胖头鱼称号占位" : "高脚鸟称号占位",
      portrait: App.config.placeholderImage,
      stats: { hp: null, san: null, hunger: null },
      setting: [],
      exclusive_intro: []
    };
  }

  function mergeCharacter(character, fallback) {
    const stats = character.stats || {};
    return {
      ...fallback,
      ...character,
      id: fallback.id,
      side: fallback.side,
      portrait: character.portrait || fallback.portrait,
      stats: {
        hp: typeof stats.hp === "number" ? stats.hp : null,
        san: typeof stats.san === "number" ? stats.san : null,
        hunger: typeof stats.hunger === "number" ? stats.hunger : null
      },
      setting: ensureArray(character.setting),
      exclusive_intro: ensureArray(character.exclusive_intro),
      tags: ensureArray(character.tags)
    };
  }

  function normalizeCharacters(list) {
    const source = Array.isArray(list) ? list : [];
    const byId = source.reduce(function (acc, item) {
      if (item && item.id) {
        acc[item.id] = item;
      }
      return acc;
    }, {});
    const zuo = mergeCharacter(byId.pangtouyu || source.find(function (item) { return item.side === "zuo"; }) || {}, createPlaceholderCharacter("zuo"));
    const you = mergeCharacter(byId.gaojiaoniao || source.find(function (item) { return item.side === "you"; }) || {}, createPlaceholderCharacter("you"));

    return [zuo, you].map(function (character) {
      return Object.freeze({
        ...character,
        side_label: character.side === "zuo" ? "左" : "右",
        stats_line:
          "HP " +
          (character.stats.hp == null ? "—" : character.stats.hp) +
          " / SAN " +
          (character.stats.san == null ? "—" : character.stats.san) +
          " / HUNGER " +
          (character.stats.hunger == null ? "—" : character.stats.hunger)
      });
    });
  }

  function buildSearchText(entry) {
    const parts = [];
    ["name", "title", "summary", "epithet", "version", "date"].forEach(function (key) {
      if (entry[key]) {
        parts.push(entry[key]);
      }
    });
    ["tags", "setting", "exclusive_intro", "changes"].forEach(function (key) {
      if (Array.isArray(entry[key])) {
        parts.push(entry[key].join(" "));
      }
    });
    if (entry.detail_blocks) {
      parts.push(
        entry.detail_blocks
          .map(function (block) {
            return block.content || block.caption || "";
          })
          .join(" ")
      );
    }
    if (entry.recipe) {
      parts.push(entry.recipe);
    }
    return parts.join(" ");
  }

  function normalizeData(raw) {
    raw = raw || {};
    // 从 site-data.js 的 categories 动态构建分类映射
    var catList = raw.categories || [];
    App.config.categoryList = catList;
    App.config.categoryLabels = {};
    catList.forEach(function (c) { App.config.categoryLabels[c.id] = c.name; });

    const meta = raw.meta || {};
    const characters = normalizeCharacters(raw.characters || []);
    const items = (raw.items || []).map(function (item) {
      return Object.freeze({
        ...item,
        category_label: App.config.categoryLabels[item.category] || "其他",
        owner_label: App.config.ownerLabels[item.owner] || "通用"
      });
    });
    const mechanics = (raw.mechanics || []).map(Object.freeze);
    const terrains = (raw.terrains || []).map(Object.freeze);
    const changelog = (raw.changelog || []).map(Object.freeze);
    // 自动生成 id → 中文名映射：shou dong de relations 为底，自动从 name/title 补全
    const relations = Object.assign({}, raw.relations || {});
    (raw.characters || []).forEach(function (c) { if (c.name) { relations[c.id] = c.name; } });
    (raw.items || []).forEach(function (i) { if (i.name) { relations[i.id] = i.name; } });
    (raw.mechanics || []).forEach(function (m) { if (m.title) { relations[m.id] = m.title; } });
    (raw.terrains || []).forEach(function (t) { if (t.title) { relations[t.id] = t.title; } });
    (raw.changelog || []).forEach(function (l) { if (l.title) { relations[l.id] = l.title; } });

    // 自动发现 site-data.js 中的未知数据键（如 seasons），统一添加到 relations 和 entries
    var knownKeys = ["meta", "characters", "items", "mechanics", "terrains", "changelog", "relations", "posters", "loadFailures"];
    var extra = {};
    Object.keys(raw).forEach(function (key) {
      if (knownKeys.indexOf(key) === -1 && Array.isArray(raw[key])) {
        var frozen = raw[key].map(Object.freeze);
        extra[key] = Object.freeze(frozen);
        frozen.forEach(function (entry) {
          var name = entry.name || entry.title;
          if (name) { relations[entry.id] = name; }
        });
      }
    });

    const nameToId = Object.keys(relations).reduce(function (acc, id) {
      acc[relations[id]] = id;
      return acc;
    }, {});
    const entries = {};

    // 所有已知数据键 → entries
    ["characters", "items", "mechanics", "terrains", "changelog"].forEach(function (group) {
      var list = group === "characters" ? characters
        : group === "items" ? items
        : group === "mechanics" ? mechanics
        : group === "terrains" ? terrains
        : changelog;
      list.forEach(function (entry) {
        entries[entry.id] = { ...entry, type: group, searchText: buildSearchText(entry) };
      });
    });
    // 扩展数据键 → entries
    Object.keys(extra).forEach(function (key) {
      extra[key].forEach(function (entry) {
        entries[entry.id] = { ...entry, type: key, searchText: buildSearchText(entry) };
      });
    });

    return Object.freeze(Object.assign({
      meta: Object.freeze(meta),
      characters: Object.freeze(characters),
      items: Object.freeze(items),
      mechanics: Object.freeze(mechanics),
      terrains: Object.freeze(terrains),
      changelog: Object.freeze(changelog),
      relations: Object.freeze(relations),
      nameToId: Object.freeze(nameToId),
      entries: Object.freeze(entries),
      posters: Object.freeze(raw.posters || []),
      loadFailures: Object.freeze(raw.loadFailures || [])
    }, extra));
  }

  App.route = {
    read: readHash,
    build: buildHash,
    sync: function (patch, options) {
      const next = {
        ...App.ui,
        ...patch
      };
      App.ui = next;
      const hash = buildHash(next);
      if ((options && options.replace) || window.location.hash === hash) {
        history.replaceState(null, "", hash);
        return;
      }
      history.pushState(null, "", hash);
    }
  };

  App.Data = {
    load: function () {
      return Promise.resolve(window.SITE_DATA || { loadFailures: ["site-data"] }).then(function (raw) {
        App.STATE = normalizeData(raw);
        window.STATE = App.STATE;
        App.ui = {
          ...App.ui,
          ...readHash()
        };
        return App.STATE;
      });
    }
  };
})();

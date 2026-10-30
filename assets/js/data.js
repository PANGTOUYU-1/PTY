(function () {
  const App = (window.App = window.App || {});

  /**
   * === 应用配置 App.config ===
   *
   * - placeholderImage: 图片加载失败时的占位图路径。
   * - categoryLabels: 物品分类 id → 中文名映射，用于分类筛选和展示。
   * - ownerLabels: 角色归属 id → 中文标签映射，用于所有展示图。
   */
  App.config = {
    placeholderImage: "assets/img/placeholders/missing.svg",  // 缺图占位资源
    // categoryLabels 和 categoryList 由 normalizeData 从 site-data.js 的 categories 动态构建
    categoryLabels: {},
    categoryList: [],
    foodCategories: [
      { id: "ingredient", name: "食材" },
      { id: "cooked", name: "料理" },
      { id: "mooncake", name: "月饼" }
    ],
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
    foodKind: "",
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

  function selectedCategories(cats) {
    const first = (cats || [])[0];
    return ["food", "structure", "pangtouyu", "gaojiaoniao", "common"].includes(first) ? [first] : [];
  }

  function readHash(hash) {
    const raw = (hash || window.location.hash || "").replace(/^#/, "");
    const parts = raw.split("?");
    const path = parts[0] || "intro";
    const search = new URLSearchParams(parts[1] || "");
    const pathParts = path.split("/").filter(Boolean);
    let section = pathParts[0] === "序" ? "intro" : pathParts[0] === "skins" ? "items" : pathParts[0];
    let cats = selectedCategories((search.get("cat") || "").split(",").filter(Boolean));
    const entry = App.STATE && App.STATE.entries[pathParts[1]];
    if (entry && ["buildings", "terrains"].includes(section) && entrySection(entry) === "items") {
      section = "items";
      cats = [];
    }
    if ((section === "items" && cats[0] === "structure") ||
        (entry && entrySection(entry) === "buildings" && ["items", "terrains"].includes(section))) {
      section = "buildings";
      cats = [];
    }
    const foodKind = search.get("kind") || "";
    return {
      section: section || "intro",
      detailId: pathParts[1] || "",
      cats: cats,
      foodKind: cats[0] === "food" && App.config.foodCategories.some(function (item) { return item.id === foodKind; }) ? foodKind : "",
      q: search.get("q") || ""
    };
  }

  function buildHash(ui) {
    const params = new URLSearchParams();
    if (ui.cats && ui.cats.length) {
      params.set("cat", ui.cats[0]);
    }
    if (ui.cats && ui.cats[0] === "food" && ui.foodKind) {
      params.set("kind", ui.foodKind);
    }
    if (ui.q) {
      params.set("q", ui.q);
    }
    const path = ui.detailId ? ui.section + "/" + ui.detailId : ui.section;
    const query = params.toString();
    return "#" + path + (query ? "?" + query : "");
  }

  function entrySection(entry) {
    const item = entry.type === "skins" ? App.STATE.entries[entry.item_id] : entry;
    return item && item.category === "structure" ? "buildings" : entry.type === "skins" ? "items" : entry.type;
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
    ["name", "title", "title_note", "summary", "epithet", "version", "date", "tech", "availability"].forEach(function (key) {
      if (entry[key]) {
        parts.push(entry[key]);
      }
    });
    ["tags", "aliases", "setting", "exclusive_intro", "changes"].forEach(function (key) {
      if (Array.isArray(entry[key])) {
        parts.push(entry[key].join(" "));
      }
    });
    if (entry.detail_blocks) {
      const appendText = function (value) {
        if (typeof value === "string") parts.push(value);
        else if (Array.isArray(value)) value.forEach(appendText);
        else if (value && typeof value === "object") Object.values(value).forEach(appendText);
      };
      entry.detail_blocks.forEach(appendText);
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
    // 自动发现 site-data.js 中的未知数据键（如 seasons），统一添加到 entries
    var knownKeys = ["meta", "categories", "sections", "characters", "items", "mechanics", "terrains", "changelog", "relations", "posters", "loadFailures"];
    var extra = {};
    Object.keys(raw).forEach(function (key) {
      if (knownKeys.indexOf(key) === -1 && Array.isArray(raw[key])) {
        var frozen = raw[key].map(Object.freeze);
        extra[key] = Object.freeze(frozen);
      }
    });

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

    // Searching for an appearance also finds the item it belongs to.
    (extra.skins || []).forEach(function (skin) {
      const item = entries[skin.item_id];
      if (item && item.type === "items") item.searchText += " " + buildSearchText(skin);
    });

    // Canonical names stay linkable when an alias or a custom label is added.
    const relations = {};
    const nameToId = {};
    Object.keys(entries).forEach(function (id) {
      const entry = entries[id];
      const label = (raw.relations || {})[id] || entry.name || entry.title || entry.version || id;
      relations[id] = label;
      [entry.name, entry.title, label].concat(ensureArray(entry.aliases)).forEach(function (name) {
        if (typeof name === "string" && name) {
          nameToId[name] = id;
        }
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
      const previousSection = App.ui.section;
      const next = {
        ...App.ui,
        ...patch
      };
      next.cats = selectedCategories(next.cats);
      if (next.cats[0] !== "food" || !App.config.foodCategories.some(function (item) { return item.id === next.foodKind; })) next.foodKind = "";
      App.ui = next;
      const hash = buildHash(next);
      if ((options && options.replace) || window.location.hash === hash) {
        history.replaceState(null, "", hash);
      } else {
        history.pushState(null, "", hash);
      }
      if (App.Navigation && App.Navigation.ready) {
        App.Navigation.sync({ resetScroll: previousSection !== next.section });
      }
    }
  };

  App.Data = {
    entrySection: entrySection,
    ownerView: function (entry) {
      const parent = entry.item_id && App.STATE.entries[entry.item_id];
      const owner = entry.owner || (parent && parent.owner);
      const item = parent || entry;
      const pet = ["bighead_sanbao_builder", "bb_gaojiaoniao_px_builder"].includes(item.id);
      const type = pet ? "pet" : item.category;
      return {
        owner_stamp: { pangtouyu: "鱼", gaojiaoniao: "鸟" }[owner] || "",
        owner_label: App.config.ownerLabels[owner] || "",
        type_stamp: { weapon: "武", armor: "护", tool: "工", crop: "作", material: "材", pet: "宠", misc: "生" }[type] || "",
        type_label: pet ? "宠物" : App.config.categoryLabels[type] || ""
      };
    },
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

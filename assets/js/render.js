(function () {
  const App = window.App;

  function template(id) {
    const node = document.getElementById(id);
    return node ? node.innerHTML : "";
  }

  function renderTo(id, tplId, view) {
    const root = document.getElementById(id);
    if (!root) {
      return;
    }
    root.innerHTML = window.Mustache.render(template(tplId), view || {});
  }

  App.sections = (window.SITE_DATA && window.SITE_DATA.sections) || [
    {
      id: "items",
      title: "物品",
      themeClass: "section--paper",
      rootId: "items-root",
      splitHeader: true,
      filterButton: true
    },
    {
      id: "mechanics",
      title: "机制",
      themeClass: "section--ink",
      rootId: "mechanics-root"
    },
    {
      id: "terrains",
      title: "建筑",
      themeClass: "section--paper",
      rootId: "terrains-root"
    },
    {
      id: "changelog",
      title: "更新",
      themeClass: "section--ink",
      rootId: "changelog-root"
    }
  ];

  function createSectionShell(config) {
    const section = document.createElement("section");
    section.className = "section " + config.themeClass;
    section.id = config.id;
    section.dataset.section = config.id;

    const shell = document.createElement("div");
    shell.className = "shell";

    const head = document.createElement("div");
    head.className = "section-head" + (config.splitHeader ? " section-head--split" : "");

    const titleWrap = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = config.title;
    titleWrap.append(title);
    head.append(titleWrap);

    if (config.filterButton) {
      const button = document.createElement("button");
      button.className = "filter-toggle button button--ghost";
      button.type = "button";
      button.dataset.filterDrawerOpen = "";
      button.textContent = "筛选";
      head.append(button);
    }

    if (config.progress) {
      const progress = document.createElement("div");
      progress.className = "scroll-progress";
      progress.setAttribute("aria-hidden", "true");
      const bar = document.createElement("span");
      bar.className = "scroll-progress__bar";
      bar.dataset.terrainProgress = "";
      progress.append(bar);
      head.append(progress);
    }

    const content = document.createElement("div");
    content.id = config.rootId;

    shell.append(head, content);
    section.append(shell);
    return section;
  }

  function renderSectionShells() {
    const root = document.getElementById("sections-root");
    if (!root) {
      return;
    }
    root.replaceChildren();
    App.sections.forEach(function (sectionConfig) {
      root.append(createSectionShell(sectionConfig));
    });
  }

  function heroQuote(character) {
    if (character.quote) {
      return character.quote;
    }
    return "“未着墨。”";
  }

  function heroCharacter(character) {
    character = character || {};
    const priority = character.featured_items || [];
    const items = (App.STATE.items || []).filter(function (item) {
      return item.owner === character.id && item.display_image;
    }).sort(function (a, b) {
      const order = function (item) { const index = priority.indexOf(item.id); return index < 0 ? priority.length : index; };
      return order(a) - order(b);
    });
    const sharedCrafts = (character.shared_crafts || []).map(function (id) {
      return App.STATE.entries[id];
    }).filter(function (item) { return item && item.type === "items" && item.owner === "common"; });
    return {
      ...character,
      quote: heroQuote(character),
      exclusive_count: items.length,
      shared_crafts: sharedCrafts,
      has_shared_crafts: sharedCrafts.length > 0,
      featured_items: items.map(function (item, index) {
        return { id: item.id, name: item.name, display_image: item.display_image, order: index, ...App.Data.ownerView(item) };
      })
    };
  }

  function baseItemView(item, query) {
    return {
      ...item,
      image: item.display_image || "",
      icon: item.image || "",
      ...App.Data.ownerView(item),
      skin_count: (App.STATE.skins || []).filter(function (skin) { return skin.item_id === item.id; }).length,
      name_html: App.Filter.highlight(item.name, query),
      summary_html: App.Filter.highlight(item.summary, query)
    };
  }

  function compactEntryCardView(entry, label) {
    return {
      id: entry.id,
      image: entry.display_image || entry.illustration || "",
      display_poster: entry.display_poster || "",
      icon: entry.image || "",
      name: entry.name || entry.title || entry.version || "条目占位",
      summary: entry.summary || entry.subtitle || "",
      preview_caption: entry.preview_caption || "",
      category_label: label,
      ...App.Data.ownerView(entry)
    };
  }

  App.Render = {
    renderAll: function () {
      const state = App.STATE;
      const characters = state.characters || [];
      const meta = {
        site_title: state.meta.site_title || "道·阴阳",
        subtitle_latin: state.meta.subtitle_latin || "",
        version: state.meta.version || "v0.0",
        author: state.meta.author || "作者未署名",
        workshop_url: state.meta.workshop_url || "#",
        qq_group_url: state.meta.qq_group_url || ""
      };

      renderTo("hero-root", "tpl-hero", {
        ...meta,
        character_a: heroCharacter(characters[0]),
        character_b: heroCharacter(characters[1])
      });

      renderSectionShells();
      App.sections.forEach(function (sec) {
        if (sec.id === "items") {
          App.Render.renderItems();
        } else if (sec.id === "changelog") {
          App.Render.renderChangelog();
        } else {
          App.Render.renderGenericSection(sec);
        }
      });
      App.Render.renderFooter();
    },

    renderItems: function () {
      if (App.STATE.loadFailures.indexOf("items") > -1) {
        renderTo("items-root", "tpl-items", {
          category_options: App.Filter.categoryOptions(),
          items: [],
          query: App.ui.q,
          summary: "共 0 项 · 内容正在书写"
        });
        App.Filter.syncDrawer();
        App.Filter.updateSearchControls();
        return;
      }
      const filtered = App.Filter.getFilteredItems();
      renderTo("items-root", "tpl-items", {
        category_options: App.Filter.categoryOptions(),
        items: filtered.map(function (item) {
          return baseItemView(item, App.ui.q);
        }),
        query: App.ui.q,
        summary: App.Filter.summary(filtered.length)
      });
      App.Filter.syncDrawer();
      App.Filter.updateSearchControls();
    },

    renderSearchResults: function () {
      const results = App.Filter.getSearchResults();
      renderTo("search-results-root", "tpl-search-results", {
        summary: App.Filter.searchSummary(results.length),
        results: results,
        results_present: results.length > 0
      });
    },

    renderGenericSection: function (sec) {
      var data = App.STATE[sec.id] || [];
      var entries = data.map(function (entry, index) {
        const view = compactEntryCardView(entry, sec.title);
        if (sec.id !== "terrains") return view;
        return {
          ...view,
          number: String(index + 1).padStart(2, "0"),
          selected: entry.id === (App.ui.buildingId || data[0].id),
          is_interior: !!entry.illustration,
          building_entry: entry.building_entry || null,
          building_exits: entry.building_exits || [],
          scene_hotspots: (entry.scene_hotspots || []).map(function (hotspot) {
            return { ...hotspot, position: 'left:' + Number(hotspot.x) + '%;top:' + Number(hotspot.y) + '%;width:' + Number(hotspot.width) + '%;height:' + Number(hotspot.height) + '%' };
          }),
          building_sections: (entry.detail_blocks || []).filter(function (block) {
            return !/台词|陈设/.test(block.title || "") && block.title;
          }).slice(0, 3).map(function (block) {
            const html = function (text) {
              return App.Linkify.textToHtml(text || "", { emphasizeNumbers: true }).replace(/data-open-entry="([^"]+)"/g, function (attribute, id) {
                return App.STATE.entries[id] && App.STATE.entries[id].type === "terrains" ? 'data-building-room="' + id + '"' : attribute;
              });
            };
            return {
              title: block.title,
              is_note: block.tone === "note",
              paragraphs: block.type === "text" ? (block.content || "").split(/\n+/).filter(Boolean).map(function (text) { return { html: html(text) }; }) : [],
              list_items: (block.items || []).map(function (text) { return { html: html(text) }; }),
              has_list: block.type === "list",
              has_table: block.type === "table",
              headers: (block.columns || []).map(function (text) { return { text: text }; }),
              rows: (block.rows || []).map(function (row) {
                return { label: html(row[0]), cells: row.slice(1).map(function (text) { return { html: html(text) }; }) };
              })
            };
          })
        };
      });
      renderTo(sec.rootId, sec.id === "terrains" ? "tpl-buildings" : "tpl-section-cards", { entries: entries });
    },

    selectBuilding: function (id, options) {
      if (!(App.STATE.terrains || []).some(function (entry) { return entry.id === id; })) return;
      const root = document.getElementById("terrains-root");
      if (!root) return;
      App.ui.buildingId = id;
      root.querySelectorAll(".building-entry").forEach(function (entry) {
        entry.hidden = entry.dataset.entryTarget !== id;
      });
      root.querySelectorAll("[data-building-tab]").forEach(function (tab) {
        tab.setAttribute("aria-pressed", String(tab.dataset.buildingRoom === id));
      });
      const current = root.querySelector('.building-entry[data-entry-target="' + id + '"]');
      if (current && options && options.focus) {
        current.querySelector(".building-entry__title").focus({ preventScroll: true });
        current.querySelector(".building-entry__visual").scrollIntoView({ behavior: "instant", block: "start" });
      }
      const live = document.getElementById("aria-live");
      if (live) live.textContent = "当前所在：" + App.STATE.entries[id].title;
    },

    renderChangelog: function () {
      if (App.STATE.loadFailures.indexOf("changelog") > -1) {
        renderTo("changelog-root", "tpl-changelog", { entries: [] });
        return;
      }
      renderTo("changelog-root", "tpl-changelog", {
        entries: App.STATE.changelog.map(function (entry, index) {
          return {
            ...entry,
            is_latest: index === 0,
            changes: (entry.changes || []).map(function (line) {
              return { text: App.Linkify.textToHtml(line) };
            })
          };
        })
      });
    },

    renderFooter: function () {
      renderTo("footer-root", "tpl-footer", {
        ...App.STATE.meta,
        manifesto: App.STATE.meta.manifesto || "一黑一白，并立成道。",
        author: App.STATE.meta.author || "作者未署名",
        links: App.STATE.meta.links || [],
        copyright: App.STATE.meta.copyright || "",
        year: new Date().getFullYear()
      });
    }
  };
})();

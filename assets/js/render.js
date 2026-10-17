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
      title: "地形",
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

  function baseItemView(item, query) {
    return {
      ...item,
      name_html: App.Filter.highlight(item.name, query),
      summary_html: App.Filter.highlight(item.summary, query)
    };
  }

  function compactEntryCardView(entry, label) {
    return {
      id: entry.id,
      image: entry.image || entry.illustration || App.config.placeholderImage,
      name: entry.name || entry.title || entry.version || "条目占位",
      summary: entry.summary || entry.subtitle || "",
      category_label: label,
      owner_label: label
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
        workshop_url: state.meta.workshop_url || "#"
      };

      renderTo("hero-root", "tpl-hero", {
        ...meta,
        character_a: {
          ...characters[0],
          quote: heroQuote(characters[0] || {})
        },
        character_b: {
          ...characters[1],
          quote: heroQuote(characters[1] || {})
        }
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
      var entries = data.map(function (entry) {
        return compactEntryCardView(entry, sec.title);
      });
      renderTo(sec.rootId, "tpl-section-cards", { entries: entries });
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
              return { text: line };
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

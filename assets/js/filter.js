(function () {
  const App = window.App;

  function normalizeText(text) {
    return String(text || "").toLowerCase();
  }

  const composingInputs = new WeakSet();

  function searchInputs() {
    return document.querySelectorAll("[data-item-search-input], [data-global-search-input]");
  }

  function updateSearchControls(value) {
    const nextValue = value ?? App.ui.q ?? "";
    searchInputs().forEach(function (input) {
      input.value = nextValue;
    });
    document.querySelectorAll("[data-search-clear]").forEach(function (button) {
      button.hidden = nextValue.length === 0;
    });
  }

  function runSearch(query) {
    const value = String(query || "").trim();
    App.route.sync({
      section: "items",
      detailId: App.ui.detailId,
      q: value
    }, { replace: true });
    updateSearchControls(value);
    App.Render.renderItems();
    App.Render.renderSearchResults();
    App.bindInteractive();
  }

  App.Filter = {
    highlight: function (text, query) {
      if (!query) {
        return text;
      }
      const safe = String(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return String(text).replace(new RegExp("(" + safe + ")", "ig"), "<mark>$1</mark>");
    },

    categoryOptions: function () {
      var list = App.config.categoryList || [];
      var cats = [{ label: "全部", value: "all" }].concat(list.map(function (c) {
        return { label: c.name, value: c.id };
      }));
      return cats.map(function (item) {
        return {
          ...item,
          active_class: App.ui.cats.length === 0 ? (item.value === "all" ? "is-active" : "") : App.ui.cats.indexOf(item.value) > -1 ? "is-active" : ""
        };
      });
    },

    getFilteredItems: function () {
      const query = normalizeText(App.ui.q);
      return App.STATE.items.filter(function (item) {
        const categoryPass = App.ui.cats.length === 0 || App.ui.cats.indexOf(item.category) > -1;
        const queryPass = !query || normalizeText(App.STATE.entries[item.id].searchText).indexOf(query) > -1;
        return categoryPass && queryPass;
      });
    },

    getSearchResults: function () {
      const query = normalizeText(App.ui.q);
      if (!query) {
        return [];
      }
      return Object.keys(App.STATE.entries)
        .map(function (id) {
          return App.STATE.entries[id];
        })
        .filter(function (entry) {
          return normalizeText(entry.searchText).indexOf(query) > -1;
        })
        .slice(0, 24)
        .map(function (entry) {
          const title = entry.name || entry.title || entry.version;
          const excerpt = entry.summary || entry.subtitle || entry.epithet || entry.searchText.slice(0, 72);
          return {
            id: entry.id,
            type_label: {
              character: "角色",
              item: "物品",
              mechanic: "机制",
              terrain: "地形",
              changelog: "更新"
            }[entry.type],
            title_html: App.Filter.highlight(title, App.ui.q),
            excerpt_html: App.Filter.highlight(excerpt, App.ui.q)
          };
        });
    },

    summary: function (count) {
      const catText = App.ui.cats.length ? App.ui.cats.map(function (cat) { return App.config.categoryLabels[cat]; }).join(" / ") : "全部分类";
      const queryText = App.ui.q ? " · 关键词 “" + App.ui.q + "”" : "";
      return "共 " + count + " 项 · " + catText + queryText;
    },

    searchSummary: function (count) {
      return App.ui.q ? "全站找到 " + count + " 条与 “" + App.ui.q + "” 相关的结果" : "输入关键词后显示全站结果";
    },

    updateSearchControls: updateSearchControls,

    runSearch: runSearch,

    syncDrawer: function () {
      const drawerRoot = document.getElementById("filter-drawer-root");
      const panel = document.querySelector("#items-root .filters-panel");
      if (!drawerRoot || !panel) {
        return;
      }
      const clone = panel.cloneNode(true);
      clone.querySelectorAll("[id]").forEach(function (node) {
        node.removeAttribute("id");
      });
      drawerRoot.innerHTML = "";
      drawerRoot.appendChild(clone);
    },

    bind: function () {
      document.addEventListener("click", function (event) {
        const catButton = event.target.closest("[data-cat]");
        const clearButton = event.target.closest("[data-clear-filters]");
        const searchSubmit = event.target.closest("[data-search-submit]");
        const searchClear = event.target.closest("[data-search-clear]");

        if (catButton) {
          const value = catButton.dataset.cat;
          const nextCats =
            value === "all"
              ? []
              : App.ui.cats.indexOf(value) > -1
              ? App.ui.cats.filter(function (cat) {
                  return cat !== value;
                })
              : App.ui.cats.concat(value);
          App.route.sync({ section: "items", cats: nextCats, detailId: App.ui.detailId }, { replace: true });
          App.Render.renderItems();
          App.bindInteractive();
        }

        if (clearButton) {
          App.route.sync({ section: "items", cats: [], q: "", detailId: App.ui.detailId }, { replace: true });
          updateSearchControls("");
          App.Render.renderItems();
          App.Render.renderSearchResults();
          App.bindInteractive();
        }

        if (searchSubmit) {
          const scope = searchSubmit.closest(".search") || searchSubmit.closest(".filters-panel") || document;
          const input = scope.querySelector("[data-item-search-input], [data-global-search-input]");
          runSearch(input ? input.value : "");
        }

        if (searchClear) {
          runSearch("");
          const scope = searchClear.closest(".search") || searchClear.closest(".filters-panel") || document;
          const input = scope.querySelector("[data-item-search-input], [data-global-search-input]");
          if (input) {
            input.focus();
          }
        }
      });

      document.addEventListener("compositionstart", function (event) {
        if (event.target.matches("[data-item-search-input], [data-global-search-input]")) {
          composingInputs.add(event.target);
        }
      });

      document.addEventListener("compositionend", function (event) {
        if (event.target.matches("[data-item-search-input], [data-global-search-input]")) {
          composingInputs.delete(event.target);
        }
      });

      document.addEventListener("keydown", function (event) {
        if (!event.target.matches("[data-item-search-input], [data-global-search-input]")) {
          return;
        }
        if (event.key !== "Enter") {
          return;
        }
        if (composingInputs.has(event.target) || event.isComposing || event.keyCode === 229) {
          return;
        }
        event.preventDefault();
        runSearch(event.target.value);
      });

      document.addEventListener("input", function (event) {
        if (event.target.matches("[data-item-search-input], [data-global-search-input]")) {
          const value = event.target.value;
          searchInputs().forEach(function (input) {
            if (input !== event.target) {
              input.value = value;
            }
          });
          updateSearchControls(value);
        }
      });
    }
  };
})();

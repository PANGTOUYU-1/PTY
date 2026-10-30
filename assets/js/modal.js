(function () {
  const App = window.App;
  let lastFocused = null;
  let openedFromHash = false;

  function sectionForEntry(entry) {
    return App.Data.entrySection(entry);
  }

  function live(message) {
    const root = document.getElementById("aria-live");
    if (root) {
      root.textContent = message;
    }
  }

  function relatedList(ids) {
    return (ids || [])
      .map(function (id) {
        return {
          id: id,
          name: App.STATE.relations[id] || id
        };
      })
      .filter(function (item) {
        return !!item.name;
      });
  }

  function genericView(entry) {
    const title = entry.name || entry.title || entry.version;
    const paragraphs = [];
    (entry.changes || []).forEach(function (line) {
      paragraphs.push(App.Linkify.textToHtml(line));
    });
    const detailBlocks = (entry.detail_blocks || []).map(function (block) {
      const readingHtml = function (text) {
        return App.Linkify.textToHtml(text || "", { emphasizeNumbers: true });
      };
      return {
        ...block,
        // Explicitly shadow the page title so untitled blocks stay untitled in Mustache.
        title: block.title || "",
        is_text: !block.type || block.type === "text",
        is_image: block.type === "image",
        is_list: block.type === "list",
        list_is_grid: block.type === "list" && block.layout === "grid",
        is_table: block.type === "table",
        is_stats: block.type === "stats",
        is_note: block.tone === "note",
        text_paragraphs: (block.content || "").split(/\n+/).filter(Boolean).map(function (text) {
          return { html: readingHtml(text) };
        }),
        list_items: (block.items || []).map(function (text) { return { html: readingHtml(text) }; }),
        table_label: block.title || "数据明细",
        table_headers: (block.columns || []).map(function (label) { return { label: label }; }),
        table_rows: (block.rows || []).map(function (row) {
          return {
            label_html: readingHtml(row[0]),
            cells: row.slice(1).map(function (text) { return { html: readingHtml(text) }; })
          };
        })
      };
    });
    const skins = (App.STATE.skins || []).filter(function (skin) {
      return skin.item_id === entry.id;
    }).map(function (skin) {
      return { id: skin.id, name: skin.name.split(" · ")[0], image: skin.display_image, ...App.Data.ownerView(skin) };
    });
    const related = relatedList((entry.related || []).filter(function (id) {
      return !skins.some(function (skin) { return skin.id === id; });
    }));
    const parent = entry.type === "skins" && App.STATE.entries[entry.item_id];
    return {
      id: entry.id,
      title: title,
      title_note: entry.title_note || "",
      availability: entry.availability || "",
      subtitle: entry.summary || entry.subtitle || entry.date || "",
      eyebrow: entry.category === "structure" ? "建筑" : entry.category === "food" ? "食物" : {
        items: "物品",
        mechanics: "机制",
        terrains: "小房子",
        seasons: "节气",
        skins: "外观",
        settings: "模组设置",
        changelog: entry.version || "更新"
      }[entry.type],
      image: entry.display_image || entry.illustration || "",
      ...App.Data.ownerView(entry),
      display_poster: entry.display_poster || "",
      icon: entry.image || "",
      preview_caption: entry.preview_caption || "",
      scene_hotspots: (entry.scene_hotspots || []).map(function (hotspot) {
        return {
          ...hotspot,
          position: 'left:' + Number(hotspot.x) + '%;top:' + Number(hotspot.y) + '%;width:' + Number(hotspot.width) + '%;height:' + Number(hotspot.height) + '%'
        };
      }),
      has_scene_hotspots: !!(entry.scene_hotspots || []).length,
      scene_hint: entry.scene_hint || "",
      paragraphs: paragraphs.map(function (p) { return { html: p }; }),
      detail_blocks: detailBlocks,
      has_detail_blocks: detailBlocks.length > 0,
      recipe_html: entry.recipe ? App.Recipe.toBlockHtml(entry.recipe) : "",
      tech_html: App.Recipe.techToHtml(entry.tech, entry.recipe),
      skins: skins,
      has_skins: skins.length > 0,
      skin_count: skins.length,
      parent_item: parent ? { id: parent.id, name: parent.name } : null,
      related: related,
      has_related: related.length > 0
    };
  }

  function trapFocus(root, event) {
    if (event.key !== "Tab") {
      return;
    }
    const focusables = root.querySelectorAll('button,[href],input,[tabindex]:not([tabindex="-1"])');
    if (!focusables.length) {
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function renderModal(entryId) {
    const entry = App.STATE.entries[entryId];
    const root = document.getElementById("modal-root");
    if (!root || !entry) {
      return;
    }
    // 更新日志区不弹窗，卡片已展示全部内容
    if (entry.type === "changelog") {
      return;
    }
    const searchPanel = document.querySelector("[data-search-panel]");
    const filterDrawer = document.querySelector("[data-filter-drawer]");
    if (searchPanel) {
      searchPanel.hidden = true;
    }
    if (filterDrawer) {
      filterDrawer.hidden = true;
    }
    root.hidden = false;
    root.innerHTML = window.Mustache.render(document.getElementById("tpl-modal-generic").innerHTML, genericView(entry));
    document.body.classList.add("modal-open");
    lastFocused = document.activeElement;
    const closeButton = root.querySelector(".modal-close");
    if (closeButton) {
      closeButton.focus();
    }
    App.Carousel.init(root);
    live("已打开详情");
  }

  function closeModal(options) {
    const root = document.getElementById("modal-root");
    if (!root || root.hidden) {
      return;
    }
    root.hidden = true;
    root.innerHTML = "";
    document.body.classList.remove("modal-open");
    live("已关闭详情");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    if (options && options.updateHash) {
      if (openedFromHash) {
        App.route.sync({ detailId: "" }, { replace: true });
      } else if (window.location.hash.indexOf("/") > -1) {
        history.back();
      }
    }
    openedFromHash = false;
  }

  App.Modal = {
    open: function (entryId, options) {
      const entry = App.STATE.entries[entryId];
      if (!entry) {
        return;
      }

      if (entry.type === "characters") {
        closeModal({ updateHash: false });
        if (!(options && options.skipHash)) {
          App.route.sync({ section: "characters", detailId: entryId });
        }
        if (App.CharPopup) {
          App.CharPopup.openForCharacter(entryId, "profile");
        }
        return;
      }

      openedFromHash = !!(options && options.fromHash);
      renderModal(entryId);
      if (!(options && options.skipHash)) {
        const section = sectionForEntry(entry);
        const item = entry.type === "skins" ? App.STATE.entries[entry.item_id] : entry;
        const filters = item.category === "structure" ? { cats: ["structure"] } : section === "terrains" ? { cats: [] } : {};
        App.route.sync({ section: section, detailId: entryId, ...filters });
        if (item.category === "structure") App.Render.renderItems();
      }
    },

    close: closeModal,

    syncFromRoute: function () {
      if (App.ui.detailId && App.STATE.entries[App.ui.detailId]) {
        const entry = App.STATE.entries[App.ui.detailId];
        if (entry.type === "characters") {
          closeModal({ updateHash: false });
          if (App.ui.section !== 'characters') {
            App.route.sync({ section: 'characters' }, { replace: true });
          }
          if (App.CharPopup) {
            App.CharPopup.openForCharacter(entry.id, "profile");
          }
          openedFromHash = true;
          return;
        }
        renderModal(App.ui.detailId);
        openedFromHash = true;
      } else {
        closeModal({ updateHash: false });
      }
    },

    bind: function () {
      document.addEventListener("click", function (event) {
        const openButton = event.target.closest("[data-open-entry]");
        const closeButton = event.target.closest("[data-modal-close]");
        // The full-screen shell covers the backdrop; its empty area also closes the dialog.
        const outsideCard = event.target.matches(".modal-shell");
        const copyButton = event.target.closest("[data-copy-link]");

        if (openButton) {
          App.Modal.open(openButton.dataset.openEntry);
        }

        if (closeButton || outsideCard) {
          closeModal({ updateHash: true });
        }

        if (copyButton) {
          const id = copyButton.dataset.copyLink;
          const url = window.location.origin + window.location.pathname + "#" + sectionForEntry(App.STATE.entries[id]) + "/" + id;
          navigator.clipboard.writeText(url).then(function () {
            live("已复制条目链接");
          });
        }
      });

      document.addEventListener("keydown", function (event) {
        const root = document.getElementById("modal-root");
        if (!root || root.hidden) {
          return;
        }
        if (event.key === "Escape") {
          closeModal({ updateHash: true });
        } else {
          trapFocus(root, event);
        }
      });
    }
  };
})();

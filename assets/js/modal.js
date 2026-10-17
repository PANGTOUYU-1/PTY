(function () {
  const App = window.App;
  let lastFocused = null;
  let openedFromHash = false;

  function sectionForEntry(entry) {
    return {
      character: "intro",
      item: "items",
      mechanic: "mechanics",
      terrain: "terrains",
      changelog: "changelog"
    }[entry.type] || "intro";
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
    if (entry.summary) {
      paragraphs.push(App.Linkify.textToHtml(entry.summary));
    }
    (entry.changes || []).forEach(function (line) {
      paragraphs.push(App.Linkify.textToHtml(line));
    });
    const detailBlocks = (entry.detail_blocks || []).map(function (block) {
      return {
        ...block,
        is_text: block.type === "text",
        is_image: block.type === "image",
        content_html: App.Linkify.textToHtml(block.content || "")
      };
    });
    const related = relatedList(entry.related);
    return {
      id: entry.id,
      title: title,
      subtitle: entry.summary || entry.subtitle || entry.date || "",
      eyebrow: {
        item: "物品",
        mechanic: "机制",
        terrain: "地形",
        changelog: entry.version || "更新"
      }[entry.type],
      image: entry.image || entry.illustration || "",
      paragraphs: paragraphs.map(function (p) { return { html: p }; }),
      detail_blocks: detailBlocks,
      has_detail_blocks: detailBlocks.length > 0,
      recipe_html: entry.recipe ? App.Recipe.toHtml(entry.recipe) : "",
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

      if (entry.type === "character") {
        closeModal({ updateHash: false });
        App.route.sync({ section: "intro", detailId: entryId });
        const hero = document.getElementById("intro");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (App.CharPopup) {
          App.CharPopup.openForCharacter(entryId, "profile");
        }
        return;
      }

      openedFromHash = !!(options && options.fromHash);
      renderModal(entryId);
      if (!(options && options.skipHash)) {
        App.route.sync({ section: sectionForEntry(entry), detailId: entryId });
      }
    },

    close: closeModal,

    syncFromRoute: function () {
      if (App.ui.detailId && App.STATE.entries[App.ui.detailId]) {
        const entry = App.STATE.entries[App.ui.detailId];
        if (entry.type === "character") {
          closeModal({ updateHash: false });
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
        const copyButton = event.target.closest("[data-copy-link]");

        if (openButton) {
          App.Modal.open(openButton.dataset.openEntry);
        }

        if (closeButton) {
          closeModal({ updateHash: true });
        }

        if (copyButton) {
          const url = window.location.origin + window.location.pathname + "#" + App.ui.section + "/" + copyButton.dataset.copyLink;
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

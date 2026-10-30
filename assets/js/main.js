(function () {
  const App = window.App;

  // 从 App.sections 动态渲染顶部导航和移动导航
  function renderNav() {
    var sections = App.sections || [];
    var links = sections.map(function (s) {
      return '<a href="#' + s.id + '">' + s.title + '</a>';
    }).join("");
    [".topbar__nav", ".mobile-nav"].forEach(function (sel) {
      var nav = document.querySelector(sel);
      if (nav) { nav.insertAdjacentHTML("beforeend", links); }
    });
  }

  function scrollToSection(id) {
    const target = document.getElementById(id === "序" ? "intro" : id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function syncProgress() {
    const strip = document.querySelector("[data-terrain-strip]");
    const bar = document.querySelector("[data-terrain-progress]");
    if (!strip || !bar) {
      return;
    }
    const max = strip.scrollWidth - strip.clientWidth;
    const ratio = max > 0 ? strip.scrollLeft / max : 0;
    bar.style.width = ratio * 100 + "%";
  }

  function updateActiveNav() {
    const sections = ["intro"].concat((App.sections || []).map(function (s) { return s.id; }));
    let current = App.ui.section || "intro";
    sections.forEach(function (id) {
      const node = document.getElementById(id);
      if (!node) {
        return;
      }
      const rect = node.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.32 && rect.bottom >= window.innerHeight * 0.2) {
        current = id;
      }
    });
    document.querySelectorAll(".topbar__nav a, .mobile-nav a").forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
    });
  }

  function bindGlobalUI() {
    document.addEventListener("click", function (event) {
      const anchor = event.target.closest('a[href^="#"]');
      const searchOpen = event.target.closest("[data-search-open]");
      const searchClose = event.target.closest("[data-search-close]");
      const navToggle = event.target.closest("[data-nav-toggle]");
      const drawerOpen = event.target.closest("[data-filter-drawer-open]");
      const drawerClose = event.target.closest("[data-filter-drawer-close]");
      const jumpEntry = event.target.closest("[data-jump-entry]");

      if (anchor && !anchor.closest("[data-search-panel]")) {
        const rawId = anchor.getAttribute("href").slice(1);
        const id = rawId === "序" ? "intro" : rawId;
        if (id) {
          event.preventDefault();
          App.Modal.close({ updateHash: false });
          if (App.CharPopup) { App.CharPopup.closeAll(); }
          App.route.sync({ section: id, detailId: "" }, { replace: true });
          scrollToSection(id);
          const mobileNav = document.getElementById("mobile-nav");
          if (mobileNav) {
            mobileNav.hidden = true;
            mobileNav.dataset.open = "false";
          }
          updateActiveNav();
        }
      }

      if (searchOpen) {
        document.querySelector("[data-search-panel]").hidden = false;
        const input = document.querySelector("[data-global-search-input]");
        if (input) {
          input.value = App.ui.q;
          input.focus();
        }
      }

      if (searchClose) {
        document.querySelector("[data-search-panel]").hidden = true;
      }

      if (drawerOpen) {
        document.querySelector("[data-filter-drawer]").hidden = false;
      }

      if (drawerClose) {
        document.querySelector("[data-filter-drawer]").hidden = true;
      }

      if (navToggle) {
        const nav = document.getElementById("mobile-nav");
        const next = nav.dataset.open !== "true";
        nav.dataset.open = next ? "true" : "false";
        nav.hidden = !next;
        navToggle.setAttribute("aria-expanded", next ? "true" : "false");
      }

      if (jumpEntry) {
        const id = jumpEntry.dataset.jumpEntry;
        const node = document.querySelector('[data-entry-target="' + id + '"]');
        App.Modal.close({ updateHash: false });
        if (node) {
          App.route.sync({ section: node.closest("[data-section]") ? node.closest("[data-section]").id : App.ui.section, detailId: "" }, { replace: true });
          node.scrollIntoView({ behavior: "smooth", block: "center" });
          node.classList.add("is-highlighted");
          window.setTimeout(function () {
            node.classList.remove("is-highlighted");
          }, 1500);
          updateActiveNav();
        } else {
          App.Modal.open(id);
        }
      }
    });

    window.addEventListener("hashchange", function () {
      App.ui = {
        ...App.ui,
        ...App.route.read()
      };
      App.Render.renderItems();
      App.Render.renderSearchResults();
      App.Modal.syncFromRoute();
      App.bindInteractive();
      updateActiveNav();
    });

    window.addEventListener(
      "scroll",
      function () {
        syncProgress();
        updateActiveNav();
      },
      { passive: true }
    );
  }

  App.bindInteractive = function () {
    App.Carousel.init(document);
    App.Render.renderSearchResults();
    App.Motion.init();
    if (App.CharPopup) {
      App.CharPopup.init();
    }
    if (App.Poster) {
      App.Poster.init();
    }
    syncProgress();
    updateActiveNav();
  };

  document.addEventListener("DOMContentLoaded", function () {
    const isEditor = new URLSearchParams(window.location.search).get("editor") === "1";
    document.documentElement.dataset.editor = isEditor ? "1" : "0";
    App.Filter.bind();
    App.Carousel.bind();
    App.Modal.bind();
    bindGlobalUI();
    App.Data.load().then(function () {
      renderNav();
      App.Render.renderAll();
      App.Modal.syncFromRoute();
      App.Editor.init();
      App.bindInteractive();
      if (App.ui.section && App.ui.section !== "intro") {
        scrollToSection(App.ui.section);
      }
    });
  });
})();

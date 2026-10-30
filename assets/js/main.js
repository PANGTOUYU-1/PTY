(function () {
  const App = window.App;

  // 从 App.sections 动态渲染顶部导航和移动导航
  function renderNav() {
    var sections = App.sections || [];
    var links = sections.map(function (s) {
      return '<a href="#' + s.id + '">' + s.title + '</a>'
        + (s.id === "items" ? '<a href="#items?cat=food">食物</a>' : '');
    }).join("");
    [".topbar__nav", ".mobile-nav"].forEach(function (sel) {
      var nav = document.querySelector(sel);
      if (nav) { nav.insertAdjacentHTML("beforeend", links); }
    });
    const inkRing = '<svg class="nav-ink-ring" viewBox="0 0 100 64" preserveAspectRatio="none" aria-hidden="true" focusable="false">'
      + '<path class="nav-ink-ring__stroke" pathLength="100" d="M72 8 C49 1 17 8 8 25 C-2 44 20 58 47 59 C73 61 95 49 94 31 C94 17 80 7 59 6 C44 5 30 8 22 13"/>'
      + '<path class="nav-ink-ring__dry" pathLength="100" d="M77 10 C54 2 19 7 7 26 C-1 43 21 61 49 61 C74 62 98 47 96 30 C94 19 86 12 77 9"/>'
      + '</svg>';
    document.querySelectorAll(".topbar__nav a, .mobile-nav a").forEach(function (link) {
      link.insertAdjacentHTML("beforeend", inkRing);
    });
  }

  App.Navigation = {
    ready: false,
    hasSection: function (id) {
      return id === "intro" || id === "characters" || (App.sections || []).some(function (section) { return section.id === id; });
    },
    sync: function (options) {
      if (!App.Navigation.ready) return;
      const current = App.Navigation.hasSection(App.ui.section) ? App.ui.section : "intro";
      if (App.ui.section !== current) {
        App.route.sync({ section: current, detailId: "" }, { replace: true });
        return;
      }
      const changed = document.documentElement.dataset.activeSection !== current;
      if (changed && App.CharPopup) App.CharPopup.closeAll();
      document.documentElement.dataset.activeSection = current;
      document.querySelectorAll("[data-section]").forEach(function (section) {
        section.hidden = section.id !== (current === "characters" ? "intro" : current);
      });
      const hero = document.getElementById("intro");
      if (hero) {
        if (current === "characters") hero.dataset.characterPage = "";
        else delete hero.dataset.characterPage;
      }
      if ((current === "intro" || current === "characters") && App.CharPopup && App.CharPopup.refreshLayout) {
        App.CharPopup.refreshLayout();
      }
      if (options && options.resetScroll) window.scrollTo({ top: 0, behavior: "instant" });
      updateActiveNav();
      syncBackToTop();
    }
  };

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
    const current = App.ui.section || "intro";
    document.querySelectorAll(".topbar__nav a, .mobile-nav a").forEach(function (link) {
      const route = App.route.read(link.getAttribute("href"));
      const foodSelected = App.ui.cats.length === 1 && App.ui.cats[0] === "food";
      const active = route.section === current
        && (current !== "items" || (route.cats.indexOf("food") > -1) === foodSelected);
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function syncBackToTop() {
    const button = document.querySelector("[data-back-to-top]");
    if (button) button.hidden = window.scrollY < 480;
  }

  function bindGlobalUI() {
    document.addEventListener("click", function (event) {
      const anchor = event.target.closest('a[href^="#"]');
      const searchOpen = event.target.closest("[data-search-open]");
      const searchClose = event.target.closest("[data-search-close]");
      const navToggle = event.target.closest("[data-nav-toggle]");
      const drawerOpen = event.target.closest("[data-filter-drawer-open]");
      const drawerClose = event.target.closest("[data-filter-drawer-close]");
      const backToTop = event.target.closest("[data-back-to-top]");
      const buildingRoom = event.target.closest("[data-building-room]");

      if (anchor && anchor.classList.contains("skip-link")) {
        event.preventDefault();
        document.getElementById("main-content").focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      if (buildingRoom) {
        App.Render.selectBuilding(buildingRoom.dataset.buildingRoom, { focus: true });
        return;
      }

      if (backToTop) {
        if (App.CharPopup) App.CharPopup.closeAll();
        if (document.activeElement === backToTop) {
          document.querySelector(".site-mark").focus({ preventScroll: true });
        }
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }

      if (anchor && !anchor.closest("[data-search-panel]")) {
        const route = App.route.read(anchor.getAttribute("href"));
        const id = route.section;
        if (App.Navigation.hasSection(id)) {
          event.preventDefault();
          App.Modal.close({ updateHash: false });
          if (App.CharPopup) { App.CharPopup.closeAll(); }
          const mobileNav = document.getElementById("mobile-nav");
          if (mobileNav) {
            mobileNav.hidden = true;
            mobileNav.dataset.open = "false";
            document.querySelector("[data-nav-toggle]").setAttribute("aria-expanded", "false");
          }
          const itemNav = id === "items" && anchor.closest(".topbar__nav, .mobile-nav");
          App.route.sync({
            section: id, detailId: "",
            ...(itemNav ? { cats: route.cats, q: "" } : {})
          });
          if (itemNav) {
            App.Render.renderItems();
            App.bindInteractive();
          }
          window.scrollTo({ top: 0, behavior: "instant" });
          const target = document.querySelector(id === "intro" ? "#intro h1" : id === "characters" ? "#characters" : "#" + id + " h2");
          if (target && anchor.closest(".topbar__nav, .mobile-nav")) {
            if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
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

    });

    window.addEventListener("hashchange", function () {
      const previousSection = App.ui.section;
      App.ui = {
        ...App.ui,
        ...App.route.read()
      };
      App.Navigation.sync({ resetScroll: previousSection !== App.ui.section });
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
        syncBackToTop();
      },
      { passive: true }
    );
  }

  App.bindInteractive = function () {
    App.Carousel.init(document);
    App.Render.renderSearchResults();
    App.Motion.init();
    App.Navigation.sync();
    if (App.CharPopup) {
      App.CharPopup.init();
    }
    syncProgress();
    updateActiveNav();
    syncBackToTop();
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
      App.Navigation.ready = true;
      App.Navigation.sync({ resetScroll: true });
      App.Modal.syncFromRoute();
      App.Editor.init();
      App.bindInteractive();
    });
  });
})();

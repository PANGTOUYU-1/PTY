(function () {
  const App = window.App;

  function addIssue(issue) {
    const exists = App.issues.some(function (item) {
      return item.type === issue.type && item.location === issue.location && item.summary === issue.summary;
    });
    if (!exists) {
      App.issues.push(issue);
    }
  }

  function analyzeData() {
    const state = App.STATE;
    const textPattern = /(未命名|TODO|占位|待补)/;
    state.characters.forEach(function (character) {
      if (textPattern.test(character.name) || textPattern.test(character.epithet)) {
        addIssue({ type: "占位", location: character.name, summary: "角色名称或称号仍是占位", target: character.id });
      }
    });
    Object.values(state.entries).forEach(function (entry) {
      const title = entry.name || entry.title || entry.version;
      const text = JSON.stringify(entry);
      if (textPattern.test(text)) {
        addIssue({ type: "占位", location: title, summary: "存在占位文案", target: entry.id });
      }
      (entry.related || []).forEach(function (relatedId) {
        if (!state.relations[relatedId]) {
          addIssue({ type: "死链", location: title, summary: "related 指向不存在的条目", target: entry.id });
        }
      });
    });
  }

  App.Editor = {
    reportImageIssue: function (img) {
      const entryRoot = img.closest("[data-entry-target]");
      const entryId = entryRoot ? entryRoot.dataset.entryTarget : "";
      const location = entryId && App.STATE.entries[entryId] ? App.STATE.entries[entryId].name || App.STATE.entries[entryId].title || entryId : img.alt || "图片";
      addIssue({ type: "缺图", location: location, summary: "图片加载失败，已替换占位图", target: entryId || location });
      App.Editor.render();
    },

    render: function () {
      if (!App.Editor.enabled()) {
        return;
      }
      const panel = document.getElementById("editor-panel");
      if (!panel) {
        return;
      }
      panel.hidden = false;
      panel.innerHTML = window.Mustache.render(document.getElementById("tpl-editor-panel").innerHTML, {
        count: App.issues.length,
        issues: App.issues
      });
    },

    enabled: function () {
      return new URLSearchParams(window.location.search).get("editor") === "1";
    },

    init: function () {
      if (!App.Editor.enabled()) {
        return;
      }
      analyzeData();
      App.Editor.render();
      document.addEventListener("click", function (event) {
        const issueButton = event.target.closest("[data-editor-target]");
        if (!issueButton) {
          return;
        }
        const target = issueButton.dataset.editorTarget;
        if (App.STATE.entries[target]) {
          App.Modal.open(target);
          return;
        }
        const node = document.querySelector('[data-entry-target="' + target + '"]');
        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "center" });
          node.classList.add("is-highlighted");
          window.setTimeout(function () {
            node.classList.remove("is-highlighted");
          }, 1500);
        }
      });
    }
  };
})();

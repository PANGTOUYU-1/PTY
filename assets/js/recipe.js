(function () {
  const App = window.App;
  const vanilla = {};
  Object.values(window.VANILLA_ICONS || {}).forEach(function (icon) {
    [icon.name].concat(icon.aliases || []).forEach(function (name) { vanilla[name] = icon; });
  });
  const names = Object.keys(vanilla).sort(function (a, b) { return b.length - a.length; });
  const materialPattern = names.length ? new RegExp("(^|[\\s：；，+]|或)(" + names.map(function (name) {
    return name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("|") + ")(×(?:至少)?\\d+(?:\\.\\d+)?)", "g") : null;

  function materialHtml(text) {
    const escape = App.Linkify.escapeHtml;
    if (!materialPattern) return escape(text);
    let html = "";
    let cursor = 0;
    for (const match of text.matchAll(materialPattern)) {
      const name = match[2];
      const icon = vanilla[name];
      html += escape(text.slice(cursor, match.index) + match[1]);
      html += '<span class="recipe-token recipe-token--vanilla" title="原版材料：' + escape(icon.name) + '"><img src="' + escape(icon.image) + '" alt="" loading="lazy" onerror="window.App.onImageError(this)"><span>' + escape(name + match[3]) + '</span></span>';
      cursor = match.index + match[0].length;
    }
    return html + escape(text.slice(cursor));
  }

  function methodHtml(text) {
    // Acquisition labels are exact known phrases, not substring-based auto-links.
    return text.split('金企鹅兑换').map(function (part) {
      return App.Linkify.textToHtml(part);
    }).join(App.Linkify.textToHtml('[[金企鹅兑换]]'));
  }

  function recipeOptions(recipe) {
    return String(recipe || "").split(/[；;]\s*或\s*/).flatMap(function (option) {
      const colon = option.indexOf("：");
      if (colon < 0) return [option];
      // A second acquisition method can follow without an explicit “或”.
      const methods = option.slice(colon + 1).split(/[；;]\s*(?=[^；;：]+：)/);
      methods[0] = option.slice(0, colon + 1) + methods[0];
      return methods;
    });
  }

  function recipeBlockHtml(recipe) {
    if (!recipe) return "";
    const escape = App.Linkify.escapeHtml;
    const options = recipeOptions(recipe);
    let introduction = "";
    const rows = options.map(function (option, index) {
      const colon = option.indexOf("：");
      let note = colon >= 0 ? option.slice(0, colon) : "";
      const ingredients = colon >= 0 ? option.slice(colon + 1) : option;
      if (index === 0 && options.length > 1 && note.includes("任选一组")) {
        introduction = note;
        note = "";
      }
      const content = ingredients.split(/\s*(?:\+|；|;)\s*/).filter(Boolean);
      const hasMaterials = /×|≥|≤|\[[^\]]+\]/.test(ingredients);
      const materials = hasMaterials
        ? '<ul class="recipe-ingredients" aria-label="材料与条件">' + content.map(function (text) {
          return '<li class="recipe-ingredient">' + App.Recipe.toHtml(text.trim()) + '</li>';
        }).join("") + '</ul>'
        : '<p class="recipe-prose">' + App.Recipe.toHtml(ingredients) + '</p>';
      return '<li class="recipe-option">'
        + (options.length > 1 ? '<span class="recipe-option__label">方案 ' + (index + 1) + '</span>' : '')
        + '<div class="recipe-option__body">'
        + (note ? '<p class="recipe-option__note">' + methodHtml(note) + '</p>' : '')
        + materials + '</div></li>';
    });
    return (introduction ? '<p class="recipe-introduction">' + escape(introduction) + '</p>' : '')
      + '<ol class="recipe-options' + (options.length > 1 ? ' recipe-options--multiple' : '') + '">' + rows.join("") + '</ol>';
  }

  App.Recipe = {
    toBlockHtml: recipeBlockHtml,
    techToHtml: function (tech, recipe) {
      const requirements = function (text) { return text.split(/[；;\/]/).map(function (part) { return part.trim(); }).filter(Boolean); };
      const shown = recipeOptions(recipe).flatMap(function (option) {
        const colon = option.indexOf("：");
        return colon < 0 ? [] : requirements(option.slice(0, colon));
      });
      return methodHtml(requirements(tech || "").filter(function (part) {
        return !shown.includes(part);
      }).join("；"));
    },
    toHtml: function (recipe) {
      if (!recipe) {
        return "";
      }
      const escape = App.Linkify.escapeHtml;
      let html = "";
      let cursor = 0;
      for (const match of String(recipe).matchAll(/\[([^\[\]]+)\](×(?:至少)?\d+(?:\.\d+)?)?/g)) {
        const id = match[1];
        const entry = App.STATE.entries[id];
        const src = entry && entry.image ? entry.image : App.config.placeholderImage;
        const name = entry ? entry.name || entry.title || entry.version || id : id;
        const quantity = match[2] || "";
        html += materialHtml(String(recipe).slice(cursor, match.index));
        html += entry
          ? '<button class="recipe-token inline-link" type="button" data-open-entry="' + escape(id) + '"><img src="' + escape(src) + '" alt="" loading="lazy" onerror="window.App.onImageError(this)"><span>' + escape(name + quantity) + "</span></button>"
          : escape(name + quantity);
        cursor = match.index + match[0].length;
      }
      return html + materialHtml(String(recipe).slice(cursor));
    }
  };
})();

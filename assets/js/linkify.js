(function () {
  const App = window.App;

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function numberHtml(text, emphasizeNumbers) {
    if (!emphasizeNumbers) return escapeHtml(text);
    let html = "";
    let cursor = 0;
    for (const match of text.matchAll(/[+−-]?\d+(?:\.\d+)?(?:[%％℃])?/g)) {
      html += escapeHtml(text.slice(cursor, match.index));
      html += '<strong class="detail-value">' + escapeHtml(match[0]) + '</strong>';
      cursor = match.index + match[0].length;
    }
    return html + escapeHtml(text.slice(cursor));
  }

  let indexedState;
  let itemIcons;
  let itemPattern;

  function prepareItemIcons() {
    if (indexedState === App.STATE) return;
    indexedState = App.STATE;
    itemIcons = Object.create(null);
    Object.values(window.VANILLA_ICONS || {}).forEach(function (icon) {
      [icon.name].concat(icon.aliases || []).forEach(function (name) {
        // Single characters such as 草、肉、冰 also occur inside unrelated words.
        if (name.length > 1) itemIcons[name] = icon.image;
      });
    });
    Object.values(App.STATE.entries).forEach(function (entry) {
      if (entry.type !== "items" || !entry.image) return;
      [entry.name].concat(entry.aliases || []).forEach(function (name) {
        if (name && name.length > 1) itemIcons[name] = entry.image;
      });
    });
    const names = Object.keys(itemIcons).sort(function (a, b) { return b.length - a.length; });
    itemPattern = names.length ? new RegExp(names.map(function (name) {
      return name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|"), "g") : null;
  }

  function iconHtml(src) {
    return '<img class="inline-item__icon" src="' + escapeHtml(src) + '" alt="" loading="lazy" onerror="window.App.onImageError(this)">';
  }

  function textHtml(text, emphasizeNumbers) {
    if (!itemPattern) return numberHtml(text, emphasizeNumbers);
    let html = "";
    let cursor = 0;
    for (const match of text.matchAll(itemPattern)) {
      html += numberHtml(text.slice(cursor, match.index), emphasizeNumbers);
      html += '<span class="inline-item">' + iconHtml(itemIcons[match[0]]) + '<span>' + escapeHtml(match[0]) + '</span></span>';
      cursor = match.index + match[0].length;
    }
    return html + numberHtml(text.slice(cursor), emphasizeNumbers);
  }

  App.Linkify = {
    escapeHtml: escapeHtml,
    textToHtml: function (text, options) {
      if (!text) {
        return "";
      }
      text = String(text);
      prepareItemIcons();
      let html = "";
      let cursor = 0;
      for (const match of text.matchAll(/\[\[([^\[\]]+)\]\]/g)) {
        const name = match[1];
        const id = App.STATE.nameToId[name];
        const entry = App.STATE.entries[id];
        const icon = entry && (entry.type === "items" || id === "mech_spirits") ? entry.image : "";
        html += textHtml(text.slice(cursor, match.index), options && options.emphasizeNumbers);
        html += entry
          ? '<button class="inline-link' + (icon ? ' inline-item' : '') + '" type="button" data-open-entry="' + escapeHtml(id) + '">' + (icon ? iconHtml(icon) + '<span>' + escapeHtml(name) + '</span>' : escapeHtml(name)) + "</button>"
          : escapeHtml(name);
        cursor = match.index + match[0].length;
      }
      return html + textHtml(text.slice(cursor), options && options.emphasizeNumbers);
    }
  };
})();

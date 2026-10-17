(function () {
  const App = window.App;

  App.Recipe = {
    toHtml: function (recipe) {
      if (!recipe) {
        return "";
      }
      return recipe.replace(/\[([^\]]+)\]/g, function (_, id) {
        const entry = App.STATE.entries[id];
        const src = entry && entry.image ? entry.image : App.config.placeholderImage;
        const alt = entry ? entry.name : id;
        return '<span class="recipe-token"><img src="' + src + '" alt="' + alt + '" loading="lazy" onerror="window.App.onImageError(this)"><span>' + alt + "</span></span>";
      });
    }
  };
})();

(function () {
  const App = window.App;

  App.Linkify = {
    textToHtml: function (text) {
      if (!text) {
        return "";
      }
      return text.replace(/\[\[([^\]]+)\]\]/g, function (_, name) {
        const id = App.STATE.nameToId[name];
        if (!id) {
          return name;
        }
        return '<button class="inline-link" type="button" data-jump-entry="' + id + '">' + name + "</button>";
      });
    }
  };
})();

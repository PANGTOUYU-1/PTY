(function () {
  const App = window.App;

  App.Motion = {
    init: function () {
      if (App.Motion.started) {
        document.querySelectorAll(".reveal, .brush-line").forEach(function (node) {
          if (!node.dataset.motionBound) {
            node.dataset.motionBound = "true";
            App.Motion.observer.observe(node);
          }
        });
        return;
      }
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
            }
          });
        },
        {
          rootMargin: "0px 0px -15% 0px",
          threshold: 0.1
        }
      );

      App.Motion.started = true;
      App.Motion.observer = observer;
      document.querySelectorAll(".reveal, .brush-line").forEach(function (node) {
        node.dataset.motionBound = "true";
        observer.observe(node);
      });
    }
  };
})();

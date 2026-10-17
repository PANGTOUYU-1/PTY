(function () {
  const App = window.App;

  function setIndex(container, index) {
    const track = container.querySelector(".modal-carousel__track");
    const dots = container.querySelectorAll("[data-carousel-dot]");
    const slides = container.querySelectorAll(".modal-carousel__slide");
    if (!track || !slides.length) {
      return;
    }
    const next = Math.max(0, Math.min(index, slides.length - 1));
    container.dataset.index = String(next);
    track.style.transform = "translateX(" + next * -100 + "%)";
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === next);
    });
  }

  App.Carousel = {
    init: function (scope) {
      (scope || document).querySelectorAll(".modal-carousel").forEach(function (container) {
        if (container.dataset.ready === "true") {
          return;
        }
        container.dataset.ready = "true";
        setIndex(container, 0);
      });
    },

    bind: function () {
      document.addEventListener("click", function (event) {
        const prev = event.target.closest("[data-carousel-prev]");
        const next = event.target.closest("[data-carousel-next]");
        const dot = event.target.closest("[data-carousel-dot]");
        const container = event.target.closest(".modal-carousel");
        if (!container) {
          return;
        }
        const current = Number(container.dataset.index || 0);
        if (prev) {
          setIndex(container, current - 1);
        }
        if (next) {
          setIndex(container, current + 1);
        }
        if (dot) {
          setIndex(container, Number(dot.dataset.carouselDot));
        }
      });

      document.addEventListener("keydown", function (event) {
        const container = document.querySelector(".modal-layer .modal-carousel");
        if (!container) {
          return;
        }
        const current = Number(container.dataset.index || 0);
        if (event.key === "ArrowLeft") {
          setIndex(container, current - 1);
        }
        if (event.key === "ArrowRight") {
          setIndex(container, current + 1);
        }
      });
    }
  };
})();

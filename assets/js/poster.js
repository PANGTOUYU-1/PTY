(function () {
  const App = (window.App = window.App || {});
  const DISPLAY_MS = 5000;

  function loadPosters() {
    return Promise.resolve(
      (App.STATE && App.STATE.posters) ||
      (window.SITE_DATA && window.SITE_DATA.posters) ||
      []
    );
  }

  function renderSlides(band, posters) {
    band.replaceChildren();
    posters.forEach(function (poster, index) {
      const slide = document.createElement("figure");
      slide.className = "poster-band__slide";
      slide.dataset.index = String(index);
      if (index === 0) {
        slide.classList.add("is-active");
      }

      const img = document.createElement("img");
      img.className = "poster-band__img";
      img.src = poster.src;
      img.alt = poster.alt || poster.caption || "海报 " + (index + 1);
      img.draggable = false;
      img.loading = index === 0 ? "eager" : "lazy";
      img.onerror = function () {
        if (App.onImageError) {
          App.onImageError(img);
        }
      };

      slide.append(img);
      band.append(slide);
    });
  }

  function startCarousel(band, total) {
    if (total <= 1) {
      return;
    }

    let currentIndex = 0;
    window.setInterval(function () {
      const slides = band.querySelectorAll(".poster-band__slide");
      if (!slides.length) {
        return;
      }
      slides[currentIndex].classList.remove("is-active");
      currentIndex = (currentIndex + 1) % total;
      slides[currentIndex].classList.add("is-active");
    }, DISPLAY_MS);
  }

  App.Poster = {
    ready: false,
    init: function () {
      if (App.Poster.ready) {
        return;
      }
      App.Poster.ready = true;

      const band = document.querySelector(".poster-band");
      if (!band) {
        return;
      }

      loadPosters().then(function (posters) {
        if (!posters.length) {
          const empty = document.createElement("p");
          empty.className = "poster-band__empty";
          empty.textContent = "海报正在筹备中";
          band.replaceChildren(empty);
          return;
        }
        renderSlides(band, posters);
        startCarousel(band, posters.length);
      });
    }
  };
})();

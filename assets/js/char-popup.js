(function () {
  const App = window.App;
  const PANEL_TITLES = {
    setting: "设定",
    exclusive: "专属"
  };

  function getCharacter(charId) {
    return (App.STATE.characters || []).find(function (character) {
      return character.id === charId;
    });
  }

  function listMarkup(items, emptyText) {
    if (!items.length) {
      return "<p>" + emptyText + "</p>";
    }
    return (
      "<ul>" +
      items
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function getPanelContent(charId, panelKey) {
    const character = getCharacter(charId);
    if (!character) {
      return "<p>资料未补</p>";
    }

    if (panelKey === "setting") {
      const setting = Array.isArray(character.setting)
        ? character.setting
        : [];
      return (setting.length ? setting : ["未着墨"])
        .map(function (line) {
          return "<p>" + line + "</p>";
        })
        .join("");
    }

    if (panelKey === "exclusive") {
      const introArr = Array.isArray(character.exclusive_intro) ? character.exclusive_intro : [];
      const intro = introArr.length
        ? introArr.map(function (line) { return '<p class="popup-quote">"' + line + '"</p>'; }).join("")
        : "";
      const items = (App.STATE.items || []).filter(function (item) {
        return item.owner === charId;
      });
      if (!items.length) {
        return intro + "<p>暂无专属</p>";
      }
      return (
        intro +
        "<ul>" +
        items
          .map(function (item) {
            return '<li><strong>' + item.name + '</strong><br><span class="popup-meta">' + (item.summary || "") + "</span></li>";
          })
          .join("") +
        "</ul>"
      );
    }

    return "<p>资料未补</p>";
  }

  function popupElements() {
    const duo = document.querySelector(".duo");
    const popup = document.querySelector(".duo-popup");
    return { duo: duo, popup: popup };
  }

  function drawLine(field) {
    const elements = popupElements();
    const popup = elements.popup;
    if (!popup || !field || window.innerWidth <= 900) {
      return;
    }

    const svg = popup.querySelector(".duo-popup__line");
    const path = svg && svg.querySelector(".duo-popup__line-seg");
    if (!svg || !path) {
      return;
    }

    const svgRect = svg.getBoundingClientRect();
    const fieldRect = field.getBoundingClientRect();
    const startX = fieldRect.left + fieldRect.width / 2 - svgRect.left;
    const startY = fieldRect.top + fieldRect.height / 2 - svgRect.top;
    const endX = svgRect.width / 2;
    const endY = svgRect.height / 2;
    const ctrlX = (startX + endX) / 2;
    const d = "M " + startX + " " + startY + " C " + ctrlX + " " + startY + ", " + ctrlX + " " + endY + ", " + endX + " " + endY;

    path.setAttribute("d", d);
    const length = path.getTotalLength();
    path.style.transition = "none";
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.getBoundingClientRect();
    requestAnimationFrame(function () {
      path.style.transition = "stroke-dashoffset 480ms var(--ease)";
      path.style.strokeDashoffset = "0";
    });
  }

  function closePopup() {
    const elements = popupElements();
    if (!elements.duo || !elements.popup) {
      return;
    }
    delete elements.duo.dataset.focus;
    elements.popup.setAttribute("aria-hidden", "true");
    elements.duo.querySelectorAll(".duo-field").forEach(function (field) {
      field.classList.remove("is-active");
    });
  }

  function openPopup(charId, panelKey, field) {
    const elements = popupElements();
    if (!elements.duo || !elements.popup) {
      return;
    }

    elements.duo.dataset.focus = charId;
    elements.duo.querySelectorAll(".duo-field").forEach(function (item) {
      item.classList.toggle("is-active", item === field);
    });

    elements.popup.querySelector(".duo-popup__title").textContent = PANEL_TITLES[panelKey] || "设定";
    elements.popup.querySelector(".duo-popup__body").innerHTML = getPanelContent(charId, panelKey);
    elements.popup.setAttribute("aria-hidden", "false");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        drawLine(field);
      });
    });
  }

  App.CharPopup = {
    ready: false,

    openForCharacter: function (charId, panelKey) {
      const field = document.querySelector('.duo-field[data-char="' + charId + '"][data-panel="' + (panelKey || "setting") + '"]') ||
        document.querySelector('.duo-field[data-char="' + charId + '"]');
      if (field) {
        openPopup(charId, field.dataset.panel || "setting", field);
      }
    },

    closeAll: closePopup,

    init: function () {
      if (App.CharPopup.ready) {
        return;
      }
      App.CharPopup.ready = true;

      document.addEventListener("click", function (event) {
        const field = event.target.closest(".duo-field");
        if (field) {
          if (field.classList.contains("is-active")) {
            closePopup();
          } else {
            openPopup(field.dataset.char, field.dataset.panel, field);
          }
          return;
        }

        const closeButton = event.target.closest(".duo-popup__close");
        if (closeButton) {
          closePopup();
          return;
        }

        const elements = popupElements();
        if (
          elements.popup &&
          elements.popup.getAttribute("aria-hidden") === "false" &&
          !event.target.closest(".duo-popup") &&
          !event.target.closest(".duo")
        ) {
          closePopup();
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closePopup();
        }
      });

      window.addEventListener("resize", function () {
        const elements = popupElements();
        if (!elements.popup || elements.popup.getAttribute("aria-hidden") !== "false") {
          return;
        }
        const activeField = document.querySelector(".duo-field.is-active");
        if (activeField) {
          drawLine(activeField);
        }
      });
    }
  };
})();

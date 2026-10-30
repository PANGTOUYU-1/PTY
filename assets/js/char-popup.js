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
      return '<p class="popup-stats">' + character.epithet + ' · ' + character.stats_line + '</p>' + (setting.length ? setting : ["未着墨"])
        .map(function (line) {
          return "<p>" + App.Linkify.textToHtml(line) + "</p>";
        })
        .join("");
    }

    if (panelKey === "exclusive") {
      const introArr = Array.isArray(character.exclusive_intro) ? character.exclusive_intro : [];
      const intro = introArr.length
        ? introArr.map(function (line) { return '<p class="popup-quote">"' + App.Linkify.textToHtml(line) + '"</p>'; }).join("")
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
            return '<li><strong>' + item.name + '</strong><br><span class="popup-meta">' + App.Linkify.textToHtml(item.summary || "") + "</span></li>";
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

  let gearCharacter = null;
  let gearCloseTimer = null;
  let gearFrame = null;
  let activeGearItem = null;

  function setGearItem(item) {
    if (activeGearItem === item) return;
    activeGearItem = item;
    queueGearLines();
  }

  function closeGear() {
    clearTimeout(gearCloseTimer);
    if (!gearCharacter) return;
    activeGearItem = null;
    gearCharacter.querySelector(".duo-gear-lines").replaceChildren();
    gearCharacter.classList.remove("is-showing-gear");
    gearCharacter.querySelector(".duo__portrait-trigger").setAttribute("aria-expanded", "false");
    const panel = gearCharacter.querySelector(".duo-gear");
    panel.setAttribute("aria-hidden", "true");
    panel.inert = true;
    const duo = gearCharacter.closest(".duo");
    duo.querySelector(".duo__name--left").removeAttribute("aria-hidden");
    delete duo.dataset.gearFocus;
    duo.querySelectorAll(".duo__char").forEach(function (character) {
      character.inert = false;
      character.removeAttribute("aria-hidden");
    });
    gearCharacter = null;
  }

  function drawGearLines() {
    if (!gearCharacter) return;
    const character = gearCharacter;
    const svg = character.querySelector(".duo-gear-lines");
    svg.replaceChildren();
    if (!activeGearItem || !character.contains(activeGearItem)) return;
    const base = svg.getBoundingClientRect();
    const portrait = character.querySelector(".duo__portrait").getBoundingClientRect();
    const wide = window.innerWidth > 900;
    const x = wide ? portrait.left + 28 - base.left : portrait.left + portrait.width / 2 - base.left;
    const y = (wide ? portrait.top + portrait.height * .42 : portrait.bottom + 4) - base.top;
    [activeGearItem].forEach(function (item) {
      const icon = item.querySelector("img").getBoundingClientRect();
      const endX = (wide ? icon.right + 8 : icon.left + icon.width / 2) - base.left;
      const endY = (wide ? icon.top + icon.height / 2 : icon.top - 8) - base.top;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      if (wide) {
        const bend = (endX - x) * .5;
        path.setAttribute("d", "M " + x + " " + y + " C " + (x + bend) + " " + y + ", " + (endX - bend * .5) + " " + endY + ", " + endX + " " + endY);
      } else {
        const midY = (y + endY) / 2;
        path.setAttribute("d", "M " + x + " " + y + " C " + x + " " + midY + ", " + endX + " " + midY + ", " + endX + " " + endY);
      }
      svg.append(path);
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", endX);
      dot.setAttribute("cy", endY);
      dot.setAttribute("r", "2");
      svg.append(dot);
    });
    const origin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    origin.setAttribute("cx", x);
    origin.setAttribute("cy", y);
    origin.setAttribute("r", "3");
    svg.append(origin);
  }

  function queueGearLines() {
    cancelAnimationFrame(gearFrame);
    gearFrame = requestAnimationFrame(drawGearLines);
  }

  function openGear(character) {
    clearTimeout(gearCloseTimer);
    if (gearCharacter === character) return;
    closeGear();
    closePopup();
    gearCharacter = character;
    character.classList.add("is-showing-gear");
    const duo = character.closest(".duo");
    duo.dataset.gearFocus = character.dataset.char;
    const isPangtouyu = character.dataset.char === "pangtouyu";
    if (isPangtouyu) duo.querySelector(".duo__name--left").setAttribute("aria-hidden", "true");
    duo.querySelectorAll(".duo__char").forEach(function (other) {
      if (other === character || isPangtouyu) return;
      other.inert = true;
      other.setAttribute("aria-hidden", "true");
    });
    character.querySelector(".duo__portrait-trigger").setAttribute("aria-expanded", "true");
    const panel = character.querySelector(".duo-gear");
    const positions = character.classList.contains("duo__char--left")
      ? [[22, 52], [78, 118], [29, 222], [73, 302]]
      : [[76, 48], [23, 124], [69, 220], [25, 300]];
    panel.querySelectorAll(".duo-gear__item").forEach(function (item, index) {
      const position = positions[index % positions.length];
      item.style.setProperty("--gear-x", (position[0] + Math.random() * 4 - 2) + "%");
      item.style.setProperty("--gear-y", (position[1] + Math.random() * 16 - 8) + "px");
    });
    panel.inert = false;
    panel.setAttribute("aria-hidden", "false");
    queueGearLines();
  }

  function scheduleGearClose() {
    clearTimeout(gearCloseTimer);
    gearCloseTimer = setTimeout(closeGear, 420);
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
    closeGear();
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

    closeAll: function () { closeGear(); closePopup(); },

    init: function () {
      if (App.CharPopup.ready) {
        return;
      }
      App.CharPopup.ready = true;

      document.addEventListener("pointerover", function (event) {
        if (event.pointerType === "touch") return;
        const trigger = event.target.closest(".duo__portrait-trigger");
        if (trigger) openGear(trigger.closest(".duo__char"));
        const item = event.target.closest(".duo-gear__item");
        if (gearCharacter && item && gearCharacter.contains(item)) setGearItem(item);
        if (gearCharacter && gearCharacter.contains(event.target)) clearTimeout(gearCloseTimer);
      });
      document.addEventListener("pointerout", function (event) {
        if (activeGearItem && activeGearItem.contains(event.target) && !activeGearItem.contains(event.relatedTarget)) setGearItem(null);
        if (gearCharacter && gearCharacter.contains(event.target) && !gearCharacter.contains(event.relatedTarget)) scheduleGearClose();
      });
      document.addEventListener("focusin", function (event) {
        const trigger = event.target.closest(".duo__portrait-trigger");
        if (trigger && trigger.matches(":focus-visible")) openGear(trigger.closest(".duo__char"));
        const item = event.target.closest(".duo-gear__item");
        if (item && item.matches(":focus-visible") && gearCharacter && gearCharacter.contains(item)) setGearItem(item);
        if (gearCharacter && gearCharacter.contains(event.target)) clearTimeout(gearCloseTimer);
      });
      document.addEventListener("focusout", function (event) {
        if (activeGearItem && activeGearItem.contains(event.target) && !activeGearItem.contains(event.relatedTarget)) setGearItem(null);
        if (gearCharacter && !gearCharacter.contains(event.relatedTarget)) scheduleGearClose();
      });

      document.addEventListener("click", function (event) {
        const entryLink = event.target.closest("[data-open-entry]");
        const entry = entryLink && App.STATE.entries[entryLink.dataset.openEntry];
        // Modal navigation already opens the character panel. The source link may
        // have been detached when the modal closed; it is not an outside click.
        if (entry && entry.type === "characters") return;
        const trigger = event.target.closest(".duo__portrait-trigger");
        if (trigger) {
          const character = trigger.closest(".duo__char");
          if (gearCharacter === character && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) closeGear();
          else openGear(character);
          return;
        }
        if (gearCharacter && !gearCharacter.contains(event.target)) closeGear();
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
          if (gearCharacter && gearCharacter.querySelector(".duo-gear").contains(document.activeElement)) {
            gearCharacter.querySelector(".duo__portrait-trigger").focus();
          }
          closeGear();
          closePopup();
        }
      });

      window.addEventListener("resize", function () {
        queueGearLines();
        const elements = popupElements();
        if (!elements.popup || elements.popup.getAttribute("aria-hidden") !== "false") {
          return;
        }
        const activeField = document.querySelector(".duo-field.is-active");
        if (activeField) {
          drawLine(activeField);
        }
      });
      // Portrait dimensions can settle after the first interaction on a slow connection.
      document.querySelectorAll(".duo__portrait img").forEach(function (img) {
        img.addEventListener("load", queueGearLines);
      });
    }
  };
})();

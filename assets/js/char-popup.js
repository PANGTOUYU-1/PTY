(function () {
  const App = window.App;
  const PANEL_TITLES = {
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
  let hoverArmed = true;

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
    gearCharacter.querySelector(".duo-model").setAttribute("aria-hidden", "true");
    const skins = gearCharacter.querySelector('.duo-skins');
    skins.setAttribute('aria-hidden', 'true');
    skins.inert = true;
    const duo = gearCharacter.closest(".duo");
    gearCharacter.querySelector(".duo__name").removeAttribute("aria-hidden");
    delete duo.dataset.gearFocus;
    gearCharacter = null;
    layoutRestingPortraits();
  }

  function gearArea(character) {
    return character.closest('.duo-stage') || character.closest('.duo');
  }

  function layoutRestingPortraits() {
    const duo = document.querySelector('.duo');
    const stage = duo && duo.closest('.duo-stage');
    if (!stage || window.innerWidth <= 900 || !stage.offsetWidth) return;
    // Offset geometry stays at the compact size throughout the scale animation.
    const visuals = Array.from(duo.querySelectorAll('.duo__portrait, .duo__name'));
    const left = Math.min(...visuals.map(function (node) { return node.offsetLeft; }));
    const right = Math.max(...visuals.map(function (node) { return node.offsetLeft + node.offsetWidth; }));
    const top = Math.min(...visuals.map(function (node) { return node.offsetTop; }));
    const bottom = Math.max(...visuals.map(function (node) { return node.offsetTop + node.offsetHeight; }));
    if (right <= left || bottom <= top) return;
    const footer = document.querySelector('.site-footer');
    const hero = document.getElementById('intro');
    const available = window.innerHeight - (stage.getBoundingClientRect().top + window.scrollY)
      - (footer ? footer.offsetHeight : 0) - parseFloat(getComputedStyle(hero).paddingBottom) - 12;
    const height = Math.max(bottom - top + 20, available);
    const scale = Math.max(1, Math.min((stage.clientWidth - 32) / (right - left), (height - 20) / (bottom - top)));
    stage.style.setProperty('--duo-stage-height', height + 'px');
    duo.style.setProperty('--duo-rest-scale', scale);
    duo.style.setProperty('--duo-rest-x', ((duo.clientWidth / 2 - (left + right) / 2) * scale) + 'px');
    duo.style.setProperty('--duo-rest-y', ((height - (bottom - top) * scale) / 2 - top * scale) + 'px');
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
    const itemsOnLeft = character.classList.contains("duo__char--left");
    const x = (wide ? (itemsOnLeft ? portrait.left + 28 : portrait.right - 28) : portrait.left + portrait.width / 2) - base.left;
    const y = (wide ? portrait.top + portrait.height * .42 : portrait.bottom + 4) - base.top;
    [activeGearItem].forEach(function (item) {
      const icon = item.querySelector("img").getBoundingClientRect();
      const endX = (wide ? (itemsOnLeft ? icon.right + 8 : icon.left - 8) : icon.left + icon.width / 2) - base.left;
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

  function layoutGear(character) {
    const panel = character.querySelector(".duo-gear");
    const width = panel.offsetWidth;
    if (!width) return 0;
    const columns = width >= 320 ? 3 : 2;
    const mirror = character.classList.contains("duo__char--right");
    const items = panel.querySelectorAll(".duo-gear__item");
    const scattered = [[0, 72], [.5, 40], [1, 100], [.02, 206], [.5, 190],
      [1, 300], [0, 350], [.5, 360], [1, 442], [.04, 486], [.5, 506]];
    let bottom = 0;
    panel.style.setProperty("--gear-columns", columns);
    items.forEach(function (item, index) {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const point = columns === 3 && scattered[index];
      const position = point ? point[0] : column / (columns - 1);
      // Extra entries continue below the freeform cluster instead of wrapping
      // onto an occupied position. Narrow panels use a staggered pair of lanes.
      const y = point ? point[1] : columns === 3
        ? 680 + Math.floor((index - scattered.length) / columns) * 128 + [24, 0, 16][column]
        : 50 + row * 128 + [24, 0][column];
      // Resolve against the panel's current width, including during layout changes.
      item.style.setProperty("--gear-position", mirror ? 1 - position : position);
      item.style.setProperty("--gear-y", (y + Math.random() * 8 - 4) + "px");
      bottom = Math.max(bottom, y + item.offsetHeight + 8);
    });
    panel.style.setProperty("--gear-shared-top", (bottom + 12) + "px");
    const shared = panel.querySelector(".duo-gear__shared");
    const height = bottom + (shared ? shared.getBoundingClientRect().height + 24 : 12);
    panel.style.height = height + "px";
    return height;
  }

  function layoutCharacterModels() {
    const duo = document.querySelector(".duo");
    if (!duo) return 0;
    const aspect = Math.max(1, ...(App.STATE.characters || []).flatMap(function (character) {
      return (character.appearances || []).map(function (skin) { return skin.width / skin.height; });
    }));
    if (window.innerWidth <= 900) {
      duo.style.setProperty("--model-height", (180 / aspect) + "px");
      return 0;
    }
    const characters = Array.from(duo.querySelectorAll(".duo__char"));
    const width = duo.clientWidth;
    const gearWidth = Math.min(390, Math.max(320, width * .30));
    const modelWidth = Math.min(180, Math.max(96, width * .13));
    duo.style.setProperty('--focus-gear-width', gearWidth + 'px');
    duo.style.setProperty('--model-height', Math.min(240, modelWidth / aspect) + 'px');
    let bottom = 0;
    characters.forEach(function (character) {
      const portrait = character.querySelector('.duo__portrait');
      const other = characters.find(function (entry) { return entry !== character; });
      const others = [other.querySelector('.duo__portrait'), other.querySelector('.duo__name')];
      // Measure untransformed geometry so resizing and swapping characters are stable.
      const left = Math.min(...others.map(function (node) { return node.offsetLeft; }));
      const right = Math.max(...others.map(function (node) { return node.offsetLeft + node.offsetWidth; }));
      const top = Math.min(...others.map(function (node) { return node.offsetTop; }));
      const baseBottom = Math.max(...others.map(function (node) { return node.offsetTop + node.offsetHeight; }));
      const otherWidth = Math.min(right - left, Math.max(132, width - gearWidth - portrait.offsetWidth - modelWidth - 64));
      const portraitWidth = Math.min(portrait.offsetWidth, width - gearWidth - otherWidth - modelWidth - 64);
      const gap = (width - gearWidth - portraitWidth - modelWidth - otherWidth) / 4;
      const mirror = character.dataset.char === 'gaojiaoniao';
      const position = function (x, size) { return mirror ? width - x - size : x; };
      const portraitLeft = position(gearWidth + gap, portraitWidth);
      const portraitScale = portraitWidth / portrait.offsetWidth;
      const portraitTop = 64;
      const portraitHeight = portrait.offsetHeight * portraitScale;
      const centerY = portraitTop + portraitHeight / 2;
      const otherScale = otherWidth / (right - left);
      const otherLeft = position(width - gap - otherWidth, otherWidth);
      const otherTop = centerY - (baseBottom - top) * otherScale / 2;
      if (gearCharacter === character) {
        const name = character.querySelector('.duo__name');
        ['--focus-x', '--focus-y', '--focus-scale'].forEach(function (property) {
          name.style.removeProperty(property);
        });
        const move = function (node, x, y, scale) {
          node.style.setProperty('--focus-x', (x - node.offsetLeft) + 'px');
          node.style.setProperty('--focus-y', (y - node.offsetTop) + 'px');
          node.style.setProperty('--focus-scale', scale);
        };
        move(portrait, portraitLeft, portraitTop, portraitScale);
        others.forEach(function (node) {
          move(node, otherLeft + (node.offsetLeft - left) * otherScale,
            otherTop + (node.offsetTop - top) * otherScale, otherScale);
        });
      }
      const model = character.querySelector('.duo-model');
      model.style.setProperty('--model-left', (position(gearWidth + portraitWidth + gap * 2, modelWidth) + modelWidth / 2) + 'px');
      model.style.setProperty('--model-width', modelWidth + 'px');
      model.style.setProperty('--model-top', centerY + 'px');
      const skins = character.querySelector('.duo-skins');
      const skinsWidth = Math.min(420, width - gearWidth - gap * 2);
      const skinsLeft = position(gearWidth + gap + (width - gearWidth - gap * 2 - skinsWidth) / 2, skinsWidth);
      const skinsTop = Math.max(portraitTop + portraitHeight, centerY + model.offsetHeight / 2) + 24;
      skins.style.setProperty('--skins-left', skinsLeft + 'px');
      skins.style.setProperty('--skins-top', skinsTop + 'px');
      skins.style.setProperty('--skins-width', skinsWidth + 'px');
      bottom = Math.max(bottom, skinsTop + skins.offsetHeight + 24);
    });
    return bottom;
  }

  function layoutAllGear() {
    let height = Math.max(480, layoutCharacterModels());
    document.querySelectorAll(".duo__char").forEach(function (character) {
      height = Math.max(height, layoutGear(character) + 32);
    });
    const duo = document.querySelector(".duo");
    if (duo) duo.style.setProperty("--gear-height", height + "px");
    layoutRestingPortraits();
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
    character.querySelector(".duo__name").setAttribute("aria-hidden", "true");
    character.querySelector(".duo__portrait-trigger").setAttribute("aria-expanded", "true");
    const panel = character.querySelector(".duo-gear");
    layoutAllGear();
    character.querySelector(".duo-model").setAttribute("aria-hidden", "false");
    const skins = character.querySelector('.duo-skins');
    skins.setAttribute('aria-hidden', 'false');
    skins.inert = false;
    panel.inert = false;
    panel.setAttribute("aria-hidden", "false");
    queueGearLines();
  }

  function scheduleGearClose() {
    clearTimeout(gearCloseTimer);
    gearCloseTimer = setTimeout(closeGear, 420);
  }

  function selectSkin(character, id) {
    const data = getCharacter(character.dataset.char);
    const appearance = (data.appearances || []).find(function (skin) { return skin.id === id; });
    if (!appearance) return;
    if (character.classList.contains('duo__char')) openGear(character);
    App.ui.characterSkins = App.ui.characterSkins || {};
    App.ui.characterSkins[data.id] = id;
    // Both views share the selected appearance while keeping separate layouts.
    document.querySelectorAll('.duo__char[data-char="' + data.id + '"], .character-profile[data-char="' + data.id + '"]').forEach(function (view) {
      const model = view.querySelector('.duo-model, .character-model');
      const image = model.querySelector('img');
      delete image.dataset.fallback;
      model.querySelector('source').srcset = appearance.poster;
      image.src = appearance.image;
      image.width = appearance.width;
      image.height = appearance.height;
      image.alt = data.name + ' · ' + appearance.name + '的游戏人物模型';
      model.querySelector('[data-model-name]').textContent = appearance.name;
      view.querySelectorAll('[data-character-skin], [data-profile-skin]').forEach(function (button) {
        button.setAttribute('aria-pressed', String((button.dataset.characterSkin || button.dataset.profileSkin) === id));
      });
    });
    const live = document.getElementById('aria-live');
    if (live) live.textContent = data.name + '已切换为' + appearance.name;
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

    elements.popup.querySelector(".duo-popup__title").textContent = PANEL_TITLES[panelKey] || "专属";
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
      if (App.ui.section === 'characters') {
        const title = document.getElementById('profile-' + charId);
        if (title) {
          title.focus({ preventScroll: true });
          const profile = title.closest('.character-profile');
          if (profile.getBoundingClientRect().top < 64 || title.getBoundingClientRect().bottom > window.innerHeight) {
            profile.scrollIntoView({ block: 'start', behavior: 'instant' });
          }
        }
        return;
      }
      const field = document.querySelector('.duo-field[data-char="' + charId + '"][data-panel="' + (panelKey || "exclusive") + '"]') ||
        document.querySelector('.duo-field[data-char="' + charId + '"]');
      if (field) {
        openPopup(charId, field.dataset.panel || "exclusive", field);
      }
    },

    closeAll: function () { closeGear(); closePopup(); },

    refreshLayout: function () { layoutAllGear(); queueGearLines(); },

    init: function () {
      if (App.CharPopup.ready) {
        return;
      }
      App.CharPopup.ready = true;

      document.addEventListener("pointerover", function (event) {
        if (event.pointerType === "touch") return;
        const trigger = event.target.closest(".duo__portrait-trigger");
        if (trigger && hoverArmed) openGear(trigger.closest(".duo__char"));
        const item = event.target.closest(".duo-gear__item, .duo-gear__craft");
        if (gearCharacter && item && gearCharacter.contains(item)) setGearItem(item);
        if (gearCharacter && gearArea(gearCharacter).contains(event.target)) clearTimeout(gearCloseTimer);
      });
      document.addEventListener('pointermove', function (event) {
        if (!hoverArmed && event.pointerType !== 'touch' && (event.movementX || event.movementY)) {
          hoverArmed = true;
          const trigger = event.target.closest('.duo__portrait-trigger');
          if (trigger) openGear(trigger.closest('.duo__char'));
        }
      });
      document.addEventListener("pointerout", function (event) {
        if (activeGearItem && activeGearItem.contains(event.target) && !activeGearItem.contains(event.relatedTarget)) setGearItem(null);
        // Keep the expansion open while moving across the model or towards
        // the other portrait, including the space created by its slide.
        if (gearCharacter && gearArea(gearCharacter).contains(event.target)
            && !gearArea(gearCharacter).contains(event.relatedTarget)) scheduleGearClose();
      });
      document.addEventListener("focusin", function (event) {
        const trigger = event.target.closest(".duo__portrait-trigger");
        if (trigger && trigger.matches(":focus-visible")) openGear(trigger.closest(".duo__char"));
        const item = event.target.closest(".duo-gear__item, .duo-gear__craft");
        if (item && item.matches(":focus-visible") && gearCharacter && gearCharacter.contains(item)) setGearItem(item);
        if (gearCharacter && gearCharacter.contains(event.target)) clearTimeout(gearCloseTimer);
      });
      document.addEventListener("focusout", function (event) {
        if (activeGearItem && activeGearItem.contains(event.target) && !activeGearItem.contains(event.relatedTarget)) setGearItem(null);
        if (gearCharacter && !gearCharacter.contains(event.relatedTarget)) scheduleGearClose();
      });

      document.addEventListener("click", function (event) {
        const profileSkin = event.target.closest('[data-profile-skin]');
        if (profileSkin) {
          selectSkin(profileSkin.closest('.character-profile'), profileSkin.dataset.profileSkin);
          return;
        }
        const skin = event.target.closest('[data-character-skin]');
        if (skin) {
          selectSkin(skin.closest('.duo__char'), skin.dataset.characterSkin);
          return;
        }
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
          hoverArmed = false;
          if (gearCharacter && gearCharacter.querySelector(".duo-gear").contains(document.activeElement)) {
            gearCharacter.querySelector(".duo__portrait-trigger").focus();
          }
          closeGear();
          closePopup();
        }
      });

      window.addEventListener("resize", function () {
        layoutAllGear();
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
      const duo = document.querySelector('.duo');
      if (duo) duo.addEventListener('transitionend', function (event) {
        if (event.target === duo && event.propertyName === 'transform') queueGearLines();
      });
      // Portrait dimensions can settle after the first interaction on a slow connection.
      document.querySelectorAll(".duo__portrait img, .duo__name img").forEach(function (img) {
        img.addEventListener("load", function () { layoutAllGear(); queueGearLines(); });
      });
      if (document.fonts) document.fonts.ready.then(layoutAllGear);
      layoutAllGear();
    }
  };
})();

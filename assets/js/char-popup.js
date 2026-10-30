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

  function closeGear(keepLayout) {
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
    duo.querySelectorAll('.duo__name').forEach(function (name) { name.removeAttribute('aria-hidden'); });
    if (!keepLayout) delete duo.dataset.gearFocus;
    gearCharacter = null;
    if (!keepLayout) layoutAllGear();
  }

  function gearArea(character) {
    return character.closest('.duo-stage') || character.closest('.duo');
  }

  function layoutRestingPortraits() {
    const duo = document.querySelector('.duo');
    const stage = duo && duo.closest('.duo-stage');
    if (!stage || !stage.offsetWidth || gearCharacter) return;
    // Offset geometry stays at the compact size throughout the scale animation.
    const visuals = Array.from(duo.querySelectorAll('.duo__portrait, .duo__name'));
    const bounds = [];
    if (window.innerWidth > 900) {
      const characters = Array.from(duo.querySelectorAll('.duo__char'));
      const portraits = characters.map(function (character) { return character.querySelector('.duo__portrait'); });
      const portraitWidth = portraits[0].offsetWidth;
      const middle = duo.clientWidth / 2;
      characters.forEach(function (character, index) {
        const portrait = portraits[index];
        const name = character.querySelector('.duo__name');
        const x = middle + (index ? -.08 : -.92) * portraitWidth;
        const y = index ? portrait.offsetHeight * .10 : 0;
        const position = function (node, left, top, degrees) {
          node.style.setProperty('--rest-x', (left - node.offsetLeft) + 'px');
          node.style.setProperty('--rest-y', (top - node.offsetTop) + 'px');
          node.style.setProperty('--rest-angle', degrees + 'deg');
          const angle = degrees * Math.PI / 180;
          [[0, 0], [node.offsetWidth, 0], [0, node.offsetHeight], [node.offsetWidth, node.offsetHeight]].forEach(function (point) {
            bounds.push({ x: left + point[0] * Math.cos(angle) - point[1] * Math.sin(angle),
              y: top + point[0] * Math.sin(angle) + point[1] * Math.cos(angle) });
          });
        };
        position(portrait, x, y, index ? 6 : -4);
        position(name, index ? x + portraitWidth + 12 : x - name.offsetWidth - 12,
          y + (portrait.offsetHeight - name.offsetHeight) / 2, 0);
      });
    } else {
      visuals.forEach(function (node) {
        bounds.push({ x: node.offsetLeft, y: node.offsetTop },
          { x: node.offsetLeft + node.offsetWidth, y: node.offsetTop + node.offsetHeight });
      });
    }
    const left = Math.min(...bounds.map(function (point) { return point.x; }));
    const right = Math.max(...bounds.map(function (point) { return point.x; }));
    const top = Math.min(...bounds.map(function (point) { return point.y; }));
    const bottom = Math.max(...bounds.map(function (point) { return point.y; }));
    if (right <= left || bottom <= top) return;
    const height = stage.clientHeight;
    const scale = Math.min((stage.clientWidth - 24) / (right - left), Math.max(1, height - 16) / (bottom - top));
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
    const coordinateScale = base.width ? svg.clientWidth / base.width : 1;
    const portrait = character.querySelector(".duo__portrait").getBoundingClientRect();
    const wide = window.innerWidth > 900;
    const x = ((wide ? portrait.left + 28 : portrait.left + portrait.width / 2) - base.left) * coordinateScale;
    const y = ((wide ? portrait.top + portrait.height * .42 : portrait.bottom + 4) - base.top) * coordinateScale;
    [activeGearItem].forEach(function (item) {
      const icon = item.querySelector("img").getBoundingClientRect();
      const endX = ((wide ? icon.right + 8 : icon.left + icon.width / 2) - base.left) * coordinateScale;
      const endY = ((wide ? icon.top + icon.height / 2 : icon.top - 8) - base.top) * coordinateScale;
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
    if (window.innerWidth > 900 && character === gearCharacter) {
      const items = Array.from(panel.querySelectorAll('.duo-gear__item'));
      const shared = panel.querySelector('.duo-gear__shared');
      const height = Math.max(300, gearArea(character).clientHeight - 24);
      panel.style.setProperty('--collection-height', height + 'px');
      const columns = items.length > 12 && panel.clientWidth >= 480 ? 5 : 4;
      const rows = Math.ceil(items.length / columns);
      const counts = Array(rows).fill(Math.floor(items.length / rows));
      for (let i = 0; i < items.length % rows; i++) {
        counts[i % 2 ? rows - 1 - Math.floor(i / 2) : Math.floor(i / 2)]++;
      }
      const rowHeight = (height - 40 - (shared ? shared.offsetHeight + 16 : 0)) / rows;
      let index = 0;
      counts.forEach(function (count, row) {
        // Alternate the inset and rhythm, without letting neighboring hit areas overlap.
        const inset = panel.clientWidth * (row % 2 ? .07 : .025);
        const cell = (panel.clientWidth - inset * 2) / count;
        for (let col = 0; col < count; col++, index++) {
          const item = items[index];
          const drift = [.02, .12, -.02, .08, .03][(col + row * 2) % 5];
          const icon = Math.min(index < 3 ? 88 : 72, cell * .66, Math.max(18, rowHeight * .80 - 30));
          item.style.setProperty('--collection-x', (inset + cell * (col + .5) + (col % 2 ? -1 : 1) * cell * .035) + 'px');
          item.style.setProperty('--collection-y', (32 + rowHeight * (row + drift)) + 'px');
          item.style.setProperty('--collection-item-width', Math.min(112, cell * .88) + 'px');
          item.style.setProperty('--collection-icon-size', icon + 'px');
        }
      });
    }
    return panel.offsetWidth ? panel.offsetHeight : 0;
  }

  function layoutCharacterModels() {
    const duo = document.querySelector(".duo");
    if (!duo) return 0;
    const aspect = Math.max(1, ...(App.STATE.characters || []).flatMap(function (character) {
      return (character.appearances || []).map(function (skin) { return skin.width / skin.height; });
    }));
    if (window.innerWidth <= 900) {
      const landscape = window.innerWidth >= 600 && window.innerHeight <= 500;
      duo.style.setProperty("--model-height", ((landscape ? 44 : duo.clientWidth * .30) / aspect) + "px");
      if (!gearCharacter) return 0;
      const width = duo.clientWidth;
      const characters = Array.from(duo.querySelectorAll('.duo__char'));
      characters.forEach(function (character) {
        const selected = character === gearCharacter;
        const portrait = character.querySelector('.duo__portrait');
        const targetWidth = landscape ? (selected ? 60 : 32) : width * (selected ? .30 : .15);
        portrait.style.setProperty('--focus-x', (landscape && selected ? width * .67 : width - targetWidth) + 'px');
        portrait.style.setProperty('--focus-y', (selected && !landscape ? 92 : 4) + 'px');
        portrait.style.setProperty('--focus-scale', targetWidth / portrait.offsetWidth);
        const name = character.querySelector('.duo__name');
        name.setAttribute('aria-hidden', String(selected));
        name.style.setProperty('--focus-x', (landscape ? width - 54 : width * .66) + 'px');
        name.style.setProperty('--focus-y', '4px');
        name.style.setProperty('--focus-scale', landscape ? '.4' : '.65');
      });
      const portrait = gearCharacter.querySelector('.duo__portrait');
      const model = gearCharacter.querySelector('.duo-model');
      const modelTop = landscape ? 8 : 92 + portrait.offsetHeight * width * .30 / portrait.offsetWidth + 12;
      model.style.top = modelTop + 'px';
      const skins = gearCharacter.querySelector('.duo-skins');
      const skinsTop = landscape ? 110 : Math.max(layoutGear(gearCharacter) + 16, modelTop + model.offsetHeight + 12);
      skins.style.setProperty('--skins-top', skinsTop + 'px');
      return skinsTop + skins.offsetHeight + 8;
    }
    const characters = Array.from(duo.querySelectorAll(".duo__char"));
    const width = duo.clientWidth;
    const stage = duo.closest('.duo-stage');
    const availableHeight = stage.clientHeight;
    if (!gearCharacter) return 0;
    const portrait = gearCharacter.querySelector('.duo__portrait');
    const skins = gearCharacter.querySelector('.duo-skins');
    const portraitWidth = Math.min(300, width * .24,
      portrait.offsetWidth * Math.max(140, availableHeight - skins.offsetHeight - 48) / portrait.offsetHeight);
    const portraitHeight = portrait.offsetHeight * portraitWidth / portrait.offsetWidth;
    const name = gearCharacter.querySelector('.duo__name');
    const nameScale = Math.min(.85, portraitHeight * .62 / name.offsetHeight);
    const nameWidth = name.offsetWidth * nameScale;
    const modelWidth = Math.min(270, width * .20);
    const gap = Math.min(24, width * .018);
    const rearOffset = portraitWidth * .38;
    const stackWidth = portraitWidth * 1.30;
    const gearWidth = width - modelWidth - stackWidth - gap * 3;
    duo.style.setProperty('--focus-gear-width', gearWidth + 'px');
    duo.style.setProperty('--gear-spread', gearWidth / 480);
    duo.style.setProperty('--model-height', Math.min(260, availableHeight * .48, (modelWidth - 12) / aspect) + 'px');
    const portraitLeft = gearWidth + gap + Math.min(64, width * .045);
    const portraitTop = 20;
    const modelLeft = gearWidth + stackWidth + gap * 2;
    const model = gearCharacter.querySelector('.duo-model');
    model.style.removeProperty('top');
    model.style.setProperty('--model-left', (modelLeft + modelWidth / 2) + 'px');
    model.style.setProperty('--model-width', modelWidth + 'px');
    const nameHeight = name.offsetHeight * nameScale;
    const modelTop = Math.max(portraitTop + nameHeight + 20, availableHeight - model.offsetHeight - 16);
    model.style.setProperty('--model-top', (modelTop + model.offsetHeight / 2) + 'px');
    const nameTop = portraitTop + Math.max(0, (modelTop - portraitTop - nameHeight - 20) / 2);
    const move = function (node, x, y, scale, angle) {
      node.style.setProperty('--focus-x', (x - node.offsetLeft) + 'px');
      node.style.setProperty('--focus-y', (y - node.offsetTop) + 'px');
      node.style.setProperty('--focus-scale', scale);
      node.style.setProperty('--focus-angle', (angle || 0) + 'deg');
    };
    characters.forEach(function (character) {
      const selected = character === gearCharacter;
      const image = character.querySelector('.duo__portrait');
      const label = character.querySelector('.duo__name');
      label.setAttribute('aria-hidden', String(!selected));
      const targetWidth = portraitWidth * (selected ? 1 : .92);
      move(image, portraitLeft + (selected ? 0 : rearOffset), portraitTop + (selected ? 0 : 16),
        targetWidth / image.offsetWidth, selected ? 0 : 8);
      if (selected) move(label, modelLeft + (modelWidth - nameWidth) / 2, nameTop, nameScale);
    });
    const rear = characters.find(function (character) { return character !== gearCharacter; }).querySelector('.duo__portrait');
    const rearHeight = rear.offsetHeight * portraitWidth * .92 / rear.offsetWidth;
    const rearBottom = portraitTop + 16 + rearHeight * Math.cos(Math.PI * 8 / 180) + portraitWidth * .92 * Math.sin(Math.PI * 8 / 180);
    const skinsTop = Math.max(portraitTop + portraitHeight, rearBottom) + 20;
    const skinsWidth = stackWidth;
    skins.style.setProperty('--skins-left', (gearWidth + gap) + 'px');
    skins.style.setProperty('--skins-top', skinsTop + 'px');
    skins.style.setProperty('--skins-width', skinsWidth + 'px');
    return Math.max(skinsTop + skins.offsetHeight + 12, modelTop + model.offsetHeight + 12);
  }

  function layoutAllGear() {
    const duo = document.querySelector('.duo');
    if (!duo || !duo.offsetWidth) return;
    let height = layoutCharacterModels();
    document.querySelectorAll(".duo__char").forEach(function (character) {
      const panelHeight = layoutGear(character);
      if (character === gearCharacter) height = Math.max(height, panelHeight + 20);
    });
    duo.style.setProperty("--gear-height", height + "px");
    const stage = duo.closest('.duo-stage');
    const fit = duo.closest('.duo-fit');
    const scale = gearCharacter ? Math.min(1, stage.clientHeight / Math.max(1, height)) : 1;
    fit.style.setProperty('--home-fit', scale);
    fit.style.height = (gearCharacter ? height : stage.clientHeight) + 'px';
    layoutRestingPortraits();
  }

  function openGear(character) {
    clearTimeout(gearCloseTimer);
    if (gearCharacter === character) return;
    closeGear(true);
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
        // The exposed rear portrait switches on click so moving cards cannot
        // repeatedly swap themselves underneath a stationary pointer.
        if (trigger && hoverArmed && (!gearCharacter || window.innerWidth <= 900 || gearCharacter.contains(trigger))) {
          openGear(trigger.closest(".duo__char"));
        }
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

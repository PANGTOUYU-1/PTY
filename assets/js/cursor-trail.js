(function () {
  const finePointer = window.matchMedia('(any-pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const texture = new Image();
  const particles = new Set();
  let layer = null;
  let previous = null;
  let lastEmission = 0;
  let enabled = false;

  function clear() {
    previous = null;
    lastEmission = 0;
    particles.forEach(function (animation) { animation.cancel(); });
    particles.clear();
    if (layer) layer.replaceChildren();
  }

  function emit(x, y, dx, dy) {
    if (particles.size >= 40) return;
    if (!layer) {
      layer = document.createElement('div');
      layer.className = 'cursor-trail';
      layer.setAttribute('aria-hidden', 'true');
      document.body.append(layer);
    }
    const petal = document.createElement('span');
    const size = 12 + Math.random() * 8;
    const angle = Math.random() * 360;
    const frame = Math.floor(Math.random() * 8);
    petal.className = 'cursor-trail__petal';
    // The eight frames are the original bighead_buran_petal.tex particle atlas.
    petal.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + size + 'px;height:' + size
      + 'px;background-position:' + frame * 100 / 7 + '% 0;';
    layer.append(petal);
    const driftX = (Math.random() - .5) * 28 - dx * .10;
    const driftY = 20 + Math.random() * 30 - dy * .08;
    const animation = petal.animate([
      { opacity: 0, transform: 'translate(-50%, -50%) rotate(' + angle + 'deg) scale(.65)' },
      { opacity: .78, offset: .12, transform: 'translate(-50%, -50%) rotate(' + (angle + 12) + 'deg) scale(1)' },
      { opacity: 0, transform: 'translate(calc(-50% + ' + driftX + 'px), calc(-50% + ' + driftY
        + 'px)) rotate(' + (angle + 70) + 'deg) scale(.4, .7)' }
    ], { duration: 750 + Math.random() * 450, easing: 'ease-out', fill: 'forwards' });
    particles.add(animation);
    animation.onfinish = function () {
      particles.delete(animation);
      petal.remove();
    };
  }

  function move(event) {
    if (!enabled || event.pointerType !== 'mouse' || document.hidden || !texture.naturalWidth) return;
    const now = performance.now();
    const current = { x: event.clientX, y: event.clientY };
    if (!previous) { previous = current; return; }
    const dx = current.x - previous.x;
    const dy = current.y - previous.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 8 || now - lastEmission < 30) return;
    // A few evenly spaced samples keep fast sweeps continuous and work bounded.
    const count = Math.min(3, Math.ceil(distance / 28));
    for (let i = 1; i <= count; i++) {
      emit(previous.x + dx * i / count, previous.y + dy * i / count, dx, dy);
    }
    previous = current;
    lastEmission = now;
  }

  function sync() {
    const next = finePointer.matches && !reducedMotion.matches && typeof Element.prototype.animate === 'function';
    if (next === enabled) return;
    enabled = next;
    clear();
    if (enabled) {
      texture.src = 'assets/img/ui/buran-petals.png';
      document.addEventListener('pointermove', move, { passive: true });
    } else {
      document.removeEventListener('pointermove', move);
      if (layer) { layer.remove(); layer = null; }
    }
  }

  finePointer.addEventListener('change', sync);
  reducedMotion.addEventListener('change', sync);
  window.addEventListener('blur', clear);
  document.addEventListener('visibilitychange', clear);
  document.addEventListener('pointerout', function (event) { if (!event.relatedTarget) clear(); });
  sync();
})();

type Ripple = {
  el: HTMLElement;
  /** null = photo cover; { hue } = SVG reveal (null hue = untinted) */
  tint: { hue: number | null } | null;
};

export function initPhotoReveal(el: Element) {
  if (el.hasAttribute('data-initialized')) return;
  el.setAttribute('data-initialized', '');

  const front = el.querySelector('.sidebar__photo--front') as HTMLImageElement;
  const back = el.querySelector('.sidebar__photo--back') as HTMLElement;
  const photoSrc = front.src;
  const hues = [0, 30, 55, 145, 175, 210, 270, 340];
  let reveals = 0;
  let revealed = false;
  let nextZ = 2;
  const ripples: Ripple[] = [];

  function shuffle() {
    for (let i = hues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hues[i], hues[j]] = [hues[j], hues[i]];
    }
  }
  shuffle();

  function settle({ tint }: Ripple) {
    if (!tint) {
      front.style.clipPath = '';
      back.style.visibility = '';
      return;
    }
    front.style.clipPath = 'circle(0% at 50% 50%)';
    back.style.visibility = 'visible';
    if (tint.hue !== null) {
      back.style.setProperty('--hue', String(tint.hue));
      back.setAttribute('data-tinted', '');
    } else {
      back.removeAttribute('data-tinted');
    }
  }

  el.addEventListener('click', (e) => {
    revealed = !revealed;

    const rect = el.getBoundingClientRect();
    const { clientX, clientY } = e as MouseEvent;
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    const at = `${(x * 100).toFixed(1)}% ${(y * 100).toFixed(1)}%`;
    const r = (Math.hypot(Math.max(x, 1 - x), Math.max(y, 1 - y)) * 100).toFixed(1) + '%';

    const ripple = document.createElement('div');
    Object.assign(ripple.style, {
      position: 'absolute',
      inset: '0',
      zIndex: String(nextZ++),
      pointerEvents: 'none',
    });

    let tint: Ripple['tint'] = null;
    if (revealed) {
      const pos = reveals % (hues.length + 1);
      ripple.className = 'sidebar__photo sidebar__photo--back';
      ripple.style.visibility = 'visible';
      const hue = pos > 0 ? hues[pos - 1] : null;
      tint = { hue };
      if (hue !== null) {
        ripple.setAttribute('data-tinted', '');
        ripple.style.setProperty('--hue', String(hue));
      }
      if (pos === hues.length) shuffle();
      reveals++;
    } else {
      ripple.style.background = `url("${photoSrc}") center/cover no-repeat`;
    }

    el.appendChild(ripple);
    const anim = ripple.animate(
      [{ clipPath: `circle(0% at ${at})` }, { clipPath: `circle(${r} at ${at})` }],
      { duration: 900, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' },
    );
    const entry: Ripple = { el: ripple, tint };
    ripples.push(entry);

    anim.onfinish = () => {
      const idx = ripples.indexOf(entry);
      if (idx < 0) return;
      for (let j = 0; j < idx; j++) ripples[j].el.remove();
      ripples.splice(0, idx);
      if (ripples.length === 1) {
        settle(entry);
        entry.el.remove();
        ripples.length = 0;
        nextZ = 2;
      }
    };
  });
}

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();


// ============================================
// Craft catalogue / region filtering
// Works generically: any button with data-filter-<key>="value"
// inside #filter-bar toggles a filter against .craft-card[data-<key>]
// within #craft-grid. "all" clears that filter.
// ============================================
(function () {
  const bar = document.getElementById('filter-bar');
  const grid = document.getElementById('craft-grid');
  const count = document.getElementById('catalogue-count');
  if (!bar || !grid) return;

  const active = {}; // e.g. { region: 'Asia', category: 'Textiles', country: 'India' }
  const params = new URLSearchParams(window.location.search);
  ['region', 'category', 'country'].forEach(key => {
    const val = params.get(key);
    if (val) active[key] = val;
  });

  function applyFilters() {
    const cards = grid.querySelectorAll('.craft-card');
    let visible = 0;
    cards.forEach(card => {
      let show = true;
      Object.keys(active).forEach(key => {
        if (active[key] && active[key] !== 'all' && card.dataset[key] !== active[key]) show = false;
      });
      card.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = visible + ' piece' + (visible === 1 ? '' : 's');
  }

  bar.querySelectorAll('.filter-chip').forEach(btn => {
    const attr = Array.from(btn.attributes).find(a => a.name.startsWith('data-filter-'));
    if (!attr) return;
    const key = attr.name.replace('data-filter-', '');
    const value = attr.value;

    if (active[key] === value || (!active[key] && value === 'all')) {
      btn.classList.add('is-active');
      if (!active[key]) active[key] = 'all';
    }

    btn.addEventListener('click', () => {
      active[key] = value;
      bar.querySelectorAll(`[data-filter-${key}]`).forEach(b => b.classList.toggle('is-active', b === btn));
      applyFilters();
    });
  });

  applyFilters();
})();

// ============================================
// Add to basket (lightweight, local to this browser)
// ============================================
(function () {
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }

  document.querySelectorAll('[data-add-to-basket]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Item';
      try {
        const basket = JSON.parse(localStorage.getItem('acomada_basket') || '[]');
        basket.push({ name, addedAt: Date.now() });
        localStorage.setItem('acomada_basket', JSON.stringify(basket));
      } catch (e) { /* storage unavailable — still show confirmation */ }
      showToast(name + ' added to your basket');
    });
  });
})();

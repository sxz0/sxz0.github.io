/* Small, dependency-free enhancements: publication filters, BibTeX copy, back-to-top. */
(function () {
  'use strict';

  // ---------- Publication filters ----------
  var filters = document.getElementById('pub-filters');
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-pub]'));
  if (filters && items.length) {
    filters.hidden = false;
    var state = { category: '', topic: '', year: '', q: '' };

    // Build year chips from the data
    var years = {};
    items.forEach(function (el) { years[el.dataset.year] = true; });
    var yearRow = document.getElementById('pub-years');
    var all = document.createElement('button');
    all.type = 'button'; all.className = 'pub-chip active'; all.dataset.value = ''; all.textContent = 'All';
    yearRow.appendChild(all);
    Object.keys(years).sort().reverse().forEach(function (y) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'pub-chip'; b.dataset.value = y; b.textContent = y;
      yearRow.appendChild(b);
    });

    var count = document.getElementById('pub-count');
    var apply = function () {
      var shown = 0;
      items.forEach(function (el) {
        var topics = (el.dataset.topics || '').split(',');
        var ok = (!state.category || el.dataset.category === state.category) &&
                 (!state.topic || topics.indexOf(state.topic) !== -1) &&
                 (!state.year || el.dataset.year === state.year) &&
                 (!state.q || el.dataset.search.indexOf(state.q) !== -1);
        el.hidden = !ok;
        if (ok) shown++;
      });
      // hide category headings (h2 + following hr) whose items are all hidden
      Array.prototype.slice.call(document.querySelectorAll('.archive > h2')).forEach(function (h) {
        var any = false, n = h.nextElementSibling;
        while (n && n.tagName !== 'H2') {
          if (n.hasAttribute && n.hasAttribute('data-pub') && !n.hidden) any = true;
          n = n.nextElementSibling;
        }
        h.hidden = !any;
        if (h.nextElementSibling && h.nextElementSibling.tagName === 'HR') h.nextElementSibling.hidden = !any;
      });
      count.textContent = shown + ' of ' + items.length + ' publications';
    };

    filters.addEventListener('click', function (e) {
      var chip = e.target.closest('.pub-chip');
      if (!chip) return;
      var row = chip.parentNode;
      var key = row.dataset.filter;
      Array.prototype.forEach.call(row.querySelectorAll('.pub-chip'), function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      state[key] = chip.dataset.value;
      apply();
    });
    document.getElementById('pub-search').addEventListener('input', function (e) {
      state.q = e.target.value.trim().toLowerCase();
      apply();
    });
    apply();
  }

  // ---------- Cite (BibTeX) buttons ----------
  var esc = function (s) { return (s || '').replace(/[{}]/g, ''); };
  var bibtex = function (el) {
    var cat = el.dataset.category, year = el.dataset.year;
    var title = esc(el.dataset.title), venue = esc(el.dataset.venue);
    var key = 'sanchez' + year + (title.split(/\W+/).filter(function (w) { return w.length > 3; })[0] || 'paper').toLowerCase();
    var type = cat === 'conferences' ? 'inproceedings' : 'article';
    var venueField = cat === 'conferences' ? 'booktitle' : 'journal';
    var url = el.dataset.doi;
    var lines = [
      '@' + type + '{' + key + ',',
      '  author    = {S{\\\'a}nchez S{\\\'a}nchez, Pedro Miguel and others},',
      '  title     = {{' + title + '}},',
      '  ' + venueField + ' = {' + venue + '},',
      '  year      = {' + year + '},'
    ];
    if (url) lines.push('  url       = {' + url + '},');
    lines.push('}');
    return lines.join('\n');
  };
  var copy = function (text, btn) {
    var done = function () {
      var old = btn.textContent; btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (err) { /* ignore */ }
      document.body.removeChild(ta);
    }
  };
  items.forEach(function (el) {
    var holder = el.querySelector('.archive__item') || el;
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'cite-btn'; btn.textContent = 'Cite (BibTeX)';
    btn.addEventListener('click', function () { copy(bibtex(el), btn); });
    holder.appendChild(btn);
  });

  // ---------- Back to top ----------
  var top = document.createElement('button');
  top.type = 'button'; top.id = 'back-to-top'; top.setAttribute('aria-label', 'Back to top');
  top.innerHTML = '&uarr;'; top.hidden = true;
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(top);
  var onScroll = function () { top.hidden = window.scrollY < 600; };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

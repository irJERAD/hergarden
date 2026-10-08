/* Tiny enhancements. The site works without this file; it only adds
   the language toggle and the season filter. */
(function () {
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // ---- Language toggle (English / Reo Tahiti) ----
  // Any element with data-en and data-tah swaps its text.
  var langButtons = document.querySelectorAll('[data-lang]');
  function applyLang(lang) {
    document.querySelectorAll('[data-en][data-tah]').forEach(function (el) {
      el.textContent = el.getAttribute(lang === 'tah' ? 'data-tah' : 'data-en');
    });
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    set('lang', lang);
  }
  applyLang(get('lang') === 'tah' ? 'tah' : 'en');
  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  // ---- Season filter (garden page) ----
  var filterButtons = document.querySelectorAll('[data-filter]');
  var tiles = document.querySelectorAll('[data-season]');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      tiles.forEach(function (t) {
        t.hidden = !(f === 'all' || t.getAttribute('data-season') === f);
      });
    });
  });
})();

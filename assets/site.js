/* NexoIQ site behaviour (published as /assets/site.js).
 * - header background on scroll, mobile menu
 * - scroll reveal (respects prefers-reduced-motion via CSS)
 * - language preference: keeps the original site's behaviour
 *   (?lang= → saved choice → browser language) but now redirects to the
 *   real /nl/ or /ar/ URL instead of swapping text in place.
 */
(function () {
  'use strict';

  var LANGS = ['en', 'nl', 'ar'];
  var KEY = 'nexoiq-lang'; // same storage key as the original site
  var store = {
    get: function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set: function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  };
  var current = document.documentElement.lang || 'en';

  /* Language: remember explicit choices made with the switcher. */
  document.querySelectorAll('.lang-btn[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () { store.set(a.getAttribute('data-lang')); });
  });

  /* Language: on the English home page only, honour ?lang=, a saved choice,
   * or the browser language — as the original single-page site did.
   * Never redirect when arriving from another page of this site. */
  (function () {
    var path = location.pathname.replace(/index\.html$/, '');
    if (current !== 'en' || path !== '/') return;
    var qp = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    var sameSite = document.referrer && document.referrer.indexOf(location.origin) === 0;
    var nav = (navigator.language || '').toLowerCase().slice(0, 2);
    var target = (LANGS.indexOf(qp) !== -1 && qp) ||
      (!sameSite && (store.get() || (LANGS.indexOf(nav) !== -1 ? nav : null)));
    if (qp) store.set(qp);
    if (target && target !== 'en' && LANGS.indexOf(target) !== -1) {
      location.replace('/' + target + '/' + location.hash);
    }
  })();

  /* Header background on scroll */
  var header = document.querySelector('[data-header]');
  var menuOpen = false;
  function paintHeader() { header.classList.toggle('is-solid', window.scrollY > 12 || menuOpen); }
  window.addEventListener('scroll', paintHeader, { passive: true });
  paintHeader();

  /* Mobile menu */
  var menuBtn = document.querySelector('[data-menu-toggle]');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menuOpen = open;
    menu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.querySelector('[data-icon-open]').classList.toggle('hidden', open);
    menuBtn.querySelector('[data-icon-close]').classList.toggle('hidden', !open);
    paintHeader();
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () { setMenu(!menuOpen); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia('(min-width: 1280px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

/* Contact form enhancement (published as /assets/contact-form.js).
 * The form works without JavaScript (native HTML validation + Netlify POST).
 * With JavaScript: localised inline errors, an error summary, focus on the first
 * invalid field, double-submit protection, and ?service= preselection.
 */
(function () {
  'use strict';
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var msg = form.dataset;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  form.noValidate = true; // take over from native bubbles, keep the constraints

  /* Preselect service from ?service=data-engineering|odoo|integration|other */
  var key = new URLSearchParams(location.search).get('service');
  var select = form.querySelector('[data-service-select]');
  if (key && select) {
    Array.prototype.forEach.call(select.options, function (o) { if (o.dataset.key === key) select.value = o.value; });
  }

  function fieldError(wrapper) {
    var el = wrapper.querySelector('input:not([type="radio"]), select, textarea');
    if (el && el.type === 'checkbox') return el.checked ? '' : msg.msgConsent;
    if (!el) { // radio group
      return wrapper.querySelector('input[type="radio"]:checked') ? '' : msg.msgRequired;
    }
    var v = el.value.trim();
    if (el.required && !v) return msg.msgRequired;
    if (el.type === 'email' && v && !EMAIL.test(v)) return msg.msgEmail;
    if (el.minLength > 0 && v && v.length < el.minLength) return msg.msgMin;
    return '';
  }

  function show(wrapper, text) {
    var p = wrapper.querySelector('.field-error');
    var controls = wrapper.querySelectorAll('input, select, textarea');
    wrapper.classList.toggle('has-error', !!text);
    if (p) { p.textContent = text; p.classList.toggle('hidden', !text); }
    controls.forEach(function (c) { if (text) c.setAttribute('aria-invalid', 'true'); else c.removeAttribute('aria-invalid'); });
  }

  var wrappers = form.querySelectorAll('[data-field]');
  wrappers.forEach(function (w) {
    w.addEventListener('change', function () { if (w.classList.contains('has-error')) show(w, fieldError(w)); });
    w.addEventListener('focusout', function (e) {
      if (w.contains(e.relatedTarget)) return; // still inside a radio group
      if (w.classList.contains('has-error')) show(w, fieldError(w));
    });
  });

  var summary = form.querySelector('[data-error-summary]');
  var submit = form.querySelector('[data-submit]');
  var submitLabel = submit.querySelector('[data-submit-label]');
  var submitText = submitLabel.textContent;

  form.addEventListener('submit', function (e) {
    var first = null;
    wrappers.forEach(function (w) {
      var text = fieldError(w);
      show(w, text);
      if (text && !first) first = w.querySelector('input, select, textarea');
    });
    if (first) {
      e.preventDefault();
      summary.classList.remove('hidden');
      first.focus({ preventScroll: true });
      first.closest('[data-field]').scrollIntoView({ block: 'center', behavior: 'auto' });
      return;
    }
    summary.classList.add('hidden');
    submit.disabled = true;
    submitLabel.textContent = msg.msgSending;
  });

  // Re-enable the button if the user navigates back to this page (bfcache).
  window.addEventListener('pageshow', function () { submit.disabled = false; submitLabel.textContent = submitText; });
})();

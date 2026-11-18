/* Pipeline efficiency estimator (published as /assets/calculator.js).
 * Calculation logic preserved from the original site:
 *   savings = round(TB * 4800 + 2200)   speed-up = 2.5 + TB * 0.35
 * Coefficients are read from data attributes rendered by src/components/Calculator.mjs,
 * so the server-rendered initial values and this script always agree.
 */
(function () {
  'use strict';
  document.querySelectorAll('[data-calculator]').forEach(function (root) {
    var d = root.dataset;
    var locale = d.locale || 'en-GB';
    var perTb = parseFloat(d.savingsPerTb), base = parseFloat(d.savingsBase);
    var speedBase = parseFloat(d.speedBase), speedPerTb = parseFloat(d.speedPerTb);

    var slider = root.querySelector('[data-volume]');
    var volOut = root.querySelector('[data-volume-out]');
    var speedOut = root.querySelector('[data-speed-out]');
    var savingsOut = root.querySelector('[data-savings-out]');

    var eur = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
    var one = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    function update() {
      var v = parseFloat(slider.value);
      var savings = Math.round(v * perTb + base);
      var speed = parseFloat((speedBase + v * speedPerTb).toFixed(1));
      volOut.textContent = one.format(v) + ' ' + d.unit;
      speedOut.textContent = one.format(speed) + d.suffix;
      savingsOut.textContent = eur.format(savings);
      slider.setAttribute('aria-valuetext', volOut.textContent);
    }
    slider.addEventListener('input', update);
    update();
  });
})();

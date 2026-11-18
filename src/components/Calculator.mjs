// Pipeline efficiency & compute estimator.
//
// The calculation logic is preserved exactly from the original site
// (commit 8225b92, index.html `updateCalc`):
//     savings = round(volumeTB * 4800 + 2200)      // € per year
//     speedUp = 2.5 + volumeTB * 0.35              // × faster, 1 decimal
//     slider: 0.5 – 25 TB, step 0.5, default 2.5
//
// The coefficients are passed to the browser script via data attributes, so
// HTML (server-rendered initial values) and JS always use the same numbers.
// If you change them, also update the "assumptions" text in src/content/*.mjs.
//
// Changes vs. the original, for transparency (see README):
//  - results are labelled "illustrative" and the formula is shown;
//  - the initial "4.2x" value (which did not match the formula) is now computed
//    from the formula (3.4×);
//  - the cloud-provider dropdown was removed: it never affected the result.
import { e, href } from './util.mjs';
import { btnPrimary } from './Sections.mjs';
import { icon } from './icons.mjs';

export const CALC = {
  min: 0.5,
  max: 25,
  step: 0.5,
  initial: 2.5,
  savingsPerTb: 4800,
  savingsBase: 2200,
  speedBase: 2.5,
  speedPerTb: 0.35,
};

export const calcSavings = (v) => Math.round(v * CALC.savingsPerTb + CALC.savingsBase);
export const calcSpeed = (v) => (CALC.speedBase + v * CALC.speedPerTb).toFixed(1);

export function formatEur(locale, n) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

export function formatNum(locale, n, digits = 1) {
  return new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
}

export function Calculator(lang, t) {
  const c = t.pages.dataEngineering.calculator;
  const loc = t.meta.locale;
  const v = CALC.initial;
  return `        <div class="reveal glass rounded-3xl p-6 sm:p-10" data-calculator
             data-locale="${e(loc)}" data-suffix="${e(c.fasterSuffix)}" data-unit="${e(c.volumeUnit)}"
             data-savings-per-tb="${CALC.savingsPerTb}" data-savings-base="${CALC.savingsBase}"
             data-speed-base="${CALC.speedBase}" data-speed-per-tb="${CALC.speedPerTb}">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div class="max-w-2xl">
              <p class="eyebrow mb-3 text-xs text-accent">${e(c.eyebrow)}</p>
              <h2 id="calculator-title" class="text-2xl font-bold tracking-tight text-white sm:text-3xl">${e(c.title)}</h2>
              <p class="mt-3 text-slate-400">${e(c.lead)}</p>
            </div>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-[11px] font-semibold text-amber-300">${icon('info', 14)}${e(c.badge)}</span>
          </div>

          <div class="mt-8">
            <div class="mb-2 flex justify-between text-sm font-medium">
              <label for="calc-volume" class="text-slate-300">${e(c.volumeLabel)}</label>
              <output for="calc-volume" class="font-mono font-bold text-accent" dir="ltr" data-volume-out>${formatNum(loc, v)} ${e(c.volumeUnit)}</output>
            </div>
            <input id="calc-volume" type="range" min="${CALC.min}" max="${CALC.max}" step="${CALC.step}" value="${v}"
                   class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#ff7a00]" data-volume>
            <div class="mt-1 flex justify-between font-mono text-[11px] text-slate-500" dir="ltr"><span>${formatNum(loc, CALC.min)} ${e(c.volumeUnit)}</span><span>${formatNum(loc, CALC.max, 0)} ${e(c.volumeUnit)}</span></div>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
            <div class="rounded-2xl border border-white/10 bg-ink-800/80 p-5 text-center">
              <p class="font-mono text-[11px] uppercase tracking-wider text-slate-400">${e(c.accelLabel)}<span aria-hidden="true"> *</span></p>
              <p class="mt-2 font-mono text-3xl font-extrabold text-accent"><output data-speed-out>${formatNum(loc, Number(calcSpeed(v)))}${e(c.fasterSuffix)}</output></p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-ink-800/80 p-5 text-center">
              <p class="font-mono text-[11px] uppercase tracking-wider text-slate-400">${e(c.savingsLabel)}<span aria-hidden="true"> *</span></p>
              <p class="mt-2 font-mono text-3xl font-extrabold text-amber-400"><output data-savings-out>${formatEur(loc, calcSavings(v))}</output></p>
            </div>
          </div>

          <div class="mt-6 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-5" role="note" aria-labelledby="calc-assumptions-title">
            <h3 id="calc-assumptions-title" class="flex items-center gap-2 text-sm font-semibold text-amber-200">${icon('info', 16)}${e(c.assumptionsTitle)}</h3>
            <ul class="mt-3 list-disc space-y-1.5 ps-5 text-sm leading-relaxed text-slate-300">
${c.assumptions.map((a) => `              <li>${e(a)}</li>`).join('\n')}
            </ul>
            <p class="mt-3 text-sm font-medium text-slate-200"><span aria-hidden="true">* </span>${e(c.disclaimer)}</p>
          </div>

          <div class="mt-8">${btnPrimary(href(lang, 'contact') + '?service=data-engineering', c.cta)}</div>
        </div>`;
}

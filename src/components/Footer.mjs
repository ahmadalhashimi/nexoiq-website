import { SITE } from '../site.config.mjs';
import { e, href } from './util.mjs';

export function legalList(t, cls = '') {
  const L = t.common.legal;
  return `<dl class="grid gap-x-8 gap-y-2 font-mono text-[11.5px] text-slate-500 sm:grid-cols-2 lg:grid-cols-3 ${cls}">
        <div><dt class="inline">${e(L.name)}:</dt> <dd class="inline text-slate-300">NexoIQ (${e(L.form)})</dd></div>
        <div><dt class="inline">${e(L.kvk)}:</dt> <dd class="inline text-accent" dir="ltr">${SITE.kvk}</dd></div>
        <div><dt class="inline">${e(L.vat)}:</dt> <dd class="inline text-slate-300">${e(L.vatValue)}</dd></div>
        <div><dt class="inline">SBI:</dt> <dd class="inline text-slate-300" dir="ltr">${SITE.sbi}</dd></div>
        <div><dt class="inline">${e(L.working)}:</dt> <dd class="inline text-slate-300">${e(L.workingValue)}</dd></div>
        <div><dt class="inline">${e(L.registered)}:</dt> <dd class="inline text-slate-300">${e(L.registeredValue)}</dd></div>
      </dl>`;
}

export function Footer(lang, t) {
  const n = t.common.nav;
  const f = t.common.footer;
  const link = (id) => `<li><a class="transition-colors hover:text-accent" href="${href(lang, id)}">${e(n[id])}</a></li>`;
  return `<footer class="border-t border-white/5 pt-14 pb-8">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-10 border-b border-white/5 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="${href(lang, 'home')}" class="inline-flex items-center gap-2.5">
            <img src="/images/logo-mark.webp" alt="" width="32" height="32" class="h-8 w-8 rounded-full" loading="lazy">
            <span class="font-semibold text-white" dir="ltr">Nexo<span class="text-accent">IQ</span></span>
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">${e(f.tagline)}</p>
          <p class="mt-4 text-sm"><a class="text-slate-300 transition-colors hover:text-accent" href="mailto:${SITE.email}" dir="ltr">${SITE.email}</a></p>
        </div>
        <nav aria-label="${e(f.services)}">
          <h2 class="eyebrow text-[11px] text-slate-500">${e(f.services)}</h2>
          <ul class="mt-4 space-y-2.5 text-sm text-slate-300">
            ${link('dataEngineering')}
            ${link('odoo')}
            ${link('integration')}
          </ul>
        </nav>
        <nav aria-label="${e(f.company)}">
          <h2 class="eyebrow text-[11px] text-slate-500">${e(f.company)}</h2>
          <ul class="mt-4 space-y-2.5 text-sm text-slate-300">
            ${link('training')}
            ${link('about')}
            ${link('contact')}
            ${link('privacy')}
          </ul>
        </nav>
      </div>
      <div class="border-b border-white/5 py-6">
        ${legalList(t)}
      </div>
      <div class="flex flex-col items-center justify-between gap-3 pt-6 text-sm text-slate-500 sm:flex-row">
        <p><span dir="ltr">© <span data-year>2026</span> NexoIQ</span> · ${e(f.rights)}</p>
        <a href="#top" class="font-mono text-xs transition-colors hover:text-accent">${e(f.backToTop)} ↑</a>
      </div>
    </div>
  </footer>`;
}

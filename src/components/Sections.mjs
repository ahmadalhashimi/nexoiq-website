// Reusable section building blocks, using the existing NexoIQ design language
// (.glass cards, .eyebrow labels, orange accent, grid background).
import { e, href, join } from './util.mjs';
import { arrow, check } from './icons.mjs';

export const container = 'mx-auto max-w-6xl px-5 sm:px-8';

/** <section> wrapper. alt = subtle alternate background band. */
export const section = ({ id, labelledby, alt = false, cls = '' }, inner) =>
  `    <section${id ? ` id="${id}"` : ''} class="scroll-mt-24 py-20 sm:py-24${alt ? ' border-y border-white/5 bg-ink-900/60' : ''} ${cls}"${labelledby ? ` aria-labelledby="${labelledby}"` : ''}>
      <div class="${container}">
${inner}
      </div>
    </section>`;

export const sectionHead = ({ id, eyebrow, title, lead, center = false }) => `        <header class="reveal mb-12 max-w-2xl${center ? ' mx-auto text-center' : ''}">
          <p class="eyebrow mb-3 text-xs text-accent">${e(eyebrow)}</p>
          <h2 id="${id}" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(title)}</h2>
${lead ? `          <p class="mt-4 text-slate-400">${e(lead)}</p>` : ''}
        </header>`;

/** Hero for inner pages, with breadcrumb. */
export function pageHero(lang, t, { pageId, eyebrow, title, lead, extra = '' }) {
  return `    <section class="relative isolate overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40" aria-labelledby="page-title">
      <div class="bg-grid absolute inset-0 -z-10" aria-hidden="true"></div>
      <div class="glow-orb absolute -top-40 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2" aria-hidden="true"></div>
      <div class="${container}">
        <nav aria-label="${e(t.common.breadcrumb)}" class="mb-6 font-mono text-xs text-slate-500">
          <ol class="flex flex-wrap items-center gap-2">
            <li><a class="transition-colors hover:text-accent" href="${href(lang, 'home')}">${e(t.common.nav.home)}</a></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" class="text-slate-300">${e(t.common.nav[pageId] || title)}</span></li>
          </ol>
        </nav>
        <p class="eyebrow mb-4 text-xs text-accent">${e(eyebrow)}</p>
        <h1 id="page-title" class="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">${e(title)}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">${e(lead)}</p>
${extra}
      </div>
    </section>`;
}

export const btnPrimary = (url, label, attrs = '') =>
  `<a href="${url}" class="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(255,122,0,.7)] transition hover:bg-accent-soft"${attrs}><span>${e(label)}</span>${arrow()}</a>`;

export const btnSecondary = (url, label) =>
  `<a href="${url}" class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-semibold text-white transition hover:border-accent/50">${e(label)}</a>`;

export const bulletList = (items, cls = '') =>
  `<ul class="space-y-2.5 text-[15px] text-slate-300 ${cls}">
${items.map((i) => `              <li class="flex items-start gap-3">${check()}<span>${e(i)}</span></li>`).join('\n')}
            </ul>`;

/** Technology tag chips. The first `highlight` items get the accent style. */
export const tagList = (items, highlight = 0) =>
  `<ul class="flex flex-wrap gap-2 font-mono text-[12.5px]">
${items.map((x, i) => `              <li class="rounded-lg border px-2.5 py-1.5 ${i < highlight ? 'border-accent/30 bg-accent/10 text-accent-soft' : 'border-white/10 bg-white/[0.03] text-slate-300'}">${e(x)}</li>`).join('\n')}
            </ul>`;

/** Numbered step cards (approach / architecture). */
export const stepCards = (steps, cols = 'sm:grid-cols-2 lg:grid-cols-3') =>
  `        <ol class="grid gap-5 ${cols}">
${steps.map((s, i) => `          <li class="reveal glass glass-hover rounded-2xl p-6">
            <p class="font-mono text-sm text-accent" dir="ltr">${String(i + 1).padStart(2, '0')}</p>
            <h3 class="mt-2 text-lg font-semibold text-white">${e(s.t)}</h3>
            <p class="mt-2 text-[15px] leading-relaxed text-slate-400">${e(s.d)}</p>
          </li>`).join('\n')}
        </ol>`;

/** Simple title+text cards with an icon. */
export const iconCards = (items, icons, cols = 'sm:grid-cols-2 lg:grid-cols-4') =>
  `        <div class="grid gap-5 ${cols}">
${items.map((it, i) => `          <article class="reveal glass glass-hover rounded-2xl p-6">
            <span class="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icons[i % icons.length]}</span>
            <h3 class="mt-5 text-lg font-semibold text-white">${e(it.t)}</h3>
            <p class="mt-2 text-[15px] leading-relaxed text-slate-400">${e(it.d)}</p>
          </article>`).join('\n')}
        </div>`;

/** Closing call-to-action band, used on every content page. */
export function ctaBand(lang, t, { id = 'cta', primaryUrl, primaryLabel } = {}) {
  const c = t.common;
  return `    <section id="${id}" class="relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-28" aria-labelledby="${id}-title">
      <div class="glow-orb absolute bottom-[-220px] left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2" aria-hidden="true"></div>
      <div class="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 id="${id}-title" class="reveal text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(c.finalCta.title)}</h2>
        <p class="reveal mx-auto mt-5 max-w-xl text-lg text-slate-400">${e(c.finalCta.lead)}</p>
        <div class="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          ${btnPrimary(primaryUrl || href(lang, 'contact'), primaryLabel || c.cta.discuss)}
          ${btnSecondary(href(lang, 'contact'), c.cta.book)}
        </div>
      </div>
    </section>`;
}

export { join };

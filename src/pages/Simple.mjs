// Privacy statement, form thank-you page and 404 page.
import { LANGS } from '../site.config.mjs';
import { e, href } from '../components/util.mjs';
import { pageHero, btnPrimary, container } from '../components/Sections.mjs';
import { breadcrumbJsonLd } from './structured-data.mjs';

const linkify = (text) =>
  e(text).replace(/info@nexoiq\.nl/g, '<a class="text-accent hover:underline" href="mailto:info@nexoiq.nl" dir="ltr">info@nexoiq.nl</a>');

export function Privacy(lang, t) {
  const p = t.pages.privacy;
  const hero = pageHero(lang, t, { pageId: 'privacy', eyebrow: t.common.nav.privacy, title: p.heading, lead: p.updated });
  const body = `    <section class="pb-24">
      <div class="${container}">
        <div class="glass max-w-3xl space-y-10 rounded-3xl p-6 sm:p-10">
${p.sections.map((s) => `          <section>
            <h2 class="text-xl font-semibold text-white">${e(s.t)}</h2>
${s.p.map((x) => `            <p class="mt-3 leading-relaxed text-slate-300">${linkify(x)}</p>`).join('\n')}
          </section>`).join('\n')}
        </div>
      </div>
    </section>`;
  return { title: p.title, description: p.description, jsonLd: [breadcrumbJsonLd(lang, t, 'privacy')], body: [hero, body].join('\n\n') };
}

const centered = (heading, lead, actions) => `    <section class="relative isolate overflow-hidden pb-28 pt-40 sm:pt-48" aria-labelledby="page-title">
      <div class="bg-grid absolute inset-0 -z-10" aria-hidden="true"></div>
      <div class="glow-orb absolute -top-40 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2" aria-hidden="true"></div>
      <div class="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h1 id="page-title" class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">${e(heading)}</h1>
        <p class="mt-6 text-lg leading-relaxed text-slate-400">${linkify(lead)}</p>
        <div class="mt-10 flex flex-wrap justify-center gap-3">${actions}</div>
      </div>
    </section>`;

export function Thanks(lang, t) {
  const p = t.pages.thanks;
  return { title: p.title, description: p.description, noindex: true, body: centered(p.heading, p.lead, btnPrimary(href(lang, 'home'), p.back)) };
}

/** 404 (English, with links to the NL and AR home pages). Netlify serves /404.html automatically. */
export function NotFound(lang, t, all) {
  const p = t.pages.notFound;
  const n = t.common.nav;
  const links = ['home', 'dataEngineering', 'odoo', 'integration', 'contact']
    .map((id) => `<a class="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:border-accent/50" href="${href(lang, id)}">${e(n[id])}</a>`)
    .join('');
  const other = LANGS.filter((l) => l !== lang)
    .map((l) => `<a class="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:border-accent/50" href="${href(l, 'home')}" lang="${l}" hreflang="${l}">${e(all[l].pages.notFound.heading)} — ${e(all[l].common.nav.home)}</a>`)
    .join('');
  return { title: p.title, description: p.description, noindex: true, body: centered(p.heading, p.lead, links + other) };
}

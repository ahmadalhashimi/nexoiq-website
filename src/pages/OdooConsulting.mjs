import { e, href } from '../components/util.mjs';
import { icon } from '../components/icons.mjs';
import { section, sectionHead, pageHero, bulletList, stepCards, tagList, ctaBand, btnPrimary, btnSecondary } from '../components/Sections.mjs';
import { serviceJsonLd, breadcrumbJsonLd } from './structured-data.mjs';

const SRV_ICONS = ['sliders', 'code', 'test', 'server'];

export default function OdooConsulting(lang, t) {
  const p = t.pages.odoo;
  const contactUrl = href(lang, 'contact') + '?service=odoo';

  const hero = pageHero(lang, t, {
    pageId: 'odoo', ...p.hero,
    extra: `        <p class="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm text-accent-soft">${icon('info', 16)}<span>${e(p.hero.version)}</span></p>
        <div class="mt-8 flex flex-wrap gap-3">${btnPrimary(contactUrl, t.common.cta.discuss)}</div>`,
  });

  const services = section({ id: 'services', labelledby: 'srv-title' }, `${sectionHead({ id: 'srv-title', eyebrow: p.services.eyebrow, title: p.services.title })}
        <div class="grid gap-5 md:grid-cols-2">
${p.services.items.map((s, i) => `          <article class="reveal glass glass-hover flex flex-col rounded-2xl p-6 sm:p-8">
            <div class="flex items-center gap-4">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icon(SRV_ICONS[i])}</span>
              <h3 class="text-xl font-semibold text-white">${e(s.t)}</h3>
            </div>
            <p class="mt-4 text-[15px] leading-relaxed text-slate-400">${e(s.d)}</p>
            ${bulletList(s.bullets, 'mt-5')}
          </article>`).join('\n')}
        </div>`);

  const approach = section({ id: 'approach', labelledby: 'approach-title', alt: true }, `${sectionHead({ id: 'approach-title', eyebrow: p.approach.eyebrow, title: p.approach.title, lead: p.approach.lead })}
${stepCards(p.approach.steps)}`);

  const it = p.integrationTeaser;
  const stack = section({ id: 'stack', labelledby: 'stack-title' }, `        <div class="grid gap-5 lg:grid-cols-2">
          <article class="reveal glass rounded-2xl p-6 sm:p-8">
            <p class="eyebrow mb-3 text-xs text-accent">${e(p.stack.eyebrow)}</p>
            <h2 id="stack-title" class="mb-6 text-2xl font-bold text-white">${e(p.stack.title)}</h2>
            <div dir="ltr">${tagList(p.stack.items, 3)}</div>
          </article>
          <article class="reveal glass relative overflow-hidden rounded-2xl p-6 sm:p-8" style="border-color:rgba(255,122,0,.3)">
            <div class="glow-orb pointer-events-none absolute -end-32 -top-32 h-[300px] w-[300px]" aria-hidden="true"></div>
            <div class="relative">
              <span class="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icon('link')}</span>
              <h2 class="mt-5 text-2xl font-bold text-white">${e(it.title)}</h2>
              <p class="mt-3 text-slate-400">${e(it.lead)}</p>
              <div class="mt-6">${btnSecondary(href(lang, 'integration'), it.cta)}</div>
            </div>
          </article>
        </div>`);

  return {
    title: p.title,
    description: p.description,
    jsonLd: [serviceJsonLd(lang, 'odoo', p.hero.eyebrow, p.description), breadcrumbJsonLd(lang, t, 'odoo')],
    body: [hero, services, approach, stack, ctaBand(lang, t, { primaryUrl: contactUrl })].join('\n\n'),
  };
}

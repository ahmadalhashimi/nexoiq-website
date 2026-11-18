import { e, href } from '../components/util.mjs';
import { icon } from '../components/icons.mjs';
import { section, sectionHead, pageHero, bulletList, ctaBand, btnPrimary } from '../components/Sections.mjs';
import { serviceJsonLd, breadcrumbJsonLd } from './structured-data.mjs';

export default function ERPIntegration(lang, t) {
  const p = t.pages.integration;
  const contactUrl = href(lang, 'contact') + '?service=integration';

  const hero = pageHero(lang, t, {
    pageId: 'integration', ...p.hero,
    extra: `        <div class="mt-9 flex flex-wrap gap-3">${btnPrimary(contactUrl, t.common.cta.discuss)}</div>`,
  });

  const scenario = section({ id: 'scenario', labelledby: 'scenario-title' }, `        <div class="reveal grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <p class="eyebrow mb-3 text-xs text-accent">${e(p.scenario.eyebrow)}</p>
            <h2 id="scenario-title" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(p.scenario.title)}</h2>
          </div>
          <div class="glass rounded-2xl p-6 sm:p-8">
${p.scenario.body.map((b) => `            <p class="leading-relaxed text-slate-300 [&+p]:mt-4">${e(b)}</p>`).join('\n')}
          </div>
        </div>`);

  const a = p.architecture;
  const architecture = section({ id: 'architecture', labelledby: 'arch-title', alt: true }, `${sectionHead({ id: 'arch-title', eyebrow: a.eyebrow, title: a.title })}
        <p class="reveal -mt-6 mb-10 flex max-w-3xl items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-4 text-sm leading-relaxed text-amber-100" role="note"><span class="mt-0.5 shrink-0 text-amber-300">${icon('info', 16)}</span><span>${e(a.note)}</span></p>
        <ol class="grid gap-x-5 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
${a.steps.map((s, i) => `          <li class="reveal glass glass-hover relative rounded-2xl p-6${i === 3 ? ' border-accent/30' : ''}">
            <div class="flex items-center gap-3">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-mono text-sm ${i === 3 ? 'bg-accent/20 text-accent' : 'bg-white/5 text-slate-300'}" dir="ltr">0${i + 1}</span>
              <h3 class="text-lg font-semibold text-white">${e(s.t)}</h3>
            </div>
            <p class="mt-3 text-[15px] leading-relaxed text-slate-400">${e(s.d)}</p>
          </li>`).join('\n')}
        </ol>`);

  const ev = p.evidence;
  const evidence = section({ id: 'transparency', labelledby: 'ev-title' }, `${sectionHead({ id: 'ev-title', eyebrow: ev.eyebrow, title: ev.title })}
        <div class="grid gap-5 md:grid-cols-2">
          <article class="reveal glass rounded-2xl p-6 sm:p-8">
            <h3 class="flex items-center gap-3 text-lg font-semibold text-white"><span class="text-emerald-400">${icon('shield', 20)}</span>${e(ev.provenTitle)}</h3>
            ${bulletList(ev.proven, 'mt-5')}
          </article>
          <article class="reveal glass rounded-2xl p-6 sm:p-8">
            <h3 class="flex items-center gap-3 text-lg font-semibold text-white"><span class="text-accent">${icon('sliders', 20)}</span>${e(ev.designedTitle)}</h3>
            ${bulletList(ev.designed, 'mt-5')}
          </article>
        </div>`);

  const d = p.deliverables;
  const deliverables = section({ id: 'deliverables', labelledby: 'del-title', alt: true }, `${sectionHead({ id: 'del-title', eyebrow: d.eyebrow, title: d.title })}
        <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
${d.items.map((x) => `          <li class="reveal flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-[15px] text-slate-200"><span class="shrink-0 text-accent">${icon('layers', 20)}</span><span>${e(x)}</span></li>`).join('\n')}
        </ul>`);

  return {
    title: p.title,
    description: p.description,
    jsonLd: [serviceJsonLd(lang, 'integration', p.hero.eyebrow, p.description), breadcrumbJsonLd(lang, t, 'integration')],
    body: [hero, scenario, architecture, evidence, deliverables, ctaBand(lang, t, { primaryUrl: contactUrl })].join('\n\n'),
  };
}

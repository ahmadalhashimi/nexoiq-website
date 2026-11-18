import { e, href } from '../components/util.mjs';
import { icon } from '../components/icons.mjs';
import { section, sectionHead, pageHero, tagList, ctaBand, btnPrimary } from '../components/Sections.mjs';
import { Calculator } from '../components/Calculator.mjs';
import { serviceJsonLd, breadcrumbJsonLd } from './structured-data.mjs';

const CAP_ICONS = ['database', 'flow', 'link', 'layers', 'chart', 'shield'];

// Certifications are proper names and stay in English in every language.
const CERTS = [
  { issuer: 'Databricks', year: '2026', title: 'Data Ingestion with Lakeflow Connect', hi: true },
  { issuer: 'Databricks', year: '2026', title: 'Databricks Fundamentals Accreditation', hi: true },
  { issuer: 'LinkedIn Learning', year: '2025', title: 'End-to-End Real-World Data Engineering Project with Databricks' },
  { issuer: 'Coursera', year: '2022', title: 'Advanced SQL & Python Programming for Data Engineering' },
  { issuer: 'VodafoneZiggo', year: '2022', title: 'Python Coding Bootcamp' },
];

export default function DataEngineering(lang, t) {
  const p = t.pages.dataEngineering;
  const contactUrl = href(lang, 'contact') + '?service=data-engineering';

  const hero = pageHero(lang, t, {
    pageId: 'dataEngineering', ...p.hero,
    extra: `        <div class="mt-9 flex flex-wrap gap-3">${btnPrimary(contactUrl, t.common.cta.discuss)}</div>`,
  });

  const capabilities = section({ id: 'capabilities', labelledby: 'cap-title' }, `${sectionHead({ id: 'cap-title', eyebrow: p.capabilities.eyebrow, title: p.capabilities.title })}
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
${p.capabilities.items.map((c, i) => `          <article class="reveal glass glass-hover flex flex-col rounded-2xl p-6 sm:p-7">
            <span class="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icon(CAP_ICONS[i])}</span>
            <h3 class="mt-6 text-xl font-semibold text-white">${e(c.t)}</h3>
            <p class="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">${e(c.d)}</p>
            <p class="mt-6 font-mono text-xs font-semibold text-accent" dir="ltr">${e(c.tags)}</p>
          </article>`).join('\n')}
        </div>`);

  const experience = section({ id: 'experience', labelledby: 'exp-title', alt: true }, `${sectionHead({ id: 'exp-title', eyebrow: p.experience.eyebrow, title: p.experience.title, lead: p.experience.lead })}
        <div class="grid gap-5 md:grid-cols-2">
${p.experience.items.map((x) => `          <article class="reveal glass glass-hover rounded-2xl p-6">
            <span class="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">${e(x.tag)}</span>
            <h3 class="mt-5 text-xl font-semibold text-white">${e(x.t)}</h3>
            <p class="mt-3 text-slate-400">${e(x.d)}</p>
          </article>`).join('\n')}
        </div>`);

  const stack = section({ id: 'stack', labelledby: 'stack-title' }, `${sectionHead({ id: 'stack-title', eyebrow: p.stack.eyebrow, title: p.stack.title })}
        <div class="grid gap-5 lg:grid-cols-3">
${p.stack.groups.map((g, i) => `          <article class="reveal glass glass-hover rounded-2xl p-6">
            <h3 class="mb-5 text-lg font-semibold text-white">${e(g.t)}</h3>
            ${tagList(g.items, i === 2 ? 0 : 1)}
          </article>`).join('\n')}
        </div>`);

  const certs = section({ id: 'certifications', labelledby: 'certs-title', alt: true }, `${sectionHead({ id: 'certs-title', eyebrow: p.certs.eyebrow, title: p.certs.title })}
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" dir="ltr">
${CERTS.map((c) => `          <li class="reveal glass glass-hover rounded-2xl p-5"><div class="flex items-center justify-between font-mono text-[11px]"><span class="rounded-md px-2 py-1 ${c.hi ? 'bg-accent/15 text-accent' : 'bg-white/5 text-slate-300'}">${e(c.issuer)}</span><span class="text-slate-500">${c.year}</span></div><p class="mt-4 font-semibold text-white">${e(c.title)}</p></li>`).join('\n')}
        </ul>`);

  const calculator = `    <section id="calculator" class="scroll-mt-24 py-20 sm:py-24" aria-labelledby="calculator-title">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
${Calculator(lang, t)}
      </div>
    </section>`;

  return {
    title: p.title,
    description: p.description,
    jsonLd: [serviceJsonLd(lang, 'dataEngineering', p.hero.eyebrow, p.description), breadcrumbJsonLd(lang, t, 'dataEngineering')],
    scripts: ['/assets/calculator.js'],
    body: [hero, capabilities, experience, stack, certs, calculator, ctaBand(lang, t, { primaryUrl: contactUrl })].join('\n\n'),
  };
}

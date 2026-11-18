import { e, href } from '../components/util.mjs';
import { icon, arrow } from '../components/icons.mjs';
import { section, sectionHead, btnPrimary, btnSecondary, iconCards, ctaBand } from '../components/Sections.mjs';
import { orgJsonLd } from './structured-data.mjs';

const PILLAR_PAGES = ['dataEngineering', 'odoo', 'integration'];
const PILLAR_ICONS = ['database', 'grid', 'link'];

export default function Home(lang, t) {
  const p = t.pages.home;
  const h = p.hero;

  const hero = `    <section class="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40" aria-labelledby="hero-title">
      <div class="bg-grid absolute inset-0 -z-10" aria-hidden="true"></div>
      <div class="glow-orb absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2" aria-hidden="true"></div>

      <div class="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p class="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] text-slate-300">
            <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span><span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span></span>
            <span>${e(h.eyebrow)}</span>
          </p>

          <h1 id="hero-title" class="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            ${e(h.title1)} <span class="text-gradient">${e(h.title2)}</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">${e(h.lead)}</p>

          <div class="mt-9 flex flex-wrap items-center gap-3">
            ${btnPrimary(href(lang, 'home', '#services'), t.common.cta.explore)}
            ${btnSecondary(href(lang, 'contact'), t.common.cta.book)}
          </div>

          <dl class="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-8">
${h.stats.map((s, i) => `            <div>
              <dt class="font-mono text-[11px] uppercase tracking-wider text-slate-500">${e(s.k)}</dt>
              <dd class="mt-1 ${i === 0 ? 'text-2xl font-bold' : 'text-sm font-semibold leading-snug'} text-white">${e(s.v)}</dd>
            </div>`).join('\n')}
          </dl>
        </div>

        <!-- Hero visual: example ERP → lakehouse → BI flow -->
        <div class="glass relative rounded-2xl p-6 sm:p-7" role="img" aria-label="${e(h.vizLabel)}">
          <div class="mb-5 flex items-center justify-between" dir="ltr">
            <div class="flex gap-1.5" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full bg-white/15"></span><span class="h-2.5 w-2.5 rounded-full bg-white/15"></span><span class="h-2.5 w-2.5 rounded-full bg-accent/80"></span></div>
            <span class="font-mono text-[11px] text-slate-500">erp → lakehouse → bi</span>
          </div>
          <ol class="space-y-0 text-[13px]" aria-hidden="true">
${h.viz.map((v, i) => {
  const hi = i === 2;
  const bi = i === 3;
  const box = hi ? 'border-accent/30 bg-accent/[0.06]' : 'border-white/5 bg-white/[0.02]';
  const num = hi ? 'bg-accent/20 text-accent' : bi ? 'bg-[#f2c811]/15 text-[#f2c811]' : 'bg-white/5 text-slate-300';
  const line = i < h.viz.length - 1 ? `\n            <li class="flow-line${i ? ` d${i}` : ''} mx-auto h-4 w-px bg-white/10"></li>` : '';
  return `            <li class="flex items-center gap-3 rounded-xl border ${box} p-3.5">
              <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono ${num}" dir="ltr">0${i + 1}</span>
              <div class="min-w-0"><p class="font-semibold ${hi ? 'text-white' : 'text-slate-200'}">${e(v.t)}</p><p class="truncate text-[11.5px] ${hi ? 'text-slate-400' : 'text-slate-500'}">${e(v.d)}</p></div>
            </li>${line}`;
}).join('\n')}
          </ol>
        </div>
      </div>
    </section>`;

  const pillars = section({ id: 'services', labelledby: 'services-title' }, `${sectionHead({ id: 'services-title', eyebrow: p.services.eyebrow, title: p.services.title, lead: p.services.lead })}
        <div class="grid gap-5 lg:grid-cols-3">
${p.services.pillars.map((pl, i) => `          <article class="reveal glass glass-hover relative flex flex-col rounded-2xl p-6 sm:p-7">
            <span class="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icon(PILLAR_ICONS[i])}</span>
            <h3 class="mt-6 text-xl font-semibold text-white"><a class="after:absolute after:inset-0 hover:text-accent" href="${href(lang, PILLAR_PAGES[i])}">${e(pl.title)}</a></h3>
            <p class="mt-3 text-[15px] leading-relaxed text-slate-400">${e(pl.desc)}</p>
            <ul class="mt-5 flex flex-1 flex-wrap content-start gap-2 font-mono text-[12px]">
${pl.items.map((it) => `              <li class="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-slate-300">${e(it)}</li>`).join('\n')}
            </ul>
            <p class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">${e(t.common.cta.learnMore)} ${arrow(14)}</p>
          </article>`).join('\n')}
        </div>`);

  const principles = section({ id: 'approach', labelledby: 'principles-title', alt: true }, `${sectionHead({ id: 'principles-title', eyebrow: p.principles.eyebrow, title: p.principles.title })}
${iconCards(p.principles.items, [icon('grid'), icon('test'), icon('layers'), icon('sliders')])}`);

  const r = p.regions;
  const regions = section({ id: 'regions', labelledby: 'regions-title' }, `        <div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div class="reveal">
            <p class="eyebrow mb-3 text-xs text-accent">${e(r.eyebrow)}</p>
            <h2 id="regions-title" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(r.title)}</h2>
            <p class="mt-4 text-lg leading-relaxed text-slate-300">${e(r.lead)}</p>
            <p class="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-400"><span class="mt-0.5 shrink-0 text-slate-500">${icon('info', 16)}</span><span>${e(r.note)}</span></p>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
${r.items.map((it, i) => `            <li class="reveal glass glass-hover rounded-2xl p-5${i === r.items.length - 1 ? ' sm:col-span-2' : ''}">
              <div class="flex items-center gap-3"><span class="text-accent">${icon(['globe', 'briefcase', 'calendar', 'chat', 'handshake'][i], 20)}</span><h3 class="font-semibold text-white">${e(it.t)}</h3></div>
              <p class="mt-2 text-sm leading-relaxed text-slate-400">${e(it.d)}</p>
            </li>`).join('\n')}
          </ul>
        </div>`);

  const tr = p.training;
  const training = section({ id: 'training', labelledby: 'training-title', alt: true }, `        <div class="reveal glass relative overflow-hidden rounded-3xl p-7 sm:p-12" style="border-color:rgba(255,122,0,.3)">
          <div class="glow-orb pointer-events-none absolute -end-40 -top-40 h-[420px] w-[420px]" aria-hidden="true"></div>
          <div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-2xl">
              <p class="eyebrow mb-3 inline-flex items-center gap-2 text-xs text-accent">${icon('graduation', 16)}<span>${e(tr.eyebrow)}</span></p>
              <h2 id="training-title" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(tr.title)}</h2>
              <p class="mt-4 text-slate-300">${e(tr.lead)}</p>
            </div>
            <div class="shrink-0">${btnPrimary(href(lang, 'training'), tr.cta)}</div>
          </div>
        </div>`);

  return {
    title: p.title,
    description: p.description,
    jsonLd: [orgJsonLd(lang, t)],
    body: [hero, pillars, principles, regions, training, ctaBand(lang, t, { id: 'contact' })].join('\n\n'),
  };
}

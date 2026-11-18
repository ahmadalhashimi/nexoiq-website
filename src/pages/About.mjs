import { SITE } from '../site.config.mjs';
import { e } from '../components/util.mjs';
import { icon, linkedin } from '../components/icons.mjs';
import { section, sectionHead, pageHero, iconCards, ctaBand } from '../components/Sections.mjs';
import { legalList } from '../components/Footer.mjs';
import { orgJsonLd, breadcrumbJsonLd } from './structured-data.mjs';

export default function About(lang, t) {
  const p = t.pages.about;
  const regions = t.pages.home.regions;

  const hero = pageHero(lang, t, { pageId: 'about', ...p.hero });

  const story = section({ id: 'story', labelledby: 'story-title' }, `        <div class="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div class="reveal">
            <p class="eyebrow mb-3 text-xs text-accent">${e(p.story.eyebrow)}</p>
            <h2 id="story-title" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">${e(p.story.title)}</h2>
${p.story.body.map((b) => `            <p class="mt-5 text-lg leading-relaxed text-slate-300">${e(b)}</p>`).join('\n')}
          </div>
          <aside class="reveal glass rounded-2xl p-6 sm:p-7" aria-label="${e(p.founder.name)}">
            <img src="/images/logo-mark.webp" alt="" width="56" height="56" class="h-14 w-14 rounded-full shadow-[0_0_18px_-4px_rgba(255,122,0,.7)]" loading="lazy">
            <p class="mt-5 text-xl font-semibold text-white">${e(p.founder.name)}</p>
            <p class="mt-1 font-mono text-xs text-accent">${e(p.founder.role)}</p>
            <p class="mt-4 text-sm leading-relaxed text-slate-400">${e(p.founder.background)}</p>
            <a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition-colors hover:text-accent">${linkedin(18)}<span dir="ltr">${SITE.linkedinLabel}</span></a>
          </aside>
        </div>`);

  const expect = section({ id: 'expect', labelledby: 'expect-title', alt: true }, `${sectionHead({ id: 'expect-title', eyebrow: p.expect.eyebrow, title: p.expect.title })}
${iconCards(p.expect.items, [icon('users'), icon('briefcase'), icon('chat'), icon('lock')])}`);

  const where = section({ id: 'regions', labelledby: 'regions-title' }, `${sectionHead({ id: 'regions-title', eyebrow: regions.eyebrow, title: regions.title, lead: regions.lead })}
        <p class="reveal -mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">${e(regions.note)}</p>`);

  const details = section({ id: 'company-details', labelledby: 'details-title', alt: true }, `${sectionHead({ id: 'details-title', eyebrow: p.details.eyebrow, title: p.details.title })}
        <div class="reveal glass rounded-2xl p-6">${legalList(t)}</div>`);

  return {
    title: p.title,
    description: p.description,
    jsonLd: [orgJsonLd(lang, t), breadcrumbJsonLd(lang, t, 'about')],
    body: [hero, story, expect, where, details, ctaBand(lang, t)].join('\n\n'),
  };
}

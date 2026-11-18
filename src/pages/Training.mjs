import { e, href } from '../components/util.mjs';
import { icon } from '../components/icons.mjs';
import { section, sectionHead, pageHero, bulletList, iconCards, ctaBand, btnPrimary } from '../components/Sections.mjs';
import { serviceJsonLd, breadcrumbJsonLd } from './structured-data.mjs';

export default function Training(lang, t) {
  const p = t.pages.training;
  // Training is not one of the four form services, so it preselects "Other".
  const contactUrl = href(lang, 'contact') + '?service=other';

  const hero = pageHero(lang, t, {
    pageId: 'training', ...p.hero,
    extra: `        <div class="mt-9 flex flex-wrap gap-3">${btnPrimary(contactUrl, p.cta)}</div>`,
  });

  const tracks = section({ id: 'tracks', labelledby: 'tracks-title' }, `${sectionHead({ id: 'tracks-title', eyebrow: p.tracks.eyebrow, title: p.tracks.title })}
        <div class="grid gap-5 lg:grid-cols-2">
${p.tracks.items.map((tr, i) => `          <article class="reveal glass glass-hover relative overflow-hidden rounded-3xl p-7 sm:p-10"${i === 0 ? ' style="border-color:rgba(255,122,0,.3)"' : ''}>
            <span class="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">${icon(i === 0 ? 'database' : 'grid')}</span>
            <h3 class="mt-6 text-2xl font-bold text-white">${e(tr.t)}</h3>
            <p class="mt-3 leading-relaxed text-slate-300">${e(tr.d)}</p>
            ${bulletList(tr.bullets, 'mt-6')}
          </article>`).join('\n')}
        </div>`);

  const formats = section({ id: 'formats', labelledby: 'formats-title', alt: true }, `${sectionHead({ id: 'formats-title', eyebrow: p.formats.eyebrow, title: p.formats.title })}
${iconCards(p.formats.items, [icon('users'), icon('graduation'), icon('globe')], 'md:grid-cols-3')}`);

  return {
    title: p.title,
    description: p.description,
    jsonLd: [serviceJsonLd(lang, 'training', p.hero.eyebrow, p.description), breadcrumbJsonLd(lang, t, 'training')],
    body: [hero, tracks, formats, ctaBand(lang, t, { primaryUrl: contactUrl, primaryLabel: p.cta })].join('\n\n'),
  };
}

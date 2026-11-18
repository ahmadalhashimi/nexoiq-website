import { SITE } from '../site.config.mjs';
import { e, mailto } from '../components/util.mjs';
import { icon, linkedin } from '../components/icons.mjs';
import { pageHero } from '../components/Sections.mjs';
import { ContactForm } from '../components/ContactForm.mjs';
import { breadcrumbJsonLd } from './structured-data.mjs';

export default function Contact(lang, t) {
  const p = t.pages.contact;
  const d = p.direct;

  const hero = pageHero(lang, t, { pageId: 'contact', ...p.hero });

  const directCard = (url, ico, label, value, external = false) => `            <a href="${url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''} class="glass glass-hover group flex items-center gap-4 rounded-2xl p-4">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white">${ico}</span>
              <span class="min-w-0">
                <span class="block font-mono text-[11px] uppercase tracking-wider text-slate-500">${e(label)}</span>
                <span class="block truncate font-semibold text-white transition-colors group-hover:text-accent" dir="ltr">${e(value)}</span>
              </span>
            </a>`;

  const body = `    <section class="scroll-mt-24 pb-24" aria-labelledby="form-title">
      <div class="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div class="glass rounded-3xl p-6 sm:p-10">
          <h2 id="form-title" class="mb-6 text-2xl font-bold text-white">${e(p.form.title)}</h2>
          ${ContactForm(lang, t)}
        </div>

        <aside class="space-y-8">
          <div>
            <h2 class="text-lg font-semibold text-white">${e(d.title)}</h2>
            <p class="mt-1 text-sm text-slate-400">${e(d.lead)}</p>
            <div class="mt-4 space-y-3">
${directCard(mailto('Project enquiry — NexoIQ'), icon('building'), d.biz, SITE.email)}
${directCard(`mailto:${SITE.personalEmail}`, icon('mail'), d.person, SITE.personalEmail)}
${directCard(SITE.linkedin, linkedin(), 'LinkedIn', SITE.linkedinLabel, true)}
            </div>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white">${e(p.engagement.title)}</h2>
            <ul class="mt-4 space-y-3">
${p.engagement.items.map((it, i) => `              <li class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"><span class="shrink-0 text-accent">${icon(['chat', 'briefcase', 'calendar'][i], 20)}</span><span><span class="block font-semibold text-white">${e(it.t)}</span><span class="mt-0.5 block text-sm text-slate-400">${e(it.d)}</span></span></li>`).join('\n')}
            </ul>
          </div>

          <p class="flex items-start gap-3 text-sm leading-relaxed text-slate-500"><span class="shrink-0">${icon('pin', 18)}</span><span>${e(p.location)}</span></p>
        </aside>
      </div>
    </section>`;

  return {
    title: p.title,
    description: p.description,
    jsonLd: [breadcrumbJsonLd(lang, t, 'contact')],
    scripts: ['/assets/contact-form.js'],
    body: [hero, body].join('\n\n'),
  };
}

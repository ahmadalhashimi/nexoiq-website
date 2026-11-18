// Netlify Forms contact form.
//
// How it works on Netlify static hosting:
//  - Netlify detects <form data-netlify="true" name="contact"> at deploy time and
//    registers a form called "contact". The same form (same field names) is
//    rendered in EN, NL and AR, so all submissions arrive in ONE form in the dashboard.
//  - The hidden "form-name" input is required for Netlify to route the POST.
//  - Spam: honeypot field "bot-field" (netlify-honeypot) + Netlify's built-in
//    spam filtering. reCAPTCHA can be enabled with data-netlify-recaptcha (see docs/netlify-forms.md).
//  - The form submits as a normal POST and Netlify redirects to the localised
//    thank-you page in `action`. No JavaScript is required to submit;
//    src/scripts/contact-form.js adds friendlier, localised validation.
//
// Option VALUES are kept in English so notifications are consistent across
// languages; only the visible labels are translated.
import { e, href } from './util.mjs';
import { arrow } from './icons.mjs';

export const SERVICE_VALUES = ['Data Engineering', 'Odoo ERP', 'ERP Integration', 'Other'];
// URL ?service=<key> preselects a service (used by CTAs on service pages).
export const SERVICE_KEYS = ['data-engineering', 'odoo', 'integration', 'other'];
export const ENGAGEMENT_VALUES = ['Monthly Consulting', 'Project-Based'];

const input = 'mt-2 block w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';
const label = 'block text-sm font-medium text-slate-200';
const req = '<span class="text-accent" aria-hidden="true"> *</span>';
const err = (id) => `<p id="${id}-error" class="field-error mt-1.5 hidden text-sm text-red-400"></p>`;

export function ContactForm(lang, t) {
  const f = t.pages.contact.form;
  const field = (id, name, lbl, type, attrs = '') => `
          <div data-field>
            <label for="${id}" class="${label}">${e(lbl)}${req}</label>
            <input id="${id}" name="${name}" type="${type}" class="${input}" required aria-describedby="${id}-error"${attrs}>
            ${err(id)}
          </div>`;

  return `<form name="contact" method="POST" action="${href(lang, 'thanks')}" data-netlify="true" netlify-honeypot="bot-field"
          class="space-y-5" data-contact-form
          data-msg-required="${e(f.errors.required)}" data-msg-email="${e(f.errors.email)}"
          data-msg-consent="${e(f.errors.consent)}" data-msg-min="${e(f.errors.minMessage)}"
          data-msg-sending="${e(f.sending)}">
          <input type="hidden" name="form-name" value="contact">
          <input type="hidden" name="language" value="${lang}">
          <p class="honeypot" aria-hidden="true">
            <label>${e(f.honeypot)} <input type="text" name="bot-field" tabindex="-1" autocomplete="off"></label>
          </p>

          <div class="hidden rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert" data-error-summary>${e(f.errors.summary)}</div>
          <p class="text-sm text-slate-500">${e(f.requiredNote)}</p>

          <div class="grid gap-5 sm:grid-cols-2">${field('cf-name', 'name', f.name, 'text', ' autocomplete="name" maxlength="120"')}${field('cf-email', 'email', f.email, 'email', ' autocomplete="email" maxlength="200" dir="ltr" inputmode="email"')}
          </div>
          <div class="grid gap-5 sm:grid-cols-2">${field('cf-company', 'company', f.company, 'text', ' autocomplete="organization" maxlength="160"')}${field('cf-country', 'country', f.country, 'text', ` autocomplete="country-name" maxlength="80" placeholder="${e(f.countryPlaceholder)}"`)}
          </div>

          <div data-field>
            <label for="cf-service" class="${label}">${e(f.service)}${req}</label>
            <select id="cf-service" name="service" class="${input}" required aria-describedby="cf-service-error" data-service-select>
              <option value="">${e(f.servicePlaceholder)}</option>
${SERVICE_VALUES.map((v, i) => `              <option value="${e(v)}" data-key="${SERVICE_KEYS[i]}">${e(f.serviceOptions[i])}</option>`).join('\n')}
            </select>
            ${err('cf-service')}
          </div>

          <fieldset data-field aria-describedby="cf-engagement-error">
            <legend class="${label}">${e(f.engagement)}${req}</legend>
            <div class="mt-2 grid gap-3 sm:grid-cols-2">
${ENGAGEMENT_VALUES.map((v, i) => `              <label class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-[15px] text-slate-200 transition has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                <input type="radio" name="engagement" value="${e(v)}" class="h-4 w-4 accent-[#ff7a00]" required${i === 0 ? ' id="cf-engagement"' : ''}>
                <span>${e(f.engagementOptions[i])}</span>
              </label>`).join('\n')}
            </div>
            ${err('cf-engagement')}
          </fieldset>

          <div data-field>
            <label for="cf-message" class="${label}">${e(f.message)}${req}</label>
            <textarea id="cf-message" name="message" rows="6" class="${input}" required minlength="20" maxlength="5000" aria-describedby="cf-message-hint cf-message-error" placeholder="${e(f.messageHint)}"></textarea>
            <p id="cf-message-hint" class="sr-only">${e(f.messageHint)}</p>
            ${err('cf-message')}
          </div>

          <div data-field>
            <label class="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
              <input id="cf-consent" type="checkbox" name="privacy-consent" value="yes" required class="mt-1 h-4 w-4 shrink-0 accent-[#ff7a00]" aria-describedby="cf-consent-error">
              <span>${e(f.consent)} <a class="text-accent underline-offset-2 hover:underline" href="${href(lang, 'privacy')}">${e(f.consentLink)}</a>.<span class="text-accent" aria-hidden="true"> *</span></span>
            </label>
            ${err('cf-consent')}
          </div>

          <button type="submit" class="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(255,122,0,.7)] transition hover:bg-accent-soft disabled:cursor-wait disabled:opacity-70" data-submit>
            <span data-submit-label>${e(f.submit)}</span>${arrow()}
          </button>
        </form>`;
}

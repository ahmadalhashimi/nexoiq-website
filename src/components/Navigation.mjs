import { PAGES, LANGS } from '../site.config.mjs';
import { e, href } from './util.mjs';

const NAV_PAGES = PAGES.filter((p) => p.nav);

/** Desktop navigation list (xl and up). */
export function desktopNav(lang, t, currentId) {
  return `<ul class="hidden items-center gap-5 text-[13.5px] text-slate-400 xl:flex">
${NAV_PAGES.map((p) => {
  const cur = p.id === currentId;
  return `        <li><a class="nav-link whitespace-nowrap transition-colors hover:text-white${cur ? ' active' : ''}" href="${href(lang, p.id)}"${cur ? ' aria-current="page"' : ''}>${e(t.common.nav[p.id])}</a></li>`;
}).join('\n')}
      </ul>`;
}

/** Mobile navigation panel (below xl). */
export function mobileNav(lang, t, currentId) {
  return `<div id="mobile-menu" class="hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/5 bg-ink/95 backdrop-blur-xl xl:hidden">
      <ul class="mx-auto flex max-w-7xl flex-col px-5 py-4 text-base sm:px-8">
${NAV_PAGES.map((p) => {
  const cur = p.id === currentId;
  return `        <li><a class="block py-3 ${cur ? 'font-semibold text-accent' : 'text-slate-300 hover:text-white'}" href="${href(lang, p.id)}"${cur ? ' aria-current="page"' : ''}>${e(t.common.nav[p.id])}</a></li>`;
}).join('\n')}
        <li class="pt-3"><a class="inline-flex rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-ink" href="${href(lang, 'contact')}">${e(t.common.cta.book)}</a></li>
      </ul>
    </div>`;
}

const LANG_LABEL = { en: 'EN', nl: 'NL', ar: 'ع' };
const LANG_TITLE = { en: 'English', nl: 'Nederlands', ar: 'العربية' };

/** Language switcher: real links to the same page in each language (crawlable, no JS needed). */
export function langSwitcher(lang, t, pageId) {
  return `<div class="flex rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs" role="group" aria-label="${e(t.common.language)}">
${LANGS.map((l) => {
  const cur = l === lang;
  const arStyle = l === 'ar' ? ' text-sm' : ' font-mono';
  return `          <a class="lang-btn rounded-full px-2.5 py-1.5 font-semibold transition-colors sm:px-3${arStyle}" href="${href(l, pageId || 'home')}" hreflang="${l}" lang="${l}" title="${LANG_TITLE[l]}" data-lang="${l}"${cur ? ' aria-current="true"' : ''}>${LANG_LABEL[l]}</a>`;
}).join('\n')}
        </div>`;
}

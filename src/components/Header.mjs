import { e, href } from './util.mjs';
import { icon } from './icons.mjs';
import { desktopNav, mobileNav, langSwitcher } from './Navigation.mjs';

export function Header(lang, t, pageId) {
  return `<header id="top" class="fixed inset-x-0 top-0 z-50 transition-colors duration-300" data-header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8" aria-label="${e(t.common.navLabel)}">
      <a href="${href(lang, 'home')}" class="group flex shrink-0 items-center gap-2.5" aria-label="NexoIQ — ${e(t.common.nav.home)}">
        <img src="/images/logo-mark.webp" alt="" width="40" height="40" class="h-10 w-10 rounded-full shadow-[0_0_18px_-4px_rgba(255,122,0,.7)] transition group-hover:shadow-[0_0_26px_-2px_rgba(255,122,0,.9)]">
        <span class="font-semibold tracking-tight text-white" dir="ltr">Nexo<span class="text-accent">IQ</span></span>
      </a>

      ${desktopNav(lang, t, pageId)}

      <div class="flex items-center gap-3">
        <a href="${href(lang, 'contact')}" class="hidden whitespace-nowrap rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent-soft 2xl:inline-flex">${e(t.common.cta.book)}</a>
        ${langSwitcher(lang, t, pageId)}
        <button type="button" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] xl:hidden" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="${e(t.common.menu)}">
          <span data-icon-open>${icon('menu', 18)}</span><span data-icon-close class="hidden">${icon('close', 18)}</span>
        </button>
      </div>
    </nav>

    ${mobileNav(lang, t, pageId)}
  </header>`;
}

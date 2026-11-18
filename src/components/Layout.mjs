import { SITE, LANGS, DEFAULT_LANG } from '../site.config.mjs';
import { e, href, absUrl, isRtl } from './util.mjs';
import { Header } from './Header.mjs';
import { Footer } from './Footer.mjs';

const OG_LOCALE = { en: 'en_GB', nl: 'nl_NL', ar: 'ar_SA' };

function alternates(pageId) {
  const links = LANGS.map((l) => `  <link rel="alternate" hreflang="${l}" href="${absUrl(href(l, pageId))}">`);
  links.push(`  <link rel="alternate" hreflang="x-default" href="${absUrl(href(DEFAULT_LANG, pageId))}">`);
  return links.join('\n');
}

/**
 * Full HTML document.
 * @param {object} o
 * @param {string} o.lang
 * @param {object} o.t          content for the language
 * @param {string|null} o.pageId  null for pages outside the PAGES list (404)
 * @param {string} o.title
 * @param {string} o.description
 * @param {string} o.body       inner HTML of <main>
 * @param {object[]} [o.jsonLd] structured data objects
 * @param {boolean} [o.noindex]
 * @param {string[]} [o.scripts] extra script paths (deferred)
 */
export function Layout({ lang, t, pageId, title, description, body, jsonLd = [], noindex = false, scripts = [] }) {
  const canonical = pageId ? absUrl(href(lang, pageId)) : null;
  const dir = isRtl(lang) ? 'rtl' : 'ltr';
  const indexable = !noindex && pageId;

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" class="scroll-smooth">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${e(title)}</title>
  <meta name="description" content="${e(description)}">
  <meta name="robots" content="${indexable ? 'index, follow' : 'noindex, follow'}">
  <meta name="theme-color" content="#08090c">
${canonical && indexable ? `  <link rel="canonical" href="${canonical}">\n${alternates(pageId)}` : ''}

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="NexoIQ">
  <meta property="og:title" content="${e(title)}">
  <meta property="og:description" content="${e(description)}">
${canonical ? `  <meta property="og:url" content="${canonical}">` : ''}
  <meta property="og:image" content="${absUrl(SITE.ogImage)}">
  <meta property="og:image:alt" content="NexoIQ logo">
  <meta property="og:locale" content="${OG_LOCALE[lang]}">
${LANGS.filter((l) => l !== lang).map((l) => `  <meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join('\n')}
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${e(title)}">
  <meta name="twitter:description" content="${e(description)}">
  <meta name="twitter:image" content="${absUrl(SITE.ogImage)}">

  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/favicon.png">
${jsonLd.map((j) => `  <script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <script>document.documentElement.classList.add('js');</script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    if (window.tailwind) tailwind.config = {
      theme: {
        extend: {
          colors: {
            ink: { DEFAULT: '#08090c', 900: '#0c0e13', 800: '#11141b', 700: '#1a1e27' },
            accent: { DEFAULT: '#ff7a00', soft: '#ffa142' }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
          }
        }
      }
    };
  </script>
  <link rel="stylesheet" href="/assets/site.css">
</head>

<body class="bg-ink text-slate-200 font-sans antialiased overflow-x-hidden" data-page="${pageId || '404'}" data-lang="${lang}">
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">${e(t.common.skip)}</a>

  ${Header(lang, t, pageId)}

  <main id="main">
${body}
  </main>

  ${Footer(lang, t)}

  <script src="/assets/site.js" defer></script>
${scripts.map((s) => `  <script src="${s}" defer></script>`).join('\n')}
</body>
</html>
`;
}

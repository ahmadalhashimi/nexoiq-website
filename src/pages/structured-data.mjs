// schema.org structured data (JSON-LD).
import { SITE, AREA_SERVED } from '../site.config.mjs';
import { href, absUrl } from '../components/util.mjs';

const areaServed = AREA_SERVED.map((name) => ({ '@type': 'Country', name }));

export const orgRef = { '@type': 'ProfessionalService', '@id': `${SITE.url}/#organization`, name: 'NexoIQ', url: `${SITE.url}/` };

export function orgJsonLd(lang, t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#organization`,
    name: 'NexoIQ',
    url: absUrl(href(lang, 'home')),
    logo: absUrl('/logo.jpg'),
    image: absUrl(SITE.ogImage),
    email: SITE.email,
    description: t.pages.home.description,
    inLanguage: lang,
    areaServed,
    availableLanguage: ['en', 'nl', 'ar'],
    address: { '@type': 'PostalAddress', addressLocality: 'Rotterdam', addressRegion: 'Zuid-Holland', addressCountry: 'NL' },
    founder: {
      '@type': 'Person',
      name: SITE.founder,
      jobTitle: 'Data & ERP Consultant',
      sameAs: [SITE.linkedin],
      knowsAbout: ['Azure Databricks', 'Delta Lake', 'Data engineering', 'SAP Datasphere', 'Power BI', 'Odoo 18', 'Python', 'PostgreSQL', 'Data modeling', 'Azure DevOps'],
    },
  };
}

export function serviceJsonLd(lang, pageId, name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absUrl(href(lang, pageId)),
    inLanguage: lang,
    provider: orgRef,
    areaServed,
  };
}

export function breadcrumbJsonLd(lang, t, pageId) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.common.nav.home, item: absUrl(href(lang, 'home')) },
      { '@type': 'ListItem', position: 2, name: t.common.nav[pageId], item: absUrl(href(lang, pageId)) },
    ],
  };
}

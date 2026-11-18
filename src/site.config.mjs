// Site-wide settings. Change contact details or URLs here, then rebuild.

export const SITE = {
  url: 'https://nexoiq.nl',
  name: 'NexoIQ',
  email: 'info@nexoiq.nl',
  personalEmail: 'ahmad@nexoiq.nl',
  linkedin: 'https://www.linkedin.com/in/ahmad-alhashimi-4ab2a9127/',
  linkedinLabel: 'in/ahmad-alhashimi',
  kvk: '42175764',
  sbi: '63100 · 6202',
  ogImage: '/logo.jpg',
  founder: 'Ahmad Alhashimi',
};

// English is the default language and lives at the site root.
export const LANGS = ['en', 'nl', 'ar'];
export const DEFAULT_LANG = 'en';
export const RTL_LANGS = ['ar'];

// Every page that is generated for every language.
// `nav` = shown in the main navigation (in this order).
export const PAGES = [
  { id: 'home', slug: '', nav: true },
  { id: 'dataEngineering', slug: 'data-engineering/', nav: true },
  { id: 'odoo', slug: 'odoo-erp-consulting/', nav: true },
  { id: 'integration', slug: 'erp-data-integration/', nav: true },
  { id: 'training', slug: 'training/', nav: true },
  { id: 'about', slug: 'about/', nav: true },
  { id: 'contact', slug: 'contact/', nav: true },
  { id: 'privacy', slug: 'privacy/' },
  { id: 'thanks', slug: 'contact/thanks/', noindex: true },
];

export const SERVICE_PAGES = ['dataEngineering', 'odoo', 'integration'];

// Countries listed as served areas in structured data (schema.org areaServed).
export const AREA_SERVED = ['Netherlands', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'];

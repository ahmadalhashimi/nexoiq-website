import { SITE, PAGES, DEFAULT_LANG, RTL_LANGS } from '../site.config.mjs';

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape plain text for HTML text and attribute contexts. */
export const e = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

/** Join template fragments, dropping false/null/undefined. */
export const join = (parts) => parts.filter((p) => p !== false && p != null).join('');

export const isRtl = (lang) => RTL_LANGS.includes(lang);

export const pageById = (id) => {
  const p = PAGES.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown page id: ${id}`);
  return p;
};

/** Root-relative URL of a page in a language, e.g. /ar/odoo-erp-consulting/ */
export const href = (lang, id, hash = '') => {
  const { slug } = pageById(id);
  const prefix = lang === DEFAULT_LANG ? '/' : `/${lang}/`;
  return prefix + slug + hash;
};

export const absUrl = (path) => SITE.url + path;

export const mailto = (subject) => `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

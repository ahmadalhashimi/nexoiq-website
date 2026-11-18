# nexoiq.nl

Static website for NexoIQ, in English (`/`), Dutch (`/nl/`) and Arabic (`/ar/`, right-to-left).

Pages are generated from `src/` by a small Node script with **no dependencies**.
The generated HTML is committed to the repository root, which Netlify already
publishes, so Netlify needs **no build command and no settings changes**.

## Editing the site

1. Change text in `src/content/en.mjs`, `nl.mjs` and `ar.mjs`. The three files
   must have the same structure, and the build fails with a clear message if a
   key or list is missing.
2. Rebuild:

   ```sh
   node src/build.mjs
   ```

   Requires Node 18 or newer. The build validates the content, regenerates every
   page, copies assets, writes `sitemap.xml` and `robots.txt`, and checks every
   internal link and anchor.
3. Commit both the `src/` changes and the regenerated files.

Don't edit generated files (`index.html`, `*/index.html`, `assets/`, `sitemap.xml`, …)
by hand. They are overwritten on every build.

## Structure

```
src/
  build.mjs             generator (run this)
  site.config.mjs       URLs, emails, KvK, page list, languages
  content/              en.mjs · nl.mjs · ar.mjs   (all text)
  components/           Layout, Header, Navigation, Footer, ContactForm, Calculator, Sections, icons
  pages/                Home, DataEngineering, OdooConsulting, ERPIntegration, Training, About, Contact, Simple (privacy/thanks/404)
  styles/               global.css · navigation.css · services.css   → assets/site.css
  scripts/              animations.js → assets/site.js · calculator.js · contact-form.js
public/                 copied as-is to the site root (favicon, images)
docs/netlify-forms.md   Netlify Forms dashboard + notification setup and test procedure
```

## Pages

| Page | EN | NL | AR |
|---|---|---|---|
| Home | `/` | `/nl/` | `/ar/` |
| Data Engineering | `/data-engineering/` | `/nl/data-engineering/` | `/ar/data-engineering/` |
| Odoo ERP Consulting | `/odoo-erp-consulting/` | … | … |
| ERP & Data Integration | `/erp-data-integration/` | … | … |
| Training & Mentorship | `/training/` | … | … |
| About NexoIQ | `/about/` | … | … |
| Contact (form) | `/contact/` | … | … |
| Privacy statement | `/privacy/` | … | … |
| Form thank-you (noindex) | `/contact/thanks/` | … | … |
| 404 | `/404.html` | | |

Every page has a canonical URL, `hreflang` alternates (en, nl, ar, x-default),
Open Graph tags and JSON-LD structured data.

## Savings calculator

On the Data Engineering page. The original formula is preserved:
`savings = round(TB × 4,800 + 2,200)` €/year, `speed-up = 2.5 + 0.35 × TB`.
Results are labelled as illustrative, with the formula and assumptions shown.
The coefficients live in `src/components/Calculator.mjs`. If you change them,
also update the `assumptions` text in all three content files.

## Contact form

Netlify Forms. See [docs/netlify-forms.md](docs/netlify-forms.md) for the
required dashboard setup, email notifications and how to test on a deploy preview.

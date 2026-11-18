# Netlify Forms: dashboard setup, notifications and testing

The contact form (`/contact/`, `/nl/contact/`, `/ar/contact/`) uses **Netlify Forms**.
There is no server code and no API key in the repository. Netlify reads the form
from the deployed HTML and stores submissions in the Netlify dashboard.

All three language versions use the same form name, `contact`, and the same
fields, so every submission arrives in **one** form. The hidden `language` field
tells you which language the visitor used.

| Field | Name | Notes |
|---|---|---|
| Full name | `name` | required |
| Business email | `email` | required, validated |
| Company name | `company` | required |
| Country | `country` | required |
| Service required | `service` | `Data Engineering` / `Odoo ERP` / `ERP Integration` / `Other` (values always in English) |
| Engagement type | `engagement` | `Monthly Consulting` / `Project-Based` |
| Project description | `message` | required, at least 20 characters |
| Privacy consent | `privacy-consent` | required checkbox, value `yes` |
| Language | `language` | hidden: `en`, `nl` or `ar` |
| Spam trap | `bot-field` | hidden honeypot, must stay empty |

## 1. One-time dashboard configuration (required)

Nothing in this repository changes Netlify build or deploy settings. Do the
following once in the Netlify UI (**Site configuration → Forms**):

1. **Enable form detection.** Netlify only registers forms when form detection is on.
   Turn it on and redeploy. After the next deploy, a form called **`contact`**
   appears under **Forms**.
2. **Spam filtering.** Netlify filters spam automatically (Akismet), and the honeypot
   field `bot-field` is already wired up through `netlify-honeypot="bot-field"`.
   Spam goes to the **Spam submissions** tab of the form, so check it occasionally.
3. **Optional: reCAPTCHA.** Only if spam becomes a problem: add
   `data-netlify-recaptcha="true"` to the `<form>` and a `<div data-netlify-recaptcha="true"></div>`
   before the submit button in `src/components/ContactForm.mjs`, then rebuild.
   This loads Google reCAPTCHA, so update the privacy statement
   (`src/content/*.mjs` → `privacy.sections`) to mention Google.

## 2. Email notifications

**Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**

- Event: *New form submission*
- Email to notify: `info@nexoiq.nl`
- Form: `contact` (or *Any form*)

Optional: a second notification to `ahmad@nexoiq.nl`, or a Slack or webhook
notification for faster follow-up.

Notification emails come from Netlify (`formresponses@netlify.com`). Add that
address to your safe senders so the emails don't land in spam.

## 3. Testing before production

Netlify Forms only work on a Netlify deploy, not on a local server (a local
server returns an error or ignores the POST). Safe test procedure:

1. Push the feature branch (**not** `main`) and open a pull request.
   If **Deploy Previews** are enabled (Site configuration → Build & deploy →
   Branches and deploy contexts), Netlify builds a preview at a separate URL.
   The production site is not touched.
2. On the preview URL, submit the form once in each language (`/contact/`, `/nl/contact/`, `/ar/contact/`).
3. Check that:
   - you land on the matching thank-you page (`/contact/thanks/`, `/nl/contact/thanks/`, `/ar/contact/thanks/`);
   - the submission appears in **Forms → contact**, with all fields and the correct `language`;
   - the notification email arrives.
4. Delete the test submissions in the dashboard.

> Note: whether deploy-preview submissions are stored depends on the site's
> settings. If they don't appear, check **Forms → Settings**. Forms are
> registered per deploy, so production starts accepting submissions only after
> the change is merged and deployed to production.

## 4. Fallback

If the form is unavailable for any reason, visitors can still use the mailto
links on the contact page (`info@nexoiq.nl`, `ahmad@nexoiq.nl`), which are kept
on purpose.

## 5. Privacy

Submissions are stored by Netlify (processor). The privacy statement on
`/privacy/` describes this. Delete old submissions in line with the retention
period stated there (24 months for enquiries that do not lead to an engagement).

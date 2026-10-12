# Joshua Macabalitao — Portfolio

Static personal portfolio built with Astro, Tailwind CSS, and TypeScript. The site is configured for GitHub Pages at `https://joshuamiguel914-alt.github.io/portfolio/`.

## Local setup

1. Install Node.js 22.12 or newer.
2. Install dependencies with `npm install`.
3. Start the local development server with `npm run dev`.
4. Run the Astro diagnostics with `npm run check`.

## Build and preview

- Build the static site: `npm run build`
- Preview the production build locally: `npm run preview`

The generated site is written to `dist/`.

## Deploy to GitHub Pages

1. Push this project to the `portfolio` repository under `joshuamiguel914-alt`.
2. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually. The workflow builds the site and publishes `dist/`.

`astro.config.mjs` sets `site` and `base` for the project Pages URL. If the repository name changes, update `base` there and the sitemap URL in `public/robots.txt`.

## Content and placeholders to replace

- **Photo:** Replace the photo placeholders on the Home and About pages with a portrait.
- **Résumé:** Add the actual PDF at `public/resume.pdf`; the About page already links to it.
- **Phone:** Replace `[ADD PHONE]` in `src/content/profile.json`.
- **Case-study details and metrics:** Fill every `[ADD ...]` item in `src/content/work/*.md` with verified project details. Do not publish invented performance statistics.
- **Information Systems project:** Replace the project date and project placeholder details in `src/content/home.json` and `src/content/work/information-systems-project.md`.
- **TESDA certification date:** Replace `[ADD DATE]` in `src/content/profile.json` if you want to show the date.
- **Contact form:** Replace `REPLACE_WITH_FORM_ID` in `src/components/ContactForm.astro` with your Formspree form ID. The form only reports success when the endpoint confirms it received the message.

Portfolio copy is editable in `src/content/profile.json`, `src/content/home.json`, and the Markdown case studies in `src/content/work/`.

# Dourayed Glii — Portfolio

Personal portfolio for Dourayed Glii, a Computer Engineering student at ENSIT, Tunisia, focused on artificial intelligence, intelligent systems, and modern software engineering.

## Features

- Bilingual English/French experience.
- Dark and light themes with persisted preference.
- Responsive sections for profile, skills, projects, experience, certifications, and contact.
- Downloadable CV from `public/cv.pdf`.
- Contact form that prepares an email in the visitor's default mail client.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `oxfmt`

## Architecture

The application is a Vite single-page application. `src/main.tsx` mounts the root React component, `src/App.tsx` contains the page sections and translations, and `src/index.css` contains global styles and Tailwind CSS imports. Static assets are served from `public/`.

## Project structure

```text
public/            Static assets, including the CV
src/App.tsx        Main application, translations, sections, and interactions
src/index.css      Global styles and Tailwind CSS entrypoint
src/main.tsx       React entrypoint
index.html         Vite document shell
vite.config.ts     Vite, React, Tailwind, and site configuration
```

## Prerequisites

- Node.js compatible with the versions declared in the project toolchain configuration.
- npm (the committed `package-lock.json` is the reproducible npm lockfile).

## Installation

```bash
npm ci
```

## Development

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build and preview

```bash
npm run build
npm run preview
```

## Configuration

The portfolio does not currently require runtime environment variables. Vite may use `FIGMA_PUBLIC_URL`, `FIGMA_DEV_SERVER_HOST`, and `PORT` for the development/build integration supplied by the existing configuration.

## Contact behavior

The contact form does not send mail from a server. Submitting it opens a `mailto:` link addressed to `dourayedg@gmail.com`; delivery depends on the visitor having a configured email client. Direct server-side delivery is a future improvement.

## Validation

Run the production build with:

```bash
npm run build
```

## Security considerations

- Do not commit `.env` files, API keys, or generated dependency directories.
- The contact form uses a client-side `mailto:` link and does not transmit form data to this application.

## Known limitations and future improvements

- No server-side contact delivery or spam protection is currently configured.
- Automated tests and accessibility checks are not yet included.
- Add a privacy-preserving contact service if server-side delivery becomes necessary.

# Amit Karma — Portfolio Website

A single-page portfolio built with **Angular 21**, TypeScript, standalone components, and Signals. All content (experience, skills, projects, education, contact) is sourced strictly from Amit Karma's resume and lives in one place: `src/app/services/resume-data.service.ts`.

## Tech Stack

- Angular 21 (standalone components, no NgModules)
- Angular Signals
- Angular Router (wired up, ready for multi-page growth)
- TypeScript
- SCSS (CSS custom properties as design tokens, see `src/styles.scss`)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/        sticky nav + mobile menu
│   │   ├── hero/           name, title, intro, resume download / contact CTAs
│   │   ├── about/          professional summary + quick stats
│   │   ├── skills/         skills grouped into responsive cards
│   │   ├── experience/     work history as a connected timeline
│   │   ├── projects/       key achievements as project cards
│   │   ├── education/      degree + institution
│   │   ├── contact/        email / phone / LinkedIn / GitHub cards
│   │   └── footer/
│   ├── models/
│   │   └── portfolio.model.ts   TypeScript interfaces for all content
│   ├── services/
│   │   └── resume-data.service.ts   single source of truth for resume content
│   ├── app.component.ts/.html/.scss
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── Amit_Karma_Resume.pdf   powers the "Download Resume" button
├── index.html
├── main.ts
└── styles.scss
```

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:4200)
ng serve

# 3. Build for production (outputs to dist/portfolio)
ng build
```

If you don't have the Angular CLI installed globally, you can use `npx ng serve` / `npx ng build` instead, or run the `npm start` / `npm run build` scripts defined in `package.json`.

## Updating Content

All resume content is centralized in `src/app/services/resume-data.service.ts`. Edit the `profile`, `skillGroups`, `experience`, `projects`, and `education` fields there — every component reads from this single service, so the whole site updates automatically.

## Notes

- Where the source resume didn't specify a detail (e.g. per-role tech stack for some earlier positions), the relevant section shows an honest placeholder ("Not specified in resume") rather than inventing content.
- The design uses a white background, blue accent (`--color-accent`), rounded cards, sticky navigation, smooth scrolling, and light entrance/hover animations, per the project brief.

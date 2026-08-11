# MD Sajjad Hossain - Research Portfolio

Academic portfolio for PhD applications, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive animated interface
- Light-first navy, blue, teal, and gold color system
- Experience, skills, research interests, and education
- Research projects with an embedded Google Drive demonstration
- Selected publications and a manuscript-under-review section
- GitHub Pages static export and automated deployment
- Optional light/dark theme toggle

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## Deploy on GitHub Pages

Push changes to the `main` branch. The workflow in `.github/workflows/nextjs.yml` builds and deploys the site automatically.

## Update content

Most portfolio information is centralized in `lib/data.ts`.

- Replace the profile placeholder in `public/images/` and update `profileImage` when ready.
- Replace `public/resume.pdf` to update the downloadable CV.
- Update publications, projects, experience, skills, and contact links in `lib/data.ts`.

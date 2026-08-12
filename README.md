# Coefficient frontend prototype

Coefficient is an executive-facing SaaS concept for understanding where AI creates measurable value, where people remain essential, and how human and AI work can be combined more effectively.

> Human potential, multiplied by AI.

This repository contains a high-level, non-functional pitch prototype. It is intentionally optimized for narrative clarity and visual polish rather than production integrations or backend behavior.

## Stack

- Next.js App Router
- TypeScript with strict checking
- Tailwind CSS
- ESLint

## Getting started

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful commands

```bash
npm run dev        # start the local development server
npm run check      # run linting and TypeScript checks
npm run build      # create a production build
```

## Project structure

```text
src/
  app/          routes, layouts, and global styles
  components/   reusable interface components
  features/     prototype sections grouped by product story
  lib/          shared utilities and static data
public/         images, icons, and other static assets
```

## Prototype principles

- Present a coherent executive story before adding interaction depth.
- Use purposeful layouts, restrained motion, and credible sample data.
- Keep static prototype data close to the feature that presents it.
- Avoid backend services until the product narrative is validated.
- Review every visible change at desktop and mobile sizes.

## Collaboration

Create focused branches from `main` and open a pull request for review. Visible changes should include screenshots and pass `npm run check` and `npm run build` before merge.


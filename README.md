# Krishna Digarse — Portfolio (Next.js)

Minimal personal portfolio built with Next.js (App Router), Tailwind CSS and next/font.  
This repo is a work-in-progress — includes a responsive navbar with hamburger, a resume PDF viewer modal, contact page with profile image, and simple animations/utilities in globals.css.

## Tech stack
- Next.js (App Router)
- React
- Tailwind CSS
- next/font (Fira Code)
- Vanilla CSS (global utilities + custom keyframes)

## Features
- Responsive navbar with hamburger menu for mobile
- Inline SVG social icons (LinkedIn, GitHub)
- Resume viewer modal (PDF in an iframe) with toolbar (download / print / open)
- Contact page layout with profile image and contact details
- Small CSS keyframes animation (`fadeInUp`)
- Hover underline utility for nav and buttons

## Quick start

1. Install
```bash
npm install
# or pnpm install
# or yarn
```

2. Run development server
```bash
npm run dev
# open http://localhost:3000
```

3. Build / start
```bash
npm run build
npm run start
```

## Recommended scripts
(defined in package.json created by create-next-app)
- dev — start dev server
- build — production build
- start — run production server
- lint — run ESLint (if configured)

## Important files / structure
- app/
  - layout.js — global layout, metadata and font loaded via next/font
  - globals.css — Tailwind import, font @import fallback, utilities (hover underline, keyframes, etc.)
  - page.js — home/hero content and resume modal logic (client component)
  - contact/page.js — contact page with image + details
  - components/
    - Navbar.js — responsive navbar (Next/Image or inline SVG logo)
    - Footer.js — footer component
- public/
  - logo.png — site logo (or swap for inline SVG)
  - profile.jpg — contact profile image
  - Krishna_Resume.pdf — resume file used by the viewer

Adjust paths if you rename assets.

## Fonts
Fira Code is loaded in layout.js via next/font/google. If you add VT323 or other Google fonts, use next/font and include the explicit weight(s) supported by the font to avoid "missing weight" errors.

Example (layout.js):
```js
import { Fira_Code } from 'next/font/google'
const fira = Fira_Code({ subsets: ['latin'], weight: ['400','700'], display: 'swap' })
```

## Styling notes
- Tailwind is used for most layout and utilities. globals.css contains custom utilities:
  - .hover-underline (with ::after) — apply to nav links and resume button
  - @keyframes fadeInUp and .animate-fadeInUp
- To lower the underline, increase padding-bottom on `.hover-underline` and use a more negative `bottom` for `::after`.

## Resume viewer
- Resume opens in a modal overlay using an iframe. If browser cannot render PDFs, it will prompt download.
- Toolbar buttons call:
  - Download — triggers a download anchor
  - Print — tries to print iframe content (fallback: open in new tab)
  - Open — opens PDF in a new tab

For a more stable cross-browser viewer, integrate `react-pdf` / PDF.js (larger bundle).

## Accessibility & SEO
- Navbar and modal include aria attributes (aria-label, role="dialog", aria-modal).
- Metadata configured in app/layout.js (title, description). Update for SEO.

## Deployment
Deploy to Vercel for best Next.js compatibility:
- Push repo to GitHub
- Connect repository on Vercel and deploy (automatic build + optimization)

## To-do / ideas
- Add form handling (contact form) with server action or third-party provider
- Add animations for mobile menu open/close
- Add unit tests and CI (Jest / RTL)
- Replace static iframe viewer with PDF.js for consistent controls

## Notes
- Keep assets (logo, profile image, resume) inside `public/`.
- Restart dev server after changing fonts or globals.css if changes don't appear (Ctrl+C then npm run dev).
- Inspect browser console/network if fonts or PDF requests fail (CSP or blocked requests).


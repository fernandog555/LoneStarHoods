# Lone Star Hoods Website

Marketing site for Lone Star Hoods, a DFW-based commercial kitchen vent hood cleaning service. The site is built with the Next.js App Router and showcases the company’s experience, service areas, and contact options.

## Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- CSS Modules with a small global utility layer
- Next Image optimization and static assets served from `public/`

## Pages & Features

- `/` – Hero section with service highlights, company story, and trust badges.
- `/about` – Mission, founding story, and key stats (20+ years in DFW, NFPA 96 compliant, 24/7 scheduling).
- `/services` – Core service list, service-area grid, and compliance callouts.
- `/contact` – Client-side request form with instant feedback, plus operating details.
- Shared `Header`/`Footer`, responsive layout, and photo assets for quick brand customization.
- Header ships with a theme-aware wordmark plus a Light/Dark toggle (defaults to the OS theme, right-click to re-sync).

## Project Structure

```
app/
  layout.tsx          # Global shell, fonts, metadata
  page.tsx            # Landing page
  about/
  contact/
  services/
components/
  Header.tsx
  Footer.tsx
  Logo.tsx
  ThemeToggle.tsx
public/
  LoneStarHoodsLogo.png
  van.jpg
  ...other imagery
```

## Getting Started

Prerequisites: Node.js 18.17+ (matching Next.js 16 requirements) and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to develop locally. Edit any file in `app/` or `components/`—changes hot-reload automatically.

### Available Scripts

| Command        | Description                         |
| -------------- | ----------------------------------- |
| `npm run dev`  | Start the local development server. |
| `npm run build`| Create a production build.          |
| `npm run start`| Serve the production build.         |
| `npm run lint` | Run ESLint over the project.        |

## Styling & Assets

- Page-level styles live alongside their components (`page.module.css`).
- `app/globals.css` defines CSS resets plus utility classes (`container`, `pill`, `btn`, etc.).
- Color palette uses CSS custom properties with `prefers-color-scheme` to auto-switch between light and dark modes.
- Users can override the system preference via the header toggle (Light ↔ Dark). Overrides persist in `localStorage`; right-click the toggle to return to system sync.
- Brand imagery (logos, hero photos, icons) resides in `public/`. Swap these files to rebrand without touching code.

## Deployment

1. Build: `npm run build`
2. Serve: `npm run start` (defaults to port 3000)

The project is optimized for platforms that support Next.js (e.g., Vercel, Netlify). Ensure environment variables and static assets are available in your hosting setup.

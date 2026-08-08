# AI Agent Instructions

## Project overview
- Minimal React application built with Vite.
- Static frontend only: no backend, API routes, or server-side rendering in this repository.
- Components are in `src/components/`; styles are imported next to the component files.
- Assets are loaded from `src/assets/` and `public/`.

## Key commands
- `npm run dev` — start the Vite development server.
- `npm run build` — build production output.
- `npm run lint` — run ESLint against the project.
- `npm run preview` — preview the production build.

## Important files
- `package.json` — dependencies, scripts, and project metadata.
- `vite.config.js` — Vite configuration and React plugin.
- `eslint.config.js` — ESLint setup with React Hooks and Vite support.
- `src/main.jsx` — app entry point.
- `src/App.jsx` — root React component.
- `src/components/Navbar.jsx`, `src/components/Hero.jsx` — main UI components.
- `src/components/*.css` — component-specific styling.

## Coding conventions
- Use `.jsx` for React components and import component CSS files directly.
- Prefer declarative JSX markup and keep layout in component files.
- Use `window.open(...)` sparingly; the current project uses it for the hero-order button.
- Keep static content and visual structure in components rather than introducing extra frameworks.

## Agent guidance
- Prioritize small, contained UI changes in `src/components/`.
- Preserve the current Vite + React setup and avoid adding backend or SSR patterns.
- Use the existing ESLint setup when editing JavaScript / JSX.
- Refer to `README.md` for the base Vite React template notes and plugin guidance.

## Notes
- The project is currently private and designed as a simple restaurant landing page.
- There is no TypeScript support in this repo.

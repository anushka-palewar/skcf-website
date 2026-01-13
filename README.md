# SKCF Website

A simple React website built with Vite for the SKCF (social kids' charity foundation) showcasing the project's mission, activities, and ways to contribute.

This repo uses:

- React + Vite
- Bootstrap (CSS) and Bootstrap Icons
- react-router-dom for client routing

---

## Quick Start

Prerequisites:

- Node.js (16+ recommended)

Setup and run locally:

```bash
# install dependencies
npm install

# run dev server (Vite)
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Linting:

```bash
npm run lint
```

---

## Project Structure (important files)

- `src/main.jsx` — app entry (Bootstrap CSS & icons imported here)
- `src/App.jsx` — routes and layout (Navbar, Footer)
- `src/pages/` — page components (`Home.jsx`, `Activities.jsx`)
- `src/components/` — reusable UI components

---

## Notes

- The project uses Bootstrap for layout and components; ensure `bootstrap` and `bootstrap-icons` are installed (they are listed in `package.json`).
- If you clone the repo and see errors, try running `npm install` then `npm run dev` and check the terminal for diagnostics.

---

## Contributing

Contributions welcome — send a PR or open an issue to propose improvements.

---

## License

MIT
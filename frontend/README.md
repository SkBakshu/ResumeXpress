# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## New Folder Structure (Beginner Friendly)

```
src/
  assets/           # images, icons, etc.
  components/       # reusable UI components (Cards, Inputs, Layouts, etc.)
  pages/            # route-level components (Auth, Home, ResumeUpdate, etc.)
    Auth/
    Home/
    ResumeUpdate/
      Forms/
    LandingPage.jsx
  context/          # context providers
  utils/            # utility functions
  App.jsx
  main.jsx
  index.css
```

**Purpose:**
- `components/`: All reusable UI elements, grouped by type for clarity.
- `pages/`: Main views/routes, with subfolders for complex pages.
- `assets/`, `context/`, `utils/`: Supporting files and logic.
- Root files for app entry and global styles.

This structure is designed to be easy for beginners to navigate and understand.

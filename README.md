# Innovex Automation — Electrical & Solar Website

A fast, modern, multi-page website for **Innovex Automation**, showcasing electrical and solar solutions. Built with React 19 and Vite, styled with Tailwind CSS, and animated with GSAP.

**Live site:** [www.innovexautomation.com](https://www.innovexautomation.com)
**Vercel deployment:** [electical-solar.vercel.app](https://electical-solar.vercel.app)

---

## Features

- **Multi-page routing** with React Router: Home, About, Projects, Contact, Solar and Electrical
- **Lazy-loaded pages** with a loading fallback, so the first load stays light
- **Full-screen navigation** overlay and a responsive navbar
- **GSAP animations** for smooth, polished transitions
- **Scroll-to-top on route change** for a clean page-to-page experience
- **Responsive design** built with Tailwind CSS v4
- **SPA rewrites on Vercel**, so direct links and refreshes always work

## Pages

| Route          | Description                                |
| -------------- | ------------------------------------------ |
| `/`            | Home — introduction and highlights         |
| `/about`       | About the company                          |
| `/projects`    | Showcase of completed work                 |
| `/solar`       | Solar solutions and services               |
| `/electrical`  | Electrical solutions and services          |
| `/contact`     | Contact details and enquiries              |

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 8
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 4, Material UI (Emotion)
- **Animation:** GSAP with `@gsap/react`
- **Icons:** Lucide React
- **Fonts:** Barlow Condensed, Manrope (via Fontsource)
- **Linting:** ESLint 10 with React Hooks and React Refresh plugins
- **Hosting:** Vercel

## Project Structure

```
electical_solar/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/
│   │   └── Navigation/  # Navbar, FullScreenNav
│   ├── pages/           # Home, About, Projects, Contact, Solar, Electrical
│   ├── App.jsx          # Routes and layout
│   └── main.jsx         # App entry point
├── index.html
├── vite.config.js
├── eslint.config.js
├── vercel.json          # SPA rewrite rules
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/SINGHSHEKHAWAT1651786/electical_solar.git

# Move into the project
cd electical_solar

# Install dependencies
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server with HMR |
| `npm run build`   | Create an optimized production build  |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint across the project         |

## Deployment

The project is deployed on [Vercel](https://vercel.com). The included `vercel.json` rewrites every route to `index.html`, so client-side routing works on refresh and direct links.

To deploy your own copy:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Use the default Vite settings (build command `npm run build`, output directory `dist`).

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Contact

**Innovex Automation**
Website: [www.innovexautomation.com](https://www.innovexautomation.com)
Developer: [@SINGHSHEKHAWAT1651786](https://github.com/SINGHSHEKHAWAT1651786)

---

© Innovex Automation. All rights reserved.

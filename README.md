# BizOps AI — Marketing Website

This is the public marketing website for **BizOps AI**, an AI-powered business operations SaaS platform.

## Tech Stack

- **React 18** + **TypeScript**
- **MUI v5** (Material-UI) with custom theme
- **React Router v6** for navigation
- **Recharts** for data visualization
- **Vite** for fast dev server and optimized builds

## Getting Started

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

The site will open at `http://localhost:3001`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  components/       # Reusable UI components (Navbar, Footer, sections)
  pages/           # Top-level pages (Landing, Features, Pricing)
  theme/           # MUI theme configuration
  App.tsx          # Root component with routing
  main.tsx         # Entry point
```

## Features

- **Fully responsive** — mobile, tablet, and desktop
- **Light & dark mode** with persistent theme toggle
- **Smooth scroll** to anchor sections
- **Animated hero section** with mock dashboard
- **Pricing toggle** (monthly/annual)
- **Accessible** with proper ARIA labels and semantic HTML

## Design System

- Primary: `#4F46E5` (Indigo 600)
- Secondary: `#0EA5E9` (Sky 500)
- Font: Plus Jakarta Sans (Google Fonts)
- Border radius: 10–12px on cards, 8px on buttons
- Shadows: subtle, elevation-based

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## License

Proprietary — BizOps AI, Inc.

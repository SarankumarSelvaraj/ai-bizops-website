# 📁 Project Structure — BizOps AI Marketing Website

Complete overview of the project structure and file organization.

```
ai-bizops-website/
│
├── 📄 Configuration Files
│   ├── .env.example              # Environment variables template
│   ├── .gitignore                # Git ignore patterns
│   ├── index.html                # HTML entry point with SEO meta tags
│   ├── netlify.toml              # Netlify deployment config
│   ├── package.json              # Dependencies and scripts
│   ├── package-lock.json         # Locked dependency versions
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tsconfig.node.json        # TypeScript config for Vite
│   ├── vercel.json               # Vercel deployment config
│   └── vite.config.ts            # Vite build configuration
│
├── 📚 Documentation
│   ├── CHECKLIST.md              # Pre-launch checklist
│   ├── DEPLOYMENT.md             # Deployment guide for all platforms
│   ├── PROJECT_STRUCTURE.md      # This file
│   └── README.md                 # Getting started guide
│
├── 📦 public/                    # Static assets
│   ├── favicon.svg               # Site favicon
│   ├── robots.txt                # Search engine crawling rules
│   └── sitemap.xml               # XML sitemap for SEO
│
├── 🎨 src/                       # Source code
│   │
│   ├── 🧩 components/            # Reusable UI components
│   │   ├── AIShowcaseSection.tsx       # AI chat demo (dark theme)
│   │   ├── CTABanner.tsx               # Call-to-action banner
│   │   ├── FeaturesGrid.tsx            # 6-card feature grid
│   │   ├── Footer.tsx                  # Site footer with links
│   │   ├── HeroSection.tsx             # Hero with animated gradient
│   │   ├── Navbar.tsx                  # Sticky navbar with dark mode
│   │   ├── PricingCards.tsx            # 3-tier pricing cards
│   │   ├── SocialProofBar.tsx          # Company logos bar
│   │   └── TestimonialsSection.tsx     # Customer testimonials
│   │
│   ├── 📄 pages/                 # Top-level page components
│   │   ├── FeaturesPage.tsx            # Detailed feature breakdown
│   │   ├── LandingPage.tsx             # Home page
│   │   └── PricingPage.tsx             # Pricing + comparison + FAQ
│   │
│   ├── 🎨 theme/                 # Theme configuration
│   │   └── theme.ts                    # MUI theme (light/dark modes)
│   │
│   ├── App.tsx                   # Root component with routing
│   └── main.tsx                  # Application entry point
│
└── 📦 dist/                      # Production build output (generated)
    ├── assets/                   # Bundled JS/CSS
    ├── favicon.svg               # Copied static assets
    ├── robots.txt
    ├── sitemap.xml
    └── index.html                # Processed HTML
```

---

## 📋 File Descriptions

### Root Configuration Files

| File | Purpose |
|------|---------|
| `.env.example` | Template for environment variables (none required currently) |
| `.gitignore` | Excludes node_modules, dist, and build artifacts from Git |
| `index.html` | HTML entry with SEO meta tags, Open Graph, Twitter Cards |
| `netlify.toml` | Netlify build config, redirects, cache headers |
| `package.json` | Dependencies (React, MUI, Recharts, etc.) and npm scripts |
| `tsconfig.json` | TypeScript compiler options for src/ |
| `tsconfig.node.json` | TypeScript config for Vite config file |
| `vercel.json` | Vercel SPA redirects and cache headers |
| `vite.config.ts` | Vite dev server (port 3001) and build config |

### Documentation Files

| File | Purpose |
|------|---------|
| `CHECKLIST.md` | Pre-launch checklist covering content, design, SEO, performance, deployment |
| `DEPLOYMENT.md` | Step-by-step deployment guides for Vercel, Netlify, AWS, GitHub Pages, Firebase |
| `PROJECT_STRUCTURE.md` | This file — project structure overview |
| `README.md` | Getting started guide with installation, scripts, tech stack, deployment |

### Public Assets

| File | Purpose |
|------|---------|
| `favicon.svg` | Site favicon (indigo "B" letter) |
| `robots.txt` | Allows all search engines, references sitemap |
| `sitemap.xml` | XML sitemap with 3 pages (/, /features, /pricing) |

### Source Code — Components

| Component | Description | Props |
|-----------|-------------|-------|
| `AIShowcaseSection` | Dark-themed section with animated AI chat conversation | None |
| `CTABanner` | Full-width gradient CTA with "Start Free Trial" button | None |
| `FeaturesGrid` | 6-card grid showcasing core features | None |
| `Footer` | Site footer with link columns, social icons, copyright | None |
| `HeroSection` | Hero with animated gradient, headline, CTAs, dashboard mockup (Recharts) | None |
| `Navbar` | Sticky navbar with scroll trigger, dark mode toggle, mobile drawer | `onToggleTheme`, `mode` |
| `PricingCards` | 3-tier pricing with annual/monthly toggle, popular badge | `showHeader?` |
| `SocialProofBar` | Social proof bar with 5 company logo placeholders | None |
| `TestimonialsSection` | 3 customer testimonial cards with avatars, ratings | None |

### Source Code — Pages

| Page | Route | Description |
|------|-------|-------------|
| `LandingPage` | `/` | Home page with all sections: Hero, Social Proof, Features Grid, AI Showcase, Pricing, Testimonials, CTA |
| `FeaturesPage` | `/features` | Detailed breakdown of all 12 modules (Dashboard, CRM, Pipeline, Tasks, etc.) with alternating layout |
| `PricingPage` | `/pricing` | Pricing cards, comparison table (24 features × 3 tiers), FAQ accordion (6 questions) |

### Source Code — Theme

| File | Description |
|------|-------------|
| `theme.ts` | MUI theme with light/dark modes, custom colors, typography (Plus Jakarta Sans), component overrides |

### Source Code — Root

| File | Description |
|------|-------------|
| `App.tsx` | Root component with React Router, theme provider, scroll-to-top logic, dark mode state |
| `main.tsx` | Entry point that mounts React app to `#root` div |

---

## 🎨 Component Hierarchy

```
App
├── ThemeProvider (light/dark mode)
├── CssBaseline (normalize styles)
└── BrowserRouter
    ├── Navbar
    │   ├── Logo
    │   ├── Navigation Links
    │   ├── Dark Mode Toggle
    │   └── Mobile Drawer
    │
    ├── Routes
    │   ├── / → LandingPage
    │   │   ├── HeroSection
    │   │   │   ├── Animated Gradient Background
    │   │   │   ├── Headline + CTAs
    │   │   │   └── Dashboard Mockup (Recharts)
    │   │   ├── SocialProofBar
    │   │   ├── FeaturesGrid (6 cards)
    │   │   ├── AIShowcaseSection
    │   │   │   ├── Mock Chat Conversation
    │   │   │   └── AI Capabilities List
    │   │   ├── PricingCards
    │   │   │   ├── Annual/Monthly Toggle
    │   │   │   └── 3 Pricing Tiers
    │   │   ├── TestimonialsSection (3 cards)
    │   │   └── CTABanner
    │   │
    │   ├── /features → FeaturesPage
    │   │   ├── Hero
    │   │   ├── Feature Sections (12)
    │   │   │   ├── Icon Card
    │   │   │   ├── Title + Description
    │   │   │   └── Bullet Points
    │   │   └── CTABanner
    │   │
    │   └── /pricing → PricingPage
    │       ├── Hero
    │       ├── PricingCards
    │       ├── Comparison Table
    │       │   ├── Table Header
    │       │   ├── Category Rows
    │       │   └── Feature Rows
    │       ├── FAQ Accordion (6 items)
    │       └── CTABanner
    │
    └── Footer
        ├── Logo + Tagline
        ├── Link Columns (Product, Company, Support)
        ├── Social Icons
        └── Copyright + Legal Links
```

---

## 🧱 Tech Stack Details

### Core Framework
- **React 18.3.1** — UI library with hooks
- **TypeScript 5.7.2** — Type safety and developer experience
- **Vite 6.0.7** — Fast dev server and optimized builds

### UI & Styling
- **@mui/material 5.16.14** — Material-UI component library
- **@mui/icons-material 5.16.14** — Material Design icons
- **@emotion/react 11.14.0** — CSS-in-JS styling engine
- **@emotion/styled 11.14.0** — Styled components API

### Routing & Charts
- **react-router-dom 6.28.1** — Client-side routing
- **recharts 2.15.0** — Data visualization library

### Build Tools
- **@vitejs/plugin-react 4.3.4** — Vite plugin for React
- **TypeScript** — Type checking

---

## 📊 Bundle Analysis

### Production Build Output

```
dist/
├── index.html              2.49 KB (0.87 KB gzipped)
└── assets/
    └── index-[hash].js     864 KB (256 KB gzipped)
```

### Bundle Composition

| Package | Approx. Size | Purpose |
|---------|-------------|---------|
| React + React DOM | ~140 KB | UI framework |
| MUI Core | ~350 KB | Component library |
| MUI Icons | ~80 KB | Icon set |
| Recharts | ~200 KB | Charts in hero section |
| React Router | ~40 KB | Routing |
| Emotion | ~40 KB | Styling |
| Other | ~14 KB | Utils, polyfills |

**Total:** 864 KB uncompressed, 256 KB gzipped

### Optimization Opportunities

To reduce bundle size:
1. **Code splitting:** Use dynamic `import()` for routes
2. **Tree shaking:** Import only used MUI components
3. **Icon subsetting:** Import specific icons instead of full set
4. **Lazy load Recharts:** Only load on hero section

---

## 🚀 Build & Dev Commands

```bash
npm run dev        # Start dev server at http://localhost:3001
npm run build      # Build for production → dist/
npm run preview    # Preview production build locally
npm run typecheck  # Run TypeScript type checking
```

---

## 🔄 Development Workflow

1. **Local Development**
   ```bash
   npm install
   npm run dev
   ```

2. **Make Changes**
   - Edit components in `src/components/`
   - Edit pages in `src/pages/`
   - Update theme in `src/theme/theme.ts`

3. **Test**
   - Test on multiple screen sizes
   - Test light/dark mode
   - Test all routes and links

4. **Type Check**
   ```bash
   npm run typecheck
   ```

5. **Build**
   ```bash
   npm run build
   ```

6. **Preview**
   ```bash
   npm run preview
   ```

7. **Deploy**
   - See `DEPLOYMENT.md` for platform-specific instructions

---

## 📝 Notes

- All components are functional components using React hooks
- Theme uses MUI v5 theme tokens (no hardcoded colors)
- All strings are hardcoded (no CMS integration)
- No backend or API calls (static site)
- Dark mode preference stored in `localStorage`
- Smooth scroll uses native CSS `scroll-behavior: smooth`
- Responsive design uses MUI breakpoints (xs, sm, md, lg)

---

## 🤝 Contributing

When adding new features:

1. **Create new component** in `src/components/`
2. **Follow naming convention:** PascalCase for files and exports
3. **Use TypeScript** with proper prop types
4. **Use theme tokens** for colors, spacing, typography
5. **Make it responsive** with MUI `sx` prop and breakpoints
6. **Add accessibility** with ARIA labels and semantic HTML
7. **Test light/dark mode** before committing
8. **Update this document** if structure changes

---

**📦 Project built and maintained by the BizOps AI team.**

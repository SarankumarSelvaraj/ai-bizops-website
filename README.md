# BizOps AI — Marketing Website

This is the public marketing website for **BizOps AI**, an AI-powered business operations SaaS platform.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone or navigate to the project
cd ai-bizops-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3001`

## 📦 Available Scripts

```bash
npm run dev        # Start Vite dev server with hot reload
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build locally
npm run typecheck  # Run TypeScript type checking
```

## 🏗️ Tech Stack

- **React 18** + **TypeScript**
- **MUI v5** (Material-UI) with custom theme
- **React Router v6** for navigation
- **Recharts** for data visualization
- **Vite** for fast dev server and optimized builds
- **Emotion** for CSS-in-JS styling

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx              # Sticky nav with scroll trigger, dark mode
│   ├── Footer.tsx              # Link columns, social icons
│   ├── HeroSection.tsx         # Hero with animated gradient + dashboard mockup
│   ├── FeaturesGrid.tsx        # 6-card feature grid
│   ├── AIShowcaseSection.tsx   # AI chat demo with dark theme
│   ├── PricingCards.tsx        # 3-tier pricing with annual toggle
│   ├── TestimonialsSection.tsx # Customer testimonial cards
│   ├── CTABanner.tsx           # Call-to-action banner
│   └── SocialProofBar.tsx      # Company logos bar
├── pages/               # Top-level pages
│   ├── LandingPage.tsx         # Home page (all sections)
│   ├── FeaturesPage.tsx        # Detailed feature breakdown
│   └── PricingPage.tsx         # Pricing + comparison + FAQ
├── theme/
│   └── theme.ts                # MUI theme configuration
├── App.tsx                     # Root component with routing
└── main.tsx                    # Entry point
```

## ✨ Key Features

### Design & UX

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Light & dark mode with persistent theme toggle
- ✅ Smooth scroll to anchor sections
- ✅ Animated hero section with mock dashboard
- ✅ Sticky navbar with scroll trigger
- ✅ Mobile-friendly hamburger menu
- ✅ Accessible with ARIA labels and semantic HTML

### Components

- **Hero Section** — Animated gradient, CTAs, dashboard mockup with Recharts
- **Features Grid** — 6 feature cards with hover effects
- **AI Showcase** — Animated chat conversation demo
- **Pricing Cards** — 3 tiers with monthly/annual toggle
- **Testimonials** — Customer reviews with avatars and ratings
- **Comparison Table** — Detailed feature matrix
- **FAQ Accordion** — 6 common questions

### Pages

- **/** — Landing page with all sections
- **/features** — Detailed 12-module feature breakdown
- **/pricing** — Pricing, comparison table, FAQ

## 🎨 Design System

```css
/* Colors */
Primary:   #4F46E5 (Indigo 600)
Secondary: #0EA5E9 (Sky 500)
Success:   #10B981 (Green 500)
Warning:   #F59E0B (Amber 500)
Error:     #EF4444 (Red 500)

/* Light Mode */
Background: #F8FAFC
Paper:      #FFFFFF
Text:       #0F172A / #64748B
Divider:    #E2E8F0

/* Dark Mode */
Background: #0B0F19
Paper:      #111827
Text:       #F9FAFB / #9CA3AF
Divider:    rgba(255,255,255,0.08)

/* Typography */
Font:          Plus Jakarta Sans (Google Fonts)
Border Radius: 10–12px on cards, 8px on buttons
Shadows:       Subtle elevation-based
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to AWS S3 + CloudFront

```bash
# Build first
npm run build

# Sync to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Deploy to GitHub Pages

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/ai-bizops-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Install gh-pages: `npm i -D gh-pages`

Deploy: `npm run deploy`

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```bash
cp .env.example .env
```

Currently, no environment variables are required for the static marketing site.

### Vite Configuration

See `vite.config.ts` for build configuration. The dev server runs on port 3001 by default.

### Theme Customization

Edit `src/theme/theme.ts` to customize colors, typography, and component styles.

## 📊 Bundle Size

Production build:

- **Total:** 864 KB (256 KB gzipped)
- **Main chunk:** index.js
- Includes MUI v5 + Recharts

To optimize:

- Use dynamic `import()` for code splitting
- Configure `build.rollupOptions.output.manualChunks` in `vite.config.ts`

## 🧪 Testing

```bash
# Type check
npm run typecheck

# Preview production build
npm run preview
```

## 📝 Notes

- Auth routes (`/login`, `/register`) are placeholders — they should redirect to your dashboard app
- The site is statically generated and can be deployed to any CDN
- All content is hardcoded (no CMS) — edit component files to change copy

## 📄 License

Proprietary — BizOps AI, Inc.

## 🤝 Support

For questions or issues:

- Email: support@bizops.ai
- Docs: https://docs.bizops.ai
- Status: https://status.bizops.ai

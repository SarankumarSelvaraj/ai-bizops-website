# 🚀 Deployment Guide — BizOps AI Marketing Website

This guide covers deploying the BizOps AI marketing website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All content is finalized and copy-edited
- ✅ SEO meta tags are configured in `index.html`
- ✅ `sitemap.xml` URLs point to your production domain
- ✅ `robots.txt` Sitemap URL is updated
- ✅ Analytics tracking codes are added (if applicable)
- ✅ Custom domain is purchased and DNS is accessible
- ✅ SSL certificate is configured (most platforms provide this automatically)

## 🎯 Build the Site

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` directory.

---

## 1️⃣ Deploy to Vercel (Recommended)

Vercel is optimized for React/Vite apps with zero-config deployment.

### Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd ai-bizops-website

# Deploy to production
vercel --prod
```

### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel auto-detects Vite configuration
5. Click **"Deploy"**

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain (e.g., `bizops.ai`)
4. Update DNS records as instructed:
   - **A Record:** Point to Vercel's IP
   - **CNAME:** Point `www` to `cname.vercel-dns.com`

### Environment Variables (if needed)

Add in **Settings → Environment Variables**

---

## 2️⃣ Deploy to Netlify

Netlify offers drag-and-drop deployment and automatic CI/CD.

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**

### Custom Domain

1. Go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Follow DNS configuration instructions

### netlify.toml Configuration

The included `netlify.toml` file handles:
- Redirects for SPA routing
- Cache headers for assets
- Build configuration

---

## 3️⃣ Deploy to AWS S3 + CloudFront

For enterprise deployments with full control.

### Prerequisites

- AWS account
- AWS CLI installed and configured

### Step 1: Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://bizops-ai-website --region us-east-1

# Enable static website hosting
aws s3 website s3://bizops-ai-website --index-document index.html --error-document index.html
```

### Step 2: Build and Upload

```bash
# Build the site
npm run build

# Sync files to S3
aws s3 sync dist/ s3://bizops-ai-website --delete --acl public-read
```

### Step 3: Create CloudFront Distribution

1. Go to **CloudFront** in AWS Console
2. Create a new distribution:
   - **Origin domain:** `bizops-ai-website.s3-website-us-east-1.amazonaws.com`
   - **Viewer protocol policy:** Redirect HTTP to HTTPS
   - **Alternate domain names (CNAMEs):** `bizops.ai`, `www.bizops.ai`
   - **SSL certificate:** Request or upload a certificate via ACM
3. Create distribution and note the CloudFront domain

### Step 4: Update DNS

Point your domain to the CloudFront distribution:
- **A Record / CNAME:** `d1234abcd.cloudfront.net`

### Step 5: Invalidate Cache on Updates

```bash
aws cloudfront create-invalidation \
  --distribution-id E1234ABCD \
  --paths "/*"
```

### Automate Deployments

Create a `deploy.sh` script:

```bash
#!/bin/bash
npm run build
aws s3 sync dist/ s3://bizops-ai-website --delete
aws cloudfront create-invalidation --distribution-id E1234ABCD --paths "/*"
echo "✅ Deployed to AWS!"
```

Make it executable: `chmod +x deploy.sh`

---

## 4️⃣ Deploy to GitHub Pages

Perfect for open-source or public projects.

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:

```json
{
  "homepage": "https://yourusername.github.io/ai-bizops-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

This pushes the `dist/` folder to the `gh-pages` branch.

### Step 4: Enable GitHub Pages

1. Go to repository **Settings → Pages**
2. Source: `gh-pages` branch
3. Your site will be live at `https://yourusername.github.io/ai-bizops-website`

### Custom Domain

1. Add a `CNAME` file in `public/` with your domain:
   ```
   bizops.ai
   ```
2. Update DNS:
   - **A Records:** Point to GitHub's IPs
   - **CNAME:** Point `www` to `yourusername.github.io`

---

## 5️⃣ Deploy to Firebase Hosting

Google's global CDN with automatic SSL.

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### Step 2: Initialize Firebase

```bash
firebase init hosting
```

Configuration:
- **Public directory:** `dist`
- **Single-page app:** Yes
- **GitHub auto-deploys:** Optional

### Step 3: Deploy

```bash
npm run build
firebase deploy --only hosting
```

Your site is live at `https://your-project.web.app`

### Custom Domain

1. Go to **Firebase Console → Hosting → Connect custom domain**
2. Add your domain and follow DNS instructions

---

## 🔧 Post-Deployment

### 1. Test the Deployment

- ✅ Visit all pages (`/`, `/features`, `/pricing`)
- ✅ Test mobile responsiveness
- ✅ Test dark mode toggle
- ✅ Verify smooth scroll to anchors
- ✅ Check that all CTAs link correctly
- ✅ Test forms (if applicable)

### 2. Setup Monitoring

**Google Analytics:**
Add tracking code to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible / Simple Analytics:**
Add tracking script before `</head>`

### 3. Setup Performance Monitoring

- **Vercel Analytics:** Enable in project settings
- **Netlify Analytics:** Enable in site settings
- **Lighthouse CI:** Add to GitHub Actions for continuous monitoring

### 4. Configure CDN Caching

Ensure static assets are cached:
- JS/CSS: `Cache-Control: public, max-age=31536000, immutable`
- HTML: `Cache-Control: public, max-age=0, must-revalidate`

Both `vercel.json` and `netlify.toml` are pre-configured for this.

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🐛 Troubleshooting

### Issue: Routes return 404 on refresh

**Solution:** Ensure SPA redirects are configured:
- **Vercel:** Use `vercel.json` (already included)
- **Netlify:** Use `netlify.toml` (already included)
- **S3/CloudFront:** Set error document to `index.html`

### Issue: Assets not loading

**Solution:** Check base path configuration in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/', // or '/subdirectory/' if deployed to a subdirectory
});
```

### Issue: Build fails

**Solution:** Run locally first:
```bash
npm run build
```

Check for TypeScript errors or missing dependencies.

---

## 📞 Support

For deployment questions:
- **Email:** devops@bizops.ai
- **Docs:** https://docs.bizops.ai/deployment
- **Slack:** #engineering-support

---

**🎉 You're all set! Your marketing site is now live.**

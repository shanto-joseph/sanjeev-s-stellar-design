# Sanjeev — Graphic Design Portfolio

High-impact, editorial portfolio web application for **Sanjeev** (Creative Graphic Designer) showcasing 5 core design disciplines:
1. **Social Media Post Design**
2. **Logo Design**
3. **Branding Design**
4. **Packaging Design**
5. **Printing Design**

---

## 🚀 Cloudflare Workers Deployment

This application is built with **TanStack Start + Nitro SSR**, with native Cloudflare Workers preset (`cloudflare-module`).

### Option 1: Direct Deployment with Wrangler (Recommended)

1. **Login to Cloudflare** (first time only):
   ```bash
   npx wrangler login
   ```

2. **Deploy to Cloudflare Workers**:
   ```bash
   npm run deploy
   ```
   *This automatically runs `npm run build` and deploys your worker along with static assets in `.output/public`.*

---

### Option 2: Deploy using Nitro CLI

```bash
npm run deploy:nitro
```

---

### Option 3: Local Cloudflare Worker Preview

To test and simulate the Cloudflare Worker runtime locally before publishing:

```bash
npm run preview:worker
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```

---

## 🎨 Design System & Palette

- **Primary Canvas (`--studio`)**: `#DFDFDF`
- **Signature Accent (`--signal`)**: `#F7BB36` (Golden Yellow)
- **High-Contrast Dark (`--ink-soft`)**: `#181818`
- **Display Typography**: `JetBrains Mono`
- **Body Typography**: `Work Sans`
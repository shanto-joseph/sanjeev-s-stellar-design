# Sanjeev — Graphic Design Portfolio

High-impact, editorial portfolio web application for **Sanjeev** (Creative Graphic Designer) showcasing 5 core design disciplines:
1. **Social Media Post Design**
2. **Logo Design**
3. **Branding Design**
4. **Packaging Design**
5. **Printing Design**

---

## ⚡ Cloudflare Pages Setup & Deployment

### 📋 Cloudflare Dashboard Settings (Git Integration)

When connecting your GitHub repository to **Cloudflare Pages**:

| Field | Value |
|---|---|
| **Framework preset** | `None` / `Custom` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` *(default)* |

---

### 🚀 Direct CLI Deploy (from your terminal)

1. **Log in to Cloudflare** (first time only):
   ```bash
   npx wrangler login
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npm run deploy
   ```
   *(or `npx wrangler pages deploy dist`)*

3. **Preview locally with Pages emulation**:
   ```bash
   npm run preview:pages
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
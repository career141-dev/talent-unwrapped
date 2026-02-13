# Talent Unwrapped

> A podcast series exploring the human dimensions of ambition, design, and leadership.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/career141/talent-unwrapped)
[![Deployment](https://img.shields.io/badge/deployment-Cloudflare%20Pages-orange.svg)](https://talentunwrapped.com)

## 🎯 About

Talent Unwrapped features conversations about leadership, innovation, and the future of work across Singapore, Dubai, and the GCC region. Created by [Career141](https://career141.com).

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **SEO:** React Helmet Async
- **Hosting:** Cloudflare Pages
- **CDN:** Cloudinary (Images), YouTube (Videos)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/career141/talent-unwrapped.git
cd talent-unwrapped

# Install dependencies
npm install

# Build for production
npm run build
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint check
npm run type-check   # TypeScript type checking
npm run release      # Create new release (auto-versioning)
```

## 🌍 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Service ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS Public Key |

## 📁 Project Structure

```
talent-unwrapped/
├── public/              # Static assets (including _headers, _redirects)
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components & sections
│   ├── data/            # Static data & mocks
│   ├── types/           # TS Interfaces
│   └── assets/          # Global styles & assets
├── scripts/             # Utility scripts (Sitemap gen)
└── package.json
```

## 🔄 Release Process

```bash
# Patch release (1.0.0 → 1.0.1)
npm run release:patch

# Push tags
git push --follow-tags origin main
```

---
Made with ❤️ by Career141

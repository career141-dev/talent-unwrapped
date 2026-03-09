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
# Clone the repository
git clone https://github.com/career141/talent-unwrapped.git
cd talent-unwrapped

# Install dependencies
npm install

# Start the local development server
npm run dev
# → The app will be running at http://localhost:5173

# (Optional) Build for production
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

We use a **Feature-Based Architecture** to keep the codebase clean and scalable.

```
talent-unwrapped/
├── src/
│   ├── pages/           # Flat directory: one file per route (e.g., HomePage.tsx)
│   ├── features/        # Business logic grouped by feature (landing, podcasts, schedule)
│   ├── components/      # Shared UI (layout, common, forms)
│   ├── data/            # Static data & constants
│   ├── types/           # TypeScript definitions
│   └── assets/          # Icons, images, and global styles
├── public/              # Static hosting assets
└── scripts/             # Internal utility scripts
```

> [!TIP]
> For a deep dive into our architectural decisions, check out the [Developer Guide](./src/developer_guide.md) or the [Walkthrough](./src/walkthrough.md) in the brain directory.

## 🤝 How to Contribute

We follow a simple "Branch & PR" workflow to keep our `dev` branch stable.

### 1. Starting Work
1. **Clone & Install**: Follow the instructions in the [Installation](#-installation) section.
2. **Branch out**: Always create a new branch from `dev` for your work.
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-awesome-feature
   ```

### 2. Development Guidelines
- **Stay Flat**: Keep the `pages` directory flat. If a component is specific to a feature, put it in `src/features/`.
- **Naming**: Use PascalCase for components (`MyComponent.tsx`) and camelCase for utilities (`helpers.ts`).
- **No Direct Pushes**: Never push directly to `main` or `dev`.

### 3. Submitting a PR (Pull Request)
- **Check your work**: Run `npm run build` and `npm run lint` before committing.
- **Explain yourself**: In your PR description, tell us *what* you changed and *why*.
- **Review**: Once you open a PR, a team member will review it. Be ready to make minor adjustments if suggested!

---
*Let's keep the code as premium as the podcast!* 🚀

## 🔄 Release Process

```bash
# Patch release (1.0.0 → 1.0.1)
npm run release:patch

# Push tags
git push --follow-tags origin main
```

---
Made with ❤️ by Career141

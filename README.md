# Talent Unwrapped

Talent Unwrapped is a podcast series exploring the human dimensions of ambition, design, and leadership.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:5173/](http://localhost:5173/)

3. **Build for Production**
   ```bash
   npm run build
   ```
   The production-ready assets will be in the `dist/` directory.

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the actual production build locally before deploying.

## Environment Variables

- `VITE_CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
- `VITE_EMAILJS_SERVICE_ID`: EmailJS service ID for forms.
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template ID.
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public API key.

> [!NOTE]
> All frontend environment variables must start with `VITE_`.

## Deployment (Cloudflare Pages)

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Fallback Routing**: Handled by `static/_redirects` for SPA support.

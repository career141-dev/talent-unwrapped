import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://talentunwrapped.career141.com';

// Mock data or import from your data files if possible
// For simplicity in this script, we'll define the core routes
const routes = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/episodes', changefreq: 'weekly', priority: 0.9 },
    { url: '/edition/singapore', changefreq: 'monthly', priority: 0.8 },
    { url: '/edition/dubai', changefreq: 'monthly', priority: 0.8 },
    { url: '/edition/sri-lanka', changefreq: 'monthly', priority: 0.8 },
    { url: '/schedule', changefreq: 'monthly', priority: 0.7 },

    // Individual episodes
    { url: '/episode/1', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/2', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/3', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/4', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/5', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/6', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/7', changefreq: 'monthly', priority: 0.7 },
    { url: '/episode/8', changefreq: 'monthly', priority: 0.7 },
];

function generateSitemap() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicDir = join(__dirname, '../public');
    if (!existsSync(publicDir)) {
        mkdirSync(publicDir, { recursive: true });
    }

    writeFileSync(join(publicDir, 'sitemap.xml'), xml);
    console.log('✅ Sitemap generated successfully!');
}

generateSitemap();

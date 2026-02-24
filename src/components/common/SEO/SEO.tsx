import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
    author?: string;
    publishedTime?: string;
    podcastSchema?: object;
}

const SEO: React.FC<SEOProps> = ({
    title = "Talent Unwrapped - Leadership & Innovation Podcast",
    description = "Talent Unwrapped podcast series featuring conversations about leadership, innovation, and the future of work across Singapore, Dubai, and beyond.",
    keywords = "talent unwrapped, podcast, leadership, innovation, future of work, GCC, Singapore, Dubai, career development",
    image = "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1771220347/Artboard_3_1_nbtue5.svg",
    url = "https://talentunwrapped.com",
    type = "website",
    author = "Career141",
    publishedTime,
    podcastSchema,
}) => {
    const siteTitle = "Talent Unwrapped";
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    // Ensure absolute URL
    const absoluteUrl = url.startsWith("http") ? url : `https://talentunwrapped.com${url}`;

    return (
        <Helmet>
            <html lang="en" />
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={absoluteUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={absoluteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Talent Unwrapped" />
            {publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={absoluteUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            {podcastSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(podcastSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

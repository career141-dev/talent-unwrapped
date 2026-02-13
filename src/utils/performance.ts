/**
 * reportWebVitals
 * 
 * Reports core web vitals (CLS, FID, LCP, etc.) to Google Analytics.
 * This helps monitor real-world performance of the application.
 */
export const reportWebVitals = (metric: { name: string; value: number; id: string }) => {
    if (window.gtag) {
        window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        });
    }

    // Log in development
    if (import.meta.env.DEV) {
        console.log('[Web Vitals]', metric);
    }
};

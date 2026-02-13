export { };

declare global {
    interface Window {
        gtag?: (
            command: 'event' | 'config' | 'js' | 'set',
            targetId: string,
            config?: {
                event_category?: string;
                event_label?: string;
                value?: number;
                non_interaction?: boolean;
                description?: string;
                fatal?: boolean;
                [key: string]: any;
            }
        ) => void;
        dataLayer?: any[];
    }
}

import { useState, useEffect, RefObject } from "react";

/**
 * useIntersectionObserver hook
 * @param elementRef - The ref of the element to observe
 * @param options - IntersectionObserver configuration options
 * @returns IntersectionObserverEntry | null
 */
export const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    options: IntersectionObserverInit = {
        threshold: 0,
        root: null,
        rootMargin: "0%"
    }
): IntersectionObserverEntry | null => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

    useEffect(() => {
        const node = elementRef?.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            setEntry(entry);
        }, options);

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef, options.threshold, options.root, options.rootMargin]);

    return entry;
};

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "./Icons";

/**
 * ScrollToTopButton - A floating action button that appears when user scrolls down
 * and smooth-scrolls back to the top when clicked.
 */
export const ScrollToTopButton = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-[#7bb302] text-white shadow-lg hover:bg-[#6a9a02] transition-colors cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon size={24} strokeWidth={3} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

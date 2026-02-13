import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingIndicator = (): JSX.Element => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Show loading state on path change
        setIsLoading(true);

        // Simulate navigation end after a short delay to ensure UX feedback
        // In a real app with data fetching, this would be tied to resolve/reject
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 right-0 z-[9999] h-[4px] pointer-events-none"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className="h-full w-full bg-gradient-to-r from-[#7bb302] via-[#aeef4c] to-[#7bb302] origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

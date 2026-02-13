import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "./Skeleton";

interface MediaLoaderProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const MediaLoader = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    objectFit = "cover",
}: MediaLoaderProps): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10"
                    >
                        <Skeleton className="w-full h-full" />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={() => setIsLoaded(true)}
                className={`${className} w-full h-full object-${objectFit}`}
            />
        </div>
    );
};

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/Common/Icons";

export const NotFound = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4 text-center py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-8xl font-bold bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] mb-6">
                    404
                </h1>
                <h2 className="text-3xl font-medium text-[#232323] mb-4">Page Not Found</h2>
                <p className="text-[#8d8d8d] max-w-md mx-auto mb-10">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#7bb302] text-white rounded-full font-semibold hover:bg-[#6da002] transition-all hover:scale-105 active:scale-95"
                >
                    <span>Back to Home</span>
                    <ArrowRightIcon size={20} />
                </Link>
            </motion.div>
        </div>
    );
};

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/common/Icons";

export const NotFound = (): JSX.Element => {
  const digits = ["4", "0", "4"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#7bb302]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#ed2939]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:px-8">
        <div className="mb-6 flex items-end justify-center gap-1 sm:gap-2">
          {digits.map((digit, index) => (
            <motion.span
              key={`${digit}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { delay: index * 0.12, duration: 0.45 },
                y: { repeat: Infinity, duration: 2.2, delay: index * 0.18, ease: "easeInOut" },
              }}
              className="inline-block [font-family:'Geist',Helvetica] text-[92px] font-bold leading-none tracking-[-0.06em] text-transparent sm:text-[120px] md:text-[150px] lg:text-[180px] bg-[linear-gradient(131deg,rgba(123,179,2,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]"
              aria-hidden="true"
            >
              {digit}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="[font-family:'Geist',Helvetica] text-[28px] font-semibold text-[#232323] sm:text-[34px]"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 max-w-[640px] [font-family:'Geist',Helvetica] text-base text-[#8d8d8d] sm:text-lg"
        >
          The link may be outdated or removed. Please head back to the homepage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#7bb302] px-8 py-4 [font-family:'Geist',Helvetica] text-base font-semibold text-white transition-all hover:scale-105 hover:bg-[#6da002] active:scale-95"
          >
            <span>Back to Home</span>
            <ArrowRightIcon size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

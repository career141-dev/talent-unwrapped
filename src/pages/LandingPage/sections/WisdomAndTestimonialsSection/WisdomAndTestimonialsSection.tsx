import { motion } from "framer-motion";
import { DECORATIVE_IMAGES } from "@/assets";
import { ArrowRightIcon, VerticalLineIcon } from "@/components/Common/Icons";
import { WISDOM_CONTENT, NAV_LABELS, BUTTONS } from "@/constants/copy";

export const WisdomAndTestimonialsSection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full max-w-[1440px] bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 md:pb-10 lg:pb-14 mx-auto overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Layout Container - Responsive Flex */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 w-full h-full">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block w-full lg:w-[35%] xl:w-[40%] max-w-[450px] lg:max-w-none order-1 lg:order-1 lg:-ml-8"
        >
          <div className="relative w-full aspect-[3/4] lg:aspect-[2/3] xl:aspect-[3/4] bg-[#cecece] rounded-2xl md:rounded-3xl overflow-hidden rotate-180 shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              className="w-full h-full -rotate-180 object-cover hover:scale-105 transition-transform duration-500"
              alt="Professional microphone and studio equipment"
              src={DECORATIVE_IMAGES.professionalMicrophone}
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[65%] xl:w-[60%] max-w-[665px] lg:max-w-none order-2 lg:order-2"
        >
          <div className="flex flex-col items-start w-full md:gap-8 sm:gap-10 lg:gap-12">
            {/* Top Section - Heading & CTA */}
            <div className="flex flex-col items-start w-full md:gap-[9.284px] sm:gap-6 gap-6 sm:gap-8 lg:gap-10">
              <div className="flex flex-col items-start w-full md:gap-[9.284px] sm:gap-4 gap-3 sm:gap-4">
                <p className="w-full [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm sm:text-base md:hidden tracking-[-0.32px] leading-[normal]">
                  {NAV_LABELS.ABOUT}
                </p>

                <h2
                  id="about-heading"
                  className="w-full [font-family:'Geist',Helvetica] font-medium text-transparent text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.045em] leading-[1.2] sm:leading-[1.15] lg:leading-[1.1]"
                >
                  <span className="text-[#959494] tracking-[-1.5px]">Talent</span>
                  <span className="text-[#ed2939] tracking-[-1.5px]"> Unwrapped</span>
                </h2>
              </div>

              <motion.a
                href="#episodes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  document
                    .getElementById("episodes")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex h-12 sm:h-[54px] items-center justify-center gap-2 px-6 py-3 bg-[#7CB403] rounded-[60px] no-underline cursor-pointer hover:bg-[#6a9e02] transition-colors duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 group touch-manipulation"
              >
                <span className="w-fit [font-family:'Geist',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[-0.48px] leading-[normal]">
                  {BUTTONS.EXPLORE}
                </span>

                <ArrowRightIcon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
                  color="white"
                  aria-hidden="true"
                />
              </motion.a>
            </div>

            {/* Bottom Section - Quote & Attribution */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 w-full">
              <div className="flex items-center gap-2.5 px-0 py-2 sm:py-2.5 w-full border-b border-solid border-neutral-200">
                <p className="w-full [font-family:'Geist',Helvetica] font-medium text-[#222223] text-sm sm:text-base tracking-[-0.32px] leading-[normal]">
                  {WISDOM_CONTENT.TAGLINE}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
                <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 w-full">
                  <blockquote className="w-full [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-2xl tracking-[-0.02em] leading-[1.5] sm:leading-[1.55] md:leading-[1.6]">
                    &quot;{WISDOM_CONTENT.QUOTATION}&quot;
                  </blockquote>

                  <p className="w-full [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm sm:text-base tracking-[-0.64px] leading-[normal]">
                    — {WISDOM_CONTENT.DIRECTOR_NAME} ({WISDOM_CONTENT.DIRECTOR_ROLE})
                  </p>
                </div>

                <VerticalLineIcon
                  className="hidden sm:block w-[1.5px] h-20 md:h-[127px] flex-shrink-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

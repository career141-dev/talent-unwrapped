import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TheThreeChaptersSectionProps } from "../../../../types";
import { getEditionContent } from "../../../../data";
import { MobileCarouselSection } from "../../../../components/sections/MobileCarouselSection";
import { LearnMoreModal } from "../../../../pages/Schedule/components";
import { ASSETS } from "@/assets";
import { ArrowRightIcon, VideoCircleFilledIcon, ExportIcon } from "@/components/common/Icons";
import { SECTION_TITLES, SECTION_DESCRIPTIONS, BUTTONS, TALENT_INTRO_CONTENT } from "@/constants/copy";

/**
 * TheThreeChaptersSection - Complete section
 * Shows specific edition content without filter
 */
export const TheThreeChaptersSection = ({
  edition = "singapore",
  hideTopSection = false,
}: TheThreeChaptersSectionProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const editionData = getEditionContent(edition);
  const { name: editionName, schedule, chapters } = editionData;

  const decorativeImages = [
    {
      id: 1,
      src: ASSETS.manInHeadphones,
      alt: "Man in headphones",
      containerClass:
        `absolute ${isMobile ? "top-[280px]" : "top-[260px] lg:top-[150px]"} left-[5%] lg:left-[871px] w-[100px] h-[70px] z-0 md:hidden lg:flex lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017]`,
      imageClass:
        `w-full h-full object-cover rotate-[7.30deg] ${isMobile ? "scale-[1.8] translate-x-[20px] translate-y-[10px]" : "scale-[2.2] translate-x-[40px] translate-y-[25px]"}`,
    },
    {
      id: 2,
      src: ASSETS.youngBlackMan,
      alt: "Young black man in headphones",
      containerClass:
        `absolute ${isMobile ? "top-[70px] right-[5%]" : "top-[75px] sm:left-[230px] lg:left-[1125px]"} w-[120px] h-[84px] z-0 md:hidden lg:flex lg:top-52 lg:right-auto lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017]`,
      imageClass:
        `w-full h-full object-cover rotate-[-6.49deg] ${isMobile ? "scale-[1.8] translate-x-[20px] translate-y-[10px]" : "scale-[2.2] translate-x-[40px] translate-y-[25px]"}`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative w-full max-w-[1440px] bg-white mx-auto overflow-hidden"
      style={{
        paddingLeft: "clamp(16px, 4vw, 120px)",
        paddingRight: "clamp(16px, 4vw, 120px)",
        paddingTop: "clamp(8px, 1vw, 20px)",
        paddingBottom: "clamp(8px, 1vw, 20px)",
        marginTop: "40px",
        marginBottom: "0px",
        minHeight: "clamp(400px, 50vh, 600px)",
      }}
    >
      <div
        className={hideTopSection ? "lg:h-auto" : "lg:h-auto lg:min-h-[900px]"}
      >
        {/* Main Content Layout - Responsive Grid for Tablet, Absolute for Desktop */}
        <div
          className={`relative z-10 flex flex-col md:grid md:grid-cols-12 lg:block ${hideTopSection ? "" : "gap-8 lg:gap-0"}`}
        >
          {!hideTopSection && (
            <>
              <div className="md:col-span-4 lg:contents">
                <motion.header
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[10px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-[8px] md:text-sm tracking-[-0.32px] leading-[normal]"
                >
                  {SECTION_TITLES.THE_THREE_CHAPTERS}
                </motion.header>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[10px] mb-4 md:mb-0"
                >
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.05em] leading-[1.1] text-left">
                    {TALENT_INTRO_CONTENT.VIEWER_COUNT}
                  </div>

                  <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-xs md:text-sm text-left tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
                    {SECTION_DESCRIPTIONS.VIEWERS_WORLDWIDE}
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-8 lg:contents">
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative lg:absolute top-auto lg:top-0 left-0 lg:left-[400px] w-full lg:w-[904px] max-w-full text-center lg:text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em] leading-[1.3] sm:leading-[1.35] lg:leading-[1.4]"
                >
                  <span className="text-[#232323] tracking-[-0.77px]">
                    {TALENT_INTRO_CONTENT.CHAPTER_PREFIX} {editionName} Edition{" "}
                  </span>

                  <span className="text-[#8d8d8d] tracking-[-0.77px]">
                    {SECTION_DESCRIPTIONS.CHAPTER_EXPLORATION}
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex lg:block items-center justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="relative lg:absolute top-auto lg:top-[258px] left-0 lg:left-[400px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors mb-4 md:mb-0 mx-auto lg:mx-0"
                    aria-label="More about the podcast"
                  >
                    <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.48px] leading-[normal]">
                      {BUTTONS.MORE_ABOUT_PODCAST}
                    </span>

                    <ArrowRightIcon className="text-white" size={24} />
                  </motion.button>
                </motion.div>
              </div>
            </>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`flex flex-col w-full items-start gap-2 relative lg:absolute top-auto ${hideTopSection ? "lg:top-0" : "lg:top-[478px]"} left-0 lg:left-[120px] text-left ${hideTopSection ? "mt-0" : "mt-8 sm:mt-10 md:mt-12 lg:mt-0"} mb-6 lg:ml-0 pl-4 sm:pl-6 md:pl-8 lg:pl-0`}
        >
          <p className="relative w-full max-w-none lg:w-auto [font-family:'Geist',Helvetica] font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[42px] whitespace-normal lg:whitespace-nowrap">
            <span className="text-[#7cb403]">
              {TALENT_INTRO_CONTENT.SCHEDULE_FOR} {editionName} Edition{" "}
            </span>
            <time className="text-[#ed2939]" dateTime={schedule.dateTime}>
              {schedule.date}
            </time>
          </p>
        </motion.div>

        <div
          className={`flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-8 relative lg:absolute top-auto ${hideTopSection ? "lg:top-[60px]" : "lg:top-[589px]"} left-0 lg:left-[120px] w-full lg:w-auto overflow-x-hidden scrollbar-hide pl-4 sm:pl-6 md:pl-8 lg:pl-0`}
        >
          {/* Mobile Carousel - Only visible on mobile */}
          <div className="lg:hidden w-full mb-8">
            <MobileCarouselSection
              podcastCards={chapters.map((ep) => ({
                id: Number(ep.id),
                title: ep.title,
                subtitle: ep.subtitle || "",
              }))}
              onLearnMore={() => setIsModalOpen(true)}
            />
          </div>

          {/* Desktop Cards - Only visible on lg+ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="hidden lg:flex gap-8 w-full lg:w-auto"
          >
            {chapters.map((episode) => (
              <motion.article
                key={episode.id}
                variants={itemVariants}
                className="relative w-full max-w-[360px] lg:w-[380px] h-[260px] lg:h-[280px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[24px] transition-all duration-300 hover:shadow-lg hover:bg-white cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="inline-flex items-center gap-2 lg:gap-2.5 p-2 lg:p-3 absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#7bb302] rounded-[40px]"
                  aria-label="Video content"
                >
                  <VideoCircleFilledIcon className="text-white" size={24} />
                </div>

                <div
                  className="flex flex-col w-[calc(100%-2rem)] lg:w-[340px] items-start justify-start gap-3 lg:gap-4 absolute top-16 lg:top-20 left-4 lg:left-6"
                  style={{ overflow: "hidden" }}
                >
                  <div className="flex items-center gap-2 lg:gap-2.5 pt-0 pb-2 lg:pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-200">
                    <h3 className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-base sm:text-lg lg:text-[22px] tracking-[-0.5px] lg:tracking-[-1.08px] leading-tight lg:leading-[normal]">
                      <span className="text-[#7bb302] tracking-[-0.29px]">
                        {episode.title}{" "}
                      </span>

                      <span className="text-[#ed2939] tracking-[-0.29px]">
                        {episode.subtitle}
                      </span>
                    </h3>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex h-[38px] items-center justify-center gap-2 px-6 bg-[#7bb302] rounded-[40px] cursor-pointer hover:bg-[#6da002] transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
                    aria-label={BUTTONS.LEARN_MORE}
                  >
                    <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-sm tracking-[-0.4px] leading-[normal]">
                      {BUTTONS.LEARN_MORE}
                    </span>
                    <ArrowRightIcon className="text-white" size={18} />
                  </button>
                </div>

                <a
                  href="#"
                  className="absolute top-6 lg:top-9 right-4 lg:right-6 w-5 h-5 lg:w-6 lg:h-6"
                  aria-label={`External link for ${episode.title}`}
                >
                  <ExportIcon className="text-[#7bb302]" size={24} />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Decorative Images */}
        {!hideTopSection &&
          decorativeImages.map((image) => (
            <div
              key={image.id}
              className={`${image.containerClass}`}
              aria-hidden="true"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img
                  className={image.imageClass}
                  alt={image.alt}
                  src={image.src}
                />
              </motion.div>
            </div>
          ))}

        <LearnMoreModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

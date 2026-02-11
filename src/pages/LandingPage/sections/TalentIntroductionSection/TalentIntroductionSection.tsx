import { useState } from "react";
import { motion } from "framer-motion";
import { LearnMoreModal } from "../../../../pages/Schedule/Components";
import { MobileCarouselSection } from "../../../../components/Sections/MobileCarouselSection";
import { EditionFilter } from "../../../../components/UI/EditionFilter";
import { getEditionContent } from "../../../../data";
import { DECORATIVE_IMAGES } from "@/assets";
import { ArrowRightIcon, VideoCircleFilledIcon, ExportIcon } from "@/components/Common/Icons";
import { SECTION_TITLES, SECTION_DESCRIPTIONS, BUTTONS, TALENT_INTRO_CONTENT } from "@/constants/copy";

export const TalentIntroductionSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<"singapore" | "dubai">("singapore");

  const editionData = getEditionContent(selectedEdition);
  const { name: editionName, schedule, chapters } = editionData;

  const decorativeImages = [
    {
      id: 1,
      src: DECORATIVE_IMAGES.manInHeadphones,
      alt: "Man in headphones",
      containerClass:
        "absolute top-[260px] left-[0px] w-[100px] h-[70px] z-0 lg:flex lg:top-[150px] lg:left-[871px] lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017]",
      imageClass:
        "w-full h-full object-cover rotate-[7.30deg] scale-[2.2] translate-x-[40px] translate-y-[25px]",
    },
    {
      id: 2,
      src: DECORATIVE_IMAGES.youngBlackMan,
      alt: "Young black man in headphones",
      containerClass:
        "absolute top-[75px] left-[230px] w-[120px] h-[84px] z-0 lg:flex lg:top-52 lg:left-[1125px] lg:right-auto lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017]",
      imageClass:
        "w-full h-full object-cover rotate-[-6.49deg] scale-[2.2] translate-x-[40px] translate-y-[25px]",
    },
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="schedule"
      className="relative z-20 w-full max-w-[1440px] bg-white mx-auto"
      style={{
        overflow: 'hidden',
        paddingLeft: 'clamp(16px, 4vw, 120px)',
        paddingRight: 'clamp(16px, 4vw, 120px)',
        paddingTop: 'clamp(8px, 1vw, 20px)',
        paddingBottom: 'clamp(8px, 1vw, 20px)',
        marginTop: '20px',
        marginBottom: '0px',
        minHeight: 'clamp(400px, 50vh, 600px)',
      }}
    >
      <div className="lg:h-auto lg:min-h-[900px]">

        {/* Edition Filter - Mobile: Top of section, Desktop: Right aligned */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:absolute top-0 lg:top-[478px] right-0 lg:right-[10px] mb-6 lg:mb-0 flex justify-center sm:justify-end px-4 sm:px-6 md:px-8 lg:px-0 z-20"
        >
          <EditionFilter
            selectedEdition={selectedEdition}
            onEditionChange={setSelectedEdition}
          />
        </motion.div>

        {/* Main Content Layout - Responsive Grid for Tablet, Absolute for Desktop */}
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 lg:block gap-8 lg:gap-0 mt-4 lg:mt-0">
          <div className="md:col-span-4 lg:contents">
            <motion.header
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[10px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-[8px] md:text-sm tracking-[-0.32px] leading-[normal]"
            >
              {SECTION_TITLES.THE_THREE_CHAPTERS}
            </motion.header>

            <div className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[10px] mb-4 md:mb-0">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.05em] leading-[1.1] text-left"
              >
                {TALENT_INTRO_CONTENT.VIEWER_COUNT}
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-xs md:text-sm text-left tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]"
              >
                {SECTION_DESCRIPTIONS.VIEWERS_WORLDWIDE}
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-8 lg:contents">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:absolute top-auto lg:top-0 left-0 lg:left-[400px] w-full lg:w-[904px] max-w-full text-center lg:text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em] leading-[1.3] sm:leading-[1.35] lg:leading-[1.4]"
            >
              <span className="text-[#232323] tracking-[-0.77px]">
                {TALENT_INTRO_CONTENT.CHAPTER_PREFIX} {editionName} Edition{" "}
              </span>

              <span className="text-[#8d8d8d] tracking-[-0.77px]">
                {SECTION_DESCRIPTIONS.CHAPTER_EXPLORATION}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col w-full items-start gap-2 relative lg:absolute top-auto lg:top-[478px] left-0 lg:left-[120px] text-left mb-6 lg:ml-0 px-4 sm:px-6 md:px-8 lg:px-0"
        >
          <p className="relative w-full max-w-none lg:w-auto lg:absolute lg:left-0 [font-family:'Geist',Helvetica] font-medium text-[20px] sm:text-[24px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[38px] whitespace-normal lg:whitespace-nowrap">
            <span className="text-[#7cb403]">{TALENT_INTRO_CONTENT.SCHEDULE_FOR} {editionName} Edition </span>
            <time className="text-[#ed2939]" dateTime={schedule.dateTime}>
              {schedule.date}
            </time>
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 relative lg:absolute top-auto lg:top-[589px] left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-auto overflow-x-hidden scrollbar-hide pl-4 sm:pl-6 md:pl-8 lg:pl-0">
          {/* Mobile Carousel - Only visible on mobile */}
          <div className="lg:hidden w-full mb-8">
            <MobileCarouselSection
              podcastCards={chapters.map(c => ({
                id: Number(c.id),
                title: c.title,
                subtitle: c.subtitle || ""
              }))}
              onLearnMore={() => setIsModalOpen(true)}
            />
          </div>

          {/* Desktop Cards - Only visible on lg+ */}
          <div className="hidden lg:flex gap-8 w-full lg:w-auto justify-center">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                className="relative w-full max-w-[360px] lg:w-[380px] h-[260px] lg:h-[280px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[24px] transition-colors duration-300 hover:bg-white cursor-pointer overflow-hidden"
              >
                <div
                  className="inline-flex items-center gap-2 lg:gap-2.5 p-2 lg:p-3 absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#7bb302] rounded-[40px]"
                  aria-label="Video content"
                >
                  <VideoCircleFilledIcon className="text-white" size={24} />
                </div>

                <div className="flex flex-col w-[calc(100%-2rem)] lg:w-[340px] items-start justify-start gap-3 lg:gap-4 absolute top-16 lg:top-20 left-4 lg:left-6" style={{ overflow: 'hidden' }}>
                  <div className="flex items-center gap-2 lg:gap-2.5 pt-0 pb-2 lg:pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-200">
                    <h3 className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-base sm:text-lg lg:text-[22px] tracking-[-0.5px] lg:tracking-[-0.88px] leading-tight lg:leading-[normal]">
                      <span className="text-[#7bb302] tracking-[-0.29px]">
                        {chapter.title}{" "}
                      </span>

                      <span className="text-[#ed2939] tracking-[-0.29px]">
                        {chapter.subtitle}
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
                  aria-label={`External link for ${chapter.title}`}
                >
                  <ExportIcon className="text-[#7bb302]" size={24} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        {decorativeImages.map((image) => (
          <div
            key={image.id}
            className={`${image.containerClass}`}
            aria-hidden="true"
          >
            <motion.div
              animate={floatingAnimation}
              className="w-full h-full"
            >
              <img className={image.imageClass} alt={image.alt} src={image.src} />
            </motion.div>
          </div>
        ))}

        <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

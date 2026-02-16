import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { LearnMoreModal } from "../../../../pages/Schedule/components";
import { MobileCarouselSection } from "../../../../components/sections/MobileCarouselSection";
import { EditionFilter } from "../../../../components/UI/EditionFilter";
import { getEditionContent } from "../../../../data";
import { ASSETS } from "@/assets";
import { ArrowRightIcon, VideoCircleFilledIcon, ExportIcon } from "@/components/common/Icons";
import { SECTION_TITLES, SECTION_DESCRIPTIONS, BUTTONS, TALENT_INTRO_CONTENT } from "@/constants/copy";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const TalentIntroductionSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<"singapore" | "dubai">("singapore");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const editionData = getEditionContent(selectedEdition as any);
  const { name: editionName, schedule, chapters } = editionData;

  const decorativeImages = [
    {
      id: 1,
      src: selectedEdition === "singapore"
        ? "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709852/Unwrapped_thumbnail_-_Ella_2_r6uwdx.png"
        : ASSETS.manInHeadphones,
      alt: "Decorative image 1",
      containerClass: `absolute ${isMobile ? "top-[320px] left-[20px]" : "top-[150px] lg:top-[150px] left-[5%] lg:left-[871px]"} w-[80px] h-[60px] lg:w-[152px] lg:h-[114px] z-0 lg:flex rounded-xl overflow-hidden shadow-[12px_12px_30px_#00000017] opacity-80 lg:opacity-100`,
      baseRotate: -7.30,
      objectPosition: selectedEdition === "singapore" ? "center center" : undefined,
      imageScale: selectedEdition === "singapore" ? (isMobile ? 1.05 : 1.1) : (isMobile ? 1.8 : 2.2),
      imageTranslateX: selectedEdition === "singapore" ? "0px" : (isMobile ? "20px" : "40px"),
      imageTranslateY: selectedEdition === "singapore" ? "0px" : (isMobile ? "10px" : "25px"),
      animY: isMobile ? [0, -8, 0] : [0, -10, 0],
    },
    {
      id: 2,
      src: selectedEdition === "singapore"
        ? "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709853/Unwrapped_thumbnail_-_Echo_1_g0i2ae.png"
        : ASSETS.youngBlackMan,
      alt: "Decorative image 2",
      containerClass: `absolute ${isMobile ? "top-[40px] right-[20px]" : "top-52 lg:top-52 right-[5%] sm:left-[230px] lg:left-[1125px] lg:right-auto"} w-[90px] h-[68px] lg:w-[152px] lg:h-[114px] z-0 lg:flex rounded-xl overflow-hidden shadow-[12px_12px_30px_#00000017] opacity-80 lg:opacity-100`,
      baseRotate: 6.49,
      objectPosition: selectedEdition === "singapore" ? "center center" : undefined,
      imageScale: selectedEdition === "singapore" ? (isMobile ? 1.05 : 1.1) : (isMobile ? 1.8 : 2.2),
      imageTranslateX: selectedEdition === "singapore" ? "0px" : (isMobile ? "20px" : "40px"),
      imageTranslateY: selectedEdition === "singapore" ? "0px" : (isMobile ? "10px" : "25px"),
      animY: isMobile ? [0, -8, 0] : [0, -10, 0],
    },
  ];

  const getFloatingAnimation = (baseRotate: number) => ({
    y: [0, -10, 0],
    rotate: [baseRotate, baseRotate + 2, baseRotate],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  const getCounterRotation = (baseRotate: number) => ({
    rotate: [(-baseRotate - 4), (-(baseRotate + 2) - 4), (-baseRotate - 4)],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  return (
    <section
      id="three-chapters"
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
          className="relative lg:absolute top-0 lg:top-[478px] right-0 lg:right-[32px] xl:right-[52px] mb-6 lg:mb-0 flex justify-center sm:justify-end px-4 sm:px-6 md:px-8 lg:px-0 z-20"
        >
          <EditionFilter
            selectedEdition={selectedEdition}
            onEditionChange={setSelectedEdition}
          />
        </motion.div>

        {/* Main Content Layout - Responsive Grid for Tablet, Absolute for Desktop */}
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 lg:block gap-8 lg:gap-0 mt-4 lg:mt-0">
          <div className="md:col-span-4 lg:contents">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[10px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm md:text-sm tracking-[-0.32px] leading-[normal]"
            >
              {SECTION_TITLES.THE_THREE_CHAPTERS}
            </motion.h2>

            <div className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[10px] mb-4 md:mb-0">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.05em] leading-[1.1] text-left"
              >
                <Counter value={100} suffix="K+" />
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
                className="relative lg:absolute top-auto lg:top-[258px] left-0 lg:left-[400px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 glass-button-primary rounded-[60px] cursor-pointer mb-4 md:mb-0 mx-auto lg:mx-0"
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
          className="flex flex-col w-full items-start gap-2 relative lg:absolute top-auto lg:top-[478px] left-0 lg:left-[56px] xl:left-[96px] lg:w-[calc(100%-420px)] xl:w-auto text-left mb-6 lg:ml-0 px-4 sm:px-6 md:px-8 lg:px-0"
        >
          <p className="relative w-full max-w-none lg:max-w-full xl:w-auto [font-family:'Geist',Helvetica] font-medium text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[34px] xl:leading-[38px] whitespace-normal xl:whitespace-nowrap">
            <span className="text-[#7cb403]">{TALENT_INTRO_CONTENT.SCHEDULE_FOR} {editionName} Edition </span>
            <time className="text-[#ed2939]" dateTime={schedule.dateTime}>
              {schedule.date}
            </time>
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-8 relative lg:absolute top-auto lg:top-[589px] left-0 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-full scrollbar-hide pl-4 sm:pl-6 md:pl-8 lg:pl-0">
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
          <div className="hidden lg:flex gap-4 xl:gap-8 w-full lg:w-[95%] xl:w-auto justify-center">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                className="relative w-full max-w-[360px] lg:flex-1 lg:max-w-[380px] xl:w-[380px] h-[260px] lg:h-[280px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[24px] transition-colors duration-300 hover:bg-white cursor-pointer overflow-hidden"
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
                    className="inline-flex h-[38px] items-center justify-center gap-2 px-6 glass-button-primary rounded-[40px] cursor-pointer active:scale-95 shadow-sm hover:shadow-md"
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
          <motion.div
            key={image.id}
            className={`${image.containerClass} will-change-transform shadow-[12px_12px_30px_#00000017]`}
            aria-hidden="true"
            animate={{
              y: image.animY || [0, -10, 0],
              rotate: [image.baseRotate, image.baseRotate + 2, image.baseRotate],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              perspective: "1000px",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >
            <motion.img
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                scale: image.imageScale,
                transformOrigin: 'center center',
                objectPosition: image.objectPosition,
                x: image.imageTranslateX,
                y: image.imageTranslateY,
              }}
              alt={image.alt}
              src={image.src}
              animate={getCounterRotation(image.baseRotate)}
            />
          </motion.div>
        ))}

        <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

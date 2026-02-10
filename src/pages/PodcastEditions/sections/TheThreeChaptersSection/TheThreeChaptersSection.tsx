import { useState } from "react";
import { TheThreeChaptersSectionProps } from "../../../../types";
import { getEditionContent } from "../../../../data";
import { MobileCarouselSection } from "../../../../components/Sections/MobileCarouselSection";
import { LearnMoreModal } from "../../../../pages/Schedule/Components";
import { DECORATIVE_IMAGES } from "@/assets";
import { ArrowRightIcon, VideoCircleFilledIcon, ExportIcon } from "@/components/Common/Icons";
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

  const editionData = getEditionContent(edition);
  const { name: editionName, schedule, chapters } = editionData;

  const decorativeImages = [
    {
      id: 1,
      src: DECORATIVE_IMAGES.manInHeadphones,
      alt: "Man in headphones",
      containerClass:
        "absolute top-[200px] left-[0px] w-[100px] h-[70px] z-0 md:hidden lg:flex lg:top-[150px] lg:left-[871px] lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "mt-[-6px] w-[107px] h-[82px] ml-[-3.5px] scale-125 lg:mt-[-9.2px] lg:w-[163px] lg:h-[124.13px] lg:ml-[-5.1px] rotate-[7.30deg] aspect-[0.67] object-cover",
    },
    {
      id: 2,
      src: DECORATIVE_IMAGES.youngBlackMan,
      alt: "Young black man in headphones",
      containerClass:
        "absolute top-[60px] left-[180px] w-[120px] h-[84px] z-0 md:hidden lg:flex lg:top-52 lg:left-[1125px] lg:right-auto lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "w-full h-full object-cover scale-110 rotate-[-6.49deg] lg:mt-[-8.2px] lg:w-[162.7px] lg:h-[122.17px] lg:ml-[-5.5px]",
    },
  ];

  return (
    <section
      className="relative w-full max-w-[1440px] bg-white mx-auto overflow-hidden"
      style={{
        overflowX: "hidden",
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
                <header
                  className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[10px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-[8px] md:text-sm tracking-[-0.32px] leading-[normal] animate-slide-in-left"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    transform: "translateX(0)",
                  }}
                >
                  {SECTION_TITLES.THE_THREE_CHAPTERS}
                </header>

                <div
                  className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[10px] mb-4 md:mb-0 animate-slide-in-left"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    transform: "translateX(0)",
                  }}
                >
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.05em] leading-[1.1] text-left">
                    {TALENT_INTRO_CONTENT.VIEWER_COUNT}
                  </div>

                  <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-xs md:text-sm text-left tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
                    {SECTION_DESCRIPTIONS.VIEWERS_WORLDWIDE}
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 lg:contents">
                <p
                  className="relative lg:absolute top-auto lg:top-0 left-0 lg:left-[400px] w-full lg:w-[904px] max-w-full text-center lg:text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em] leading-[1.3] sm:leading-[1.35] lg:leading-[1.4] animate-slide-in-left"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    transform: "translateX(0)",
                  }}
                >
                  <span className="text-[#232323] tracking-[-0.77px]">
                    {TALENT_INTRO_CONTENT.CHAPTER_PREFIX} {editionName} Edition{" "}
                  </span>

                  <span className="text-[#8d8d8d] tracking-[-0.77px]">
                    {SECTION_DESCRIPTIONS.CHAPTER_EXPLORATION}
                  </span>
                </p>

                <div
                  className="flex lg:block items-center justify-center lg:justify-start animate-slide-in-left"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                    transform: "translateX(0)",
                  }}
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative lg:absolute top-auto lg:top-[258px] left-0 lg:left-[400px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors mb-4 md:mb-0 mx-auto lg:mx-0"
                    aria-label="More about the podcast"
                  >
                    <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.48px] leading-[normal]">
                      {BUTTONS.MORE_ABOUT_PODCAST}
                    </span>

                    <ArrowRightIcon className="text-white" size={24} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div
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
        </div>

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
          <div className="hidden lg:flex gap-8 w-full lg:w-auto">
            {chapters.map((episode) => (
              <article
                key={episode.id}
                className="relative w-full max-w-[360px] lg:w-[380px] h-[260px] lg:h-[280px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[24px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer"
                style={{ overflow: "visible" }}
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
                    className="[font-family:'Geist',Helvetica] font-medium text-black text-sm lg:text-base tracking-[-0.32px] leading-[normal] underline hover:text-[#7bb302] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                  >
                    {BUTTONS.LEARN_MORE}
                  </button>
                </div>

                <a
                  href="#"
                  className="absolute top-6 lg:top-9 right-4 lg:right-6 w-5 h-5 lg:w-6 lg:h-6"
                  aria-label={`External link for ${episode.title}`}
                >
                  <ExportIcon className="text-[#7bb302]" size={24} />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Decorative Images */}
        {!hideTopSection &&
          decorativeImages.map((image) => (
            <div
              key={image.id}
              className={`${image.containerClass}`}
              aria-hidden="true"
            >
              <img
                className={image.imageClass}
                alt={image.alt}
                src={image.src}
              />
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

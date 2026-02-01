import { useState } from "react";
import { TheThreeChaptersSectionProps } from "../../../../types";
import { getThreeChapters, getEditionName } from "../../../../data";
import { MobileCarouselSection } from "../../../../components/sections/MobileCarouselSection";
import { LearnMoreModal } from "../../../../pages/Schedule/components";

/**
 * TheThreeChaptersSection - Refactored to match TalentIntroductionSection exactly
 * Conditionally shows header/stats/description only for Singapore Edition
 */
export const TheThreeChaptersSection = ({
  edition = "singapore",
}: TheThreeChaptersSectionProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const episodes = getThreeChapters();
  const editionName = getEditionName(edition);
  const isSingapore = edition === "singapore";

  const decorativeImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/6IK4krLc/img/man-in-headphones-having-interview-2025-10-26-23-44-27-utc-1@2x.png",
      alt: "Man in headphones",
      containerClass:
        "absolute top-[290px] left-[0px] w-[100px] h-[70px] z-0 lg:top-[228px] lg:left-[871px] lg:w-[152px] lg:h-[106px] flex rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "mt-[-6px] w-[107px] h-[82px] ml-[-3.5px] scale-125 lg:mt-[-9.2px] lg:w-[163px] lg:h-[124.13px] lg:ml-[-5.1px] rotate-[7.30deg] aspect-[0.67] object-cover",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6IK4krLc/img/young-black-man-in-headphones-talking-in-microphon-2025-03-13-12@2x.png",
      alt: "Young black man in headphones",
      containerClass:
        "absolute top-[50px] left-[180px] w-[120px] h-[84px] lg:top-72 lg:left-[1125px] lg:right-auto lg:w-[152px] lg:h-[106px] flex rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "w-full h-full object-cover scale-110 rotate-[-6.49deg] lg:mt-[-8.2px] lg:w-[162.7px] lg:h-[122.17px] lg:ml-[-5.5px]",
    },
  ];

  return (
    <section className={`relative w-full max-w-[1440px] ${isSingapore ? 'min-h-[400px] md:min-h-[500px] lg:h-[1000px]' : 'min-h-[200px]'} bg-white ${isSingapore ? 'pl-0 pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 py-2 sm:py-3 md:py-4 lg:py-[8px]' : 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8'} ml-0 mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-8 overflow-hidden`} style={{ overflowX: 'hidden' }}>

      {isSingapore && (
        <div className="flex flex-col md:grid md:grid-cols-12 lg:block gap-8 lg:gap-0">
          <div className="md:col-span-4 lg:contents">
            <header className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[120px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-[10px] md:text-base tracking-[-0.32px] leading-[normal] animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
              THE THREE CHAPTERS
            </header>

            <div className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[120px] mb-4 md:mb-0 animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-4xl sm:text-5xl md:text-5xl lg:text-7xl tracking-[-1.5px] lg:tracking-[-2.88px] leading-[normal] text-left">
                100K+
              </div>

              <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm md:text-base text-left tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
                VIEWERS WORLDWIDE
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:contents">
            <p className="relative lg:absolute top-auto lg:top-0 left-0 lg:left-[510px] w-full lg:w-[904px] max-w-full text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-1px] lg:tracking-[-1.76px] leading-tight lg:leading-[normal] animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
              <span className="text-[#232323] tracking-[-0.77px]">
                Each episode of Talent Unwrapped: {editionName}{" "}
              </span>

              <span className="text-[#8d8d8d] tracking-[-0.77px]">
                explores a different human dimension of ambition, design, and
                leadership.
              </span>
            </p>

            <div className="flex lg:block items-center justify-start animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative lg:absolute top-auto lg:top-[258px] left-0 lg:left-[510px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors mb-4 md:mb-0"
                aria-label="More about the podcast"
              >
                <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.48px] leading-[normal]">
                  More about the podcast
                </span>

                <img
                  className="relative w-5 h-5 md:w-6 md:h-6 mt-[-1.00px] mb-[-1.00px]"
                  alt=""
                  src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`flex flex-col w-full items-start gap-2 ${isSingapore ? 'relative lg:absolute top-auto lg:top-[478px] left-0 lg:left-[60px]' : 'relative'} text-left mb-6 lg:ml-0 lg:pl-0`}>
        <p className={`relative w-full max-w-none ${isSingapore ? 'lg:w-auto lg:absolute lg:left-0' : ''} [font-family:'Geist',Helvetica] font-medium text-[20px] sm:text-[24px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[36px]`}>
          <span className="text-[#7cb403]">Pods scheduled for: {editionName} </span>
          <time className="text-[#ed2939]" dateTime="2025-11-12">
            12th, 13th Nov 2025
          </time>
        </p>
      </div>

      <div className={`flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 ${isSingapore ? 'relative lg:absolute top-auto lg:top-[589px] left-0 lg:right-0 lg:mx-auto' : 'relative'} w-full lg:w-fit overflow-x-hidden scrollbar-hide`}>
        {/* Mobile Carousel - Only visible on mobile */}
        <div className="lg:hidden w-full mb-8">
          <MobileCarouselSection
            podcastCards={episodes.map(ep => ({
              id: Number(ep.id),
              title: ep.title,
              subtitle: ep.subtitle || ""
            }))}
          />
        </div>

        {/* Desktop Cards - Only visible on lg+ */}
        <div className="hidden lg:flex gap-6 w-full lg:w-auto">
          {episodes.map((episode) => (
            <article
              key={episode.id}
              onClick={() => setIsModalOpen(true)}
              className="relative w-full max-w-[400px] lg:w-[424px] h-[320px] lg:h-[372px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer"
            >
              <div
                className="inline-flex items-center gap-2 lg:gap-2.5 p-2 lg:p-3 absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#7bb302] rounded-[40px]"
                aria-label="Video content"
              >
                <img
                  className="relative w-5 h-5 lg:w-6 lg:h-6"
                  alt=""
                  src={episode.videoIcon}
                />
              </div>

              <div className="flex flex-col w-[calc(100%-2rem)] lg:w-[376px] items-start justify-start gap-4 lg:gap-5 absolute top-20 lg:top-28 left-4 lg:left-6">
                <div className="flex items-center gap-2 lg:gap-2.5 pt-0 pb-2 lg:pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-200">
                  <h3 className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-lg sm:text-xl lg:text-[27px] tracking-[-0.5px] lg:tracking-[-1.08px] leading-tight lg:leading-[normal]">
                    <span className="text-[#7bb302] tracking-[-0.29px]">
                      {episode.title}{" "}
                    </span>

                    <span className="text-[#ed2939] tracking-[-0.29px]">
                      {episode.subtitle}
                    </span>
                  </h3>
                </div>

                <button
                  className="[font-family:'Geist',Helvetica] font-medium text-black text-sm lg:text-base tracking-[-0.32px] leading-[normal] underline hover:text-[#7bb302] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                >
                  Learn more
                </button>
              </div>

              <a
                href="#"
                className="absolute top-6 lg:top-9 right-4 lg:right-6 w-5 h-5 lg:w-6 lg:h-6"
                aria-label={`External link for ${episode.title}`}
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src={episode.exportIcon}
                />
              </a>
            </article>
          ))}
        </div>
      </div>

      {isSingapore && decorativeImages.map((image) => (
        <div key={image.id} className={`${image.containerClass}`} aria-hidden="true">
          <img className={image.imageClass} alt={image.alt} src={image.src} />
        </div>
      ))}

      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

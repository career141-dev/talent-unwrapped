import { useState } from "react";
import { LearnMoreModal } from "../../../../pages/Schedule/Components";
import { MobileCarouselSection } from "../../../../components/Sections/MobileCarouselSection";
import { EditionFilter } from "../../../../components/UI/EditionFilter";
import { getEditionContent } from "../../../../data";

export const TalentIntroductionSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<"singapore" | "dubai">("singapore");
  
  const editionData = getEditionContent(selectedEdition);
  const { name: editionName, schedule, chapters } = editionData;

  const decorativeImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/6IK4krLc/img/man-in-headphones-having-interview-2025-10-26-23-44-27-utc-1@2x.png",
      alt: "Man in headphones",
      containerClass:
        "absolute top-[200px] left-[0px] w-[100px] h-[70px] z-0 md:hidden lg:flex lg:top-[150px] lg:left-[871px] lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "mt-[-6px] w-[107px] h-[82px] ml-[-3.5px] scale-125 lg:mt-[-9.2px] lg:w-[163px] lg:h-[124.13px] lg:ml-[-5.1px] rotate-[7.30deg] aspect-[0.67] object-cover",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6IK4krLc/img/young-black-man-in-headphones-talking-in-microphon-2025-03-13-12@2x.png",
      alt: "Young black man in headphones",
      containerClass:
        "absolute top-[30px] left-[200px] w-[120px] h-[84px] z-0 md:hidden lg:flex lg:top-52 lg:left-[1125px] lg:right-auto lg:w-[152px] lg:h-[106px] rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
      imageClass:
        "w-full h-full object-cover scale-110 rotate-[-6.49deg] lg:mt-[-8.2px] lg:w-[162.7px] lg:h-[122.17px] lg:ml-[-5.5px]",
    },
  ];

  return (
    <section 
      className="relative w-full max-w-[1440px] bg-white mx-auto overflow-hidden" 
      style={{ 
        overflowX: 'hidden',
        paddingLeft: 'clamp(16px, 4vw, 120px)',
        paddingRight: 'clamp(16px, 4vw, 120px)',
        paddingTop: 'clamp(8px, 1vw, 20px)',
        paddingBottom: 'clamp(8px, 1vw, 20px)',
        marginTop: '40px',
        marginBottom: '0px',
        minHeight: 'clamp(400px, 50vh, 600px)',
      }}
    >
      <div className="lg:h-auto lg:min-h-[900px]">

      {/* Main Content Layout - Responsive Grid for Tablet, Absolute for Desktop */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 lg:block gap-8 lg:gap-0">
        <div className="md:col-span-4 lg:contents">
          <header className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-[10px] w-full lg:w-[203px] text-left mb-4 md:mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-[8px] md:text-sm tracking-[-0.32px] leading-[normal] animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
            THE THREE CHAPTERS
          </header>

          <div className="flex flex-col w-full lg:w-[203px] items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[164px] left-0 lg:left-[10px] mb-4 md:mb-0 animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] tracking-[-0.03em] sm:tracking-[-0.04em] lg:tracking-[-0.05em] leading-[1.1] text-left">
              100K+
            </div>

            <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-xs md:text-sm text-left tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
              VIEWERS WORLDWIDE
            </div>
          </div>
        </div>

        <div className="md:col-span-8 lg:contents">
          <p className="relative lg:absolute top-auto lg:top-0 left-0 lg:left-[400px] w-full lg:w-[904px] max-w-full text-center lg:text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] tracking-[-0.02em] sm:tracking-[-0.025em] lg:tracking-[-0.03em] leading-[1.3] sm:leading-[1.35] lg:leading-[1.4] animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
            <span className="text-[#232323] tracking-[-0.77px]">
              Each episode of Talent Unwrapped: {editionName} Edition{" "}
            </span>

            <span className="text-[#8d8d8d] tracking-[-0.77px]">
              explores a different human dimension of ambition, design, and
              leadership.
            </span>
          </p>

          <div className="flex lg:block items-center justify-center lg:justify-start animate-slide-in-left" style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)', transform: 'translateX(0)' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative lg:absolute top-auto lg:top-[258px] left-0 lg:left-[400px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors mb-4 md:mb-0 mx-auto lg:mx-0"
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

      {/* Edition Filter - Right Aligned */}
      <div className="relative lg:absolute top-auto lg:top-[478px] right-0 lg:right-[10px] mb-4 lg:mb-0 flex justify-center sm:justify-end px-4 sm:px-6 md:px-8 lg:px-0">
        <EditionFilter 
          selectedEdition={selectedEdition} 
          onEditionChange={setSelectedEdition} 
        />
      </div>

      <div className="flex flex-col w-full items-start gap-2 relative lg:absolute top-auto lg:top-[478px] left-0 lg:left-[120px] text-left mb-6 lg:ml-0 px-4 sm:px-6 md:px-8 lg:px-0">
        <p className="relative w-full max-w-none lg:w-auto lg:absolute lg:left-0 [font-family:'Geist',Helvetica] font-medium text-[20px] sm:text-[24px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[38px] whitespace-normal lg:whitespace-nowrap">
          <span className="text-[#7cb403]">Pods scheduled for: {editionName} Edition </span>
          <time className="text-[#ed2939]" dateTime={schedule.dateTime}>
            {schedule.date}
          </time>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-8 relative lg:absolute top-auto lg:top-[589px] left-0 lg:right-0 lg:left-[120px] w-full lg:w-auto overflow-x-hidden scrollbar-hide pl-4 sm:pl-6 md:pl-8 lg:pl-0">
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
        <div className="hidden lg:flex gap-8 w-full lg:w-auto">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              className="relative w-full max-w-[360px] lg:w-[380px] h-[260px] lg:h-[280px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[24px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer"
              style={{ overflow: 'visible' }}
            >
              <div
                className="inline-flex items-center gap-2 lg:gap-2.5 p-2 lg:p-3 absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#7bb302] rounded-[40px]"
                aria-label="Video content"
              >
                <img
                  className="relative w-5 h-5 lg:w-6 lg:h-6"
                  alt=""
                  src={chapter.videoIcon || "https://c.animaapp.com/6IK4krLc/img/vuesax-bold-video-circle-2.svg"}
                />
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
                  className="[font-family:'Geist',Helvetica] font-medium text-black text-sm lg:text-base tracking-[-0.32px] leading-[normal] underline hover:text-[#7bb302] transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
                >
                  Learn more
                </button>
              </div>

              <a
                href="#"
                className="absolute top-6 lg:top-9 right-4 lg:right-6 w-5 h-5 lg:w-6 lg:h-6"
                aria-label={`External link for ${chapter.title}`}
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src={chapter.exportIcon || "https://c.animaapp.com/6IK4krLc/img/vuesax-linear-export-2.svg"}
                />
              </a>
            </article>
          ))}
        </div>
      </div>

      {decorativeImages.map((image) => (
        <div key={image.id} className={`${image.containerClass}`} aria-hidden="true">
          <img className={image.imageClass} alt={image.alt} src={image.src} />
        </div>
      ))}

      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

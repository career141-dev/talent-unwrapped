import { useState, useEffect, useRef } from "react";

interface EpisodeType {
  id: number;
  title: string;
  isActive: boolean;
}

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export const EpisodeDetailsSection = (): JSX.Element => {
  const episodeTypes: EpisodeType[] = [
    { id: 1, title: "Fireside Chats", isActive: true },
    { id: 2, title: "1 on 1 Interviews", isActive: false },
    { id: 3, title: "2 - 3 Guest Panel", isActive: false },
    { id: 4, title: "Roundtable Discussions", isActive: false },
  ];

  const images: ImageItem[] = [
    {
      id: 1,
      src: "https://c.animaapp.com/6IK4krLc/img/handsome-elegant-men-with-beards-in-chic-attires-s-2024-11-12-02.png",
      alt: "Handsome elegant men",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6IK4krLc/img/professional-businessman-partner-person-success-te-2025-03-26-02@2x.png",
      alt: "Professional",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/6IK4krLc/img/in-recreation-area-sitting-on-yellow-chairs-office-2024-11-27-09@2x.png",
      alt: "In recreation area",
    },
    {
      id: 4,
      src: "https://c.animaapp.com/6IK4krLc/img/team-of-reporters-working-on-a-interview-with-a-gr-2024-10-13-20@2x.png",
      alt: "Team of reporters",
    },
    {
      id: 5,
      src: "https://c.animaapp.com/6IK4krLc/img/four-people-meeting-in-lounge-area-of-a-corporate-2024-10-19-05-@2x.png",
      alt: "Four people meeting",
    },
  ];

  const [activeEpisode, setActiveEpisode] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleEpisodeClick = (id: number) => {
    setActiveEpisode(id);
  };

  const handleEpisodeKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveEpisode(id);
    }
  };

  // Calculate position and scale for each image based on active index
  const getImageStyle = (index: number) => {
    const totalImages = images.length;
    const diff = (index - activeImageIndex + totalImages) % totalImages;

    // Use smaller offset for mobile, larger for desktop
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
    const baseOffset = isMobile ? (isTablet ? 100 : 70) : 140;

    // Main image (active) - center, largest, highest z-index
    if (diff === 0) {
      return {
        transform: 'translate(-50%, -50%) scale(1)',
        zIndex: 50,
        opacity: 1,
        left: '50%',
        top: '50%',
        filter: 'none',
      };
    }

    // Images to neighbors
    if (diff <= Math.floor(totalImages / 2)) {
      const offset = diff * baseOffset;
      const scale = 1 - (diff * 0.15);
      return {
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 50 - diff,
        opacity: 0.8,
        left: `calc(50% + ${offset}px)`,
        top: '50%',
        filter: 'none',
      };
    }

    const leftDiff = totalImages - diff;
    const offset = leftDiff * baseOffset;
    const scale = 1 - (leftDiff * 0.15);
    return {
      transform: `translate(-50%, -50%) scale(${scale})`,
      zIndex: 50 - leftDiff,
      opacity: 0.8,
      left: `calc(50% - ${offset}px)`,
      top: '50%',
      filter: 'none',
    };
  };

  // Start/stop animation based on visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the loop
            intervalRef.current = setInterval(() => {
              setActiveImageIndex((prev) => (prev + 1) % images.length);
            }, 3000); // Change image every 3 seconds
          } else {
            // Stop the loop
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1440px] bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-8 md:py-12 lg:py-[50px] mx-auto mt-2 sm:mt-8 md:mt-12 lg:mt-[70px] overflow-hidden min-h-0 sm:min-h-[900px]"
      style={{ overflowX: 'hidden' }}
      aria-labelledby="episode-details-heading"
    >
      {/* Blockquote and Heading side by side on large screens */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 items-start w-full">
        <div className="flex flex-col gap-2 sm:gap-3 flex-1">
          <h2
            id="episode-details-heading"
            className="[font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.32px] leading-[normal] text-left"
          >
            WHY BE A GUEST?
          </h2>
          <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.1px] sm:tracking-[-1.3px] lg:tracking-[-2px] leading-tight lg:leading-[normal] whitespace-nowrap flex flex-col items-start justify-start text-left">
            <span className="text-[#232323] tracking-[-1.1px] whitespace-nowrap">Your words, Your wisdom</span>
          </p>
          <div className="relative w-full flex items-center gap-1 sm:gap-3 lg:gap-4 text-left">
            <span className="inline-block w-8 h-6 sm:w-[70px] sm:h-9 lg:w-[120px] lg:h-[48px] bg-[#00000033] rounded-[80px] flex-shrink-0" aria-hidden="true"></span>
            <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.1px] sm:tracking-[-1.3px] lg:tracking-[-2px] leading-6 sm:leading-[2.5rem] lg:leading-[48px] whitespace-nowrap h-8 sm:h-10 lg:h-[48px] flex items-center text-left">
              <span className="text-[#232323] tracking-[-1.1px]">Your </span>
              <span className="text-[#ed2939] tracking-[-1.1px]">unwrapped moment</span>
            </p>
          </div>
        </div>
        <blockquote className="block static w-full max-w-[315px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[420px] ml-0 mr-auto [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg tracking-[-0.64px] leading-[normal] z-10 p-3 sm:p-4 bg-white/80 rounded-xl shadow-md mb-4 lg:mb-0">
          &quot;Be seen, not as a speaker — but as a story. Join a curated circle
          of founders, thinkers, and changemakers shaping how humans thrive in
          work and life. We&apos;re looking for voices who don&apos;t just lead —
          they inspire.&quot;
        </blockquote>
      </div>

      {/* Image Stack Container - Now below the blockquote */}
      <div className="relative w-full max-w-xs h-[220px] sm:max-w-[500px] sm:h-[350px] md:h-[400px] mx-auto mb-6 lg:max-w-none lg:w-[560px] lg:h-[320px] lg:mx-0 lg:mb-0 lg:absolute lg:top-[240px] lg:right-[100px] pointer-events-none will-change-transform flex items-center justify-center overflow-visible">
        {images.map((image, index) => {
          const style = getImageStyle(index);
          const isActive = (index === activeImageIndex);
          return (
            <div
              key={image.id}
              className="absolute w-[200px] h-[220px] sm:w-[240px] sm:h-[260px] md:w-[280px] md:h-[300px] lg:w-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-700 ease-in-out will-change-transform active:scale-95 lg:active:scale-100"
              style={{
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: isActive ? 1 : 0.6,
                left: style.left,
                top: style.top,
                filter: style.filter,
              }}
            >
              <img
                className="w-full h-full object-cover transition-all duration-700"
                alt={image.alt}
                src={image.src}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <nav
        className="flex flex-col w-full max-w-[400px] items-start gap-3 sm:gap-5 relative lg:absolute top-auto lg:top-[283px] left-0 lg:left-6 z-10 mb-6 sm:mb-8 lg:mb-0"
        aria-label="Episode types"
      >
        {episodeTypes.map((episode) => (
          <button
            key={episode.id}
            onClick={() => handleEpisodeClick(episode.id)}
            onKeyDown={(e) => handleEpisodeKeyDown(e, episode.id)}
            className={`flex h-10 sm:h-[60px] items-center justify-between pl-3 sm:pl-5 pr-1.5 py-2 sm:py-5 relative self-stretch w-full rounded-[60px] ${activeEpisode === episode.id
              ? "bg-neutral-100"
              : "border border-solid border-neutral-200"
              } transition-all duration-200 hover:shadow-md active:scale-95 active:shadow-lg lg:active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 cursor-pointer z-20 touch-manipulation`}
            aria-pressed={activeEpisode === episode.id}
            type="button"
          >
            <div className="inline-flex items-center gap-3 sm:gap-5 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
              <div className="relative w-3 h-2 sm:w-4 sm:h-2.5" aria-hidden="true">
                <div className="left-0 bg-[#7bb302] absolute top-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[5px] aspect-[1]" />
                <div className="left-1 bg-[#ed2939] absolute top-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[5px] aspect-[1]" />
              </div>
              <span className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-base sm:text-xl tracking-[-0.60px] sm:tracking-[-0.80px] leading-[normal]">
                {episode.title}
              </span>
            </div>
            <div
              className="flex w-8 h-8 sm:w-12 sm:h-12 items-center justify-center gap-2.5 p-2 relative mt-[-8.00px] mb-[-8.00px] sm:mt-[-14.00px] sm:mb-[-14.00px] bg-[#7bb302] rounded-[40px] aspect-[1]"
              aria-hidden="true"
            >
              <img
                className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mt-[-1.00px] mb-[-1.00px]"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
              />
            </div>
          </button>
        ))}
      </nav>


      <div className="relative lg:absolute top-auto lg:top-[632px] left-0 w-full max-w-none px-0 overflow-hidden z-10 mt-8 lg:mt-0" aria-hidden="true">
        <div className="flex w-full overflow-hidden">
          <div className="flex shrink-0 animate-infinite-scroll whitespace-nowrap">
            <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[80px] md:text-[140px] lg:text-[200px] tracking-[-4px] md:tracking-[-10px] leading-[normal] px-8">
              lets unwrap your story
            </span>
            <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[80px] md:text-[140px] lg:text-[200px] tracking-[-4px] md:tracking-[-10px] leading-[normal] px-8">
              lets unwrap your story
            </span>
          </div>
          <div className="flex shrink-0 animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
            <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[80px] md:text-[140px] lg:text-[200px] tracking-[-4px] md:tracking-[-10px] leading-[normal] px-8">
              lets unwrap your story
            </span>
            <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[80px] md:text-[140px] lg:text-[200px] tracking-[-4px] md:tracking-[-10px] leading-[normal] px-8">
              lets unwrap your story
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

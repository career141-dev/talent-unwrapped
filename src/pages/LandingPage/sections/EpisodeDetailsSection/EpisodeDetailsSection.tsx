import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { EPISODE_IMAGES } from "@/assets";
import { ArrowRightIcon } from "@/components/Common/Icons";
import { SECTION_TITLES, SECTION_DESCRIPTIONS, GUEST_SECTION_CONTENT } from "@/constants/copy";

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

interface EpisodeDetailsSectionProps {
  isEpisodesPage?: boolean;
}

export const EpisodeDetailsSection = ({ isEpisodesPage = false }: EpisodeDetailsSectionProps): JSX.Element => {
  const episodeTypes: EpisodeType[] = [
    { id: 1, title: GUEST_SECTION_CONTENT.FIRESIDE_CHATS, isActive: true },
    { id: 2, title: GUEST_SECTION_CONTENT.ONE_ON_ONE, isActive: false },
    { id: 3, title: GUEST_SECTION_CONTENT.GUEST_PANEL, isActive: false },
    { id: 4, title: GUEST_SECTION_CONTENT.ROUNDTABLE, isActive: false },
  ];

  const images: ImageItem[] = [
    {
      id: 1,
      src: EPISODE_IMAGES.handsomeElegantMen,
      alt: "Handsome elegant men",
    },
    {
      id: 2,
      src: EPISODE_IMAGES.professionalBusinessman,
      alt: "Professional",
    },
    {
      id: 3,
      src: EPISODE_IMAGES.recreationArea,
      alt: "In recreation area",
    },
    {
      id: 4,
      src: EPISODE_IMAGES.teamReporters,
      alt: "Team of reporters",
    },
    {
      id: 5,
      src: EPISODE_IMAGES.fourPeopleMeeting,
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
    <>
      <section
        ref={sectionRef}
        className={`relative w-full bg-white py-4 sm:py-8 md:py-12 lg:py-[50px] mt-2 sm:mt-8 md:mt-12 lg:mt-[70px] min-h-0 overflow-hidden ${isEpisodesPage ? "sm:min-h-[500px]" : "sm:min-h-[900px]"
          }`}
        aria-labelledby="episode-details-heading"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
          {/* Blockquote and Heading side by side on large screens */}
          {/* Blockquote and Heading side by side on large screens - Hidden on Episodes Page */}
          {!isEpisodesPage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 items-start w-full"
            >
              <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                <h2
                  id="episode-details-heading"
                  className="[font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.32px] leading-[normal] text-left"
                >
                  {SECTION_TITLES.WHY_BE_A_GUEST}
                </h2>
                <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.1px] sm:tracking-[-1.3px] lg:tracking-[-2px] leading-tight lg:leading-[normal] whitespace-normal lg:whitespace-nowrap flex flex-col items-start justify-start text-left">
                  <span className="text-[#232323] tracking-[-1.1px] whitespace-normal lg:whitespace-nowrap">{GUEST_SECTION_CONTENT.SUBTITLE}</span>
                </p>
                <div className="relative w-full flex items-center gap-1 sm:gap-3 lg:gap-4 text-left">
                  <span className="inline-block w-8 h-6 sm:w-[70px] sm:h-9 lg:w-[120px] lg:h-[48px] bg-[#00000033] rounded-[80px] flex-shrink-0" aria-hidden="true"></span>
                  <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.1px] sm:tracking-[-1.3px] lg:tracking-[-2px] leading-6 sm:leading-[2.5rem] lg:leading-[48px] whitespace-normal lg:whitespace-nowrap min-h-8 sm:min-h-10 lg:min-h-[48px] h-auto flex items-center text-left">
                    <span className="text-[#232323] tracking-[-1.1px]">{GUEST_SECTION_CONTENT.UNWRAPPED_PREFIX}</span>
                    <span className="text-[#ed2939] tracking-[-1.1px]">{GUEST_SECTION_CONTENT.UNWRAPPED_TEXT}</span>
                  </p>
                </div>
              </div>
              <blockquote className="block static w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[420px] ml-0 mr-auto [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg tracking-[-0.64px] leading-[normal] z-10 mb-4 lg:mb-0">
                &quot;{SECTION_DESCRIPTIONS.GUEST_INVITATION}&quot;
              </blockquote>
            </motion.div>
          )}

          {/* Image Stack Container - Now below the blockquote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative w-full max-w-[160px] h-[200px] sm:max-w-[320px] sm:h-[280px] md:max-w-[400px] md:h-[350px] mx-auto mb-6 px-4 sm:px-0 lg:max-w-none lg:w-[560px] lg:h-[320px] lg:mx-0 lg:mb-0 lg:px-0 lg:absolute ${isEpisodesPage ? "lg:top-[50px]" : "lg:top-[240px]"
              } lg:right-[100px] pointer-events-none flex items-center justify-center`}>
            {images.map((image, index) => {
              const style = getImageStyle(index);
              const isActive = (index === activeImageIndex);
              return (
                <div
                  key={image.id}
                  className="absolute w-[160px] h-[180px] sm:w-[240px] sm:h-[260px] md:w-[280px] md:h-[300px] lg:w-[280px] lg:h-[320px] rounded-3xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-700 ease-in-out active:scale-95 lg:active:scale-100"
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
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex flex-col w-full max-w-[400px] items-start gap-3 sm:gap-5 relative lg:absolute top-auto ${isEpisodesPage ? "lg:top-[93px]" : "lg:top-[283px]"
              } left-0 lg:left-20 z-10 mb-6 sm:mb-8 lg:mb-0`}
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
                  <ArrowRightIcon className="text-white" size={24} />
                </div>
              </button>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Full-width scrolling text - completely outside section */}
      <div className="relative w-full overflow-hidden z-10 mt-8 lg:mt-[-200px]" aria-hidden="true">
        <motion.div
          animate={{ x: "-25%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[80px] md:text-[140px] lg:text-[200px] tracking-[-4px] md:tracking-[-10px] leading-[normal] px-8">
              {SECTION_TITLES.LETS_UNWRAP_YOUR_STORY}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

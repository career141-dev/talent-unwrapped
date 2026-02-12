import { useEffect, useRef, useState } from "react";
import { REELS_DATA } from "@/data";

interface ReelsSectionProps {
  edition?: "Dubai" | "Singapore" | "Sri Lanka";
}

export const ReelsSection = ({ edition }: ReelsSectionProps): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Filter reels based on edition if provided
  const reelVideos = edition
    ? REELS_DATA.filter((reel) => reel.edition === edition)
    : REELS_DATA;

  // Track active slide on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!container) return;

      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  // Auto-play on mobile after delay
  useEffect(() => {
    // simplified mobile check
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

    if (isMobile) {
      setPlayingIndex(null); // Reset immediately on scroll

      const timer = setTimeout(() => {
        setPlayingIndex(activeIndex);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section
      id="reels"
      ref={sectionRef}
      className="relative w-full bg-white pt-10 pb-16 sm:py-20 md:py-24 lg:py-[90px]"
    >
      <div
        className="w-full max-w-full overflow-x-auto overscroll-x-contain scrollbar-hide snap-x snap-mandatory relative pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 py-12"
        ref={scrollContainerRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex w-fit lg:w-full gap-4 sm:gap-6 lg:gap-6 lg:snap-none">
          {reelVideos.map((reel, index) => (
            <div
              key={reel.id}
              ref={(el) => (slideRefs.current[index] = el)}
              className="relative flex-shrink-0 group overflow-hidden shadow-lg bg-black rounded-2xl md:rounded-3xl
                w-[85vw] sm:w-[60vw] md:w-[45vw] h-[600px] snap-center
                lg:w-[calc((100%-72px)/3.5)] lg:h-[850px] lg:snap-align-none transition-all duration-300 transform hover:scale-[1.02] hover:z-10 origin-center"
              onMouseEnter={() => setPlayingIndex(index)}
              onMouseLeave={() => setPlayingIndex(null)}
            >
              {/* Media Container */}
              <div className="absolute inset-0 w-full h-full bg-black">
                {playingIndex === index ? (
                  <iframe
                    src={`${reel.videoUrl}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&loop=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={reel.title}
                    style={{ border: 'none', pointerEvents: 'none' }}
                  />
                ) : (
                  <img
                    src={reel.thumbnailUrl}
                    alt={reel.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                )}
              </div>

              {/* Overlay with Title */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 pointer-events-none flex flex-col justify-end p-4 sm:p-5 md:p-6 transition-opacity duration-300"
                style={{ opacity: playingIndex === index ? 0 : 1 }}
              >
                <h3 className="[font-family:'Geist',Helvetica] font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-xl tracking-[-0.40px] leading-[normal] mb-2 sm:mb-3 lg:mb-2">
                  {reel.title}
                </h3>
                <p className="[font-family:'Geist',Helvetica] font-normal text-white/80 text-sm sm:text-base lg:text-sm leading-[normal]">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Pagination Indicator */}
      <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
        {reelVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (container) {
                const width = container.offsetWidth;
                container.scrollTo({
                  left: index * width,
                  behavior: "smooth",
                });
              }
            }}
            className={`transition-all duration-300 rounded-full ${activeIndex === index
              ? "w-8 h-2 bg-[#7bb302]"
              : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to reel ${index + 1}`}
            aria-current={activeIndex === index ? "step" : undefined}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

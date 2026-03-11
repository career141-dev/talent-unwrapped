import { useState, useRef, useEffect } from "react";
import { VideoCircleFilledIcon, ArrowRightIcon } from "@/components/common/Icons";
import { BUTTONS } from "@/constants/copy";

interface PodcastCard {
  id: number;
  title: string;
  subtitle: string;
}

interface MobileCarouselSectionProps {
  podcastCards?: PodcastCard[];
  onLearnMore?: () => void;
}

export const MobileCarouselSection = ({
  podcastCards = [
    {
      id: 1,
      title: "Leadership Reimagined: ",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
    },
    {
      id: 2,
      title: "Leadership Reimagined: ",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
    },
    {
      id: 3,
      title: "Leadership Reimagined: ",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
    },
    {
      id: 4,
      title: "Leadership Reimagined: ",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
    },
  ],
  onLearnMore,
}: MobileCarouselSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  // Update active index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to specific slide
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return;

    // Set active immediately
    setActiveIndex(index);
    isScrollingRef.current = true;

    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const containerCenter = container.offsetWidth / 2;
    const scrollPosition = slideCenter - containerCenter;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 150);
  };

  // Hide scrollbar and enable smooth scrolling
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-[310px] bg-white overflow-hidden flex flex-col items-center justify-start py-2">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="w-full max-w-full overflow-x-auto overscroll-x-contain scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 md:px-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollPaddingLeft: "calc((100% - 320px) / 2)",
          scrollPaddingRight: "calc((100% - 320px) / 2)",
        }}
      >
        <div className="flex items-center gap-6 h-[275px]">
          {podcastCards.map((card, index) => {
            const isActive = index === activeIndex;
            const scale = isActive ? "scale-100" : "scale-[0.90]";
            const opacity = isActive ? "opacity-100" : "opacity-60";
            const zIndex = isActive ? "z-20" : "z-10";

            return (
              <div
                key={card.id}
                ref={(el) => (slideRefs.current[index] = el)}
                className={`flex-shrink-0 snap-center transition-all duration-75 ease-out ${scale} ${opacity} ${zIndex} my-auto`}
                style={{
                  width: "320px",
                  height: "265px",
                }}
              >
                <div className="w-full h-full bg-[#f8f8f8] rounded-[25.04px] shadow-[0px_4px_4px_#00000040] relative">
                  <div
                    className="inline-flex items-center gap-[8.94px] p-[10.73px] absolute top-[22px] left-[22px] bg-[#7bb302] rounded-[35.78px] z-10"
                    aria-label="Video content"
                  >
                    <VideoCircleFilledIcon
                      className="relative text-white"
                      size={22}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col w-[275px] items-start gap-[17.89px] absolute top-[108px] left-[22px]">
                    <div className="flex w-[275px] h-[82px] items-center gap-[8.94px] pt-0 pb-[10.73px] px-0 relative border-b-[0.89px] [border-bottom-style:solid] border-neutral-200">
                      <h3 className="relative w-[275px] mt-[-18.76px] mb-[-16.97px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[20.5px] tracking-[-0.80px] leading-[normal]">
                        <span className="text-[#7bb302] tracking-[-0.16px]">
                          {card.title}
                        </span>
                        <span className="text-[#ed2939] tracking-[-0.16px]">
                          {card.subtitle}
                        </span>
                      </h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onLearnMore?.();
                      }}
                      className="inline-flex h-10 items-center justify-center gap-2 px-5 py-2 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
                      aria-label={BUTTONS.LEARN_MORE}
                    >
                      <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-[13px] tracking-[-0.4px] leading-[normal]">
                        {BUTTONS.LEARN_MORE}
                      </span>
                      <ArrowRightIcon className="text-white" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div
        className="flex w-full h-1 items-start justify-center gap-[6px] relative mt-2"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {podcastCards.map((_, index) => (
          <button
            key={index}
            className={`relative w-[6px] h-[6px] rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#7bb302]" : "bg-neutral-90"
              }`}
            onClick={() => scrollToSlide(index)}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Mobile Carousel Section - Podcast Cards with Interactive Scroll
// Extracted from HeroSection - Three Chapters carousel

import { useState, useRef, useEffect } from "react";

interface PodcastCard {
    id: number;
    title: string;
    subtitle: string;
}

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
    onLearnMore
}: MobileCarouselSectionProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isScrollingRef = useRef(false);

    // Update active index based on scroll position
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
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
            }, 100);
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    // Scroll to specific slide
    const scrollToSlide = (index: number) => {
        const container = scrollContainerRef.current;
        const slide = slideRefs.current[index];
        if (!container || !slide) return;

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
            setActiveIndex(index);
        }, 500);
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
        <div className="relative w-full h-[283px] bg-white overflow-hidden">
            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="relative w-full h-[260px] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide px-4"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                <div className="flex items-center gap-4 h-full">
                    {podcastCards.map((card, index) => {
                        const isActive = index === activeIndex;
                        const scale = isActive ? "scale-100" : "scale-[0.88]";
                        const opacity = isActive ? "opacity-100" : "opacity-70";
                        const zIndex = isActive ? "z-20" : "z-10";

                        return (
                            <div
                                key={card.id}
                                ref={(el) => (slideRefs.current[index] = el)}
                                className={`flex-shrink-0 snap-center transition-all duration-300 ${scale} ${opacity} ${zIndex}`}
                                style={{
                                    width: "297px",
                                }}
                            >
                                <div className="w-[297px] h-[248px] bg-[#f8f8f8] rounded-[25.04px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
                                    <div
                                        className="inline-flex items-center gap-[8.94px] p-[10.73px] absolute top-[21px] left-[21px] bg-[#7bb302] rounded-[35.78px]"
                                        aria-label="Video content"
                                    >
                                        <img
                                            className="relative w-[21.47px] h-[21.47px]"
                                            alt=""
                                            src="https://c.animaapp.com/JrnespQo/img/vuesax-bold-video-circle.svg"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="flex flex-col w-[255px] items-start gap-[17.89px] absolute top-[100px] left-[21px]">
                                        <div className="flex w-[255px] h-[79px] items-center gap-[8.94px] pt-0 pb-[10.73px] px-0 relative border-b-[0.89px] [border-bottom-style:solid] border-neutral-200">
                                            <h3 className="relative w-[255px] mt-[-18.76px] mb-[-16.97px] [font-family:'Geist',Helvetica] font-medium text-transparent text-xl tracking-[-0.80px] leading-[normal]">
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
                                            className="relative self-stretch [font-family:'Geist',Helvetica] font-medium text-black text-[14.3px] tracking-[-0.29px] leading-[normal] underline hover:text-[#7bb302] transition-colors bg-transparent border-none p-0 text-left cursor-pointer"
                                        >
                                            Learn more
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
                className="flex w-full h-1 items-start justify-center gap-[3.97px] relative mt-4"
                role="tablist"
                aria-label="Carousel navigation"
            >
                {podcastCards.map((_, index) => (
                    <button
                        key={index}
                        className={`relative w-[3.97px] h-[3.97px] rounded-[1.99px] transition-colors duration-300 ${index === activeIndex ? "bg-[#7bb302]" : "bg-neutral-90"
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

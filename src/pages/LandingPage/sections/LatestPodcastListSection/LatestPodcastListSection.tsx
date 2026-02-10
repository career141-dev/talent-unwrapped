import { useState, useEffect, useRef } from "react";
import { LATEST_PODCASTS_DATA } from "@/data/episodeData";
import { BackArrowIcon, NextArrowIcon, PlayIcon } from "@/components/Common/Icons";

export const LatestPodcastListSection = (): JSX.Element => {
  const [activeTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isManualScrollRef = useRef(true);

  const allPodcastDataSets = LATEST_PODCASTS_DATA;

  const podcastData = allPodcastDataSets[0]; // Use first dataset
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(podcastData.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE);

  const getEmbedUrl = (url: string) => {
    try {
      // Handle youtu.be short URLs
      if (url.includes("youtu.be")) {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
      }
      // Handle youtube.com/watch URLs
      if (url.includes("youtube.com/watch")) {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScrollTracking = () => {
      // Only track scroll if it's manual (not programmatic)
      if (!isManualScrollRef.current) return;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // Get the first article element to measure actual dimensions
        const firstArticle = container.querySelector("article");
        if (!firstArticle) return;

        const articleWidth = firstArticle.offsetWidth;

        // Get computed gap from the container
        const computedStyle = window.getComputedStyle(container);
        const gapValue = computedStyle.gap;
        const gap = parseInt(gapValue) || 16; // default to 16 if can't parse

        const itemSize = articleWidth + gap;

        // Calculate current index based on scroll position
        const scrollPosition = container.scrollLeft;
        const newIndex = Math.round(scrollPosition / itemSize);
        const maxIndex = podcastData.length - 1;

        setCurrentIndex(Math.min(newIndex, maxIndex));
      }, 50);
    };

    container.addEventListener("scroll", handleScrollTracking, {
      passive: true,
    });
    return () => {
      container.removeEventListener("scroll", handleScrollTracking);
      clearTimeout(timeoutId);
    };
  }, [podcastData.length]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePaginationClick = (pageIndex: number) => {
    const newIndex = pageIndex * ITEMS_PER_PAGE;
    setCurrentIndex(newIndex);

    // Scroll the container to show the correct item
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstArticle = container.querySelector("article");

      if (firstArticle) {
        const articleWidth = firstArticle.offsetWidth;
        const computedStyle = window.getComputedStyle(container);
        const gapValue = computedStyle.gap;
        const gap = parseInt(gapValue) || 16;
        const itemSize = articleWidth + gap;
        const scrollPosition = newIndex * itemSize;

        // Disable manual scroll tracking during programmatic scroll
        isManualScrollRef.current = false;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });

        // Re-enable manual scroll tracking after scroll completes
        setTimeout(() => {
          isManualScrollRef.current = true;
        }, 1000);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="episodes"
      className="relative w-full max-w-[1440px] bg-white py-2 sm:py-3 md:py-4 lg:py-[8px] px-0 sm:px-6 md:px-8 lg:px-10 mx-auto overflow-hidden"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full">
        <div
          className={`flex flex-col items-start gap-8 md:gap-10 lg:gap-12 w-full transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <header className="flex flex-col items-start gap-2 relative w-full">
            <h2 className="relative w-full max-w-full lg:max-w-[721px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[52px] tracking-[-0.02em] sm:tracking-[-0.025em] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
              <span className="text-[#ed2939]">Latest</span>
              <span className="text-[#7cb403]"> Podcast</span>
            </h2>
          </header>

          <nav className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between w-full gap-4 sm:gap-0">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <button
                  className="inline-flex items-start px-4 sm:px-5 md:px-6 py-2 relative flex-[0_0_auto] border-b-2 md:border-b-[3px] [border-bottom-style:solid] border-[#7bb302] transition-all duration-300 hover:bg-green-50"
                  aria-current={activeTab === "all" ? "page" : undefined}
                >
                  <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                    All
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Scrollable Container with Scroll Buttons - Hidden on mobile */}
        <div className="relative w-full mt-8 md:mt-10 lg:mt-12">
          {/* Left Scroll Button */}
          <button
            className="hidden xl:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] items-center justify-center cursor-pointer z-20 transition-transform"
            onClick={() => handleScroll("left")}
            type="button"
            aria-label="Scroll left"
          >
            <BackArrowIcon
              className="w-full h-full object-contain pointer-events-none"
              size="100%"
            />
          </button>

          {/* Scrollable Podcasts Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide relative pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {podcastData.map((podcast, index) => (
              <article
                key={podcast.id}
                className={`relative w-[250px] sm:w-[270px] md:w-[282px] flex flex-col gap-3 md:gap-4 group transition-all duration-500 flex-shrink-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-[150px] sm:h-[160px] md:h-[180px] bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  {playingVideo === podcast.id ? (
                    <iframe
                      className="w-full h-full"
                      src={getEmbedUrl(podcast.videoUrl)}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="block w-full h-full relative">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={podcast.thumbnailUrl}
                        alt={podcast.title}
                      />
                      <button
                        onClick={() => setPlayingVideo(podcast.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer touch-manipulation z-10"
                        aria-label={`Play ${podcast.title}`}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                          <PlayIcon
                            className="sm:w-6 sm:h-6 md:w-7 md:h-7 ml-0.5"
                            fill="#7bb302"
                            stroke="none"
                            size={20}
                          />
                        </div>
                      </button>
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/80 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-md pointer-events-none">
                        <span className="[font-family:'Geist',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                          Watch
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch min-h-[24px] sm:min-h-[26px] md:min-h-[30px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-black text-base sm:text-lg tracking-[0] leading-tight sm:leading-[26px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    {podcast.title}
                  </h3>
                  <p className="relative w-full [font-family:'Geist',Helvetica] font-normal text-[#939393] text-xs sm:text-sm tracking-[0] leading-[1.4]">
                    {podcast.edition}
                  </p>
                  <time className="relative w-full [font-family:'Geist',Helvetica] font-normal text-[#939393] text-xs sm:text-sm tracking-[0] leading-[1.4]">
                    {podcast.date}
                  </time>
                </div>
              </article>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="hidden xl:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] items-center justify-center cursor-pointer z-20 hover:scale-105 transition-transform"
            onClick={() => handleScroll("right")}
            type="button"
            aria-label="Scroll right"
          >
            <NextArrowIcon
              className="w-full h-full object-contain pointer-events-none"
              size="100%"
            />
          </button>
        </div>
        {/* Grid Layout for Mobile and Tablet has been removed as requested */}

        <div
          className="flex w-full h-2 items-start justify-center gap-1.5 sm:gap-2 mt-8 md:mt-10 lg:mt-12"
          role="tablist"
          aria-label="Podcast carousel pagination"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`relative h-1.5 sm:h-2 rounded cursor-pointer transition-all duration-300 hover:scale-125 touch-manipulation ${index === currentPage
                ? "bg-[#7bb302] w-6 sm:w-8"
                : "bg-neutral-90 w-1.5 sm:w-2"
                }`}
              role="tab"
              aria-selected={index === currentPage}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import { useRef, useState, useEffect } from "react";
import { LANDING_SPEAKERS_DATA } from "@/data/speakerData";
import { NAVIGATION_ICONS } from "@/assets";

export const SpeakersProfileSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isManualScrollRef = useRef(true);

  const allSpeakersData = LANDING_SPEAKERS_DATA;

  const speakers = allSpeakersData[0]; // Use first dataset
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE);

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
        const maxIndex = speakers.length - 1;

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
  }, [speakers.length]);

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

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const cards = Array.from(container.querySelectorAll("article"));

      if (cards.length >= 2) {
        // Measure the exact distance between first and second card (this includes gap)
        const firstCardLeft = cards[0].offsetLeft;
        const secondCardLeft = cards[1].offsetLeft;
        const scrollAmount = secondCardLeft - firstCardLeft;

        // Scroll by that amount
        if (direction === "left") {
          container.scrollLeft -= scrollAmount;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    }
  };

  return (
    <section
      id="speakers"
      className="relative w-full bg-white py-10 sm:py-12 md:py-16 lg:py-[60px] overflow-hidden"
      style={{ overflowX: "hidden" }}
    >
      {/* Inner container with responsive padding - matches global layout only on web */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 relative w-full">
          <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full max-w-full lg:max-w-[721px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[52px] tracking-[-0.02em] sm:tracking-[-0.025em] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
              <span className="text-[#7cb403]">Our </span>
              <span className="text-[#ed2939]">Speakers</span>
            </h2>
          </header>

          <div className="inline-flex flex-col items-start gap-3 md:gap-4 lg:gap-6 relative flex-[0_0_auto] w-full">
            <nav
              className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between relative self-stretch w-full flex-[0_0_auto] gap-4 sm:gap-0"
              aria-label="Speaker categories"
            >
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="inline-flex items-start px-4 sm:px-5 md:px-6 py-2 relative flex-[0_0_auto] border-b-2 md:border-b-[3px] [border-bottom-style:solid] border-[#7bb302]">
                  <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                    All
                  </span>
                </div>
              </div>
            </nav>

            {/* Scrollable Container with Navigation Buttons */}
            <div className="relative w-full">
              {/* Left Scroll Button - positioned outside container only on XL desktop */}
              <button
                className="hidden lg:block absolute left-2 xl:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 xl:w-[120px] xl:h-[120px] cursor-pointer z-10 hover:scale-105 transition-transform bg-white/10 rounded-full xl:bg-transparent"
                onClick={() => handleScroll("left")}
                type="button"
                aria-label="Scroll left"
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src={NAVIGATION_ICONS.back}
                  aria-hidden="true"
                />
              </button>

              {/* Scrollable Speakers Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide relative pb-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {speakers.map((speaker) => (
                  <article
                    key={speaker.id}
                    className="flex flex-col w-[250px] sm:w-[270px] md:w-[282px] items-start relative flex-shrink-0"
                  >
                    <div className="flex flex-col w-full items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 relative flex-[0_0_auto] bg-[#f8f8f8] rounded-[20px] md:rounded-[28px] border-2 border-[#7bb302] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer">
                      <div
                        className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[139px] md:h-[139px] rounded-full flex-shrink-0"
                        style={{
                          border: "4px solid #7bb302",
                          padding: "4px",
                        }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#00000033]">
                          <img
                            className="w-full h-full object-cover"
                            alt={speaker.name}
                            src={speaker.image}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative self-stretch min-h-[24px] sm:min-h-[26px] md:min-h-[30px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-black text-base sm:text-lg tracking-[0] leading-tight sm:leading-[26px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                          {speaker.title}
                        </h3>

                        <p className="relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-[#939393] text-xs sm:text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                          {speaker.views}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 sm:gap-3 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                          <p className="relative mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-black text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                            {speaker.name}
                          </p>

                          <p className="relative font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-[#939393] text-xs sm:text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                            {speaker.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right Scroll Button - positioned outside container only on XL desktop */}
              <button
                className="hidden lg:block absolute right-2 xl:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 xl:w-[120px] xl:h-[120px] cursor-pointer z-10 hover:scale-105 transition-transform bg-white/10 rounded-full xl:bg-transparent"
                onClick={() => handleScroll("right")}
                type="button"
                aria-label="Scroll right"
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src={NAVIGATION_ICONS.next}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Dot Indicator */}
            <div className="flex items-center justify-center gap-2 w-full mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPage ? "bg-[#7bb302] w-6" : "bg-[#d0d0d0]"
                    }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

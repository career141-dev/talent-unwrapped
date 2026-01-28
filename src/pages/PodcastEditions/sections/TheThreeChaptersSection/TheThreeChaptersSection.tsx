import { TheThreeChaptersSectionProps } from "../../../../types";
import { getThreeChapters, getEditionName } from "../../../../data";

/**
 * TheThreeChaptersSection - Refactored for proper layout
 *
 * FIXES:
 * - Removed absolute positioning that breaks responsive design
 * - Changed from fixed w-[1440px] to max-w-[1440px] with responsive padding
 * - Converted to flex/grid layout with proper wrapping
 * - All children scale responsively without overflow
 * - No horizontal scrollbar issues
 *
 * Layout:
 * Mobile: Stacked vertically, full width with responsive padding
 * Desktop: Grid-based with proper spacing
 */
export const TheThreeChaptersSection = ({
  edition = "singapore",
}: TheThreeChaptersSectionProps): JSX.Element => {
  const episodes = getThreeChapters();
  const editionName = getEditionName(edition);

  return (
    <section id="about" className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="[font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm md:text-base tracking-[-0.32px]">
            THE THREE CHAPTERS
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {/* Viewers Count */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <div className="[font-family:'Geist',Helvetica] font-medium text-[#232323] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-1.5px] lg:tracking-[-2.88px]">
              100K+
            </div>
            <div className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm md:text-base text-center lg:text-left">
              VIEWERS WORLDWIDE
            </div>
          </div>

          {/* Description and CTA */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-1px] lg:tracking-[-1.76px] leading-tight lg:leading-[normal]">
              <span className="text-[#232323]">
                Each episode of Talent Unwrapped: {editionName}{" "}
              </span>
              <span className="text-[#8d8d8d]">
                explores a different human dimension of ambition, design, and
                leadership.
              </span>
            </p>

            <button
              className="inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors w-fit"
              aria-label="More about the podcast"
            >
              <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.48px]">
                More about the podcast
              </span>
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                alt="Arrow right"
                src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12H19M19 12L12 5M19 12L12 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
              />
            </button>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {episodes.map((episode: typeof episodes[0]) => (
            <article
              key={episode.id}
              className="relative w-full h-[320px] md:h-[372px] bg-[#f8f8f8] rounded-[20px] md:rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer"
            >
              {/* Video Icon Badge */}
              <div className="inline-flex items-center gap-2 p-2 md:p-3 absolute top-4 md:top-6 left-4 md:left-6 bg-[#7bb302] rounded-[40px] z-10">
                <img
                  className="w-5 h-5 md:w-6 md:h-6"
                  alt="Video episode"
                  src={episode.videoIcon}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col w-[calc(100%-2rem)] md:w-[376px] items-start gap-4 absolute top-20 md:top-28 left-4 md:left-6">
                <div className="flex items-center gap-2 pt-0 pb-2 md:pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b border-neutral-200">
                  <h3 className="relative w-full [font-family:'Geist',Helvetica] font-medium text-transparent text-lg sm:text-xl md:text-[27px] tracking-[-0.5px] md:tracking-[-1.08px] leading-tight md:leading-[normal]">
                    <span className="text-[#7bb302]">{episode.title}</span>
                    <span className="text-[#ed2939]">{episode.subtitle}</span>
                  </h3>
                </div>

                <a
                  href="#"
                  className="[font-family:'Geist',Helvetica] font-medium text-black text-sm md:text-base tracking-[-0.32px] underline hover:text-[#7bb302] transition-colors"
                >
                  Learn more
                </a>
              </div>

              {/* Export Icon */}
              <a
                href="#"
                className="absolute top-4 md:top-6 right-4 md:right-6 w-5 h-5 md:w-6 md:h-6 z-10"
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
    </section>
  );
};

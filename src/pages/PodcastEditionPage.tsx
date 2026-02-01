import { EpisodeLayout, EditionType } from "../layouts/EpisodeLayout";
import { Episode } from "../types";
import { EpisodeCard } from "../components/sections/EpisodeCard";

interface PodcastEditionPageProps {
  edition: EditionType;
  episodes: Episode[];
  onViewEpisode: (episodeId: string | number) => void;
  children?: React.ReactNode;
}

/**
 * Shared template for podcast edition pages (Singapore/Dubai)
 * Uses EpisodeLayout as base and renders episodes in a grid
 * Encapsulates common layout and component composition
 */
export const PodcastEditionPage = ({
  edition,
  episodes,
  onViewEpisode,
  children,
}: PodcastEditionPageProps): JSX.Element => {
  // Determine color scheme based on edition
  const isDubai = edition === "dubai";
  const titleColorClass = isDubai
    ? "text-[#ed2939]" // Dubai: Red first
    : "text-[#7cb403]"; // Singapore: Green first
  const subtitleColorClass = isDubai
    ? "text-[#7cb403]" // Dubai: Green second
    : "text-[#ed2939]"; // Singapore: Red second

  const episodesContent = (
    <section
      id="episodes"
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[90px]"
      aria-label="Episode Listing"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-[40px]">
            <h1 className="[font-family:'Geist',Helvetica] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
              <span className={titleColorClass}>All </span>
              <span className={subtitleColorClass}>Episodes</span>
            </h1>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[32px]">
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                onViewEpisode={onViewEpisode}
              />
            ))}
          </div>

          {/* Optional content slot for page-specific content */}
          {children && <div className="mt-16">{children}</div>}
        </div>
      </div>
    </section>
  );

  return (
    <EpisodeLayout edition={edition} showChapters showContact showFooter>
      {episodesContent}
    </EpisodeLayout>
  );
};

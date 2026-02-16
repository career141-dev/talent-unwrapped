import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterSection,
  GlobalHeader,
  ContactUsSection,
  SubmitFormSection,
} from "../../components";
import { EpisodeCard } from "../PodcastEditions/components/EpisodeCard";
import { EPISODES, getEpisodesByEdition } from "../../data/episodes";
import { TalentIntroductionSection } from "../LandingPage/sections/TalentIntroductionSection/TalentIntroductionSection";
import { SECTION_TITLES, NAV_LABELS, EDITION_NAMES, FEEDBACK_MESSAGES } from "@/constants/copy";

export const EpisodesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "dubai" | "singapore" | "sri-lanka">("all");

  useEffect(() => {
    document.title = "Talent Unwrapped - All Episodes";
  }, []);

  const displayedEpisodes = getEpisodesByEdition(filter);

  const handleViewEpisode = (episodeId: string | number) => {
    // Determine edition for the episode to pass in state
    const episode = EPISODES.find(ep => ep.id === String(episodeId));
    let editionName = EDITION_NAMES.DUBAI;

    if (episode?.edition === "Singapore") {
      editionName = EDITION_NAMES.SINGAPORE;
    } else if (episode?.edition === "Sri Lanka") {
      editionName = EDITION_NAMES.SRI_LANKA;
    }

    navigate(`/episode/${episodeId}`, {
      state: { edition: editionName }
    });
  };

  return (
    <>
      <main className="flex flex-col items-center relative bg-white w-full">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Hero Content Section */}
        <div className="w-full overflow-x-clip">
          <TalentIntroductionSection />
        </div>

        <section
          id="episodes"
          className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[90px]"
          aria-label="All Episodes Listing"
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="w-full">
              {/* Section Title */}
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-10 lg:mb-[40px] gap-6 md:gap-0">
                <h1 className="[font-family:'Geist',Helvetica] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
                  <span className="text-[#232323]">{SECTION_TITLES.ALL_EPISODES.split(" ")[0]} </span>
                  <span className="text-[#7bb302]">{SECTION_TITLES.ALL_EPISODES.split(" ")[1]}</span>
                </h1>

                {/* Filter Controls */}
                <div className="flex items-center gap-2 sm:gap-4 bg-gray-50 p-1 rounded-full border border-gray-100 overflow-x-auto scrollbar-hide max-w-[calc(100vw-32px)] sm:max-w-full">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${filter === "all"
                      ? "bg-white text-[#7bb302] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {NAV_LABELS.ALL}
                  </button>
                  <button
                    onClick={() => setFilter("dubai")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${filter === "dubai"
                      ? "bg-white text-[#ed2939] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {EDITION_NAMES.DUBAI}
                  </button>
                  <button
                    onClick={() => setFilter("singapore")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${filter === "singapore"
                      ? "bg-white text-[#7cb403] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {EDITION_NAMES.SINGAPORE}
                  </button>
                  <button
                    onClick={() => setFilter("sri-lanka")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${filter === "sri-lanka"
                      ? "bg-white text-[#7bb302] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {EDITION_NAMES.SRI_LANKA}
                  </button>
                </div>
              </div>

              {/* Episodes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-[40px]">
                {displayedEpisodes.map((episode) => (
                  <EpisodeCard
                    key={episode.id}
                    episode={episode}
                    onViewEpisode={handleViewEpisode}
                  />
                ))}
              </div>

              {displayedEpisodes.length === 0 && (
                <div className="w-full py-20 text-center">
                  {FEEDBACK_MESSAGES.NO_EPISODES_FOUND}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer Sections */}
        <SubmitFormSection />
        <ContactUsSection />
        <FooterSection />
      </main>
    </>
  );
};

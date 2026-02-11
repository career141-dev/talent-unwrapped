import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterSection,
  GlobalHeader,
  ContactUsSection,
  SubmitFormSection,
} from "../../components";
import { EpisodeCard } from "../PodcastEditions/Components/EpisodeCard";
import { DUBAI_EPISODES, SINGAPORE_EPISODES } from "../../data/episodeData";
import { TalentIntroductionSection } from "../LandingPage/Sections/TalentIntroductionSection/TalentIntroductionSection";
import { SECTION_TITLES, NAV_LABELS, EDITION_NAMES, FEEDBACK_MESSAGES } from "@/constants/copy";

export const EpisodesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "dubai" | "singapore">("all");

  const allEpisodes = [...DUBAI_EPISODES, ...SINGAPORE_EPISODES];

  const displayedEpisodes =
    filter === "all"
      ? allEpisodes
      : filter === "dubai"
        ? DUBAI_EPISODES
        : SINGAPORE_EPISODES;

  const handleViewEpisode = (episodeId: string | number) => {
    navigate(`/episode/${episodeId}`);
  };

  return (
    <>
      <main className="flex flex-col items-center relative min-h-screen bg-white w-full overflow-x-hidden">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Constrained Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0">
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
                <div className="flex items-center gap-2 sm:gap-4 bg-gray-50 p-1 rounded-full border border-gray-100">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "all"
                      ? "bg-white text-[#7bb302] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {NAV_LABELS.ALL}
                  </button>
                  <button
                    onClick={() => setFilter("dubai")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "dubai"
                      ? "bg-white text-[#ed2939] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {EDITION_NAMES.DUBAI}
                  </button>
                  <button
                    onClick={() => setFilter("singapore")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "singapore"
                      ? "bg-white text-[#7cb403] shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {EDITION_NAMES.SINGAPORE}
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

        {/* Constrained Footer Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0">
          <SubmitFormSection />
          <ContactUsSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
};

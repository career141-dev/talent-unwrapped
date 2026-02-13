import { useEffect } from "react";
import {
  FooterSection,
  GlobalHeader,
  ReelsSection,
  ContactUsSection,
  SubmitFormSection,
} from "../../components";
import {
  EpisodeDetailsSection,
  HeroBannerSection,
  LatestPodcastListSection,
  SpeakersProfileSection,
  TalentIntroductionSection,
  WisdomAndTestimonialsSection,
} from "./Sections";

/**
 * Landing Page
 * Main entry page for the application
 * Uses DefaultLayout for consistent header structure
 * Now uses unified ContactUsSection across all pages
 * SpeakersProfileSection breaks out of global layout constraints for full-width design
 */
export const LandingPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Talent Unwrapped - Home";
  }, []);

  return (
    <>
      <main className="flex flex-col items-center relative bg-white w-full">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Hero & About sections - now bypassing global layout */}
        <div className="w-full overflow-x-hidden">
          <HeroBannerSection />
          <WisdomAndTestimonialsSection />
          <TalentIntroductionSection />
        </div>

        {/* Full-width latest podcast section */}
        <div className="w-full overflow-x-hidden">
          <LatestPodcastListSection />
        </div>

        {/* Full-width speakers section - breaks out of global layout */}
        <div className="w-full overflow-x-hidden">
          <SpeakersProfileSection />
        </div>

        {/* Full-width reels section */}
        <div id="reels" className="w-full overflow-x-hidden">
          <ReelsSection />
        </div>

        {/* Full-width episode details section */}
        <div className="w-full overflow-x-hidden">
          <EpisodeDetailsSection />
        </div>

        {/* Footer sections - now bypassing global layout */}
        <div className="w-full overflow-x-hidden">
          <SubmitFormSection />
          <ContactUsSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
};

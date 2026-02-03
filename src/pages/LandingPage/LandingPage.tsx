import { FooterSection, GlobalHeader, ReelsSection, ContactUsSection, SubmitFormSection } from "../../components";
import {
  EpisodeDetailsSection,
  HeroBannerSection,
  LatestPodcastListSection,
  SpeakersProfileSection,
  TalentIntroductionSection,
  WisdomAndTestimonialsSection
} from "./Sections";

/**
 * Landing Page
 * Main entry page for the application
 * Uses DefaultLayout for consistent header structure
 * Now uses unified ContactUsSection across all pages
 * SpeakersProfileSection breaks out of global layout constraints for full-width design
 */
export const LandingPage = (): JSX.Element => {
  return (
    <>
      <main className="flex flex-col items-center relative min-h-screen bg-white w-full">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Constrained content sections */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0" style={{ overflowX: 'hidden' }}>
          <HeroBannerSection />
          <WisdomAndTestimonialsSection />
          <TalentIntroductionSection />
          <LatestPodcastListSection />
        </div>

        {/* Full-width speakers section - breaks out of global layout */}
        <div className="w-full">
          <SpeakersProfileSection />
        </div>

        {/* Constrained content sections */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0" style={{ overflowX: 'hidden' }}>
          <div id="reels" className="w-full">
            <ReelsSection />
          </div>
        </div>

        {/* Full-width episode details section */}
        <div className="w-full">
          <EpisodeDetailsSection />
        </div>

        {/* Constrained content sections */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0" style={{ overflowX: 'hidden' }}>
          <SubmitFormSection />
          <ContactUsSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
};

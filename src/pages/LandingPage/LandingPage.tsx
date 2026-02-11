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
  return (
    <>
      <main className="flex flex-col items-center relative min-h-screen bg-white w-full">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Constrained content sections */}
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0"
        >
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

        {/* Constrained content sections */}
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0"
        >
          {/* Constrained content */}
        </div>

        {/* Full-width reels section */}
        <div id="reels" className="w-full overflow-x-hidden">
          <ReelsSection />
        </div>

        {/* Full-width episode details section */}
        <div className="w-full overflow-x-hidden">
          <EpisodeDetailsSection />
        </div>

        {/* Constrained content sections */}
        <div
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0"
        >
          <SubmitFormSection />
          <ContactUsSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
};

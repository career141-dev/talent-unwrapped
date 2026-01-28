import { DefaultLayout } from "../../layouts";
import { SubmitFormSection, ReelsSection, FooterSection } from "../../components";
import { ContactFormSection } from "./sections/ContactFormSection";
import { EpisodeDetailsSection } from "./sections/EpisodeDetailsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { LatestPodcastListSection } from "./sections/LatestPodcastListSection";
import { SpeakersProfileSection } from "./sections/SpeakersProfileSection";
import { TalentIntroductionSection } from "./sections/TalentIntroductionSection";
import { WisdomAndTestimonialsSection } from "./sections/WisdomAndTestimonialsSection";

/**
 * Landing Page
 * Main entry page for the application
 * Uses DefaultLayout for consistent header structure
 */
export const LandingPage = (): JSX.Element => {
  return (
    <DefaultLayout data-model-id="905:6609">
      <HeroBannerSection />
      <WisdomAndTestimonialsSection />
      <TalentIntroductionSection />
      <LatestPodcastListSection />
      <SpeakersProfileSection />
      <div id="reels" className="w-full">
        <ReelsSection />
      </div>
      <EpisodeDetailsSection />
      <SubmitFormSection />
      <ContactFormSection />
      <FooterSection />
    </DefaultLayout>
  );
};

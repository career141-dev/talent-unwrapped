import { GlobalHeader } from "../../components/GlobalHeader";
import { SubmitFormSection } from "../../components/SubmitFormSection";
import { ReelsSection } from "../../components/ReelsSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { EpisodeDetailsSection } from "./sections/EpisodeDetailsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { LatestPodcastListSection } from "./sections/LatestPodcastListSection";
import { SpeakersProfileSection } from "./sections/SpeakersProfileSection";
import { TalentIntroductionSection } from "./sections/TalentIntroductionSection";
import { WisdomAndTestimonialsSection } from "./sections/WisdomAndTestimonialsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center relative min-h-screen bg-white w-full overflow-x-hidden"
      data-model-id="905:6609"
    >
      <GlobalHeader />
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
    </main>
  );
};

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
} from "./sections";
import SEO from "../../components/common/SEO/SEO";

/**
 * Landing Page
 * Main entry page for the application
 * Uses DefaultLayout for consistent header structure
 * Now uses unified ContactUsSection across all pages
 * SpeakersProfileSection breaks out of global layout constraints for full-width design
 */
export const LandingPage = (): JSX.Element => {
  const podcastSeriesSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Talent Unwrapped",
    "description":
      "A podcast series exploring the human dimensions of ambition, design, and leadership across Singapore, Dubai, and the GCC region.",
    "url": "https://talentunwrapped.com",
    "image":
      "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1771220347/Artboard_3_1_nbtue5.svg",
    "author": {
      "@type": "Organization",
      "name": "Career141",
      "url": "https://career141.com",
    },
    "genre": ["Business", "Leadership", "Career Development"],
    "inLanguage": "en",
  };

  return (
    <>
      <SEO
        title="Talent Unwrapped - Leadership & Innovation Podcast | Career141"
        description="Explore leadership, innovation, and the future of work through conversations with industry leaders across Singapore, Dubai, and the GCC. A Career141 podcast series."
        keywords="talent unwrapped podcast, leadership podcast, innovation podcast, future of work, GCC talent, Singapore business, Dubai leadership, career141"
        url="/"
        podcastSchema={podcastSeriesSchema}
      />
      <main className="flex flex-col items-center relative bg-white w-full">
        <div className="w-full">
          <GlobalHeader />
        </div>

        {/* Hero & About sections - now bypassing global layout */}
        <div className="w-full overflow-x-clip">
          <HeroBannerSection />
          <WisdomAndTestimonialsSection />
          <TalentIntroductionSection />
        </div>

        {/* Full-width latest podcast section */}
        <div className="w-full overflow-x-clip">
          <LatestPodcastListSection />
        </div>

        {/* Full-width speakers section - breaks out of global layout */}
        <div className="w-full overflow-x-clip">
          <SpeakersProfileSection />
        </div>

        {/* Full-width reels section */}
        <div className="w-full overflow-x-clip">
          <ReelsSection />
        </div>

        {/* Full-width episode details section */}
        <div className="w-full overflow-x-clip">
          <EpisodeDetailsSection />
        </div>

        {/* Footer sections - now bypassing global layout */}
        <div className="w-full overflow-x-clip">
          <SubmitFormSection />
          <ContactUsSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
};

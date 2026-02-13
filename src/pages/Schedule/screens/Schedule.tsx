import {
  GlobalHeader,
  ContactUsSection,
  FooterSection,
} from "../../../components";
import { TheThreeChaptersSection } from "../../PodcastEditions/Sections";
import SEO from "../../../components/Common/SEO/SEO";

/**
 * Schedule Page - Fully Responsive
 * Now uses unified components matching mobile web design exactly
 * - GlobalHeader for consistent navigation
 * - TheThreeChaptersSection for Singapore Edition
 * - TheThreeChaptersSection for Dubai Edition
 * - ContactUsSection for About Us
 * - FooterSection for copyright footer
 */
export const Schedule = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Be a Guest - Share Your Leadership Story | Talent Unwrapped"
        description="Join Talent Unwrapped podcast as a guest speaker. Share your leadership journey, insights on innovation, and perspectives on the future of work with our global audience."
        keywords="podcast guest, leadership speaker, be a podcast guest, share leadership story, talent unwrapped guest, innovation speaker"
        url="/schedule"
      />
      <main className="flex flex-col items-center relative bg-white w-full">
        {/* Header - Consistent across all pages */}
        <GlobalHeader />

        {/* Main Content - Constrained width, responsive padding */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Singapore Edition - Three Chapters */}
          <TheThreeChaptersSection edition="singapore" />

          {/* Dubai Edition - Three Chapters */}
          <TheThreeChaptersSection edition="dubai" hideTopSection={true} />
        </div>

        {/* About Us Section */}
        <ContactUsSection />

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
};

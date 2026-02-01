import { GlobalHeader, ContactUsSection, FooterSection } from "../../../components";
import { TheThreeChaptersSection } from "../../PodcastEditions/sections";

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
    <main className="flex flex-col items-center relative bg-white min-h-screen w-full">
      {/* Header - Consistent across all pages */}
      <GlobalHeader />

      {/* Main Content - Constrained width, responsive padding */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Singapore Edition - Three Chapters */}
        <TheThreeChaptersSection edition="singapore" />
        
        {/* Dubai Edition - Three Chapters */}
        <TheThreeChaptersSection edition="dubai" />
      </div>

      {/* About Us Section */}
      <ContactUsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
};

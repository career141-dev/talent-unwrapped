import { ReactNode } from "react";
import { GlobalHeader, FooterSection, ContactUsSection } from "../components";
import { TheThreeChaptersSection } from "../pages/PodcastEditions/sections";

export type EditionType = "singapore" | "dubai" | "sri-lanka";

interface EpisodeLayoutProps {
  edition?: EditionType;
  children?: ReactNode;
  showChapters?: boolean;
  showContact?: boolean;
  showFooter?: boolean;
  className?: string;
}

/**
 * Episode-specific layout for podcast and episode pages
 * Provides consistent structure: Header → Content → Chapters → Contact → Footer
 *
 * FIXES:
 * - Removes overflow-x-hidden (causes layout issues)
 * - All child components now have max-w-[1440px] constraint
 * - Responsive padding on all sections
 * - No absolute positioning at container level
 * - Footer wraps content properly without overflow
 */
export const EpisodeLayout = ({
  edition = "dubai",
  children,
  showChapters = true,
  showContact = true,
  showFooter = true,
  className = "",
}: EpisodeLayoutProps): JSX.Element => {
  return (
    <main className="flex flex-col items-center relative bg-white w-full">
      {/* Header - Consistent across all pages */}
      <GlobalHeader />

      <div className="w-full overflow-x-clip">
        {/* Main Content Area - Constrained width, responsive padding */}
        {children && (
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className={className}>{children}</div>
          </div>
        )}

        {/* Chapters Section - Optional, shown by default - Full width without wrapper */}
        {showChapters && edition && <TheThreeChaptersSection edition={edition} />}
      </div>

      {/* Contact Section - Optional, shown by default */}
      {showContact && <ContactUsSection />}

      {/* Footer - Optional, shown by default */}
      {showFooter && <FooterSection />}
    </main>
  );
};

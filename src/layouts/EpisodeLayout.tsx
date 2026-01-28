import { ReactNode } from "react";
import { GlobalHeader, FooterSection, ContactUsSection } from "../components";
import { TheThreeChaptersSection } from "../pages/PodcastEditions/sections";

export type EditionType = "singapore" | "dubai";

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
 * Used for both podcast edition pages and full episode views
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
    <main className={`flex flex-col items-center relative bg-white min-h-screen w-full overflow-x-hidden ${className}`}>
      {/* Header - Consistent across all pages */}
      <GlobalHeader />

      {/* Main Content Area */}
      {children && <div className="w-full">{children}</div>}

      {/* Chapters Section - Optional, shown by default */}
      {showChapters && edition && (
        <TheThreeChaptersSection edition={edition} />
      )}

      {/* Contact Section - Optional, shown by default */}
      {showContact && <ContactUsSection />}

      {/* Footer - Optional, shown by default */}
      {showFooter && <FooterSection />}
    </main>
  );
};

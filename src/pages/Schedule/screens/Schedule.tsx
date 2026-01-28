import { FooterLinksSection } from "./sections/FooterLinksSection";
import { FooterBrandingSection } from "./sections/FooterBrandingSection";
import { FooterCopyrightSection } from "./sections/FooterCopyrightSection";

export const Schedule = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col h-[2274px] items-start relative w-full max-w-[1440px] mx-auto">
        <FooterLinksSection />
        <FooterBrandingSection />
        <FooterCopyrightSection />
      </div>
    </div>
  );
};

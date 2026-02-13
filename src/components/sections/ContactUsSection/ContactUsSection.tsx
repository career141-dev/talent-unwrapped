import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { DecorativeArrowIcon } from "@/components/Common/Icons";
import { ASSETS } from "@/assets";
import { LINKS } from "@/config/links";
import { NAV_LABELS } from "@/constants/copy";

interface Link {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  external?: boolean;
}

/**
 * Unified About Us Section - Used across all pages
 * Fully responsive with mobile-first design
 * Includes animations and consistent styling
 */
export const ContactUsSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleJoinUsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.querySelector("#join-us");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector("#join-us");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const companyLinks: Link[] = [
    { label: NAV_LABELS.HOME, href: "/", onClick: handleHomeClick, external: false },
    {
      label: NAV_LABELS.EXECUTIVE_SEARCH,
      href: LINKS.executiveSearch,
      external: true,
    },
    {
      label: NAV_LABELS.CULTURE,
      href: LINKS.culture,
      external: true,
    },
    {
      label: NAV_LABELS.OUR_JOURNEY,
      href: LINKS.ourJourney,
      external: true,
    },
  ];

  const informationLinks: Link[] = [
    {
      label: NAV_LABELS.JOBS,
      href: LINKS.jobs,
      external: true,
    },
    {
      label: NAV_LABELS.JOIN_US,
      href: "#join-us",
      onClick: handleJoinUsClick,
      external: false,
    },
  ];

  const supportLinks: Link[] = [
    {
      label: NAV_LABELS.CONTACT_US,
      href: LINKS.contactUs,
      external: true,
    },
  ];

  const footerSections = [
    { title: NAV_LABELS.COMPANY, links: companyLinks },
    { title: NAV_LABELS.INFORMATION, links: informationLinks },
    { title: NAV_LABELS.SUPPORT, links: supportLinks },
  ];

  return (
    <footer
      id="about-us"
      className="flex w-full max-w-[1440px] flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] pt-0 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative bg-white mx-auto"
    >
      {/* Image Section - Fully Responsive */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full lg:flex-1 h-[200px] sm:h-[250px] lg:h-[320px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      >
        <img
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          alt="Contact Section Banner"
          src={ASSETS.contactBanner}
        />
      </motion.div>

      {/* Navigation Section - Fully Responsive */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col w-full lg:w-[510px] items-start justify-between px-0 py-4 relative self-stretch"
        aria-label="Footer navigation"
      >
        {/* Header with Title and Icon */}
        <header className="flex w-full items-center justify-between px-0 py-4 lg:py-5 mb-6 lg:mb-8 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e2e2]">
          <h2 className="w-fit text-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-1px] lg:tracking-[-1.32px] leading-tight lg:leading-[57.6px] whitespace-nowrap relative [font-family:'Geist',Helvetica] font-normal">
            {NAV_LABELS.ABOUT} Us
          </h2>

          <DecorativeArrowIcon
            className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] hover:rotate-12 transition-transform duration-300"
            aria-hidden="true"
          />
        </header>

        {/* Links Grid - All columns on same line across all devices */}
        <div className="grid grid-cols-3 lg:flex lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 relative flex-[0_0_auto] w-full">
          {footerSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col w-full items-start gap-3 sm:gap-4 lg:gap-5 relative"
            >
              <h3 className="relative w-full [font-family:'Geist',Helvetica] font-medium text-[#222223] text-[14px] sm:text-[17px] lg:text-[20px] tracking-[-0.32px] leading-[20px] sm:leading-[22px] lg:leading-[26px]">
                {section.title}
              </h3>

              <ul className="flex flex-col items-start gap-2 sm:gap-2.5 lg:gap-3 relative w-full flex-[0_0_auto] list-none">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="relative w-full">
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] tracking-[-0.32px] leading-[18px] sm:leading-[20px] lg:leading-[24px] hover:text-[#222223] transition-all duration-300 hover:translate-x-1 inline-block break-words whitespace-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.nav>
    </footer>
  );
};

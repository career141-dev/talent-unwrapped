import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FOOTER_IMAGES, LOGOS } from "@/assets";
import { EXTERNAL_LINKS } from "@/constants";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      href: EXTERNAL_LINKS.CAREER141_EXECUTIVE_SEARCH,
      external: true,
    },
    {
      label: NAV_LABELS.CULTURE,
      href: EXTERNAL_LINKS.CAREER141_OUR_CULTURE,
      external: true,
    },
    {
      label: NAV_LABELS.OUR_JOURNEY,
      href: EXTERNAL_LINKS.CAREER141_OUR_JOURNEY,
      external: true,
    },
  ];

  const informationLinks: Link[] = [
    {
      label: NAV_LABELS.JOBS,
      href: EXTERNAL_LINKS.CAREER141_JOB_OPENINGS,
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
      href: EXTERNAL_LINKS.CAREER141_CONTACT_US,
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
      ref={sectionRef}
      id="schedule"
      className="flex w-full max-w-[1440px] flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] pt-0 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative bg-white mx-auto"
    >
      {/* Image Section - Fully Responsive */}
      <div
        className={`relative w-full lg:flex-1 h-[150px] sm:h-[180px] md:h-[220px] lg:h-[280px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      >
        <img
          className="absolute top-[15px] sm:top-[20px] lg:top-[30px] left-0 w-full max-w-[734px] h-auto object-cover hover:scale-105 transition-transform duration-500"
          alt="Career 4U 20 Years Anniversary Logo"
          src={LOGOS.career141}
        />
      </div>

      {/* Navigation Section - Fully Responsive */}
      <nav
        className={`flex flex-col w-full lg:w-[510px] items-start justify-between px-0 py-4 relative self-stretch transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        aria-label="Footer navigation"
      >
        {/* Header with Title and Icon */}
        <header className="flex w-full items-center justify-between px-0 py-4 lg:py-5 mb-6 lg:mb-8 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e2e2]">
          <h2 className="w-fit text-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-1px] lg:tracking-[-1.32px] leading-tight lg:leading-[57.6px] whitespace-nowrap relative [font-family:'Geist',Helvetica] font-normal">
            {NAV_LABELS.ABOUT} Us
          </h2>

          <img
            className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] hover:rotate-12 transition-transform duration-300"
            alt="Decorative icon"
            src={FOOTER_IMAGES.decorativeFrame}
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
      </nav>
    </footer>
  );
};

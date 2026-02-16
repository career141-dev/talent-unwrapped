import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { EditionsDropdown } from "../../forms/EditionsDropdown";
import { ASSETS, LINKS } from "@/assets";
import { ArrowRightIcon, CloseIcon } from "../../common/Icons";
import { NAV_LABELS } from "@/constants/copy";

export const GlobalHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Detect if we're on an edition page or landing page
  const isEditionPage = location.pathname.startsWith("/edition/");
  const isLandingPage =
    location.pathname === "/" || location.pathname === "/talent-unwrapped/";

  const handleSectionNavigation = (sectionId: string) => {
    if (isLandingPage) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
      // Small timeout to allow navigation to happen before scrolling checks
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const navigationItems = [
    { label: NAV_LABELS.HOME, href: "/", action: () => navigate("/") },
    {
      label: NAV_LABELS.ABOUT,
      href: "/#about",
      action: () => handleSectionNavigation("about"),
    },
    {
      label: NAV_LABELS.EPISODES,
      href: "/episodes",
      action: () => navigate("/episodes"),
    },
    {
      label: NAV_LABELS.REELS,
      href: "/#reels",
      action: () => handleSectionNavigation("reels"),
    },
    {
      label: NAV_LABELS.SCHEDULE,
      href: "/schedule",
      action: () => {
        navigate("/schedule");
        setActiveNav(NAV_LABELS.SCHEDULE);
      },
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNav(
        navigationItems.find((item) =>
          item.action.toString().includes(sectionId),
        )?.label || "",
      );
    }
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  // Track active section on scroll and track active route
  useEffect(() => {
    const handleScrollAndRoute = () => {
      const currentPath = location.pathname;

      // 1. Path-based active states (Highest priority)
      if (currentPath === "/episodes") {
        setActiveNav(NAV_LABELS.EPISODES);
        return;
      }

      if (currentPath === "/schedule") {
        setActiveNav(NAV_LABELS.SCHEDULE);
        return;
      }

      // 2. Scroll-based tracking for landing page sections
      if (isLandingPage || isEditionPage) {
        const sections = navigationItems
          .filter(item => item.href.includes("#"))
          .map((item) => ({
            label: item.label,
            id: item.href.split("#")[1],
          }));

        let currentActive = "";

        // Check if we're at the very top
        if (window.scrollY < 100 && isLandingPage) {
          setActiveNav(NAV_LABELS.HOME);
          return;
        }

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Using a tighter threshold for better UX
            if (rect.top < 150 && rect.bottom > 100) {
              currentActive = section.label;
              break;
            }
          }
        }

        if (currentActive) {
          setActiveNav(currentActive);
        } else if (isLandingPage && window.scrollY < 100) {
          setActiveNav(NAV_LABELS.HOME);
        } else if (!currentActive && !isLandingPage && !isEditionPage) {
          // On other pages like /episode/:id, we might not want any highlight
          // or we could highlight nothing
          setActiveNav("");
        }
      }
    };

    window.addEventListener("scroll", handleScrollAndRoute);
    // Initial check
    handleScrollAndRoute();

    return () => window.removeEventListener("scroll", handleScrollAndRoute);
  }, [location.pathname, isLandingPage, isEditionPage, navigationItems]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white border-b border-neutral-200 sticky top-0 z-[100] transition-shadow duration-300 hover:shadow-md mb-6 md:mb-8 lg:mb-10"
      >
        <div className="flex w-full max-w-[1440px] min-h-[70px] md:min-h-[80px] lg:h-[100px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-10 py-3 lg:py-0 mx-auto">
          {/* Logo */}
          <a
            href="/"
            className="relative w-36 sm:w-40 md:w-48 lg:w-72 h-12 sm:h-14 md:h-16 lg:h-20 flex-shrink-0 transition-all duration-500 hover:scale-[1.03] z-[101] group"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover:brightness-[1.02]"
              alt="Talent Unwrapped Logo"
              src={ASSETS.logo}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:inline-flex items-center gap-8 xl:gap-[60px] relative flex-[0_0_auto]"
            aria-label="Main navigation"
          >
            <ul className="inline-flex items-center gap-4 xl:gap-6 relative flex-[0_0_auto]">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="inline-flex items-center justify-center gap-2.5 px-2 xl:px-4 py-2.5 relative self-stretch flex-[0_0_auto]"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(item.label);
                      item.action();
                    }}
                    className={`relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-sm xl:text-base text-center tracking-[-0.32px] leading-6 whitespace-nowrap transition-all duration-300 cursor-pointer border-none bg-transparent pb-1 ${activeNav === item.label
                      ? "text-[#7bb302] font-semibold border-b-2 border-[#7bb302]"
                      : "text-[#232323] hover:text-[#7bb302] hover:border-b-2 hover:border-[#7bb302]"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="inline-flex items-center justify-center gap-2.5 px-0 py-2.5 relative self-stretch flex-[0_0_auto]">
                <EditionsDropdown />
              </li>
            </ul>
          </nav>

          <div className="hidden lg:inline-flex items-center gap-2 md:gap-4 relative flex-shrink-0">
            <a
              href={LINKS.ourJourney}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 md:h-12 lg:h-[54px] items-center justify-center gap-1 md:gap-2 px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4 relative flex-[0_0_auto] glass-button-dark rounded-[60px] hover:scale-105 active:scale-95"
            >
              <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-xs md:text-sm lg:text-base tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                {NAV_LABELS.CAREER_LINK}
              </span>
              <ArrowRightIcon className="text-white" size={24} />
            </a>
          </div>

          {/* Mobile/Tablet: CTA Button + Hamburger */}
          <div className="flex lg:hidden items-center gap-3 relative flex-shrink-0 z-[101]">
            {/* Tablet CTA Button (visible on md to lg) */}
            <a
              href={LINKS.ourJourney}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex lg:hidden h-10 items-center justify-center gap-2 px-4 py-2 glass-button-dark rounded-[60px] active:scale-95"
            >
              <span className="relative [font-family:'Geist',Helvetica] font-semibold text-white text-sm tracking-[-0.32px] leading-none whitespace-nowrap">
                {NAV_LABELS.CAREER_LINK}
              </span>
            </a>

            {/* Mobile CTA Button (Compact, visible only below md) */}
            <a
              href={LINKS.ourJourney}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex md:hidden h-6 items-center justify-center gap-1 px-3 py-1 glass-button-dark rounded-[60px] active:scale-95"
            >
              <span className="relative [font-family:'Geist',Helvetica] font-semibold text-white text-[10px] tracking-[-0.32px] leading-none whitespace-nowrap">
                career141
              </span>
              <ArrowRightIcon className="text-white" size={12} />
            </a>

            {/* Hamburger Button - Visible up to lg breakpoint */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 gap-1.5 relative glass-button rounded-full cursor-pointer touch-manipulation active:scale-90"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[99] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <span className="[font-family:'Geist',Helvetica] font-semibold text-[#232323] text-lg">
              {NAV_LABELS.MENU}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav
            className="flex flex-col p-4 gap-2"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.label);
                  item.action();
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 text-left ${activeNav === item.label
                  ? "bg-green-50 text-[#7bb302]"
                  : "text-[#232323] hover:bg-gray-50"
                  }`}
              >
                <span className="[font-family:'Geist',Helvetica] font-medium">
                  {item.label}
                </span>
                {activeNav === item.label && (
                  <span className="text-[#7bb302]">✓</span>
                )}
              </button>
            ))}

            {/* Editions Dropdown in Mobile */}
            <div className="px-4 py-3 border-t border-neutral-200 mt-2 relative z-[101]">
              <EditionsDropdown />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

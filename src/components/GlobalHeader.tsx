import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { EditionsDropdown } from "./EditionsDropdown";

export const GlobalHeader = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isEditionPage = location.pathname === "/dubai" || location.pathname === "/singapore";

  const navigationItems = isEditionPage 
    ? [
        { label: "Schedule", href: "#schedule", action: () => scrollToSection("schedule") },
        { label: "About", href: "#about", action: () => scrollToSection("about") },
      ]
    : [
        { label: "About", href: "#about", action: () => scrollToSection("about") },
        { label: "Episodes", href: "#episodes", action: () => scrollToSection("episodes") },
        { label: "Reels", href: "#reels", action: () => scrollToSection("reels") },
      ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-[100] transition-shadow duration-300 hover:shadow-md">
        <div className="flex w-full max-w-[1440px] min-h-[70px] md:min-h-[90px] lg:h-[145px] items-center justify-between gap-4 px-4 sm:px-6 md:px-10 lg:px-[60px] py-3 lg:py-0 mx-auto">
          
          {/* Logo */}
          <a 
            href="/" 
            className="relative w-24 sm:w-32 md:w-40 lg:w-80 h-10 sm:h-12 md:h-16 lg:h-[103px] flex-shrink-0 transition-transform duration-300 hover:scale-105 z-[101]"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              className="w-full h-full object-contain"
              alt="Career141 Logo"
              src="https://c.animaapp.com/6IK4krLc/img/artboard-3-1.png"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:inline-flex items-center gap-8 xl:gap-[60px] relative flex-[0_0_auto]"
            aria-label="Main navigation"
          >
            <ul className="inline-flex items-center gap-2 xl:gap-4 relative flex-[0_0_auto]">
              <li className="inline-flex items-center justify-center gap-2.5 px-0 py-2.5 relative self-stretch flex-[0_0_auto]">
                <EditionsDropdown />
              </li>
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
                    className={`relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-sm xl:text-base text-center tracking-[-0.32px] leading-6 whitespace-nowrap transition-all duration-300 cursor-pointer border-none bg-transparent pb-1 ${
                      activeNav === item.label 
                        ? "text-[#7bb302] font-semibold border-b-2 border-[#7bb302]" 
                        : "text-[#232323] hover:text-[#7bb302] hover:border-b-2 hover:border-[#7bb302]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:inline-flex items-center gap-2 md:gap-4 relative flex-shrink-0">
            <a
              href="https://www.career141.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 md:h-12 lg:h-[54px] items-center justify-center gap-1 md:gap-2 px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4 relative flex-[0_0_auto] bg-[#222223] rounded-[60px] hover:bg-[#333333] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-xs md:text-sm lg:text-base tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                career141.com
              </span>
              <img
                className="relative w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[-1.00px] mb-[-1.00px] transition-transform duration-300 group-hover:translate-x-1"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
              />
            </a>
          </div>

          {/* Mobile: CTA Button + Hamburger */}
          <div className="flex md:hidden items-center gap-2 relative flex-shrink-0 z-[101]">
            {/* Mobile CTA Button (Compact) */}
            <a
              href="https://www.career141.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-1 px-3 py-2 relative flex-[0_0_auto] bg-[#222223] rounded-[60px] hover:bg-[#333333] transition-all duration-300"
            >
              <span className="relative w-fit [font-family:'Geist',Helvetica] font-semibold text-white text-[10px] tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                career141
              </span>
              <img
                className="relative w-3 h-3"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
              />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 gap-1.5 relative bg-transparent border-none cursor-pointer touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-[#232323] rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

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
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <span className="[font-family:'Geist',Helvetica] font-semibold text-[#232323] text-lg">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex flex-col p-4 gap-2" aria-label="Mobile navigation">
            {/* Editions Dropdown in Mobile */}
            <div className="pb-4 border-b border-neutral-200 mb-2">
              <EditionsDropdown />
            </div>

            {/* Navigation Links */}
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.label);
                  item.action();
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  activeNav === item.label
                    ? "bg-green-50 text-[#7bb302]"
                    : "text-[#232323] hover:bg-gray-50"
                }`}
              >
                <span className="[font-family:'Geist',Helvetica] font-medium text-base">
                  {item.label}
                </span>
                {activeNav === item.label && (
                  <div className="w-2 h-2 bg-[#7bb302] rounded-full"></div>
                )}
              </button>
            ))}

            {/* Mobile CTA Button (Full Width) */}
            <a
              href="https://www.career141.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 px-5 py-3 mt-4 bg-[#222223] rounded-[60px] hover:bg-[#333333] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-sm">
                Visit career141.com
              </span>
              <img
                className="w-4 h-4"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
              />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

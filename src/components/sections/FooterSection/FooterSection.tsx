import { useNavigate, useLocation } from "react-router-dom";

interface FooterLink {
  text: string;
  href: string | null;
  onClick?: (e: React.MouseEvent) => void;
}

interface FooterSectionProps {
  variant?: "simple" | "extended";
}

export const FooterSection = ({
  variant = "simple",
}: FooterSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  // Updated: Detect edition pages with new route format /edition/:edition
  const isEditionPage = location.pathname.startsWith("/edition/");

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const footerLinks: FooterLink[] = [
    { text: "Home", href: "/", onClick: handleHomeClick },
    { text: "Terms & Conditions", href: "#terms" },
    { text: "© 2025  All rights reserved.", href: null },
    { text: "Privacy Policy", href: "#privacy" },
  ];

  // Simple footer for landing page (no navigation)
  if (variant === "simple" && !isEditionPage) {
    return (
      <footer className="w-full bg-white border-t border-neutral-200">
        <div className="w-full max-w-[1440px] mx-auto flex min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-4 md:py-0">
          {footerLinks.map((link, index) =>
            link.href ? (
              <a
                key={index}
                href={link.href}
                onClick={link.onClick}
                className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:scale-110 transition-transform"
                aria-label={link.text}
              >
                {link.text}
              </a>
            ) : (
              <div
                key={index}
                className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap"
              >
                {link.text}
              </div>
            ),
          )}
        </div>
      </footer>
    );
  }

  // Extended footer for edition pages (Dubai/Singapore)
  return (
    <footer className="w-full bg-white border-t border-neutral-200">
      <div className="w-full max-w-[1440px] mx-auto flex min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-6 sm:py-4 md:py-0">
        {footerLinks.map((link, index) =>
          link.href ? (
            <a
              key={index}
              href={link.href}
              onClick={link.onClick}
              className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:scale-110 transition-transform"
              aria-label={link.text}
            >
              {link.text}
            </a>
          ) : (
            <div
              key={index}
              className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap"
            >
              {link.text}
            </div>
          ),
        )}
      </div>
    </footer>
  );
};

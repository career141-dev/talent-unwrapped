import { useNavigate, useLocation } from "react-router-dom";

interface FooterLink {
  text: string;
  href: string | null;
  onClick?: (e: React.MouseEvent) => void;
}

interface FooterSectionProps {
  variant?: "simple" | "extended";
}

export const FooterSection = ({ variant = "simple" }: FooterSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditionPage = location.pathname === "/dubai" || location.pathname === "/singapore";

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
      <footer className="flex w-full min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-4 md:py-0 relative bg-white">
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
      </footer>
    );
  }

  // Extended footer for edition pages (Dubai/Singapore)
  return (
    <footer className="flex w-full min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-4 md:py-0 relative bg-white">
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
    </footer>
  );
};

import { useNavigate } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    // Scroll to top after navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const footerLinks = [
    { text: "Home", href: "/", onClick: handleHomeClick },
    { text: "Terms & Conditions", href: "#terms" },
    { text: "© 2025  All rights reserved.", href: null },
    { text: "Privacy Policy", href: "#privacy" },
  ];

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

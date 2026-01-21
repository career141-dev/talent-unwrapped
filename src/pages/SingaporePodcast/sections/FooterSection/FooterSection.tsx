export const FooterSection = (): JSX.Element => {
  const footerLinks = [
    { text: "Terms & Conditions", href: "#terms" },
    { text: "© 2025  All rights reserved.", href: null },
    { text: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="flex w-full min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-4 md:py-0 relative bg-white border-t [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-neutral-200">
      {footerLinks.map((link, index) =>
        link.href ? (
          <a
            key={index}
            href={link.href}
            className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222223] focus:rounded touch-manipulation"
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

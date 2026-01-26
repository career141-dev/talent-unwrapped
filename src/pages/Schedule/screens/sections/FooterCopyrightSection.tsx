export const FooterCopyrightSection = (): JSX.Element => {
  const footerLinks = [
    { text: "Terms & Conditions", href: "#terms" },
    { text: "© 2025  All rights reserved.", href: null },
    { text: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="flex w-[1440px] h-[100px] items-center justify-between px-20 py-0 relative bg-white border-t [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-neutral-200">
      {footerLinks.map((link, index) =>
        link.href ? (
          <a
            key={index}
            href={link.href}
            className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-base tracking-[-0.32px] leading-[20.9px] whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#222223]"
            aria-label={link.text}
          >
            {link.text}
          </a>
        ) : (
          <div
            key={index}
            className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-base tracking-[-0.32px] leading-[20.9px] whitespace-nowrap"
          >
            {link.text}
          </div>
        ),
      )}
    </footer>
  );
};

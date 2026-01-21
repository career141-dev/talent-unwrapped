export const UpcomingPodsSection = (): JSX.Element => {
  const companyLinks = [
    { label: "Home", href: "#" },
    { label: "Executive Search", href: "#" },
    { label: "About", href: "#" },
    { label: "Our Culture", href: "#" },
    { label: "Our Journey", href: "#" },
  ];

  const informationLinks = [
    { label: "Jobs & Vacancies", href: "#" },
    { label: "Join Us", href: "#" },
  ];

  const supportLinks = [{ label: "Contact Us", href: "#" }];

  return (
    <section className="flex w-[1440px] h-[520px] items-center justify-center gap-[60px] pt-10 pb-20 px-[60px] relative bg-white">
      <div className="relative flex-1 grow h-[400px] rounded-3xl overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <img
          className="absolute top-[42px] left-0 w-[734px] h-[283px] object-cover"
          alt="Career AI company illustration"
          src="https://c.animaapp.com/mkmluv5tJBBDhG/img/artboard-3-1.png"
        />
      </div>

      <div className="flex flex-col w-[510px] items-start justify-between px-0 py-4 relative self-stretch">
        <header className="flex w-[505px] items-center justify-between px-0 py-5 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e2e2]">
          <h2 className="w-fit text-black text-[44px] tracking-[-1.32px] leading-[57.6px] whitespace-nowrap relative [font-family:'Geist',Helvetica] font-normal">
            About Us
          </h2>

          <img
            className="relative w-[60px] h-[60px]"
            alt="Decorative icon"
            src="https://c.animaapp.com/mkmluv5tJBBDhG/img/frame-36853.svg"
            aria-hidden="true"
          />
        </header>

        <nav
          className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]"
          aria-label="Footer navigation"
        >
          <div className="flex flex-col w-[120px] items-start gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
              Company
            </h3>

            <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {companyLinks.map((link, index) => (
                <li
                  key={index}
                  className={
                    index === 1
                      ? "relative w-[131px] mr-[-11.00px]"
                      : "relative self-stretch"
                  }
                >
                  <a
                    href={link.href}
                    className={`${index === 0 ? "mt-[-1.00px] " : ""}[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-[120px] items-start gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
              Information
            </h3>

            <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {informationLinks.map((link, index) => (
                <li
                  key={index}
                  className={
                    index === 0
                      ? "relative w-[132px] mt-[-1.00px] mr-[-12.00px]"
                      : "relative self-stretch"
                  }
                >
                  <a
                    href={link.href}
                    className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-[120px] items-start gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
              Support
            </h3>

            <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {supportLinks.map((link, index) => (
                <li key={index} className="relative self-stretch">
                  <a
                    href={link.href}
                    className="mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

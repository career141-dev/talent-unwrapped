import { useState, useEffect, useRef } from "react";

export const ContactFormSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const companyLinks = [
    { label: "Home", href: "#home" },
    { label: "Executive Search", href: "#executive-search" },
    { label: "About", href: "#about" },
    { label: "Our Culture", href: "#culture" },
    { label: "Our Journey", href: "#journey" },
  ];

  const informationLinks = [
    { label: "Jobs & Vacancies", href: "#jobs" },
    { label: "Join Us", href: "#join" },
  ];

  const supportLinks = [{ label: "Contact Us", href: "#contact" }];

  const footerSections = [
    { title: "Company", links: companyLinks },
    { title: "Information", links: informationLinks },
    { title: "Support", links: supportLinks },
  ];

  return (
    <footer ref={sectionRef} className="flex w-full max-w-[1440px] flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] pt-10 pb-20 px-4 sm:px-6 md:px-10 lg:px-[60px] relative bg-white mx-auto">
      <div className={`relative w-full lg:flex-1 h-[300px] lg:h-[400px] rounded-3xl overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <img
          className="absolute top-[42px] left-0 w-full max-w-[734px] h-auto object-cover hover:scale-105 transition-transform duration-500"
          alt="Company illustration"
          src="https://c.animaapp.com/6IK4krLc/img/artboard-3-1-1.png"
        />
      </div>

      <nav
        className={`flex flex-col w-full lg:w-[510px] items-start justify-between px-0 py-4 relative self-stretch transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        aria-label="Footer navigation"
      >
        <div className="flex w-full items-center justify-between px-0 py-5 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e2e2]">
          <h2 className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-black text-[44px] tracking-[-1.32px] leading-[57.6px] whitespace-nowrap">
            About Us
          </h2>

          <img
            className="relative w-[60px] h-[60px] aspect-[1] hover:rotate-12 transition-transform duration-300"
            alt="Decorative icon"
            src="https://c.animaapp.com/6IK4krLc/img/frame-36853.svg"
            aria-hidden="true"
          />
        </div>

        <div className="inline-flex items-start gap-[60px] relative flex-[0_0_auto]">
          {footerSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col w-[120px] items-start gap-5 relative"
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-base tracking-[-0.32px] leading-[20.9px]">
                {section.title}
              </h3>

              <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={
                      linkIndex === 0
                        ? "relative self-stretch mt-[-1.00px]"
                        : "relative self-stretch"
                    }
                  >
                    <a
                      href={link.href}
                      className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-all duration-300 hover:translate-x-1 inline-block"
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

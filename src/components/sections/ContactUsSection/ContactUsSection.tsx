import { useNavigate } from "react-router-dom";

interface Link {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  external?: boolean;
}

export const ContactUsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const handleJoinUsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("#join-us");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const companyLinks: Link[] = [
    { label: "Home", href: "/", onClick: handleHomeClick, external: false },
    { label: "Executive Search", href: "https://career141.com/executive-search/", external: true },
    { label: "Our Culture", href: "https://career141.com/our-culture/", external: true },
    { label: "Our Journey", href: "https://career141.com/our-journey/", external: true },
  ];

  const informationLinks: Link[] = [
    { label: "Jobs & Vacancies", href: "https://career141.com/job-openings/", external: true },
    { label: "Join Us", href: "#join-us", onClick: handleJoinUsClick, external: false },
  ];

  const supportLinks: Link[] = [
    { label: "Contact Us", href: "https://career141.com/contact-us/", external: true }
  ];

  return (
    <section id="schedule" className="flex flex-col lg:flex-row w-full min-h-[520px] items-center justify-center gap-8 lg:gap-[60px] pt-8 sm:pt-10 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 md:px-10 lg:px-[60px] relative bg-white">
      <div className="relative w-full lg:flex-1 lg:grow h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <img
          className="absolute top-[42px] left-0 w-full max-w-[734px] h-auto object-cover"
          alt="Career 4U 20 Years Anniversary Logo"
          src="https://c.animaapp.com/mkmm0u1u5wob0l/img/artboard-3-1.png"
        />
      </div>

      <nav
        className="flex flex-col w-full lg:w-[510px] items-start justify-between px-0 py-4 relative self-stretch"
        aria-label="Footer navigation"
      >
        <header className="flex w-full lg:w-[505px] items-center justify-between px-0 py-4 lg:py-5 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e2e2]">
          <h2 className="w-fit text-black text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-1px] lg:tracking-[-1.32px] leading-tight lg:leading-[57.6px] whitespace-nowrap relative [font-family:'Geist',Helvetica] font-normal">
            About Us
          </h2>

          <button
            className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] cursor-pointer"
            aria-label="Navigate to About Us"
            type="button"
          >
            <img
              className="w-full h-full"
              alt=""
              src="https://c.animaapp.com/mkmm0u1u5wob0l/img/frame-36853.svg"
            />
          </button>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:inline-flex items-start gap-8 sm:gap-10 lg:gap-[60px] relative flex-[0_0_auto] w-full">
          <div className="flex flex-col w-full sm:w-[120px] items-start gap-4 lg:gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px]">
              Company
            </h3>

            <ul className="flex flex-col items-start gap-2 lg:gap-3 relative self-stretch w-full flex-[0_0_auto] list-none">
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
                    onClick={link.onClick}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`${index === 0 ? "mt-[-1.00px] " : ""}[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-full sm:w-[120px] items-start gap-4 lg:gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px]">
              Information
            </h3>

            <ul className="flex flex-col items-start gap-2 lg:gap-3 relative self-stretch w-full flex-[0_0_auto] list-none">
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
                    onClick={link.onClick}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-full sm:w-[120px] items-start gap-4 lg:gap-5 relative">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px]">
              Support
            </h3>

            <ul className="flex flex-col items-start gap-2 lg:gap-3 relative self-stretch w-full flex-[0_0_auto] list-none">
              {supportLinks.map((link, index) => (
                <li key={index} className="relative self-stretch">
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm lg:text-base tracking-[-0.32px] leading-[20.9px] hover:text-[#222223] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

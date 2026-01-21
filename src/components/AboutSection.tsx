export const AboutSection = (): JSX.Element => {
  const episodes = [
    {
      id: 1,
      title: "Leadership Reimagined:",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
      icon: "https://c.animaapp.com/mknspbgaVfvQNA/img/vuesax-bold-video-circle.svg",
    },
    {
      id: 2,
      title: "Beyond Resilience:",
      subtitle: "Redefining Leadership Strength and Organizational Agility",
      icon: "https://c.animaapp.com/mknspbgaVfvQNA/img/vuesax-bold-video-circle-1.svg",
    },
    {
      id: 3,
      title: "The Human Blueprint:",
      subtitle: "Rethinking Leadership for an Intelligent Age",
      icon: "https://c.animaapp.com/mknspbgaVfvQNA/img/vuesax-bold-video-circle-1.svg",
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] bg-white py-16 sm:py-20 md:py-24 lg:py-[90px] px-4 sm:px-6 md:px-10 lg:px-[60px] mx-auto">
      <div className="relative w-full min-h-[800px] lg:min-h-[1134px]">
        <header className="relative lg:absolute top-0 lg:top-20 left-0 lg:left-0 w-full lg:w-[203px] text-center lg:text-left mb-6 lg:mb-0 [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
          THE THREE CHAPTERS
        </header>

        <div className="flex flex-col w-full lg:w-[203px] items-center lg:items-start gap-2 lg:gap-3 relative lg:absolute top-auto lg:top-[254px] left-0 lg:left-0 mb-8 lg:mb-0">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-1.5px] lg:tracking-[-2.88px] leading-[normal] text-center lg:text-left">
            100K+
          </div>

          <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm md:text-base text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
            VIEWERS WORLDWIDE
          </div>
        </div>

        <p className="relative lg:absolute top-auto lg:top-20 left-0 lg:left-[476px] w-full lg:w-[904px] max-w-full text-center lg:text-left mb-8 lg:mb-0 [font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[-1px] lg:tracking-[-1.76px] leading-tight lg:leading-[normal]">
          <span className="text-[#232323] tracking-[-0.77px]">
            Each episode of Talent Unwrapped: Singapore Edition{" "}
          </span>

          <span className="text-[#8d8d8d] tracking-[-0.77px]">
            explores a different human dimension of ambition, design, and
            leadership.
          </span>
        </p>

        <button
          className="relative lg:absolute top-auto lg:top-[348px] left-0 lg:left-[476px] inline-flex h-12 md:h-[54px] items-center justify-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-[#7bb302] rounded-[60px] cursor-pointer hover:bg-[#6da002] transition-colors mx-auto lg:mx-0 mb-8 lg:mb-0"
          aria-label="More about the podcast"
        >
          <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.48px] leading-[normal]">
            More about the podcast
          </span>

          <img
            className="relative w-5 h-5 md:w-6 md:h-6 mt-[-1.00px] mb-[-1.00px]"
            alt=""
            src="https://c.animaapp.com/mknspbgaVfvQNA/img/vuesax-linear-arrow-right.png"
          />
        </button>

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 relative lg:absolute top-auto lg:top-[679px] left-0 lg:left-0 w-full lg:w-auto">
          {episodes.map((episode) => (
            <article
              key={episode.id}
              className="relative w-full max-w-[400px] lg:w-[424px] h-[320px] lg:h-[372px] bg-[#f8f8f8] rounded-[20px] lg:rounded-[28px] overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 lg:gap-2.5 p-2 lg:p-3 absolute top-4 lg:top-6 left-4 lg:left-6 bg-[#7bb302] rounded-[40px]">
                <img className="relative w-5 h-5 lg:w-6 lg:h-6" alt="" src={episode.icon} />
              </div>

              <div className="flex flex-col w-[calc(100%-2rem)] lg:w-[376px] items-start gap-4 lg:gap-5 absolute top-20 lg:top-28 left-4 lg:left-6">
                <div className="flex items-center gap-2 lg:gap-2.5 pt-0 pb-2 lg:pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-200">
                  <h3 className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-lg sm:text-xl lg:text-[27px] tracking-[-0.5px] lg:tracking-[-1.08px] leading-tight lg:leading-[normal]">
                    <span className="text-[#7bb302] tracking-[-0.29px]">
                      {episode.title}{" "}
                    </span>

                    <span className="text-[#ed2939] tracking-[-0.29px]">
                      {episode.subtitle}
                    </span>
                  </h3>
                </div>

                <a
                  href="#"
                  className="relative self-stretch [font-family:'Geist',Helvetica] font-medium text-black text-sm lg:text-base tracking-[-0.32px] leading-[normal] underline hover:text-[#7bb302] transition-colors"
                >
                  Learn more
                </a>
              </div>

              <button
                className="absolute top-6 lg:top-9 right-4 lg:right-6 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
                aria-label="Export episode"
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src="https://c.animaapp.com/mknspbgaVfvQNA/img/vuesax-linear-export.svg"
                />
              </button>
            </article>
          ))}
        </div>

        <div className="hidden lg:flex absolute top-[228px] left-[871px] w-[152px] h-[106px] rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <img
            className="mt-[-9.2px] w-[163px] h-[124.13px] ml-[-5.1px] rotate-[7.30deg] object-cover"
            alt="Man in headphones having interview"
            src="https://c.animaapp.com/mknspbgaVfvQNA/img/man-in-headphones-having-interview-2025-10-26-23-44-27-utc-1.png"
          />
        </div>

        <div className="hidden lg:flex absolute top-72 left-[1125px] w-[152px] h-[106px] rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <img
            className="mt-[-8.2px] w-[162.7px] h-[122.17px] ml-[-5.5px] rotate-[-6.49deg] object-cover"
            alt="Young black man in headphones talking in microphone"
            src="https://c.animaapp.com/mknspbgaVfvQNA/img/young-black-man-in-headphones-talking-in-microphon-2025-03-13-12.png"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[1200px] items-center lg:items-start gap-2 relative lg:absolute top-auto lg:top-[568px] left-0 lg:left-0 text-center lg:text-left">
          <p className="relative w-full lg:w-[1021px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
            <span className="text-[#7cb403]">Pods scheduled for: </span>

            <span className="text-[#ed2939]">12th, 13th Nov 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};

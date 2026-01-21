export const PodcastDescriptionSection = (): JSX.Element => {
  const podcastEpisodes = [
    {
      id: 1,
      title: "Leadership Reimagined:",
      subtitle:
        "Building Mental Toughness, Culture, and Agility for the Future of Work",
      icon: "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-bold-video-circle-1.svg",
      exportIcon:
        "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-linear-export.svg",
    },
    {
      id: 2,
      title: "Beyond Resilience:",
      subtitle: "Redefining Leadership Strength and Organizational Agility",
      icon: "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-bold-video-circle.svg",
      exportIcon:
        "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-linear-export.svg",
    },
    {
      id: 3,
      title: "The Human Blueprint:",
      subtitle: "Rethinking Leadership for an Intelligent Age",
      icon: "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-bold-video-circle.svg",
      exportIcon:
        "https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-linear-export.svg",
    },
  ];

  return (
    <section className="relative self-stretch w-full h-[1134px] bg-white">
      <h2 className="absolute top-20 left-[60px] w-[203px] [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-base tracking-[-0.32px] leading-[normal]">
        THE THREE CHAPTERS
      </h2>

      <div className="flex flex-col w-[203px] items-start gap-3 absolute top-[254px] left-[60px]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-7xl tracking-[-2.88px] leading-[normal]">
          100K+
        </div>

        <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base text-center tracking-[-0.64px] leading-[normal]">
          VIEWERS WORLDWIDE
        </div>
      </div>

      <p className="absolute top-20 left-[476px] w-[904px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[44px] tracking-[-1.76px] leading-[normal]">
        <span className="text-[#232323] tracking-[-0.77px]">
          Each episode of Talent Unwrapped: Singapore Edition{" "}
        </span>

        <span className="text-[#8d8d8d] tracking-[-0.77px]">
          explores a different human dimension of ambition, design, and
          leadership.
        </span>
      </p>

      <button className="inline-flex h-[54px] items-center justify-center gap-2 px-5 py-4 absolute top-[348px] left-[476px] bg-[#7bb302] rounded-[60px]">
        <span className="relative w-fit mt-[-0.50px] [font-family:'Geist',Helvetica] font-semibold text-white text-base tracking-[-0.48px] leading-[normal]">
          More about the podcast
        </span>

        <img
          className="relative w-6 h-6 mt-[-1.00px] mb-[-1.00px]"
          alt="Arrow right"
          src="https://c.animaapp.com/mkmluv5tJBBDhG/img/vuesax-linear-arrow-right.png"
        />
      </button>

      <div className="inline-flex items-center gap-6 absolute top-[679px] left-[60px]">
        {podcastEpisodes.map((episode) => (
          <article
            key={episode.id}
            className="relative w-[424px] h-[372px] bg-[#f8f8f8] rounded-[28px] overflow-hidden"
          >
            <div className="inline-flex items-center gap-2.5 p-3 absolute top-6 left-6 bg-[#7bb302] rounded-[40px]">
              <img
                className="relative w-6 h-6"
                alt="Video icon"
                src={episode.icon}
              />
            </div>

            <div className="flex flex-col w-[376px] items-start gap-5 absolute top-28 left-6">
              <div className="flex items-center gap-2.5 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-neutral-200">
                <p className="relative w-[376px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[27px] tracking-[-1.08px] leading-[normal]">
                  <span className="text-[#7bb302] tracking-[-0.29px]">
                    {episode.title}{" "}
                  </span>

                  <span className="text-[#ed2939] tracking-[-0.29px]">
                    {episode.subtitle}
                  </span>
                </p>
              </div>

              <a
                href="#"
                className="relative self-stretch [font-family:'Geist',Helvetica] font-medium text-black text-base tracking-[-0.32px] leading-[normal] underline"
              >
                Learn more
              </a>
            </div>

            <img
              className="absolute top-9 left-[376px] w-6 h-6"
              alt="Export icon"
              src={episode.exportIcon}
            />
          </article>
        ))}
      </div>

      <div className="absolute top-[228px] left-[871px] w-[152px] h-[106px] flex rounded-xl overflow-hidden rotate-[-7.30deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <img
          className="mt-[-9.2px] w-[163px] h-[124.13px] ml-[-5.1px] rotate-[7.30deg] object-cover"
          alt="Man in headphones having interview"
          src="https://c.animaapp.com/mkmluv5tJBBDhG/img/man-in-headphones-having-interview-2025-10-26-23-44-27-utc-1.png"
        />
      </div>

      <div className="absolute top-72 left-[1125px] w-[152px] h-[106px] flex rounded-xl overflow-hidden rotate-[6.49deg] shadow-[12px_12px_30px_#00000017] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <img
          className="mt-[-8.2px] w-[162.7px] h-[122.17px] ml-[-5.5px] rotate-[-6.49deg] object-cover"
          alt="Young black man in headphones talking in microphone"
          src="https://c.animaapp.com/mkmluv5tJBBDhG/img/young-black-man-in-headphones-talking-in-microphon-2025-03-13-12.png"
        />
      </div>

      <div className="flex flex-col w-[1200px] items-start gap-2 absolute top-[568px] left-[60px]">
        <p className="relative w-[1021px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-transparent text-[52px] tracking-[0] leading-[70px]">
          <span className="text-[#7cb403]">Pods scheduled for: </span>

          <span className="text-[#ed2939]">12th, 13th Nov 2025</span>
        </p>
      </div>
    </section>
  );
};

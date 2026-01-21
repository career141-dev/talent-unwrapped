import { useRef } from "react";

interface Speaker {
  id: number;
  title: string;
  views: string;
  name: string;
  position: string;
  image: string;
}

export const SpeakersProfileSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const speakers: Speaker[] = [
    {
      id: 1,
      title: "Bridging Sri Lanka's Talent Gap",
      views: "40m+ Views",
      name: "Ashan Ransilige",
      position: "CEO - Link Natural",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449055-1@2x.png",
    },
    {
      id: 2,
      title: 'Avoid "cut- And-paste" Leadership',
      views: "32m+ Views",
      name: "Surani Amarasinghe",
      position: "Director - LSEG",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449056-1@2x.png",
    },
    {
      id: 3,
      title: "Sri Lanka's True Talent Gap",
      views: "19m+ Views",
      name: "Ayin Shah Jahan",
      position: "Head - EY",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449057-1@2x.png",
    },
    {
      id: 4,
      title: "Sri Lankan Talent: Potential vs Retention",
      views: "15m+ Views",
      name: "Inoka Dias",
      position: "Director - Virtusa",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449058-1@2x.png",
    },
    {
      id: 5,
      title: "Building Future-Ready Teams",
      views: "28m+ Views",
      name: "Rajesh Kumar",
      position: "VP - Tech Solutions",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449055-1@2x.png",
    },
    {
      id: 6,
      title: "Digital Transformation Leadership",
      views: "35m+ Views",
      name: "Priya Sharma",
      position: "CTO - Innovation Labs",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449056-1@2x.png",
    },
    {
      id: 7,
      title: "Sustainable Business Practices",
      views: "22m+ Views",
      name: "Michael Chen",
      position: "Director - Sustainability",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449057-1@2x.png",
    },
    {
      id: 8,
      title: "AI and Human Collaboration",
      views: "45m+ Views",
      name: "Sarah Williams",
      position: "Head of AI Strategy",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449058-1@2x.png",
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600; // Scroll by approximately 2 cards
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="speakers" className="relative w-full max-w-[1440px] bg-white py-16 sm:py-20 md:py-24 lg:py-[90px] px-4 sm:px-6 md:px-10 lg:px-[60px] mx-auto overflow-visible">
      <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-12 relative w-full">
        <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-full max-w-full lg:max-w-[721px] [font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
            <span className="text-[#7cb403]">Our </span>
            <span className="text-[#ed2939]">Speakers</span>
          </h2>
        </header>

        <div className="inline-flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative flex-[0_0_auto] w-full">
          <nav
            className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between relative self-stretch w-full flex-[0_0_auto] gap-4 sm:gap-0"
            aria-label="Speaker categories"
          >
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-start px-4 sm:px-5 md:px-6 py-2 relative flex-[0_0_auto] border-b-2 md:border-b-[3px] [border-bottom-style:solid] border-[#7bb302]">
                <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  All
                </span>
              </div>
            </div>

            <button
              className="all-[unset] box-border inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 relative flex-[0_0_auto] cursor-pointer hover:scale-105 transition-transform group"
              type="button"
              aria-label="View all speakers"
            >
              <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                View all Speakers
              </span>

              <img
                className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/right-arrow---24---outline-1.svg"
                aria-hidden="true"
              />
            </button>
          </nav>

          {/* Scrollable Container with Navigation Buttons */}
          <div className="relative w-full">
            {/* Left Scroll Button */}
            <button
              className="hidden lg:block absolute left-[-60px] top-[calc(50%-60px)] w-[120px] h-[120px] cursor-pointer z-10 hover:scale-105 transition-transform"
              onClick={() => handleScroll('left')}
              type="button"
              aria-label="Scroll left"
            >
              <img
                className="w-full h-full"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/back@2x.png"
                aria-hidden="true"
              />
            </button>

            {/* Scrollable Speakers Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide relative pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {speakers.map((speaker) => (
                <article
                  key={speaker.id}
                  className="flex flex-col w-[250px] sm:w-[270px] md:w-[282px] items-start relative flex-shrink-0"
                >
                  <div className="flex flex-col w-full items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 relative flex-[0_0_auto] bg-[#f8f8f8] rounded-[20px] md:rounded-[28px]">
                    <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[139px] md:h-[139px] bg-[#00000033] rounded-[100px] overflow-hidden border-2 border-solid border-white aspect-[1]">
                      <img
                        className="absolute top-0 left-0 w-full h-full aspect-[1] object-cover"
                        alt={speaker.name}
                        src={speaker.image}
                      />
                    </div>

                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch min-h-[24px] sm:min-h-[26px] md:min-h-[30px] mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-black text-base sm:text-lg tracking-[0] leading-tight sm:leading-[26px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        {speaker.title}
                      </h3>

                      <p className="relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-[#939393] text-xs sm:text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                        {speaker.views}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 sm:gap-3 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <p className="relative mt-[-1.00px] [font-family:'Geist',Helvetica] font-bold text-black text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                          {speaker.name}
                        </p>

                        <p className="relative font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-[#939393] text-xs sm:text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                          {speaker.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              className="hidden lg:block absolute right-[-60px] top-[calc(50%-60px)] w-[120px] h-[120px] cursor-pointer z-10 hover:scale-105 transition-transform"
              onClick={() => handleScroll('right')}
              type="button"
              aria-label="Scroll right"
            >
              <img
                className="w-full h-full"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/next@2x.png"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

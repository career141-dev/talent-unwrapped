import { useRef, useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const isManualScrollRef = useRef(true);

  const allSpeakersData: Speaker[][] = [
    // View 1 (Default)
    [
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
      id: 9,
      title: "Leadership in the Digital Age",
      views: "25m+ Views",
      name: "Deepak Patel",
      position: "CTO - Global Tech",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449055-1@2x.png",
    },
    {
      id: 10,
      title: "Innovation and Adaptability",
      views: "33m+ Views",
      name: "Emma Wilson",
      position: "VP - Strategy",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449056-1@2x.png",
    },
    {
      id: 11,
      title: "Talent Retention Best Practices",
      views: "28m+ Views",
      name: "James Anderson",
      position: "HR Director - Fortune 500",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449057-1@2x.png",
    },
    {
      id: 12,
      title: "Building High-Performance Teams",
      views: "38m+ Views",
      name: "Lisa Chen",
      position: "Chief People Officer",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449058-1@2x.png",
    },
    ],
    // View 2 (Alternative speakers)
    [
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
    {
      id: 13,
      title: "Future of Work Trends",
      views: "31m+ Views",
      name: "David Kumar",
      position: "Workforce Analyst",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449055-1@2x.png",
    },
    {
      id: 14,
      title: "Cross-Cultural Leadership",
      views: "26m+ Views",
      name: "Sophia Martinez",
      position: "Global Executive Coach",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449056-1@2x.png",
    },
    {
      id: 15,
      title: "Scaling Operations Globally",
      views: "29m+ Views",
      name: "Robert Johnson",
      position: "COO - International Corp",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449057-1@2x.png",
    },
    {
      id: 16,
      title: "Data-Driven Decision Making",
      views: "34m+ Views",
      name: "Victoria Lee",
      position: "Chief Analyst",
      image: "https://c.animaapp.com/6IK4krLc/img/frame-4449058-1@2x.png",
    },
    ]
  ];

  const speakers = allSpeakersData[0]; // Use first dataset
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / ITEMS_PER_PAGE);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScrollTracking = () => {
      // Only track scroll if it's manual (not programmatic)
      if (!isManualScrollRef.current) return;

      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        // Get the first article element to measure actual dimensions
        const firstArticle = container.querySelector('article');
        if (!firstArticle) return;

        const articleWidth = firstArticle.offsetWidth;
        
        // Get computed gap from the container
        const computedStyle = window.getComputedStyle(container);
        const gapValue = computedStyle.gap;
        const gap = parseInt(gapValue) || 16; // default to 16 if can't parse
        
        const itemSize = articleWidth + gap;
        
        // Calculate current index based on scroll position
        const scrollPosition = container.scrollLeft;
        const newIndex = Math.round(scrollPosition / itemSize);
        const maxIndex = speakers.length - 1;
        
        setCurrentIndex(Math.min(newIndex, maxIndex));
      }, 50);
    };

    container.addEventListener('scroll', handleScrollTracking, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScrollTracking);
      clearTimeout(timeoutId);
    };
  }, [speakers.length]);

  const handlePaginationClick = (pageIndex: number) => {
    const newIndex = pageIndex * ITEMS_PER_PAGE;
    setCurrentIndex(newIndex);
    
    // Scroll the container to show the correct item
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstArticle = container.querySelector('article');
      
      if (firstArticle) {
        const articleWidth = firstArticle.offsetWidth;
        const computedStyle = window.getComputedStyle(container);
        const gapValue = computedStyle.gap;
        const gap = parseInt(gapValue) || 16;
        const itemSize = articleWidth + gap;
        const scrollPosition = newIndex * itemSize;
        
        // Disable manual scroll tracking during programmatic scroll
        isManualScrollRef.current = false;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
        
        // Re-enable manual scroll tracking after scroll completes
        setTimeout(() => {
          isManualScrollRef.current = true;
        }, 1000);
      }
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const cards = Array.from(container.querySelectorAll('article'));
      
      if (cards.length >= 2) {
        // Measure the exact distance between first and second card (this includes gap)
        const firstCardLeft = cards[0].offsetLeft;
        const secondCardLeft = cards[1].offsetLeft;
        const scrollAmount = secondCardLeft - firstCardLeft;
        
        // Scroll by that amount
        if (direction === 'left') {
          container.scrollLeft -= scrollAmount;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    }
  };

  return (
    <section id="speakers" className="relative w-full max-w-[1440px] bg-white py-10 sm:py-12 md:py-16 lg:py-[60px] px-4 sm:px-6 md:px-10 lg:px-[60px] mx-auto overflow-hidden" style={{overflowX: 'hidden'}}>
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 relative w-full">
        <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-full max-w-full lg:max-w-[721px] [font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
            <span className="text-[#7cb403]">Our </span>
            <span className="text-[#ed2939]">Speakers</span>
          </h2>
        </header>

        <div className="inline-flex flex-col items-start gap-3 md:gap-4 lg:gap-6 relative flex-[0_0_auto] w-full">
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
                  <div className="flex flex-col w-full items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 relative flex-[0_0_auto] bg-[#f8f8f8] rounded-[20px] md:rounded-[28px] border-2 border-[#7bb302] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white cursor-pointer">
                    <div 
                      className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[139px] md:h-[139px] rounded-full flex-shrink-0"
                      style={{
                        border: '4px solid #7bb302',
                        padding: '4px'
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#00000033]">
                        <img
                          className="w-full h-full object-cover"
                          alt={speaker.name}
                          src={speaker.image}
                        />
                      </div>
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

          {/* Dot Indicator */}
          <div className="flex items-center justify-center gap-2 w-full mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-[#7bb302] w-6' : 'bg-[#d0d0d0]'
                }`}
                aria-label={`Page ${index + 1}`}
              />
            ))}
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

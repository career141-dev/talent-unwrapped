import { useState, useEffect, useRef } from "react";

interface EpisodeType {
  id: number;
  title: string;
  isActive: boolean;
}

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export const EpisodeDetailsSection = (): JSX.Element => {
  const episodeTypes: EpisodeType[] = [
    { id: 1, title: "Fireside Chats", isActive: true },
    { id: 2, title: "1 on 1 Interviews", isActive: false },
    { id: 3, title: "2 - 3 Guest Panel", isActive: false },
    { id: 4, title: "Roundtable Discussions", isActive: false },
  ];

  const images: ImageItem[] = [
    {
      id: 1,
      src: "https://c.animaapp.com/6IK4krLc/img/handsome-elegant-men-with-beards-in-chic-attires-s-2024-11-12-02.png",
      alt: "Handsome elegant men",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6IK4krLc/img/professional-businessman-partner-person-success-te-2025-03-26-02@2x.png",
      alt: "Professional",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/6IK4krLc/img/in-recreation-area-sitting-on-yellow-chairs-office-2024-11-27-09@2x.png",
      alt: "In recreation area",
    },
    {
      id: 4,
      src: "https://c.animaapp.com/6IK4krLc/img/team-of-reporters-working-on-a-interview-with-a-gr-2024-10-13-20@2x.png",
      alt: "Team of reporters",
    },
    {
      id: 5,
      src: "https://c.animaapp.com/6IK4krLc/img/four-people-meeting-in-lounge-area-of-a-corporate-2024-10-19-05-@2x.png",
      alt: "Four people meeting",
    },
  ];

  const [activeEpisode, setActiveEpisode] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleEpisodeClick = (id: number) => {
    setActiveEpisode(id);
  };

  const handleEpisodeKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveEpisode(id);
    }
  };

  // Calculate position and scale for each image based on active index
  const getImageStyle = (index: number) => {
    const totalImages = images.length;
    const diff = (index - activeImageIndex + totalImages) % totalImages;
    
    // Main image (active) - center, largest, highest z-index
    if (diff === 0) {
      return {
        transform: 'translate(-50%, -50%) scale(1)',
        zIndex: 50,
        opacity: 1,
        left: '50%',
        top: '50%',
        filter: 'brightness(1)',
      };
    }
    
    // Images to the right
    if (diff <= Math.floor(totalImages / 2)) {
      const offset = diff * 140;
      const scale = 1 - (diff * 0.15);
      return {
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 50 - diff,
        opacity: 0.85 - (diff * 0.15),
        left: `calc(50% + ${offset}px)`,
        top: '50%',
        filter: 'brightness(0.85)',
      };
    }
    
    // Images to the left
    const leftDiff = totalImages - diff;
    const offset = leftDiff * 140;
    const scale = 1 - (leftDiff * 0.15);
    return {
      transform: `translate(-50%, -50%) scale(${scale})`,
      zIndex: 50 - leftDiff,
      opacity: 0.85 - (leftDiff * 0.15),
      left: `calc(50% - ${offset}px)`,
      top: '50%',
      filter: 'brightness(0.85)',
    };
  };

  // Start/stop animation based on visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
            // Start the loop
            intervalRef.current = setInterval(() => {
              setActiveImageIndex((prev) => (prev + 1) % images.length);
            }, 3000); // Change image every 3 seconds
          } else {
            setIsAnimating(false);
            // Stop the loop
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[1440px] min-h-[1071px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] py-16 sm:py-20 md:py-24 lg:py-[90px] mx-auto overflow-hidden"
      aria-labelledby="episode-details-heading"
    >
      <h2
        id="episode-details-heading"
        className="relative lg:absolute top-0 lg:top-0 left-0 lg:left-0 w-full max-w-[646px] [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-base tracking-[-0.32px] leading-[normal] mb-4 lg:mb-0"
      >
        WHY BE A GUEST?
      </h2>

      <p className="relative lg:absolute top-auto lg:top-[33px] left-0 lg:left-0 w-full max-w-[748px] [font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.5px] lg:tracking-[-2.56px] leading-tight lg:leading-[normal] mb-4 lg:mb-0">
        <span className="text-[#232323] tracking-[-1.64px]">Your words, </span>
        <span className="text-[#7bb302] tracking-[-1.64px]">Your wisdom</span>
      </p>

      <div className="relative lg:absolute top-auto lg:top-[116px] left-0 lg:left-0 w-full max-w-[900px] mb-8 lg:mb-0">
        <div className="relative w-full flex items-center gap-3 lg:gap-4">
          <span className="inline-block w-[80px] lg:w-[105px] h-10 lg:h-12 bg-[#00000033] rounded-[80px] flex-shrink-0" aria-hidden="true"></span>
          <p className="[font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.5px] lg:tracking-[-2.56px] leading-[normal] whitespace-nowrap">
            <span className="text-[#232323] tracking-[-1.64px]">Your </span>
            <span className="text-[#ed2939] tracking-[-1.64px]">unwrapped moment</span>
          </p>
        </div>
      </div>

      {/* Image Stack Container */}
      <div className="hidden lg:block absolute top-[240px] right-0 w-[700px] h-[400px] pointer-events-none">
        {images.map((image, index) => {
          const style = getImageStyle(index);
          const isActive = (index === activeImageIndex);
          return (
            <div
              key={image.id}
              className="absolute w-[350px] h-[380px] rounded-3xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-700 ease-in-out"
              style={{
                transform: style.transform,
                zIndex: style.zIndex,
                opacity: style.opacity,
                left: style.left,
                top: style.top,
                filter: style.filter,
                backgroundColor: '#f5f5f5',
              }}
            >
              <img
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isActive ? 'brightness-100' : 'brightness-90'
                }`}
                alt={image.alt}
                src={image.src}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <nav
        className="flex flex-col w-full max-w-[400px] items-start gap-5 relative lg:absolute top-auto lg:top-[283px] left-0 lg:left-0 z-10 mb-8 lg:mb-0"
        aria-label="Episode types"
      >
        {episodeTypes.map((episode) => (
            <button
              key={episode.id}
              onClick={() => handleEpisodeClick(episode.id)}
              onKeyDown={(e) => handleEpisodeKeyDown(e, episode.id)}
              className={`flex h-[60px] items-center justify-between pl-5 pr-1.5 py-5 relative self-stretch w-full rounded-[60px] ${
                activeEpisode === episode.id
                  ? "bg-neutral-100"
                  : "border border-solid border-neutral-200"
              } transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 cursor-pointer z-20`}
              aria-pressed={activeEpisode === episode.id}
              type="button"
            >
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
              <div className="relative w-4 h-2.5" aria-hidden="true">
                <div className="left-0 bg-[#7bb302] absolute top-0 w-2.5 h-2.5 rounded-[5px] aspect-[1]" />
                <div className="left-1.5 bg-[#ed2939] absolute top-0 w-2.5 h-2.5 rounded-[5px] aspect-[1]" />
              </div>
              <span className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-[#222223] text-xl tracking-[-0.80px] leading-[normal]">
                {episode.title}
              </span>
            </div>
            <div
              className="flex w-12 h-12 items-center justify-center gap-2.5 p-2 relative mt-[-14.00px] mb-[-14.00px] bg-[#7bb302] rounded-[40px] aspect-[1]"
              aria-hidden="true"
            >
              <img
                className="relative w-[33.94px] h-[33.94px] mt-[-0.97px] mb-[-0.97px] ml-[-0.97px] mr-[-0.97px] aspect-[1]"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-6.svg"
              />
            </div>
          </button>
        ))}
      </nav>

      <blockquote className="hidden lg:block absolute top-[91px] right-0 w-[315px] [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.64px] leading-[normal] z-10">
        &quot;Be seen, not as a speaker — but as a story. Join a curated circle
        of founders, thinkers, and changemakers shaping how humans thrive in
        work and life. We&apos;re looking for voices who don&apos;t just lead —
        they inspire.&quot;
      </blockquote>

      <div className="relative lg:absolute top-auto lg:top-[632px] left-0 w-full overflow-hidden z-10 mt-8 lg:mt-0" aria-hidden="true">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[200px] tracking-[-10.00px] leading-[normal] px-8">
            lets unwrap your story
          </span>
          <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[200px] tracking-[-10.00px] leading-[normal] px-8">
            lets unwrap your story
          </span>
          <span className="inline-block bg-[linear-gradient(131deg,rgba(174,255,0,1)_0%,rgba(237,41,57,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-bold text-[200px] tracking-[-10.00px] leading-[normal] px-8">
            lets unwrap your story
          </span>
        </div>
      </div>

    </section>
  );
};

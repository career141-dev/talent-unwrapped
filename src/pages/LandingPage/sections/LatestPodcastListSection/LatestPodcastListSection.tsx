import { useState, useEffect, useRef } from "react";

interface PodcastItem {
  id: number;
  title: string;
  edition: string;
  date: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const LatestPodcastListSection = (): JSX.Element => {
  const [activeTab] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const allPodcastData: PodcastItem[] = [
    {
      id: 1,
      title: "Opening Keynote: Future of Innovation",
      edition: "Dubai Edition",
      date: "January 10, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Panel Discussion on Global Trends",
      edition: "Singapore Edition",
      date: "December 15, 2025",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-1@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      title: "Workshop: Strategic Thinking",
      edition: "London Edition",
      date: "November 22, 2025",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-2@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      title: "Closing Remarks and Reflections",
      edition: "Dubai Edition",
      date: "January 12, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-3@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 5,
      title: "AI and the Future of Leadership",
      edition: "Singapore Edition",
      date: "January 20, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 6,
      title: "Building Resilient Teams",
      edition: "Dubai Edition",
      date: "January 25, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-1@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 7,
      title: "Digital Transformation Strategies",
      edition: "London Edition",
      date: "February 1, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-2@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 8,
      title: "Sustainable Business Practices",
      edition: "Singapore Edition",
      date: "February 5, 2026",
      thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-3@2x.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
  ];

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(allPodcastData.length / itemsPerPage);
  
  const startIndex = activeSlide * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const podcastData = allPodcastData.slice(startIndex, endIndex);

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(id);
  };

  return (
    <section ref={sectionRef} id="episodes" className="relative w-full max-w-[1440px] bg-white py-16 sm:py-20 md:py-24 lg:py-[90px] px-4 sm:px-6 md:px-10 lg:px-[60px] mx-auto">
      <div className="w-full">
        <div className={`flex flex-col items-start gap-8 md:gap-10 lg:gap-12 w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="flex flex-col items-start gap-2 relative w-full">
            <h2 className="relative w-full max-w-full lg:max-w-[721px] [font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
              <span className="text-[#ed2939]">Latest</span>
              <span className="text-[#7cb403]"> Podcast</span>
            </h2>
          </header>

          <nav className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 relative w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between w-full gap-4 sm:gap-0">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <button
                  className="inline-flex items-start px-4 sm:px-5 md:px-6 py-2 relative flex-[0_0_auto] border-b-2 md:border-b-[3px] [border-bottom-style:solid] border-[#7bb302] transition-all duration-300 hover:bg-green-50"
                  aria-current={activeTab === "all" ? "page" : undefined}
                >
                  <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                    All
                  </span>
                </button>
              </div>

              <button
                className="all-[unset] box-border inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 cursor-pointer transition-all duration-300 hover:scale-105 group"
                aria-label="View all podcasts"
              >
                <span className="relative w-fit mt-[-3.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[#7bb302] text-sm sm:text-base md:text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  View all podcast
                </span>
                <img
                  className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
                  alt=""
                  src="https://c.animaapp.com/6IK4krLc/img/right-arrow---24---outline.svg"
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-10 lg:mt-12 w-full">
          {podcastData.map((podcast, index) => (
            <article
              key={podcast.id}
              className={`relative w-full flex flex-col gap-3 md:gap-4 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {playingVideo === podcast.id ? (
                  <video
                    className="w-full h-full object-cover"
                    src={podcast.videoUrl}
                    controls
                    autoPlay
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <>
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={podcast.thumbnailUrl}
                      alt={podcast.title}
                    />
                    
                    <button
                      onClick={() => handlePlayVideo(podcast.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer touch-manipulation"
                      aria-label={`Play ${podcast.title}`}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <svg
                          width="24"
                          height="24"
                          className="sm:w-7 sm:h-7 md:w-8 md:h-8 ml-1"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 8L24 16L10 24V8Z"
                            fill="#7bb302"
                          />
                        </svg>
                      </div>
                    </button>

                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/80 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-md">
                      <span className="[font-family:'Geist',Helvetica] font-medium text-white text-[10px] sm:text-xs">
                        45:30
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <h3 className="[font-family:'Geist',Helvetica] font-semibold text-neutral-950 text-sm sm:text-base tracking-[-0.32px] leading-[1.4] line-clamp-2 group-hover:text-[#7bb302] transition-colors duration-300">
                  {podcast.title}
                </h3>

                <p className="[font-family:'Geist',Helvetica] font-normal text-[#717182] text-xs sm:text-sm tracking-[0] leading-[1.4]">
                  {podcast.edition}
                </p>

                <time className="[font-family:'Geist',Helvetica] font-normal text-[#717182] text-[10px] sm:text-xs tracking-[0] leading-[1.5]">
                  {podcast.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        <div
          className="flex w-full h-2 items-start justify-center gap-1.5 sm:gap-2 mt-8 md:mt-10 lg:mt-12"
          role="tablist"
          aria-label="Podcast carousel pagination"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`relative h-1.5 sm:h-2 rounded cursor-pointer transition-all duration-300 hover:scale-125 touch-manipulation ${
                index === activeSlide ? "bg-[#7bb302] w-6 sm:w-8" : "bg-neutral-90 w-1.5 sm:w-2"
              }`}
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

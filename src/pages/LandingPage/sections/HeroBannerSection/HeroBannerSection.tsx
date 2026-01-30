import { useState, useEffect, useRef } from "react";

interface VideoSlide {
  id: number;
  thumbnail: string;
  title: string;
  edition: string;
  videoUrl?: string;
}

export const HeroBannerSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoSlides: VideoSlide[] = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
      title: "Episode 1: Leadership in the Digital Age",
      edition: "Dubai",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
      title: "Episode 2: Building Resilient Teams",
      edition: "Singapore",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
      title: "Episode 3: Innovation and Creativity",
      edition: "Dubai",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
      title: "Episode 4: Future of Work",
      edition: "Singapore",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
  ];

  useEffect(() => {
    // Only auto-advance if not playing video
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [videoSlides.length, isPlaying]);

  // Reset playing state when slide changes
  useEffect(() => {
    setIsPlaying(false);
  }, [currentSlide]);

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
  };

  const goToSlide = (index: number) => {
    setIsPlaying(false);
    setCurrentSlide(index);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full max-w-[1440px] min-h-[500px] md:min-h-[800px] lg:min-h-[1050px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] pt-0 pb-0 md:pb-6 lg:pb-12 mx-auto overflow-hidden">

      {/* Mobile Text/Hero Section - Figma Design */}
      <section className="flex flex-col justify-center items-start absolute top-0 right-0 w-full max-w-[360px] h-[135px] bg-white block md:hidden md:static md:left-0 mr-4 mt-2 mb-0 pointer-events-none z-10">
        {/* Prasperant Logo */}
        <img
          className="absolute top-[24px] left-4 w-[135px] h-[34px] aspect-[3.98] pointer-events-none"
          alt="Prasperant Logo"
          src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
        />

        {/* Main Headline - Part 1 */}
        <h1 className="absolute top-3 left-[185px] w-[165px] [font-family:'Geist',Helvetica] font-medium text-[#232323] text-[21px] tracking-[-0.84px] leading-[normal]">
          Conversations that feel
        </h1>

        {/* Decorative Frame Element */}
        <img
          className="absolute top-9 left-[275px] w-[42px] h-5"
          alt=""
          src="https://c.animaapp.com/6IK4krLc/img/frame-1000002831.svg"
        />

        {/* Main Headline - Part 2 (Text) */}
        <h2 className="absolute bottom-2 left-2 w-[335px] [font-family:'Geist',Helvetica] font-medium text-[#7cb403] text-[52px] tracking-[-2.08px] leading-[normal] text-center">
          ideas that stay
        </h2>
      </section>

      {/* Desktop Logo - Hidden on Mobile (visible from md+) */}
      <div className="hidden md:inline-flex items-end gap-4 absolute top-[110px] left-[60px] z-10">
        <div className="relative w-[372px] h-[108px] bg-white rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-contain"
            alt="Logo prasperant"
            src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
          />
        </div>
      </div>

      {/* Desktop Heading 1 - Hidden on Mobile (visible from md+) */}
      <h2 className="hidden md:block absolute top-[30px] left-[35%] xl:left-[506px] w-auto [font-family:'Geist',Helvetica] font-medium text-[#232323] text-4xl xl:text-[52px] tracking-[-1px] lg:tracking-[-2.08px] leading-normal z-10">
        Conversations that feel
      </h2>

      {/* Desktop Decorative Icon - Hidden on Mobile (visible from xl+) */}
      <button
        onClick={() => {
          const speakersSection = document.getElementById('speakers');
          if (speakersSection) {
            speakersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="hidden xl:block absolute top-[20px] left-[1055px] w-[120px] xl:w-[152px] h-auto cursor-pointer hover:scale-110 transition-transform duration-300 bg-transparent border-none p-0"
        aria-label="Go to speakers section"
        type="button"
      >
        <img
          className="w-full h-full"
          alt=""
          src="https://c.animaapp.com/6IK4krLc/img/frame-1000002831.svg"
        />
      </button>

      {/* Desktop Main Heading - Hidden on Mobile (visible from md+) */}
      <h1 className="hidden md:block absolute top-[100px] left-[35%] xl:left-[496px] w-auto max-w-[919px] [font-family:'Geist',Helvetica] font-medium text-[#7bb302] text-7xl xl:text-[120px] tracking-[-3px] lg:tracking-[-5.76px] leading-[normal] z-10">
        ideas that stay
      </h1>

      {/* Mobile Video Player Section - Figma Design (visible only on mobile, below md) */}
      <section className="block md:hidden flex flex-col flex-shrink-0 self-stretch w-full max-w-[397px] h-auto aspect-[351/175] items-start justify-around absolute md:static top-[140px] left-[45%] transform -translate-x-1/2 md:left-0 md:top-auto md:transform-none bg-[#00000033] rounded-[7.03px] overflow-hidden mx-4 md:mx-0 mt-0 md:mt-8 z-30">
        {/* Video Thumbnail */}
        <img
          className="relative self-stretch w-full aspect-[2.01] object-cover"
          alt="Video preview"
          src={videoSlides[currentSlide]?.thumbnail}
        />

        {/* Stay Tuned Badge - Mobile Only */}
        <div className="inline-flex items-center justify-center gap-[2.93px] px-[5.86px] py-[2.93px] absolute top-[11px] left-3.5 bg-[#ed2939] rounded-[11.72px] z-20">
          <img
            className="relative w-[7.03px] h-[7.03px]"
            alt=""
            src="https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg"
          />
          <span className="relative w-fit mt-[-0.29px] [font-family:'Geist',Helvetica] font-semibold text-basewhite text-[5.9px] tracking-[-0.23px] leading-[normal]">
            Stay Tuned
          </span>
        </div>

        {/* Play Button - Mobile Only */}
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 w-[39px] h-[39px] -translate-x-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md border border-[#e5e5e5]"
            onClick={handlePlayVideo}
            aria-label="Play video"
            type="button"
          >
            <svg className="w-6 h-6 text-[#232323]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="white" />
              <polygon points="10,8 16,12 10,16" fill="#232323" />
            </svg>
          </button>
        )}

        {/* Video Element - Mobile Only */}
        {isPlaying && (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-40"
            src={videoSlides[currentSlide]?.videoUrl}
            controls
            autoPlay
            onEnded={handleVideoEnded}
            controlsList="nodownload"
          />
        )}

        {/* Navigation Arrows - Mobile Only */}
        {!isPlaying && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-2 w-10 h-10 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-40 shadow-md border border-[#e5e5e5]"
              aria-label="Previous video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 w-10 h-10 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-40 shadow-md border border-[#e5e5e5]"
              aria-label="Next video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}

        {/* Pagination Indicators - Mobile Only */}
        {!isPlaying && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-40">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all cursor-pointer touch-manipulation ${index === currentSlide
                  ? "bg-white w-4 h-1.5"
                  : "bg-white/50 hover:bg-white/75 w-2 h-1.5"
                }`}
                aria-label={`Go to video ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </section>

      {/* Desktop Video Container - Fully Responsive (hidden on mobile, visible from md+) */}
      <div className="hidden md:block relative lg:absolute top-auto lg:top-[280px] left-0 lg:left-[50%] lg:transform lg:-translate-x-1/2 w-full max-w-[calc(100%-2rem)] lg:max-w-[1320px] mx-auto mt-8 lg:mt-0">
        {/* Aspect Ratio Container - 16:9 for mobile, custom for desktop */}
        <div className="relative w-full pb-[56.25%] lg:pb-0 lg:h-[700px] bg-[rgba(0,0,0,0.2)] rounded-[7px] sm:rounded-lg lg:rounded-3xl overflow-hidden will-change-transform">
          {/* Video Slides */}
          <div className="absolute inset-0 w-full h-full">
            {videoSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                {isPlaying && index === currentSlide ? (
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={slide.videoUrl}
                    controls
                    autoPlay
                    onEnded={handleVideoEnded}
                    controlsList="nodownload"
                  />
                ) : (
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    alt={slide.title}
                    src={slide.thumbnail}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Edition Badge - Desktop */}
          <div className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 md:px-5 py-1 sm:py-2 md:py-2.5 absolute top-2 sm:top-3 md:top-4 lg:top-[39px] left-2 sm:left-3 md:left-4 lg:left-[49px] bg-[#ed2939] rounded-[12px] sm:rounded-[40px] z-20">
            <img
              className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              alt=""
              src="https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg"
            />
            <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-[8px] sm:text-xs md:text-sm lg:text-xl tracking-[-0.20px] sm:tracking-[-0.40px] lg:tracking-[-0.80px] leading-[normal] whitespace-nowrap">
              {videoSlides[currentSlide].edition} Edition
            </span>
          </div>

          {/* Play Button - Desktop */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayVideo}
              className="absolute top-[calc(50%-24px)] sm:top-[calc(50%-30px)] md:top-[calc(50%-40px)] lg:top-[calc(50%-63px)] left-[calc(50%-24px)] sm:left-[calc(50%-30px)] md:left-[calc(50%-40px)] lg:left-[calc(50%-66px)] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[134px] lg:h-[134px] bg-[#e5e5e5] hover:bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all z-20 touch-manipulation shadow-md"
              aria-label="Play podcast episode"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#232323] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}

          {/* Navigation Arrows - Responsive */}
          <button
            onClick={handlePrevious}
            className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] left-2 sm:left-3 md:left-4 lg:left-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm touch-manipulation hidden sm:flex"
            aria-label="Previous video"
          >
            <svg
              width="20"
              height="20"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#232323"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] right-2 sm:right-3 md:right-4 lg:right-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm touch-manipulation hidden sm:flex"
            aria-label="Next video"
          >
            <svg
              width="20"
              height="20"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#232323"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slide Indicators - Responsive */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-[30px] left-[50%] transform -translate-x-1/2 flex items-center gap-1 sm:gap-2 md:gap-2 z-20">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all cursor-pointer touch-manipulation ${index === currentSlide
                    ? "bg-white w-4 sm:w-5 md:w-6 lg:w-8 h-1.5 sm:h-2 md:h-2.5 lg:h-3"
                    : "bg-white/50 hover:bg-white/75 w-1 sm:w-2 md:w-2 lg:w-3 h-1 sm:h-1.5 md:h-2 lg:h-2"
                  }`}
                aria-label={`Go to video ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>

          {/* Video Counter - Responsive */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-[30px] right-2 sm:right-3 md:right-4 lg:right-[30px] bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full z-20 hidden sm:block">
            <span className="[font-family:'Geist',Helvetica] font-medium text-white text-[10px] sm:text-xs md:text-sm">
              {currentSlide + 1} / {videoSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

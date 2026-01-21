import { useState, useEffect, useRef } from "react";

interface VideoSlide {
  id: number;
  thumbnail: string;
  title: string;
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
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
      title: "Episode 2: Building Resilient Teams",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
      title: "Episode 3: Innovation and Creativity",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
      title: "Episode 4: Future of Work",
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
    <section className="relative w-full max-w-[1440px] min-h-[600px] md:min-h-[800px] lg:h-[1137px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] py-8 md:py-12 lg:py-0 mx-auto">

      {/* Mobile Hero Text Container - Innovative Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-4 mb-8 relative z-10">
        {/* Logo - Mobile Only - Floating at Top */}
        <div className="relative w-[200px] sm:w-[240px] h-[60px] sm:h-[72px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg animate-fade-in">
          <img
            className="absolute top-0 left-0 w-full h-full object-contain p-2"
            alt="Logo prasperant"
            src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
          />
        </div>

        {/* Heading 1 - Mobile - Stacked Creatively */}
        <div className="flex flex-col items-center gap-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="w-full text-center [font-family:'Geist',Helvetica] font-medium text-[#232323] text-lg sm:text-xl tracking-[-0.6px] leading-tight">
            Conversations that feel
          </h2>
          
          {/* Decorative Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#7bb302] to-[#ed2939] rounded-full"></div>
        </div>

        {/* Main Heading - Mobile - Bold Statement */}
        <h1 className="w-full text-center [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-4xl sm:text-5xl tracking-[-2px] leading-[1.1] animate-fade-up px-2" style={{ animationDelay: '0.4s' }}>
          ideas that
          <br />
          <span className="text-[#ed2939]">stay</span>
        </h1>
      </div>

      {/* Desktop Logo - Hidden on Mobile */}
      <div className="hidden lg:inline-flex items-end gap-4 absolute top-[159px] left-[60px] z-10">
        <div className="relative w-[280px] xl:w-[372px] h-[81px] xl:h-[108px] bg-white rounded-xl overflow-hidden rotate-180">
          <img
            className="absolute top-0 left-0 w-full h-auto -rotate-180 object-cover"
            alt="Logo prasperant"
            src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
          />
        </div>
      </div>

      {/* Desktop Heading 1 - Hidden on Mobile */}
      <h2 className="hidden lg:block absolute top-[68px] left-[35%] xl:left-[506px] w-auto [font-family:'Geist',Helvetica] font-medium text-[#232323] text-4xl xl:text-[52px] tracking-[-1px] lg:tracking-[-2.08px] leading-normal z-10">
        Conversations that feel
      </h2>

      {/* Desktop Decorative Icon - Hidden on Mobile */}
      <button
        onClick={() => {
          const speakersSection = document.getElementById('speakers');
          if (speakersSection) {
            speakersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="hidden xl:block absolute top-[66px] left-[1055px] w-[120px] xl:w-[152px] h-auto cursor-pointer hover:scale-110 transition-transform duration-300 bg-transparent border-none p-0"
        aria-label="Go to speakers section"
        type="button"
      >
        <img
          className="w-full h-full"
          alt=""
          src="https://c.animaapp.com/6IK4krLc/img/frame-1000002831.svg"
        />
      </button>

      {/* Desktop Main Heading - Hidden on Mobile */}
      <h1 className="hidden lg:block absolute top-[120px] left-[35%] xl:left-[496px] w-auto max-w-[919px] [font-family:'Geist',Helvetica] font-medium text-[#7bb302] text-7xl xl:text-[144px] tracking-[-3px] lg:tracking-[-5.76px] leading-[normal] z-10">
        ideas that stay
      </h1>

      {/* Video Container - Fully Responsive with Aspect Ratio */}
      <div className="relative lg:absolute top-auto lg:top-[355px] left-0 lg:left-[50%] lg:transform lg:-translate-x-1/2 w-full max-w-[calc(100%-2rem)] lg:max-w-[1320px] mx-auto mt-8 lg:mt-0">
        {/* Aspect Ratio Container - 16:9 for mobile, custom for desktop */}
        <div className="relative w-full pb-[56.25%] lg:pb-0 lg:h-[700px] bg-[#00000033] rounded-2xl lg:rounded-3xl overflow-hidden">
          {/* Video Slides */}
          <div className="absolute inset-0 w-full h-full">
            {videoSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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

          {/* Edition Badge - Responsive */}
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 absolute top-3 sm:top-4 md:top-6 lg:top-[39px] left-3 sm:left-4 md:left-6 lg:left-[49px] bg-[#ed2939] rounded-[40px] z-20">
            <img
              className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt=""
              src="https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg"
            />
            <span className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-xs sm:text-sm md:text-base lg:text-xl tracking-[-0.40px] lg:tracking-[-0.80px] leading-[normal]">
              Singapore Edition
            </span>
          </div>

          {/* Play Button - Responsive - Only show when not playing */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayVideo}
              className="absolute top-[calc(50%-30px)] sm:top-[calc(50%-40px)] md:top-[calc(50%-50px)] lg:top-[calc(50%-63px)] left-[calc(50%-30px)] sm:left-[calc(50%-40px)] md:left-[calc(50%-50px)] lg:left-[calc(50%-66px)] w-[60px] h-[60px] sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[134px] lg:h-[134px] cursor-pointer hover:scale-110 transition-transform z-20 touch-manipulation"
              aria-label="Play podcast episode"
            >
              <img
                className="w-full h-full"
                alt=""
                src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-play.svg"
              />
            </button>
          )}

          {/* Navigation Arrows - Responsive */}
          <button
            onClick={handlePrevious}
            className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] left-2 sm:left-3 md:left-4 lg:left-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm touch-manipulation"
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
            className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] right-2 sm:right-3 md:right-4 lg:right-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm touch-manipulation"
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
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-[30px] left-[50%] transform -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 md:gap-3 z-20">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full transition-all cursor-pointer touch-manipulation ${
                  index === currentSlide
                    ? "bg-white w-5 sm:w-6 md:w-7 lg:w-8"
                    : "bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 md:w-2.5 lg:w-3"
                }`}
                aria-label={`Go to video ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>

          {/* Video Counter - Responsive */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-[30px] right-3 sm:right-4 md:right-6 lg:right-[30px] bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full z-20">
            <span className="[font-family:'Geist',Helvetica] font-medium text-white text-[10px] sm:text-xs md:text-sm">
              {currentSlide + 1} / {videoSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

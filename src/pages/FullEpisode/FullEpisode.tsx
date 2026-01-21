import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { GlobalHeader } from "../../components/GlobalHeader";
import { ReelsSection } from "../../components/ReelsSection";
import { SpeakersProfileSection } from "../LandingPage/sections/SpeakersProfileSection";
import { KeyQuestionsSection } from "../../components/KeyQuestionsSection";
import { EpisodeDetailsSection } from "../LandingPage/sections/EpisodeDetailsSection";
import { AboutSection } from "../../components/AboutSection";
import { SubmitFormSection } from "../../components/SubmitFormSection";
import { ContactFormSection } from "../LandingPage/sections/ContactFormSection";

interface VideoSlide {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl?: string;
}

export const FullEpisode = (): JSX.Element => {
  const { episodeId } = useParams();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Determine edition from location state or default to Dubai
  const edition = location.state?.edition || "Dubai";
  const isDubai = edition === "Dubai";

  const videoSlides: VideoSlide[] = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
      title: `Episode 1: ${isDubai ? "Innovation in Dubai" : "Leadership in Singapore"}`,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
      title: `Episode 2: ${isDubai ? "Business Excellence" : "Building Resilient Teams"}`,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
      title: `Episode 3: ${isDubai ? "Future Vision" : "Innovation and Creativity"}`,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
      title: `Episode 4: ${isDubai ? "Leadership Insights" : "Future of Work"}`,
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
    setCurrentSlide(
      (prev) => (prev - 1 + videoSlides.length) % videoSlides.length
    );
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
    <div className="flex flex-col items-center relative bg-white min-h-screen w-full overflow-x-hidden">
      <GlobalHeader />

      {/* Hero Section with Video Carousel - RESPONSIVE */}
      <section className="relative w-full max-w-[1440px] min-h-[600px] md:min-h-[800px] lg:h-[1200px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] py-8 md:py-12 lg:py-20 mx-auto">
        
        {/* Logo - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:inline-flex items-end gap-4 absolute top-[159px] left-[60px]">
          <div className="relative w-[280px] xl:w-[372px] h-[81px] xl:h-[108px] bg-white rounded-xl overflow-hidden rotate-180">
            <img
              className="absolute top-0 left-0 w-full h-auto -rotate-180 object-cover"
              alt="Logo prasperant"
              src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
            />
          </div>
        </div>

        {/* Heading 1 - Responsive */}
        <h2 className="relative lg:absolute top-0 lg:top-[68px] left-0 lg:left-[35%] xl:left-[506px] w-full lg:w-auto text-center lg:text-left [font-family:'Geist',Helvetica] font-medium text-[#232323] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-2.08px] leading-tight lg:leading-[normal] mb-2 lg:mb-0 px-4 lg:px-0">
          Conversations that feel
        </h2>

        {/* Decorative Icon - Hidden on mobile - Clickable to scroll to speakers */}
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

        {/* Main Heading - Responsive */}
        <h1
          className={`relative lg:absolute top-4 lg:top-[120px] left-0 lg:left-[35%] xl:left-[496px] w-full lg:w-auto max-w-full lg:max-w-[919px] text-center lg:text-left [font-family:'Geist',Helvetica] font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[144px] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-5.76px] leading-tight lg:leading-[normal] mb-6 lg:mb-0 px-4 lg:px-0 ${
            isDubai ? "text-[#ed2939]" : "text-[#7bb302]"
          }`}
        >
          ideas that stay
        </h1>

        {/* Video Container - Fully Responsive */}
        <div className="relative lg:absolute top-auto lg:top-[355px] left-0 lg:left-[50%] lg:transform lg:-translate-x-1/2 w-full max-w-[calc(100%-2rem)] lg:max-w-[1320px] mx-auto mt-8 lg:mt-0">
          {/* Aspect Ratio Container - 16:9 */}
          <div className="relative w-full pb-[56.25%] bg-[#00000033] rounded-2xl lg:rounded-3xl overflow-hidden">
            {/* Video Slides */}
            <div className="absolute inset-0 w-full h-full">
              {videoSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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
                {edition} Edition
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

      {/* Speakers Profile Section */}
      <SpeakersProfileSection />

      {/* Key Questions Section */}
      <KeyQuestionsSection />

      {/* Reels Section */}
      <ReelsSection />

      {/* Episode Details Section */}
      <EpisodeDetailsSection />

      {/* About Section - The Three Chapters */}
      <AboutSection />

      {/* Submit Form Section */}
      <SubmitFormSection />

      {/* About Us Section */}
      <ContactFormSection />

      {/* Footer - Responsive */}
      <footer className="flex w-full max-w-[1440px] min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-4 md:py-0 bg-white border-t border-neutral-200 mx-auto">
        <a
          href="#terms"
          className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:underline touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 rounded"
        >
          Terms & Conditions
        </a>
        <div className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap">
          © 2025 All rights reserved.
        </div>
        <a
          href="#privacy"
          className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:underline touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 rounded"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

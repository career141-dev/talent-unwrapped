import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { EpisodeLayout } from "../../layouts";
import { ReelsSection, ContactUsSection } from "../../components";
import { KeyQuestionsSection } from "./Sections/KeyQuestionsSection";
import {
  SpeakersProfileSection,
  EpisodeDetailsSection,
  TalentIntroductionSection
} from "../LandingPage/Sections";
import { SubmitFormSection } from "../../components";
import { getVideoSlidesByEdition } from "../../data";

/**
 * Full Episode Page
 * Displays full episode details with video player, speakers, and related sections
 * Uses EpisodeLayout for consistent structure without repeating header/footer logic
 * Now uses unified ContactUsSection across all pages
 */
export const FullEpisode = (): JSX.Element => {
  useParams();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Determine edition from location state or default to Dubai
  const edition = location.state?.edition || "Dubai";
  const editionKey = edition.toLowerCase() as "dubai" | "singapore";
  const videoSlides = getVideoSlidesByEdition(editionKey);

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

  // Stop video when section leaves viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsPlaying(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  const content = (
    <div
      className="flex flex-col items-center relative w-full"
      data-model-id="905:6609"
    >

      {/* Hero Section with Video Carousel - RESPONSIVE */}
      <section ref={sectionRef} className="relative w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16">

        {/* Mobile Video Player - Matching Landing Page Design (visible only on mobile) */}
        <div className="block md:hidden relative w-full">
          <div 
            className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden mx-auto"
            style={{
              height: 'clamp(200px, 52vw, 280px)',
            }}
          >
            {/* Video Slides */}
            <div className="absolute inset-0">
              {videoSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {isPlaying && index === currentSlide ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src={slide.videoUrl}
                      controls
                      autoPlay
                      onEnded={handleVideoEnded}
                      controlsList="nodownload"
                      playsInline
                    />
                  ) : (
                    <img
                      className="w-full h-full object-cover"
                      alt={slide.title}
                      src={slide.thumbnail}
                    />
                  )}
                </div>
              ))}
            </div>

          {/* Edition Badge - Mobile */}
          <div 
            className="inline-flex items-center justify-center gap-1 absolute bg-[#ed2939] rounded-full z-20"
            style={{
              top: 'clamp(0.5rem, 2vw, 0.875rem)',
              left: 'clamp(0.5rem, 2vw, 0.875rem)',
              padding: 'clamp(0.25rem, 0.8vw, 0.375rem) clamp(0.5rem, 1.8vw, 0.75rem)',
            }}
          >
            <img
              style={{
                width: 'clamp(10px, 2.8vw, 14px)',
                height: 'clamp(10px, 2.8vw, 14px)',
              }}
              alt=""
              src="https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg"
            />
            <span 
              className="font-['Geist',Helvetica] font-semibold text-white whitespace-nowrap leading-none"
              style={{
                fontSize: 'clamp(0.5rem, 2vw, 0.625rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {edition} Edition
            </span>
          </div>

          {/* Play Button - Mobile */}
          {!isPlaying && (
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md border border-[#e5e5e5] transition-all"
              onClick={handlePlayVideo}
              aria-label="Play video"
              type="button"
              style={{
                width: 'clamp(40px, 10vw, 60px)',
                height: 'clamp(40px, 10vw, 60px)',
              }}
            >
              <svg 
                className="text-[#232323]" 
                style={{
                  width: 'clamp(24px, 6vw, 36px)',
                  height: 'clamp(24px, 6vw, 36px)',
                }}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
                <polygon points="10,8 16,12 10,16" fill="#232323" />
              </svg>
            </button>
          )}

          {/* Navigation Arrows - Mobile */}
          {!isPlaying && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-40 shadow-md border border-[#e5e5e5]"
                aria-label="Previous video"
                style={{
                  left: 'clamp(0.5rem, 2vw, 1rem)',
                  width: 'clamp(32px, 8vw, 40px)',
                  height: 'clamp(32px, 8vw, 40px)',
                }}
              >
                <svg 
                  style={{
                    width: 'clamp(16px, 4vw, 20px)',
                    height: 'clamp(16px, 4vw, 20px)',
                  }}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 18L9 12L15 6" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-40 shadow-md border border-[#e5e5e5]"
                aria-label="Next video"
                style={{
                  right: 'clamp(0.5rem, 2vw, 1rem)',
                  width: 'clamp(32px, 8vw, 40px)',
                  height: 'clamp(32px, 8vw, 40px)',
                }}
              >
                <svg 
                  style={{
                    width: 'clamp(16px, 4vw, 20px)',
                    height: 'clamp(16px, 4vw, 20px)',
                  }}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 18L15 12L9 6" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          {/* Pagination Indicators - Mobile */}
          {!isPlaying && (
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-40"
              style={{
                bottom: 'clamp(0.5rem, 2vw, 1rem)',
                gap: 'clamp(0.25rem, 0.8vw, 0.5rem)',
              }}
            >
              {videoSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all cursor-pointer touch-manipulation ${
                    index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
                  }`}
                  style={{
                    width: index === currentSlide ? 'clamp(12px, 3.5vw, 16px)' : 'clamp(6px, 2vw, 8px)',
                    height: 'clamp(6px, 1.5vw, 8px)',
                  }}
                  aria-label={`Go to video ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                />
              ))}
            </div>
          )}
          </div>
        </div>

        {/* Desktop Video Container - Fully Responsive (hidden on mobile) */}
        <div className="hidden md:block w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Aspect Ratio Container - 16:9 */}
          <div className="relative w-full pb-[56.25%] bg-[#00000033] rounded-xl lg:rounded-2xl overflow-hidden">
            {/* Video Slides */}
            <div className="absolute inset-0 w-full h-full">
              {videoSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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
                  className={`h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full transition-all cursor-pointer touch-manipulation ${index === currentSlide
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
    </div>
  );

  return (
    <>
    <EpisodeLayout
      edition={editionKey}
      showChapters={false}
      showContact={false}
      showFooter={false}
    >
      {content}
    </EpisodeLayout>

    {/* Episode Details Section - Outside layout for full-width scrolling text */}
    <EpisodeDetailsSection isEpisodesPage={false} />

    {/* About Section - The Three Chapters */}
    <TalentIntroductionSection />

    {/* Submit Form Section */}
    <SubmitFormSection />

    {/* About Us Section */}
    <ContactUsSection />

    {/* Footer - Responsive */}
    <footer className="flex w-full min-h-[80px] md:h-[100px] flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-4 md:py-0 bg-white border-t border-neutral-200">
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
    </>
  );
};

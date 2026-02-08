import { useState, useEffect, useRef } from "react";
import { LANDING_VIDEO_SLIDES } from "@/data/videoSlideData";
import { LOGOS, ICONS } from "@/assets";
import { HERO_CONTENT } from "@/constants/copy";

/**
 * HeroBannerSection - Exact Figma Design Recreation
 * Desktop: 1440px layout with absolute positioning
 * Mobile/Tablet: Fully responsive with clamp() values
 */
export const HeroBannerSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoSlides = LANDING_VIDEO_SLIDES;

  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [videoSlides.length, isPlaying]);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentSlide]);

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + videoSlides.length) % videoSlides.length,
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

  const scrollToSpeakers = () => {
    const speakersSection = document.getElementById("speakers");
    if (speakersSection) {
      speakersSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative w-full bg-white mx-auto overflow-visible"
      style={{
        maxWidth: "1440px",
        paddingBottom: "clamp(20px, 4vw, 40px)",
      }}
    >
      {/* ========== MOBILE LAYOUT (< 768px) ========== */}
      <div className="md:hidden">
        {/* Mobile Header Section */}
        <div className="relative w-full mb-3 px-0">
          {/* First Line: Logo + Heading + Icon Button */}
          <div className="flex items-center gap-2 mb-2">
            {/* Logo */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-sm flex-shrink-0"
              style={{
                width: "clamp(126px, 46vw, 165px)",
                height: "clamp(32px, 11.8vw, 42px)",
              }}
            >
              <img
                className="w-full h-full object-contain p-1.5"
                alt="Prasperant Logo"
                src={LOGOS.prasperant}
              />
            </div>

            {/* Mobile Heading + Button */}
            <div className="flex-1">
              <h2
                className="font-['Geist',Helvetica] font-medium text-[#232323] inline"
                style={{
                  fontSize: "clamp(1.5rem, 6.8vw, 2.5rem)",
                  lineHeight: "1.25",
                  letterSpacing: "-0.03em",
                }}
              >
                {HERO_CONTENT.FEEL_HEADING}
              </h2>

              {/* Decorative Icon - inline after "feel" */}
              <button
                onClick={scrollToSpeakers}
                className="inline-block cursor-pointer bg-transparent border-none p-0 active:scale-95 transition-transform align-middle"
                aria-label="Go to speakers section"
                type="button"
                style={{
                  width: "clamp(4.5rem, 19.5vw, 8.5rem)",
                  height: "auto",
                  marginLeft: "clamp(4px, 1.5vw, 8px)",
                  verticalAlign: "middle",
                  transform: "translateY(clamp(-6px, -1.2vw, -4px))",
                }}
              >
                <img
                  src={ICONS.heroActionButtonIcon}
                  alt=""
                  className="block w-full h-auto"
                />
              </button>
            </div>
          </div>

          {/* Second Line: Green Heading - Full Width */}
          <div className="w-full -mx-0">
            <h1
              className="font-['Geist',Helvetica] font-medium text-[#7bb302] leading-[0.85] block"
              style={{
                fontSize: "clamp(3rem, 14vw, 4.75rem)",
                letterSpacing: "-0.03em",
                width: "100%",
              }}
            >
              {HERO_CONTENT.STAY_HEADING}
            </h1>
          </div>
        </div>

        {/* Mobile Video Player */}
        <div className="relative w-full">
          <div
            className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden"
            style={{
              height: "clamp(200px, 52vw, 280px)",
            }}
          >
            {/* Video Slides */}
            <div className="absolute inset-0">
              {videoSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
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
                top: "clamp(0.5rem, 2vw, 0.875rem)",
                left: "clamp(0.5rem, 2vw, 0.875rem)",
                padding:
                  "clamp(0.25rem, 0.8vw, 0.375rem) clamp(0.5rem, 1.8vw, 0.75rem)",
              }}
            >
              <img
                style={{
                  width: "clamp(10px, 2.8vw, 14px)",
                  height: "clamp(10px, 2.8vw, 14px)",
                }}
                alt=""
                src={ICONS.playCircle}
              />
              <span
                className="font-['Geist',Helvetica] font-semibold text-white whitespace-nowrap leading-none"
                style={{
                  fontSize: "clamp(0.5rem, 2vw, 0.625rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {videoSlides[currentSlide].edition} {HERO_CONTENT.EDITION_SUFFIX}
              </span>
            </div>

            {/* Play Button - Mobile */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 active:bg-white rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-200 z-20 shadow-lg"
                aria-label="Play podcast episode"
                style={{
                  width: "clamp(48px, 13vw, 60px)",
                  height: "clamp(48px, 13vw, 60px)",
                }}
              >
                <img
                  className="w-full h-full"
                  src={ICONS.playTriangle}
                  alt="Play"
                  style={{
                    width: "clamp(20px, 5.5vw, 26px)",
                    height: "clamp(20px, 5.5vw, 26px)",
                  }}
                />
              </button>
            )}

            {/* Navigation Arrows - Mobile */}
            {!isPlaying && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute top-1/2 -translate-y-1/2 bg-white/95 active:bg-white backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all z-20 shadow-md touch-manipulation"
                  aria-label="Previous video"
                  style={{
                    left: "clamp(0.5rem, 2.2vw, 0.75rem)",
                    width: "clamp(36px, 9.5vw, 44px)",
                    height: "clamp(36px, 9.5vw, 44px)",
                  }}
                >
                  <img
                    className="w-full h-full"
                    src={ICONS.chevronLeft}
                    alt="Back"
                    style={{
                      width: "clamp(16px, 4.2vw, 20px)",
                      height: "clamp(16px, 4.2vw, 20px)",
                    }}
                  />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute top-1/2 -translate-y-1/2 bg-white/95 active:bg-white backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all z-20 shadow-md touch-manipulation"
                  aria-label="Next video"
                  style={{
                    right: "clamp(0.5rem, 2.2vw, 0.75rem)",
                    width: "clamp(36px, 9.5vw, 44px)",
                    height: "clamp(36px, 9.5vw, 44px)",
                  }}
                >
                  <img
                    className="w-full h-full"
                    src={ICONS.chevronRight}
                    alt="Next"
                    style={{
                      width: "clamp(16px, 4.2vw, 20px)",
                      height: "clamp(16px, 4.2vw, 20px)",
                    }}
                  />
                </button>
              </>
            )}

            {/* Pagination - Mobile */}
            {!isPlaying && (
              <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center z-20"
                style={{
                  bottom: "clamp(0.5rem, 2.2vw, 0.75rem)",
                  gap: "clamp(0.375rem, 1.6vw, 0.5rem)",
                }}
              >
                {videoSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${index === currentSlide
                      ? "bg-white"
                      : "bg-white/50 active:bg-white/75"
                      }`}
                    style={{
                      width:
                        index === currentSlide
                          ? "clamp(16px, 4vw, 20px)"
                          : "clamp(6px, 2vw, 8px)",
                      height: "clamp(5px, 1.5vw, 6px)",
                    }}
                    aria-label={`Go to video ${index + 1}`}
                    aria-current={index === currentSlide ? "true" : "false"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========== TABLET & DESKTOP LAYOUT (>= 768px) ========== */}
      <div
        className="hidden md:flex items-end w-full"
        style={{
          minHeight: "clamp(120px, 15vh, 180px)",
          paddingLeft: "clamp(16px, 2vw, 30px)",
          paddingRight: "clamp(16px, 2vw, 30px)",
          gap: "clamp(20px, 3vw, 40px)",
        }}
      >
        {/* Logo - Far Left */}
        <div
          className="flex-shrink-0 bg-white rounded-xl overflow-hidden"
          style={{
            width: "clamp(280px, 28vw, 420px)",
            height: "clamp(84px, 8.5vw, 126px)",
          }}
        >
          <img
            className="w-full h-full object-contain"
            alt="Prasperant Logo"
            src={LOGOS.prasperant}
          />
        </div>

        {/* Text Content - Center-Left (stacked) */}
        <div className="flex flex-col gap-0 flex-1">
          {/* First line: "Conversations that feel" + Button */}
          <div className="flex items-center gap-3">
            <h2
              className="font-['Geist',Helvetica] font-medium text-[#232323] leading-tight"
              style={{
                fontSize: "clamp(28px, 3.5vw, 60px)",
                letterSpacing: "-0.04em",
              }}
            >
              {HERO_CONTENT.FEEL_HEADING}
            </h2>

            {/* Decorative Icon - Right after text */}
            <button
              onClick={scrollToSpeakers}
              className="flex-shrink-0 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 bg-transparent border-none p-0"
              aria-label="Go to speakers section"
              type="button"
              style={{
                width: "clamp(60px, 7vw, 100px)",
                height: "auto",
              }}
            >
              <img
                className="w-full h-full"
                alt=""
                src={ICONS.heroActionButtonIcon}
              />
            </button>
          </div>

          {/* Second line: "ideas that stay" */}
          <h1
            className="font-['Geist',Helvetica] font-medium text-[#7bb302] leading-[1] whitespace-nowrap"
            style={{
              fontSize: "clamp(62px, 9vw, 160px)",
              letterSpacing: "-0.04em",
            }}
          >
            {HERO_CONTENT.STAY_HEADING}
          </h1>
        </div>
      </div>

      {/* Desktop Video Player - Positioned Below Header */}
      <div
        className="hidden md:block w-full"
        style={{ marginTop: "clamp(40px, 6vw, 80px)" }}
      >
        <div
          className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-xl lg:rounded-3xl overflow-hidden"
          style={{
            height: "clamp(450px, 42vw, 700px)",
            maxHeight: "80vh",
          }}
        >
          {/* Video Slides */}
          <div className="absolute inset-0 w-full h-full">
            {videoSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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

          {/* Edition Badge - Desktop */}
          <div
            className="inline-flex items-center justify-center gap-2 px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 absolute bg-[#ed2939] rounded-full z-20"
            style={{
              top: "clamp(1rem, 2vw, 2.5rem)",
              left: "clamp(1rem, 2vw, 3rem)",
            }}
          >
            <img
              className="flex-shrink-0"
              style={{
                width: "clamp(16px, 1.8vw, 24px)",
                height: "clamp(16px, 1.8vw, 24px)",
              }}
              alt=""
              src={ICONS.playCircle}
            />
            <span
              className="font-['Geist',Helvetica] font-semibold text-white whitespace-nowrap leading-none"
              style={{
                fontSize: "clamp(0.75rem, 1.1vw, 1.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {videoSlides[currentSlide].edition} {HERO_CONTENT.EDITION_SUFFIX}
            </span>
          </div>

          {/* Play Button - Desktop */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayVideo}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20 shadow-xl"
              aria-label="Play podcast episode"
              style={{
                width: "clamp(80px, 9vw, 134px)",
                height: "clamp(80px, 9vw, 134px)",
              }}
            >
              <img
                className="w-full h-full"
                src={ICONS.playTriangle}
                alt="Play"
                style={{
                  width: "clamp(32px, 3.5vw, 48px)",
                  height: "clamp(32px, 3.5vw, 48px)",
                }}
              />
            </button>
          )}

          {/* Navigation Arrows - Desktop */}
          {!isPlaying && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 z-20 shadow-lg"
                aria-label="Previous video"
                style={{
                  left: "clamp(1rem, 2vw, 1.875rem)",
                  width: "clamp(50px, 4.5vw, 60px)",
                  height: "clamp(50px, 4.5vw, 60px)",
                }}
              >
                <img
                  className="w-full h-full"
                  src={ICONS.chevronLeft}
                  alt="Back"
                  style={{
                    width: "clamp(20px, 2.2vw, 28px)",
                    height: "clamp(20px, 2.2vw, 28px)",
                  }}
                />
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 z-20 shadow-lg"
                aria-label="Next video"
                style={{
                  right: "clamp(1rem, 2vw, 1.875rem)",
                  width: "clamp(50px, 4.5vw, 60px)",
                  height: "clamp(50px, 4.5vw, 60px)",
                }}
              >
                <img
                  className="w-full h-full"
                  src={ICONS.chevronRight}
                  alt="Next"
                  style={{
                    width: "clamp(20px, 2.2vw, 28px)",
                    height: "clamp(20px, 2.2vw, 28px)",
                  }}
                />
              </button>
            </>
          )}

          {/* Pagination - Desktop */}
          {!isPlaying && (
            <div
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 z-20"
              style={{
                bottom: "clamp(1rem, 2vw, 1.875rem)",
              }}
            >
              {videoSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                    }`}
                  style={{
                    width:
                      index === currentSlide
                        ? "clamp(24px, 2.5vw, 32px)"
                        : "clamp(10px, 1.2vw, 12px)",
                    height: "clamp(8px, 0.9vw, 12px)",
                  }}
                  aria-label={`Go to video ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                />
              ))}
            </div>
          )}

          {/* Video Counter - Desktop */}
          <div
            className="absolute bg-black/60 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full z-20"
            style={{
              bottom: "clamp(1rem, 2vw, 1.875rem)",
              right: "clamp(1rem, 2vw, 1.875rem)",
            }}
          >
            <span
              className="font-['Geist',Helvetica] font-medium text-white"
              style={{
                fontSize: "clamp(0.625rem, 0.9vw, 0.875rem)",
              }}
            >
              {currentSlide + 1} / {videoSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

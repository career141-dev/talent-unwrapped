import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { EpisodeLayout } from "../../layouts";
import { ReelsSection, ContactUsSection } from "../../components";
import { KeyQuestionsSection } from "./Sections/KeyQuestionsSection";
import {
  SpeakersProfileSection,
  EpisodeDetailsSection,
  TalentIntroductionSection,
} from "../LandingPage/Sections";
import { SubmitFormSection } from "../../components";
import { getVideoSlidesByEdition } from "@/data";
import {
  PlayCircleFilledIcon,
  PlayIcon,
} from "@/components/Common/Icons";
import { HERO_CONTENT, FOOTER_LINKS } from "@/constants/copy";
import { EXTERNAL_LINKS } from "@/constants/links";

/**
 * Full Episode Page
 * Displays full episode details with video player, speakers, and related sections
 * Uses EpisodeLayout for consistent structure without repeating header/footer logic
 * Now uses unified ContactUsSection across all pages
 */
export const FullEpisode = (): JSX.Element => {
  useParams();
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Determine edition from location state or default to Dubai
  const edition = location.state?.edition || "Dubai";
  const editionKey = edition.toLowerCase() as "dubai" | "singapore";
  const videoSlides = getVideoSlidesByEdition(editionKey);

  // Get the single video for this edition
  const currentVideo = videoSlides[0];

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
      { threshold: 0 },
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
      <section
        ref={sectionRef}
        className="relative w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16"
      >
        {/* Mobile Video Player - Single Video (visible only on mobile) */}
        <div className="block md:hidden relative w-full">
          <div
            className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden mx-auto"
            style={{
              height: "clamp(200px, 52vw, 280px)",
            }}
          >
            {/* Single Video */}
            <div className="absolute inset-0">
              {isPlaying ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={currentVideo.videoUrl}
                  controls
                  autoPlay
                  onEnded={handleVideoEnded}
                  controlsList="nodownload"
                  playsInline
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  alt={currentVideo.title}
                  src={currentVideo.thumbnail}
                />
              )}
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
              <PlayCircleFilledIcon
                style={{
                  width: "clamp(10px, 2.8vw, 14px)",
                  height: "clamp(10px, 2.8vw, 14px)",
                }}
                fill="white"
              />
              <span
                className="font-['Geist',Helvetica] font-semibold text-white whitespace-nowrap leading-none"
                style={{
                  fontSize: "clamp(0.5rem, 2vw, 0.625rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {edition} {HERO_CONTENT.EDITION_SUFFIX}
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
                  width: "clamp(40px, 10vw, 60px)",
                  height: "clamp(40px, 10vw, 60px)",
                }}
              >
                <PlayIcon
                  fill="#232323"
                  stroke="none"
                  style={{
                    width: "clamp(24px, 6vw, 36px)",
                    height: "clamp(24px, 6vw, 36px)",
                  }}
                />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Video Container - Single Video (hidden on mobile) */}
        <div className="hidden md:block w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Aspect Ratio Container - 16:9 */}
          <div className="relative w-full pb-[56.25%] bg-[#00000033] rounded-xl lg:rounded-2xl overflow-hidden">
            {/* Single Video */}
            <div className="absolute inset-0 w-full h-full">
              {isPlaying ? (
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={currentVideo.videoUrl}
                  controls
                  autoPlay
                  onEnded={handleVideoEnded}
                  controlsList="nodownload"
                />
              ) : (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt={currentVideo.title}
                  src={currentVideo.thumbnail}
                />
              )}
            </div>

            {/* Edition Badge - Responsive */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 absolute top-3 sm:top-4 md:top-6 lg:top-[39px] left-3 sm:left-4 md:left-6 lg:left-[49px] bg-[#ed2939] rounded-[40px] z-20">
              <PlayCircleFilledIcon
                className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                fill="white"
              />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-xs sm:text-sm md:text-base lg:text-xl tracking-[-0.40px] lg:tracking-[-0.80px] leading-[normal]">
                {edition} {HERO_CONTENT.EDITION_SUFFIX}
              </span>
            </div>

            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 z-20 shadow-xl"
                aria-label="Play podcast episode"
                style={{
                  width: "clamp(60px, 7vw, 90px)",
                  height: "clamp(60px, 7vw, 90px)",
                }}
              >
                <PlayIcon
                  fill="#232323"
                  stroke="none"
                  style={{
                    width: "clamp(24px, 2.5vw, 36px)",
                    height: "clamp(24px, 2.5vw, 36px)",
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Speakers Profile Section */}
      <SpeakersProfileSection edition={edition as "Dubai" | "Singapore"} />

      {/* Key Questions Section */}
      <KeyQuestionsSection edition={editionKey} />

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
          href={EXTERNAL_LINKS.CAREER141}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:underline touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 rounded"
        >
          {FOOTER_LINKS.TERMS}
        </a>
        <div className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap">
          {FOOTER_LINKS.COPYRIGHT}
        </div>
        <a
          href={EXTERNAL_LINKS.CAREER141}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#222223] text-xs sm:text-sm md:text-base tracking-[-0.32px] leading-[20.9px] text-center sm:text-left whitespace-nowrap hover:underline touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 rounded"
        >
          {FOOTER_LINKS.PRIVACY}
        </a>
      </footer>
    </>
  );
};

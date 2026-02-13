import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import {
  ReelsSection,
  ContactUsSection,
  GlobalHeader,
  FooterSection,
  SubmitFormSection,
} from "../../components";
import { KeyQuestionsSection } from "./Sections/KeyQuestionsSection";
import {
  SpeakersProfileSection,
  EpisodeDetailsSection,
  TalentIntroductionSection,
} from "../LandingPage/Sections";
import {
  PlayCircleFilledIcon,
  PlayIcon,
} from "@/components/Common/Icons";
import { HERO_CONTENT } from "@/constants/copy";
import { getVideoSlidesByEdition, getEpisodeById, getEpisodesByEdition } from "@/data";
import { EpisodeSpeaker, Speaker, Episode } from "@/types";

/**
 * Helper to transform YouTube URLs into embed URLs
 */
const getEmbedUrl = (url: string, autoplay: boolean = true) => {
  try {
    const autoplayParam = autoplay ? "autoplay=1" : "autoplay=0";
    if (url.includes("youtube.com/embed")) return `${url}${url.includes("?") ? "&" : "?"}${autoplayParam}& rel=0`;
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}?${autoplayParam}&rel=0` : url;
    }
    if (url.includes("youtube.com/watch")) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}?${autoplayParam}&rel=0` : url;
    }
    return url;
  } catch (e) {
    return url;
  }
};

/**
 * Helper to get YouTube thumbnail URL
 */
const getYoutubeThumbnail = (url: string) => {
  try {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      const urlObj = new URL(url);
      videoId = urlObj.searchParams.get("v") || "";
    } else if (url.includes("youtube.com/embed")) {
      videoId = url.split("embed/")[1]?.split("?")[0];
    }
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  } catch (e) {
    return "";
  }
};

/**
 * Full Episode Page
 * Displays full episode details with video player, speakers, and related sections
 * Uses EpisodeLayout for consistent structure without repeating header/footer logic
 * Now uses unified ContactUsSection across all pages
 */
export const FullEpisode = (): JSX.Element => {
  const { episodeId } = useParams<{ episodeId: string }>();
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Get the specific episode data if episodeId is provided
  const episode = episodeId ? getEpisodeById(episodeId) : undefined;

  // Determine edition by checking lists
  let detectedEdition = location.state?.edition;
  if (!detectedEdition && episode) {
    if (getEpisodesByEdition("dubai").some((ep: Episode) => ep.id === episode.id)) detectedEdition = "Dubai";
    else if (getEpisodesByEdition("singapore").some((ep: Episode) => ep.id === episode.id)) detectedEdition = "Singapore";
    else if (getEpisodesByEdition("sri-lanka").some((ep: Episode) => ep.id === episode.id)) detectedEdition = "Sri Lanka";
  }

  const edition = detectedEdition || "Dubai";

  // For backward compatibility and specialized content
  const editionKey = edition.toLowerCase() === "sri lanka" || edition.toLowerCase() === "sri-lanka" || edition.toLowerCase() === "colombo" ? "sri-lanka" : edition.toLowerCase() as "dubai" | "singapore" | "sri-lanka";
  const videoSlides = getVideoSlidesByEdition(editionKey);

  // Use the specific episode's video content if available, otherwise fall back to edition slides
  const currentVideo = {
    id: episode?.id ? Number(episode.id) : videoSlides[0].id,
    title: episode?.title || videoSlides[0].title,
    videoUrl: episode?.videoUrl || videoSlides[0].videoUrl,
    thumbnail: episode?.image || videoSlides[0].thumbnail,
  };

  // Convert episode speakers to Speaker type for the section
  // If episode has no speakers, specificSpeakers will be undefined and the component will fall back to edition speakers
  const specificSpeakers: Speaker[] | undefined = episode?.speakers?.map((s: EpisodeSpeaker, index: number) => ({
    id: index + 100,
    title: s.role || "",
    views: "",
    name: s.name,
    position: s.role || "",
    image: s.avatar,
    edition: edition,
  }));

  // Handle video playback events
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

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

  // Set page title
  useEffect(() => {
    if (episode) {
      document.title = `Talent Unwrapped - ${episode.title}`;
    } else {
      document.title = "Talent Unwrapped - Episode Details";
    }
  }, [episode]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle local video playback via ref
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const content = (
    <div
      className="flex flex-col items-center relative w-full"
      data-model-id="905:6609"
    >
      {/* Hero Section with Video Carousel - RESPONSIVE */}
      <section
        ref={sectionRef}
        className="relative w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16"
      >
        {/* Mobile Video Player - Single Video (visible only on mobile) */}
        <div className="block md:hidden relative w-full">
          <div
            className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden mx-auto"
            style={{
              height: "clamp(240px, 60vw, 350px)",
            }}
          >
            {/* Single Video / Thumbnail */}
            <div className="absolute inset-0 w-full h-full">
              {isPlaying && currentVideo.videoUrl ? (
                currentVideo.videoUrl.includes("youtube") || currentVideo.videoUrl.includes("youtu.be") ? (
                  <iframe
                    className="w-full h-full object-cover"
                    src={getEmbedUrl(currentVideo.videoUrl || "", true)}
                    title={currentVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    scrolling="no"
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={`${currentVideo.videoUrl}#t=0.001`}
                    preload="metadata"
                    playsInline
                    onEnded={handleVideoEnded}
                    controls={true}
                  />
                )
              ) : (
                currentVideo.thumbnail ? (
                  <img
                    className="w-full h-full object-cover"
                    alt={currentVideo.title}
                    src={currentVideo.thumbnail}
                  />
                ) : (
                  currentVideo.videoUrl && (
                    currentVideo.videoUrl.includes("youtube") || currentVideo.videoUrl.includes("youtu.be") ? (
                      <img
                        className="w-full h-full object-cover"
                        alt={currentVideo.title}
                        src={getYoutubeThumbnail(currentVideo.videoUrl)}
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        src={`${currentVideo.videoUrl}#t=0.001`}
                        preload="metadata"
                        playsInline
                        muted
                      />
                    )
                  )
                )
              )}
            </div>

            {/* Edition Badge - Mobile */}
            {!isPlaying && (
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
            )}

            {/* Play Button - Mobile */}
            {!isPlaying && (
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 active:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                onClick={handlePlayVideo}
                aria-label="Play video"
                type="button"
                style={{
                  width: "clamp(48px, 13vw, 60px)",
                  height: "clamp(48px, 13vw, 60px)",
                }}
              >
                <PlayIcon
                  fill="#232323"
                  stroke="none"
                  style={{
                    width: "clamp(20px, 5.5vw, 26px)",
                    height: "clamp(20px, 5.5vw, 26px)",
                  }}
                />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Video Container - Single Video (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="hidden md:block w-full"
        >
          <div
            className="relative w-full bg-[rgba(0,0,0,0.2)] rounded-xl lg:rounded-3xl overflow-hidden"
            style={{
              height: "clamp(550px, 50vw, 800px)",
              maxHeight: "85vh",
            }}
          >
            {/* Single Video / Thumbnail */}
            <div className="absolute inset-0 w-full h-full">
              {isPlaying && currentVideo.videoUrl ? (
                currentVideo.videoUrl.includes("youtube") || currentVideo.videoUrl.includes("youtu.be") ? (
                  <iframe
                    className="w-full h-full object-cover"
                    src={getEmbedUrl(currentVideo.videoUrl || "", true)}
                    title={currentVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    scrolling="no"
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={`${currentVideo.videoUrl}#t=0.001`}
                    preload="metadata"
                    playsInline
                    onEnded={handleVideoEnded}
                    controls={true}
                  />
                )
              ) : (
                currentVideo.thumbnail ? (
                  <img
                    className="w-full h-full object-cover"
                    alt={currentVideo.title}
                    src={currentVideo.thumbnail}
                  />
                ) : (
                  currentVideo.videoUrl && (
                    currentVideo.videoUrl.includes("youtube") || currentVideo.videoUrl.includes("youtu.be") ? (
                      <img
                        className="w-full h-full object-cover"
                        alt={currentVideo.title}
                        src={getYoutubeThumbnail(currentVideo.videoUrl)}
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        src={`${currentVideo.videoUrl}#t=0.001`}
                        preload="metadata"
                        playsInline
                        muted
                      />
                    )
                  )
                )
              )}
            </div>

            {/* Edition Badge - Desktop */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center justify-center gap-2 px-3 md:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 absolute bg-[#ed2939] rounded-full z-20"
                style={{
                  top: "clamp(1rem, 2vw, 2.5rem)",
                  left: "clamp(1rem, 2vw, 3rem)",
                }}
              >
                <PlayCircleFilledIcon
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(16px, 1.8vw, 24px)",
                    height: "clamp(16px, 1.8vw, 24px)",
                  }}
                  fill="white"
                />
                <span
                  className="font-['Geist',Helvetica] font-semibold text-white whitespace-nowrap leading-none"
                  style={{
                    fontSize: "clamp(0.75rem, 1.1vw, 1.25rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {edition} {HERO_CONTENT.EDITION_SUFFIX}
                </span>
              </motion.div>
            )}

            {/* Play Button - Desktop */}
            {!isPlaying && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="button"
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer z-20 shadow-xl"
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
              </motion.button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Speakers Profile Section */}
      <SpeakersProfileSection
        edition={edition as "Dubai" | "Singapore" | "Sri Lanka"}
        specificSpeakers={specificSpeakers}
      />
    </div>
  );

  return (
    <main className="flex flex-col items-center relative w-full bg-white">
      <GlobalHeader />

      {content}

      {/* Key Questions Section */}
      <KeyQuestionsSection edition={editionKey} episodeId={episode?.id} />

      {/* Reels Section */}
      <ReelsSection edition={edition as "Dubai" | "Singapore" | "Sri Lanka"} />

      {/* Episode Details Section - Outside layout for full-width scrolling text */}
      <EpisodeDetailsSection />

      {/* About Section - The Three Chapters */}
      <TalentIntroductionSection />

      {/* Submit Form Section */}
      <SubmitFormSection />

      {/* About Us Section */}
      <ContactUsSection />

      <FooterSection />
    </main>
  );
};

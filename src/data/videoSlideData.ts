import { VideoSlide } from "../types";
import { SAMPLE_VIDEOS, HERO_IMAGES, VIDEO_THUMBNAILS } from "../assets";

// Video slides for Landing Page Hero section
export const LANDING_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: HERO_IMAGES.thumbnail1,
    title: "Episode 1: Leadership in the Digital Age",
    edition: "Singapore",
    videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
  },
  {
    id: 2,
    thumbnail: VIDEO_THUMBNAILS.resilientTeams,
    title: "Episode 2: Building Resilient Teams",
    edition: "Dubai",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
  },
  {
    id: 3,
    thumbnail: VIDEO_THUMBNAILS.innovationCreativity,
    title: "Episode 3: Innovation and Creativity",
    edition: "Singapore",
    videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
  },
  {
    id: 4,
    thumbnail: VIDEO_THUMBNAILS.futureOfWork,
    title: "Episode 4: Future of Work",
    edition: "Dubai",
    videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
  },
];

// Video slides for FullEpisode page
export const DUBAI_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: VIDEO_THUMBNAILS.innovationDubai,
    title: "Episode 1: Innovation in Dubai",
    videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
  },
  {
    id: 2,
    thumbnail: VIDEO_THUMBNAILS.resilientTeams,
    title: "Episode 2: Business Excellence",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
  },
  {
    id: 3,
    thumbnail: VIDEO_THUMBNAILS.innovationCreativity,
    title: "Episode 3: Future Vision",
    videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
  },
  {
    id: 4,
    thumbnail: VIDEO_THUMBNAILS.futureOfWork,
    title: "Episode 4: Leadership Insights",
    videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
  },
];

export const SINGAPORE_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: VIDEO_THUMBNAILS.innovationDubai,
    title: "Episode 1: Leadership in Singapore",
    videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
  },
  {
    id: 2,
    thumbnail: VIDEO_THUMBNAILS.resilientTeams,
    title: "Episode 2: Building Resilient Teams",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
  },
  {
    id: 3,
    thumbnail: VIDEO_THUMBNAILS.innovationCreativity,
    title: "Episode 3: Innovation and Creativity",
    videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
  },
  {
    id: 4,
    thumbnail: VIDEO_THUMBNAILS.futureOfWork,
    title: "Episode 4: Future of Work",
    videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
  },
];

/**
 * Get video slides by edition
 * @param edition - "dubai" or "singapore"
 * @returns Array of video slides for the specified edition
 */
export const getVideoSlidesByEdition = (
  edition: "dubai" | "singapore",
): VideoSlide[] => {
  return edition === "dubai" ? DUBAI_VIDEO_SLIDES : SINGAPORE_VIDEO_SLIDES;
};

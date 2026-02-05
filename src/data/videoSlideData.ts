import { VideoSlide } from "../types";
import { SAMPLE_VIDEOS } from "../assets";

// Video slides for FullEpisode page
export const DUBAI_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
    title: "Episode 1: Innovation in Dubai",
    videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
    title: "Episode 2: Business Excellence",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    title: "Episode 3: Future Vision",
    videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
    title: "Episode 4: Leadership Insights",
    videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
  },
];

export const SINGAPORE_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
    title: "Episode 1: Leadership in Singapore",
    videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
    title: "Episode 2: Building Resilient Teams",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    title: "Episode 3: Innovation and Creativity",
    videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
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
  edition: "dubai" | "singapore"
): VideoSlide[] => {
  return edition === "dubai" ? DUBAI_VIDEO_SLIDES : SINGAPORE_VIDEO_SLIDES;
};

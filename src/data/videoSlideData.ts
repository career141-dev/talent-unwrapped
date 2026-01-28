import { VideoSlide } from "../types";

// Video slides for FullEpisode page
export const DUBAI_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
    title: "Episode 1: Innovation in Dubai",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
    title: "Episode 2: Business Excellence",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    title: "Episode 3: Future Vision",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
    title: "Episode 4: Leadership Insights",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];

export const SINGAPORE_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
    title: "Episode 1: Leadership in Singapore",
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

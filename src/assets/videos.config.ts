/**
 * Centralized Video Assets Configuration
 * All video URLs used across the application
 */

// Sample Videos (Google Storage)
export const SAMPLE_VIDEOS = {
  bigBuckBunny:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephantsDream:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  forBiggerBlazes:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  forBiggerEscapes:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
} as const;

// Episode Videos - Production videos will go here
export const EPISODE_VIDEOS = {
  // Add your production episode videos here
  // episode1: "/videos/episodes/episode-1.mp4",
  // episode2: "/videos/episodes/episode-2.mp4",
} as const;

// Reels Videos - Production reels will go here
export const REELS_VIDEOS = {
  // Add your production reel videos here
  // reel1: "/videos/reels/reel-1.mp4",
  // reel2: "/videos/reels/reel-2.mp4",
} as const;

// Export all videos as a single object
export const VIDEOS = {
  samples: SAMPLE_VIDEOS,
  episodes: EPISODE_VIDEOS,
  reels: REELS_VIDEOS,
} as const;

export default VIDEOS;

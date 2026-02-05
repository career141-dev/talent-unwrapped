/**
 * Centralized Assets Configuration
 * Main export file for all asset configurations
 */

export { IMAGES, DECORATIVE_IMAGES, SPEAKER_IMAGES, EPISODE_IMAGES, VIDEO_THUMBNAILS, KEY_QUESTIONS_IMAGES, LOGOS, ICONS, NAVIGATION_ICONS } from './images.config';
export { VIDEOS, SAMPLE_VIDEOS, EPISODE_VIDEOS, REELS_VIDEOS } from './videos.config';

// Re-export default
import IMAGES from './images.config';
import VIDEOS from './videos.config';

export const ASSETS = {
  images: IMAGES,
  videos: VIDEOS,
} as const;

export default ASSETS;

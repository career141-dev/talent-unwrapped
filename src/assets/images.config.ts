/**
 * Centralized Image Assets Configuration
 * All image URLs used across the application
 */

// Decorative Images
export const DECORATIVE_IMAGES = {
  manInHeadphones: "https://c.animaapp.com/6IK4krLc/img/man-in-headphones-having-interview-2025-10-26-23-44-27-utc-1@2x.png",
  youngBlackMan: "https://c.animaapp.com/6IK4krLc/img/young-black-man-in-headphones-talking-in-microphon-2025-03-13-12@2x.png",
  professionalMicrophone: "https://c.animaapp.com/6IK4krLc/img/professional-microphone-and-studio-equipment-2025-03-08-12-56-45.png",
} as const;

// Speaker Images
export const SPEAKER_IMAGES = {
  speaker1: "https://c.animaapp.com/6IK4krLc/img/frame-4449055-1@2x.png",
  speaker2: "https://c.animaapp.com/6IK4krLc/img/frame-4449056-1@2x.png",
  speaker3: "https://c.animaapp.com/6IK4krLc/img/frame-4449057-1@2x.png",
  speaker4: "https://c.animaapp.com/6IK4krLc/img/frame-4449058-1@2x.png",
} as const;

// Episode Thumbnail Images
export const EPISODE_IMAGES = {
  handsomeElegantMen: "https://c.animaapp.com/6IK4krLc/img/handsome-elegant-men-with-beards-in-chic-attires-s-2024-11-12-02.png",
  professionalBusinessman: "https://c.animaapp.com/6IK4krLc/img/professional-businessman-partner-person-success-te-2025-03-26-02@2x.png",
  recreationArea: "https://c.animaapp.com/6IK4krLc/img/in-recreation-area-sitting-on-yellow-chairs-office-2024-11-27-09@2x.png",
  teamReporters: "https://c.animaapp.com/6IK4krLc/img/team-of-reporters-working-on-a-interview-with-a-gr-2024-10-13-20@2x.png",
  fourPeopleMeeting: "https://c.animaapp.com/6IK4krLc/img/four-people-meeting-in-lounge-area-of-a-corporate-2024-10-19-05-@2x.png",
} as const;

// Video Thumbnails
export const VIDEO_THUMBNAILS = {
  video1: "https://c.animaapp.com/6IK4krLc/img/video@2x.png",
  video2: "https://c.animaapp.com/6IK4krLc/img/video-1@2x.png",
  video3: "https://c.animaapp.com/6IK4krLc/img/video-2@2x.png",
  video4: "https://c.animaapp.com/6IK4krLc/img/video-3@2x.png",
} as const;

// Key Questions Images
export const KEY_QUESTIONS_IMAGES = {
  question1: "https://c.animaapp.com/mknscg4zvttudp/img/1756292060602-1.png",
  question2: "https://c.animaapp.com/mknscg4zvttudp/img/1621657233961-1.png",
  question3: "https://c.animaapp.com/mknscg4zvttudp/img/1545386579437-1.png",
} as const;

// Logo Images
export const LOGOS = {
  prasperant: "https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png",
} as const;

// Icon Images
export const ICONS = {
  arrowRight: "https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png",
  playCircle: "https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg",
  playButton: "https://c.animaapp.com/6IK4krLc/img/vuesax-linear-play.svg",
  videoCircle: "https://c.animaapp.com/6IK4krLc/img/vuesax-bold-video-circle-2.svg",
  videoCircleAlt: "https://c.animaapp.com/mknscg4zvttudp/img/vuesax-bold-video-circle.svg",
  videoCircleAlt2: "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-bold-video-circle.svg",
  videoCircleAlt3: "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-bold-video-circle-1.svg",
  export: "https://c.animaapp.com/6IK4krLc/img/vuesax-linear-export-2.svg",
  exportAlt: "https://c.animaapp.com/mknscg4zvttudp/img/vuesax-linear-export.svg",
  exportAlt2: "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-linear-export.svg",
  frame: "https://c.animaapp.com/6IK4krLc/img/frame-1000002831.svg",
  vector: "https://c.animaapp.com/6IK4krLc/img/vector-4877.svg",
} as const;

// Navigation Icons
export const NAVIGATION_ICONS = {
  back: "https://c.animaapp.com/6IK4krLc/img/back@2x.png",
  next: "https://c.animaapp.com/6IK4krLc/img/next@2x.png",
} as const;

// Export all images as a single object
export const IMAGES = {
  decorative: DECORATIVE_IMAGES,
  speakers: SPEAKER_IMAGES,
  episodes: EPISODE_IMAGES,
  videoThumbnails: VIDEO_THUMBNAILS,
  keyQuestions: KEY_QUESTIONS_IMAGES,
  logos: LOGOS,
  icons: ICONS,
  navigation: NAVIGATION_ICONS,
} as const;

export default IMAGES;

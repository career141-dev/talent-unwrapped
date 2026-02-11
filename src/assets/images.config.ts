/**
 * Centralized Image Assets Configuration
 * All image URLs used across the application
 */

// Decorative Images
export const DECORATIVE_IMAGES = {
  manInHeadphones:
    "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770805222/Frame_1000003696_kdgg5i.png",
  youngBlackMan:
    "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770805222/Frame_1000003561_1_uzsupn.png",
  professionalMicrophone:
    "https://c.animaapp.com/6IK4krLc/img/professional-microphone-and-studio-equipment-2025-03-08-12-56-45.png",
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
  handsomeElegantMen:
    "https://c.animaapp.com/6IK4krLc/img/handsome-elegant-men-with-beards-in-chic-attires-s-2024-11-12-02.png",
  professionalBusinessman:
    "https://c.animaapp.com/6IK4krLc/img/professional-businessman-partner-person-success-te-2025-03-26-02@2x.png",
  recreationArea:
    "https://c.animaapp.com/6IK4krLc/img/in-recreation-area-sitting-on-yellow-chairs-office-2024-11-27-09@2x.png",
  teamReporters:
    "https://c.animaapp.com/6IK4krLc/img/team-of-reporters-working-on-a-interview-with-a-gr-2024-10-13-20@2x.png",
  fourPeopleMeeting:
    "https://c.animaapp.com/6IK4krLc/img/four-people-meeting-in-lounge-area-of-a-corporate-2024-10-19-05-@2x.png",
  leadershipWorkshop:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  innovationSoutheastAsia:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
  sustainableOrganizations:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
} as const;

// Episode Avatars (used in data/episodeData.ts)
export const EPISODE_AVATARS = {
  sarahTan:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  davidLim:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  michelleWong:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  jamesKoh:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  lisaChen:
    "https://images.unsplash.com/photo-1519085360771-9852046be8f9?w=400&h=400&fit=crop",
} as const;

// Video Thumbnails
export const VIDEO_THUMBNAILS = {
  video1: "https://c.animaapp.com/6IK4krLc/img/video@2x.png",
  video2: "https://c.animaapp.com/6IK4krLc/img/video-1@2x.png",
  video3: "https://c.animaapp.com/6IK4krLc/img/video-2@2x.png",
  video4: "https://c.animaapp.com/6IK4krLc/img/video-3@2x.png",
  resilientTeams:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop",
  innovationCreativity:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
  futureOfWork:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop",
  innovationDubai:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop",
} as const;

// Key Questions Images
export const KEY_QUESTIONS_IMAGES = {
  question1: "https://c.animaapp.com/mknscg4zvttudp/img/1756292060602-1.png",
  question2: "https://c.animaapp.com/mknscg4zvttudp/img/1621657233961-1.png",
  question3: "https://c.animaapp.com/mknscg4zvttudp/img/1545386579437-1.png",
} as const;

// Logo Images
export const LOGOS = {
  prasperant: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770609977/Artboard_1_copy_2x_xhwixf.png",
  career141: "https://c.animaapp.com/6IK4krLc/img/artboard-3-1.png",
  contactBanner: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770627360/Artboard_3_1_4_tihw3f.png",
} as const;

// Icon Images - Replaced by Lucide and local SVG components in src/components/Common/Icons.tsx
export const ICONS = {
  // Navigation
  chevronDown: "",
  chevronLeft: "",
  chevronRight: "",

  // Actions
  arrowRight: "",
  arrowLeft: "",
  playCircle: "",
  playButton: "",
  playTriangle: "",
  close: "",
  export: "",
  exportAlt: "",
  exportAlt2: "",

  // Specialized
  videoCircle: "",
  videoCircleAlt: "",
  videoCircleAlt2: "",
  videoCircleAlt3: "",
  videoCircleAlt4: "",
  heroActionButtonIcon: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770616302/Frame_1000002831_2_goe9a9.jpg",

  // Legacy/Misc
  vector: "",
} as const;

// Form Icons - Replaced by local SVG components
export const FORM_ICONS = {
  dynamicForm: "",
  assignmentInd: "",
  shape: "",
} as const;

// Hero Section Images
export const EXPERT_IMAGES = {
  echoWu: "https://c.animaapp.com/mknscg4zvttudp/img/1756292060602-1.png",
  avikGhosh: "https://c.animaapp.com/mknscg4zvttudp/img/1621657233961-1.png",
  ellaSherman: "https://c.animaapp.com/mknscg4zvttudp/img/1545386579437-1.png",
} as const;

export const HERO_IMAGES = {
  artboard: "https://www.figma.com/api/mcp/asset/75cfbe74-897f-4614-9e93-ca874a8a048c",
  thumbnail1: "https://www.figma.com/api/mcp/asset/0a8b37b9-f00c-48b5-88b3-36f461bb95d9",
  businesswoman: "https://www.figma.com/api/mcp/asset/2ee760b3-04b8-4a93-b16f-cbcec3b2a9cb",
  portrait: "https://www.figma.com/api/mcp/asset/bb40f991-4eec-44fe-bfca-d99be432d2f3",
  arrowUp: "https://www.figma.com/api/mcp/asset/eb54e5fb-0d9e-496f-8621-362c26783e53",
} as const;

// Navigation Icons - Replaced by local SVG components
export const NAVIGATION_ICONS = {
  back: "",
  next: "",
} as const;

// Footer Images/Icons - Replaced by local SVG components
export const FOOTER_IMAGES = {
  decorativeFrame: "",
} as const;

export const IMAGES = {
  decorative: DECORATIVE_IMAGES,
  speakers: SPEAKER_IMAGES,
  episodes: EPISODE_IMAGES,
  videoThumbnails: VIDEO_THUMBNAILS,
  keyQuestions: KEY_QUESTIONS_IMAGES,
  logos: LOGOS,
  icons: ICONS,
  navigation: NAVIGATION_ICONS,
  hero: HERO_IMAGES,
  experts: EXPERT_IMAGES,
  form: FORM_ICONS,
  footer: FOOTER_IMAGES,
  avatars: EPISODE_AVATARS,
} as const;

export default IMAGES;

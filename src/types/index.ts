// Shared TypeScript types
export interface Podcast {
  id: number;
  title: string;
  edition: string;
  date: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Speaker {
  id: number;
  title: string;
  views: string;
  name: string;
  position: string;
  image: string;
  linkedinUrl?: string;
  edition?: string;
}

// Episode interface with all possible properties
export interface Episode {
  id: number | string;
  title: string;
  subtitle?: string;
  icon?: string;
  videoIcon?: string;
  exportIcon?: string;
  image?: string;
  category?: string;
  description?: string;
  duration?: string;
  date?: string;
  speakers?: EpisodeSpeaker[];
  featured?: boolean;
  videoUrl?: string;
}

// Speaker interface used in episodes with minimal properties
export interface EpisodeSpeaker {
  name: string;
  role?: string;
  avatar: string;
}

// Video slide interface for full episode pages
export interface VideoSlide {
  id: number;
  thumbnail: string;
  title: string;
  edition?: string;
  videoUrl?: string;
}

// Props for TheThreeChaptersSection component
export interface TheThreeChaptersSectionProps {
  edition?: "dubai" | "singapore";
  hideTopSection?: boolean;
}

// Contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  designation: string;
}

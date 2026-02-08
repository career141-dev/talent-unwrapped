import { Episode, Podcast } from "../types";
import { VIDEO_THUMBNAILS, SAMPLE_VIDEOS, EPISODE_IMAGES, EPISODE_AVATARS } from "../assets";

// Latest Podcasts data for Landing Page
export const LATEST_PODCASTS_DATA: Podcast[][] = [
  // View 1 (Default)
  [
    {
      id: 1,
      title: "Opening Keynote: Future of Innovation",
      edition: "Dubai Edition",
      date: "January 10, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
    },
    {
      id: 2,
      title: "Panel Discussion on Global Trends",
      edition: "Singapore Edition",
      date: "December 15, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: SAMPLE_VIDEOS.elephantsDream,
    },
    {
      id: 3,
      title: "Workshop: Strategic Thinking",
      edition: "London Edition",
      date: "November 22, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
    },
    {
      id: 4,
      title: "Closing Remarks and Reflections",
      edition: "Dubai Edition",
      date: "January 12, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
    },
    {
      id: 9,
      title: "Networking Breakfast Highlights",
      edition: "Dubai Edition",
      date: "January 11, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
    },
    {
      id: 10,
      title: "Breakout Sessions Deep Dive",
      edition: "Singapore Edition",
      date: "December 20, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: SAMPLE_VIDEOS.elephantsDream,
    },
    {
      id: 11,
      title: "Expert Q&A Session",
      edition: "London Edition",
      date: "November 25, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
    },
    {
      id: 12,
      title: "Award Ceremony Moments",
      edition: "Dubai Edition",
      date: "January 13, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
    },
  ],
  // View 2 (Alternative set)
  [
    {
      id: 5,
      title: "AI and the Future of Leadership",
      edition: "Singapore Edition",
      date: "January 20, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
    },
    {
      id: 6,
      title: "Building Resilient Teams",
      edition: "Dubai Edition",
      date: "January 25, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: SAMPLE_VIDEOS.elephantsDream,
    },
    {
      id: 7,
      title: "Digital Transformation Strategies",
      edition: "London Edition",
      date: "February 1, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
    },
    {
      id: 8,
      title: "Sustainable Business Practices",
      edition: "Singapore Edition",
      date: "February 5, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
    },
    {
      id: 13,
      title: "Tech Innovation Trends",
      edition: "Dubai Edition",
      date: "February 8, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
    },
    {
      id: 14,
      title: "Global Market Outlook",
      edition: "Singapore Edition",
      date: "February 10, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: SAMPLE_VIDEOS.elephantsDream,
    },
    {
      id: 15,
      title: "Leadership Excellence Workshop",
      edition: "London Edition",
      date: "February 12, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
    },
    {
      id: 16,
      title: "Future of Remote Work",
      edition: "Dubai Edition",
      date: "February 15, 2026",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: SAMPLE_VIDEOS.forBiggerEscapes,
    },
  ],
];

// Singapore Edition Episodes
export const SINGAPORE_EPISODES: Episode[] = [
  {
    id: "1",
    image: EPISODE_IMAGES.leadershipWorkshop,
    category: "EPISODE",
    title: "Leadership in the Digital Age",
    description:
      "Exploring how leaders navigate digital transformation and build resilient teams in Singapore's dynamic business landscape.",
    duration: "1 hour",
    date: "Jan 15, 2025",
    speakers: [
      {
        name: "Sarah Tan",
        role: "Host",
        avatar: EPISODE_AVATARS.sarahTan,
      },
      {
        name: "David Lim",
        role: "Guest",
        avatar: EPISODE_AVATARS.davidLim,
      },
      {
        name: "Michelle Wong",
        role: "Guest",
        avatar: EPISODE_AVATARS.michelleWong,
      },
    ],
    featured: true,
  },
  {
    id: "2",
    image: EPISODE_IMAGES.innovationSoutheastAsia,
    category: "GRAPHICS",
    title: "Innovation in Southeast Asia",
    description:
      "Discovering the innovation ecosystem in Singapore and how startups are reshaping industries across the region.",
    duration: "45 min",
    date: "Jan 12, 2025",
    speakers: [
      {
        name: "James Koh",
        role: "Host",
        avatar: EPISODE_AVATARS.jamesKoh,
      },
      {
        name: "Lisa Chen",
        role: "Startup Founder",
        avatar: EPISODE_AVATARS.lisaChen,
      },
      {
        name: "Alex Ng",
        role: "Guest",
        avatar: EPISODE_AVATARS.davidLim,
      },
    ],
  },
  {
    id: "3",
    image: EPISODE_IMAGES.sustainableOrganizations,
    category: "EPISODE",
    title: "Building Sustainable Organizations",
    description:
      "How Singapore companies are leading the way in sustainability and creating long-term value for stakeholders.",
    duration: "52 min",
    date: "Jan 8, 2025",
    speakers: [
      {
        name: "Rachel Goh",
        role: "Host",
        avatar: EPISODE_AVATARS.michelleWong,
      },
      {
        name: "Kevin Tan",
        role: "Sustainability Expert",
        avatar: EPISODE_AVATARS.davidLim,
      },
    ],
  },
];

// Dubai Edition Episodes
export const DUBAI_EPISODES: Episode[] = [
  {
    id: "1",
    image: EPISODE_IMAGES.leadershipWorkshop,
    category: "EPISODE",
    title: "Building Businesses with Heart",
    description:
      "The strategies to grow your business with empathy and authenticity. Learn how to build lasting relationships.",
    duration: "1 hour",
    date: "Jan 10, 2025",
    speakers: [
      {
        name: "Sarah Chen",
        role: "Host",
        avatar: EPISODE_AVATARS.sarahTan,
      },
      {
        name: "Erik Olawson",
        role: "Guest",
        avatar: EPISODE_AVATARS.davidLim,
      },
      {
        name: "Maria Ruiz",
        role: "Guest",
        avatar: EPISODE_AVATARS.michelleWong,
      },
    ],
    featured: true,
  },
  {
    id: "2",
    image: EPISODE_IMAGES.innovationSoutheastAsia,
    category: "GRAPHICS",
    title: "People by Design",
    description:
      "The evolution of product design, user experience, and the human-centered approach to creating digital products.",
    duration: "45 min",
    date: "Jan 8, 2025",
    speakers: [
      {
        name: "Theresa Korver",
        role: "Host",
        avatar: EPISODE_AVATARS.jamesKoh,
      },
      {
        name: "Ola Luki",
        role: "Senior Product Designer",
        avatar: EPISODE_AVATARS.lisaChen,
      },
      {
        name: "Steve Mao",
        role: "Guest",
        avatar: EPISODE_AVATARS.davidLim,
      },
    ],
  },
  {
    id: "3",
    image: EPISODE_IMAGES.sustainableOrganizations,
    category: "EPISODE",
    title: "The Human Algorithm",
    description:
      "Exploring the intersection of artificial intelligence and human creativity. How AI is reshaping our world.",
    duration: "52 min",
    date: "Jan 5, 2025",
    speakers: [
      {
        name: "David Kim",
        role: "Host",
        avatar: EPISODE_AVATARS.davidLim,
      },
      {
        name: "Priya Patel",
        role: "AI Researcher",
        avatar: EPISODE_AVATARS.michelleWong,
      },
    ],
  },
];

/**
 * Get episodes by edition
 * @param edition - "dubai" or "singapore"
 * @returns Array of episodes for the specified edition
 */
export const getEpisodesByEdition = (
  edition: "dubai" | "singapore",
): Episode[] => {
  return edition === "dubai" ? DUBAI_EPISODES : SINGAPORE_EPISODES;
};

/**
 * Get single episode by ID
 * @param episodeId - The episode ID
 * @returns The episode object or undefined
 */
export const getEpisodeById = (
  episodeId: string | number,
): Episode | undefined => {
  const allEpisodes = [...DUBAI_EPISODES, ...SINGAPORE_EPISODES];
  return allEpisodes.find(
    (ep) => ep.id === episodeId || ep.id === String(episodeId),
  );
};

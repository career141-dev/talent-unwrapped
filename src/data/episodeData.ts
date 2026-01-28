import { Episode } from "../types";

// Singapore Edition Episodes
export const SINGAPORE_EPISODES: Episode[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        name: "David Lim",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Michelle Wong",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
      {
        name: "Lisa Chen",
        role: "Startup Founder",
        avatar:
          "https://images.unsplash.com/photo-1519085360771-9852046be8f9?w=400&h=400&fit=crop",
      },
      {
        name: "Alex Ng",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
    ],
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        name: "Kevin Tan",
        role: "Sustainability Expert",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
    ],
  },
];

// Dubai Edition Episodes
export const DUBAI_EPISODES: Episode[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        name: "Erik Olawson",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Maria Ruiz",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
      {
        name: "Ola Luki",
        role: "Senior Product Designer",
        avatar:
          "https://images.unsplash.com/photo-1519085360771-9852046be8f9?w=400&h=400&fit=crop",
      },
      {
        name: "Steve Mao",
        role: "Guest",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
    ],
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
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
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Priya Patel",
        role: "AI Researcher",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
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
  edition: "dubai" | "singapore"
): Episode[] => {
  return edition === "dubai" ? DUBAI_EPISODES : SINGAPORE_EPISODES;
};

/**
 * Get single episode by ID
 * @param episodeId - The episode ID
 * @returns The episode object or undefined
 */
export const getEpisodeById = (episodeId: string | number): Episode | undefined => {
  const allEpisodes = [...DUBAI_EPISODES, ...SINGAPORE_EPISODES];
  return allEpisodes.find((ep) => ep.id === episodeId || ep.id === String(episodeId));
};

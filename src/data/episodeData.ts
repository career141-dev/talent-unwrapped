import { Episode, Podcast } from "../types";
import { VIDEO_THUMBNAILS, SAMPLE_VIDEOS, EPISODE_IMAGES, EPISODE_AVATARS } from "../assets";

// Latest Podcasts data for Landing Page
export const LATEST_PODCASTS_DATA: Podcast[][] = [
  [
    {
      id: 1,
      title: "From HR to Business Impact | Building Future-Ready Talent in the GCC | Talent Unwrapped – Dubai",
      edition: "Dubai Edition",
      date: "December 10, 2025",
      thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/WhatsApp_Image_2026-02-10_at_7.20.05_AM_unwtyi.jpg",
      videoUrl: "https://youtu.be/3xda4skYDlg?si=SRxyPSb4no2wKb6k",
    },
    {
      id: 2,
      title: "From HR to Business Impact | Building Future-Ready Talent | Talent Unwrapped – Singapore",
      edition: "Singapore Edition",
      date: "November 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: "https://youtu.be/3xda4skYDlg?si=vQS3xIWU7nu51WiX",
    },
    {
      id: 3,
      title: "Ayin Shah Jahan, Location Talent Leader - EY GDS Sri Lanka at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: "https://youtu.be/WI_QCvUUfgw?si=OqSZhelDFVqXED3d",
    },
    {
      id: 4,
      title: "Sumudu Thanthirigoda, CEO - Maliban Group, Milk and Agri at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: "https://youtu.be/ZOVPQRmFpRw?si=ak_jgi_bo2nvoE3p",
    },
    {
      id: 5,
      title: "Surani Amarasinghe, Director Country People Partnering - LSEG at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: "https://youtu.be/7qpLhKJr35o?si=yJu_pof5fRHIUm6b",
    },
    {
      id: 6,
      title: "Ashan Ransilige, CEO - Link Natural Product (Pvt) Ltd at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: "https://youtu.be/1K28-pJcTog?si=j4CEjbT4xUCZJGtx",
    },
    {
      id: 7,
      title: "Inoka Dias, Senior Director/Head of Human Resource - Virtusa at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video3,
      videoUrl: "https://youtu.be/OyiMnI01fPE?si=_-4e2_iAExLYn7Wy",
    },
    {
      id: 8,
      title: "Karthik Badrinath, Head of Sales Development LinkedIn-India addresses the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video4,
      videoUrl: "https://youtu.be/OcOCgypmiU4?si=fxs8I5qhSUz_lUw2",
    },
    {
      id: 9,
      title: "Rolf Blaser - CEO/Managing Director A. Baur & Co. (Pvt) Ltd. addresses the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video1,
      videoUrl: "https://youtu.be/r0IkJIPjamY?si=gojh_9cYnPtbEwUK",
    },
    {
      id: 10,
      title: "Azeem Ansar - Founder & Managing Director of CAREER141 addresses the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: VIDEO_THUMBNAILS.video2,
      videoUrl: "https://youtu.be/KzzrfILAZAU?si=XqpbwwpvNZod0Zlu",
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
    image: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/WhatsApp_Image_2026-02-10_at_7.20.05_AM_unwtyi.jpg",
    category: "EPISODE",
    title: "From HR to Business Impact | Building Future-Ready Talent in the GCC | Talent Unwrapped – Dubai",
    description:
      "Exploring how HR leaders in the GCC are transforming their function into a strategic business engine, building future-ready talent pipelines, and balancing efficiency with employee experience.",
    duration: "1 hour",
    date: "Dec 10, 2025",
    speakers: [
      {
        name: "Mohammed Haffejee",
        role: "AVP Senior HRBP",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618640/1756292060602_1_df82j8.png",
      },
      {
        name: "Gargi Bannerjee",
        role: "VP HR",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618639/1621657233961_1_helgwf.png",
      },
      {
        name: "Franklyn Henriques",
        role: "Regional HR Director",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618638/1545386579437_1_vl1nrk.png",
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

import { Episode, Podcast } from "../types";
import { VIDEO_THUMBNAILS } from "../assets";

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
      title: "Beyond Resilience | Redefining Leadership Strength & Organizational Agility | Talent Unwrapped – Singapore",
      edition: "Singapore Edition",
      date: "November 1, 2025",
      thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/Frame_1000003689_1_pq4rv5.png",
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
  ],
];

// Singapore Edition Episodes
export const SINGAPORE_EPISODES: Episode[] = [
  {
    id: "2",
    image: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/Frame_1000003689_1_pq4rv5.png",
    category: "EPISODE",
    title: "Beyond Resilience | Redefining Leadership Strength & Organizational Agility | Talent Unwrapped – Singapore",
    description:
      "Exploring how leaders in Singapore are moving beyond simple resilience to redefine organizational agility, thriving through change, and turning disruption into a strategic advantage.",
    duration: "1 hour",
    date: "Nov 1, 2025",
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
    speakers: [
      {
        name: "Echo Wu",
        role: "Leadership & Mental Toughness Expert",
        avatar: "https://c.animaapp.com/mknscg4zvttudp/img/1756292060602-1.png",
      },
      {
        name: "Avik Ghosh",
        role: "Executive Director",
        avatar: "https://c.animaapp.com/mknscg4zvttudp/img/1621657233961-1.png",
      },
      {
        name: "Ella Sherman",
        role: "Head of HR APAC",
        avatar: "https://c.animaapp.com/mknscg4zvttudp/img/1545386579437-1.png",
      },
    ],
    featured: true,
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
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
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

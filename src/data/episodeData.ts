import { Episode, Podcast } from "../types";

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
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/WI_QCvUUfgw?si=OqSZhelDFVqXED3d",
    },
    {
      id: 4,
      title: "Sumudu Thanthirigoda, CEO - Maliban Group, Milk and Agri at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/ZOVPQRmFpRw?si=ak_jgi_bo2nvoE3p",
    },
    {
      id: 5,
      title: "Surani Amarasinghe, Director Country People Partnering - LSEG at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/7qpLhKJr35o?si=yJu_pof5fRHIUm6b",
    },
    {
      id: 6,
      title: "Ashan Ransilige, CEO - Link Natural Product (Pvt) Ltd at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/1K28-pJcTog?si=j4CEjbT4xUCZJGtx",
    },
    {
      id: 7,
      title: "Inoka Dias, Senior Director/Head of Human Resource - Virtusa at the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/OyiMnI01fPE?si=_-4e2_iAExLYn7Wy",
    },
    {
      id: 8,
      title: "Karthik Badrinath, Head of Sales Development - LinkedIn India addresses the Talent Suite Colombo 2025",
      edition: "Sri Lanka Edition",
      date: "September 1, 2025",
      thumbnailUrl: "",
      videoUrl: "https://youtu.be/OcOCgypmiU4?si=fxs8I5qhSUz_lUw2",
    },
  ],
];

// Colombo Edition Episodes (Sri Lanka)
export const COLOMBO_EPISODES: Episode[] = [
  {
    id: "3",
    image: "",
    category: "SPEECH",
    title: "Ayin Shah Jahan at Talent Suite Colombo 2025",
    description: "Location Talent Leader - EY GDS Sri Lanka addressing the Talent Suite Colombo 2025, exploring leadership and talent trends.",
    duration: "15 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/WI_QCvUUfgw",
    speakers: [
      {
        name: "Ayin Shah Jahan",
        role: "Location Talent Leader - EY GDS",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770883420/Frame_4449057_1_1_npu1wb.png",
      },
    ],
  },
  {
    id: "4",
    image: "",
    category: "SPEECH",
    title: "Sumudu Thanthirigoda at Talent Suite Colombo 2025",
    description: "CEO - Maliban Group, Milk and Agri, sharing perspectives on industry leadership and business growth.",
    duration: "20 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/ZOVPQRmFpRw",
    speakers: [
      {
        name: "Sumudu Thanthirigoda",
        role: "CEO - Maliban Group",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1771218003/1764928872339_j91re3.jpg",
      },
    ],
  },
  {
    id: "5",
    image: "",
    category: "SPEECH",
    title: "Surani Amarasinghe at Talent Suite Colombo 2025",
    description: "Director Country People Partnering - LSEG, discussing talent development and organizational culture.",
    duration: "18 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/7qpLhKJr35o",
    speakers: [
      {
        name: "Surani Amarasinghe",
        role: "Director - LSEG",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770886780/Frame_4449056_1_hxhoao.png",
      },
    ],
  },
  {
    id: "6",
    image: "",
    category: "SPEECH",
    title: "Ashan Ransilige at Talent Suite Colombo 2025",
    description: "CEO - Link Natural Product (Pvt) Ltd, sharing insights on leadership and operational excellence.",
    duration: "12 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/1K28-pJcTog",
    speakers: [
      {
        name: "Ashan Ransilige",
        role: "CEO - Link Natural Product",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770886856/Frame_4449055_1_tegt2m.png",
      },
    ],
  },
  {
    id: "7",
    image: "",
    category: "SPEECH",
    title: "Inoka Dias at Talent Suite Colombo 2025",
    description: "Senior Director/Head of Human Resource - Virtusa, exploring HR transformation and future-ready talent.",
    duration: "14 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/OyiMnI01fPE",
    speakers: [
      {
        name: "Inoka Dias",
        role: "Head of HR - Virtusa",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770887023/Frame_4449058_1_qy12hi.png",
      },
    ],
  },
  {
    id: "8",
    image: "",
    category: "SPEECH",
    title: "Karthik Badrinath at Talent Suite Colombo 2025",
    description: "Head of Sales Development LinkedIn-India, presenting on talent networking and professional development.",
    duration: "25 min",
    date: "Sep 1, 2025",
    videoUrl: "https://www.youtube.com/embed/OcOCgypmiU4",
    speakers: [
      {
        name: "Karthik Badrinath",
        role: "Head of Sales Development - LinkedIn India",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1771217891/1756738002848_mxqtdy.jpg",
      },
    ],
  },
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
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1756292060602_1_5_arkico.png",
      },
      {
        name: "Avik Ghosh",
        role: "Executive Director",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1621657233961_1_dbrjce.png",
      },
      {
        name: "Ella Sherman",
        role: "Head of HR APAC",
        avatar: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1545386579437_1_rv6wmx.png",
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
 * @param edition - "dubai" or "singapore" or "sri-lanka"
 * @returns Array of episodes for the specified edition
 */
export const getEpisodesByEdition = (
  edition: "dubai" | "singapore" | "sri-lanka",
): Episode[] => {
  if (edition === "dubai") return DUBAI_EPISODES;
  if (edition === "singapore") return SINGAPORE_EPISODES;
  return COLOMBO_EPISODES;
};

/**
 * Get single episode by ID
 * @param episodeId - The episode ID
 * @returns The episode object or undefined
 */
export const getEpisodeById = (
  episodeId: string | number,
): Episode | undefined => {
  const allEpisodes = [...DUBAI_EPISODES, ...SINGAPORE_EPISODES, ...COLOMBO_EPISODES];
  return allEpisodes.find(
    (ep) => ep.id === episodeId || ep.id === String(episodeId),
  );
};

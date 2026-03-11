import { VideoSlide } from "../types";

// Video slides for Landing Page Hero section - Updated with Singapore and Dubai editions
export const LANDING_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/Frame_1000003689_1_pq4rv5.png",
    title: "Singapore Edition",
    edition: "Singapore",
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
  },
  {
    id: 2,
    thumbnail: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/WhatsApp_Image_2026-02-10_at_7.20.05_AM_unwtyi.jpg",
    title: "Dubai Edition",
    edition: "Dubai",
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
  },
];

// Video slides for FullEpisode page - Single video per edition
export const DUBAI_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/WhatsApp_Image_2026-02-10_at_7.20.05_AM_unwtyi.jpg",
    title: "Dubai Edition - Full Episode",
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
  },
];

export const SINGAPORE_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770693712/Frame_1000003689_1_pq4rv5.png",
    title: "Singapore Edition - Full Episode",
    videoUrl: "https://www.youtube.com/embed/3xda4skYDlg",
  },
];

export const SRI_LANKA_VIDEO_SLIDES: VideoSlide[] = [
  {
    id: 1,
    thumbnail: "",
    title: "Sri Lanka Edition - Highlights",
    videoUrl: "https://www.youtube.com/embed/WI_QCvUUfgw",
  },
];

/**
 * Get video slides by edition
 * @param edition - "dubai" or "singapore" or "sri-lanka"
 * @returns Array of video slides for the specified edition
 */
export const getVideoSlidesByEdition = (
  edition: "dubai" | "singapore" | "sri-lanka",
): VideoSlide[] => {
  if (edition === "dubai") return DUBAI_VIDEO_SLIDES;
  if (edition === "singapore") return SINGAPORE_VIDEO_SLIDES;
  return SRI_LANKA_VIDEO_SLIDES;
};

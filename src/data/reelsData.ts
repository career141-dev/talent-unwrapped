import { SAMPLE_VIDEOS } from "../assets";

export interface ReelVideo {
    id: number;
    videoUrl: string;
    title: string;
    description: string;
}

export const REELS_DATA: ReelVideo[] = [
    {
        id: 1,
        videoUrl: SAMPLE_VIDEOS.bigBuckBunny,
        title: "Leadership Insights",
        description: "Key moments from our leadership discussions",
    },
    {
        id: 2,
        videoUrl: SAMPLE_VIDEOS.elephantsDream,
        title: "Innovation Stories",
        description: "Inspiring stories of innovation and change",
    },
    {
        id: 3,
        videoUrl: SAMPLE_VIDEOS.forBiggerBlazes,
        title: "Future of Work",
        description: "Exploring the evolving workplace landscape",
    },
];

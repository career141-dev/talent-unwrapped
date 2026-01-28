import { Episode } from "../types";

// The Three Chapters data - used in TheThreeChaptersSection
export const THREE_CHAPTERS: Episode[] = [
  {
    id: 1,
    title: "Leadership Reimagined: ",
    subtitle:
      "Building Mental Toughness, Culture, and Agility for the Future of Work",
    videoIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-bold-video-circle-1.svg",
    exportIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-linear-export.svg",
  },
  {
    id: 2,
    title: "Beyond Resilience: ",
    subtitle: "Redefining Leadership Strength and Organizational Agility",
    videoIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-bold-video-circle.svg",
    exportIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-linear-export.svg",
  },
  {
    id: 3,
    title: "The Human Blueprint: ",
    subtitle: "Rethinking Leadership for an Intelligent Age",
    videoIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-bold-video-circle.svg",
    exportIcon:
      "https://c.animaapp.com/mkmm0u1u5wob0l/img/vuesax-linear-export.svg",
  },
];

// Position map for layout adjustments by edition
export const POSITION_MAP = {
  dubai: {
    header: "lg:left-[80px]",
    viewersCount: "lg:left-[80px]",
    description: "lg:left-[500px]",
    button: "lg:left-[500px]",
    cards: "lg:left-[80px]",
  },
  singapore: {
    header: "lg:left-[80px]",
    viewersCount: "lg:left-[80px]",
    description: "lg:left-[500px]",
    button: "lg:left-[500px]",
    cards: "lg:left-[80px]",
  },
};

export const getThreeChapters = (): Episode[] => THREE_CHAPTERS;

export const getPositionsByEdition = (
  edition: "dubai" | "singapore"
): typeof POSITION_MAP.dubai => {
  return POSITION_MAP[edition] || POSITION_MAP.singapore;
};

export const getEditionName = (edition: "dubai" | "singapore"): string => {
  return edition === "dubai" ? "Dubai Edition" : "Singapore Edition";
};

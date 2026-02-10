import { Episode } from "../types";

// Edition-specific content structure
export const EDITION_CONTENT = {
  singapore: {
    name: "Singapore",
    schedule: {
      date: "12th, 13th Nov 2025",
      dateTime: "2025-11-12",
    },
    chapters: [
      {
        id: 1,
        title: "Leadership Reimagined: ",
        subtitle:
          "Building Mental Toughness, Culture, and Agility for the Future of Work",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
      {
        id: 2,
        title: "Beyond Resilience: ",
        subtitle: "Redefining Leadership Strength and Organizational Agility",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
      {
        id: 3,
        title: "The Human Blueprint: ",
        subtitle: "Rethinking Leadership for an Intelligent Age",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
    ],
  },
  dubai: {
    name: "Dubai",
    schedule: {
      date: "15th, 16th Dec 2025",
      dateTime: "2025-12-15",
    },
    chapters: [
      {
        id: 1,
        title: "Innovation in Leadership: ",
        subtitle: "Transforming Business Culture in the Middle East",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
      {
        id: 2,
        title: "Digital Transformation: ",
        subtitle: "Leading Change in a Rapidly Evolving Landscape",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
      {
        id: 3,
        title: "Global Vision: ",
        subtitle: "Building Bridges Between East and West",
        videoIcon: "videoCircle",
        exportIcon: "export",
      },
    ],
  },
};

// Legacy export for backwards compatibility
export const THREE_CHAPTERS: Episode[] = EDITION_CONTENT.singapore.chapters;

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
  edition: "dubai" | "singapore",
): typeof POSITION_MAP.dubai => {
  return POSITION_MAP[edition] || POSITION_MAP.singapore;
};

export const getEditionName = (edition: "dubai" | "singapore"): string => {
  return edition === "dubai" ? "Dubai Edition" : "Singapore Edition";
};

export const getEditionContent = (edition: "dubai" | "singapore") => {
  return EDITION_CONTENT[edition] || EDITION_CONTENT.singapore;
};

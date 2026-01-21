import { useNavigate } from "react-router-dom";
import { GlobalHeader } from "../../components/GlobalHeader";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { PodcastScheduleSection } from "./sections/PodcastScheduleSection";

interface Speaker {
  name: string;
  role?: string;
  avatar: string;
}

interface Episode {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  speakers: Speaker[];
  featured?: boolean;
}

export const DubaiPodcast = (): JSX.Element => {
  const navigate = useNavigate();

  const handleViewEpisode = (episodeId: string) => {
    navigate(`/episode/${episodeId}`, { state: { edition: "Dubai" } });
  };

  const episodes: Episode[] = [
    {
      id: "1",
      image: "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
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
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
        {
          name: "Erik Olawson",
          role: "Guest",
          avatar:
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
        {
          name: "Maria Ruiz",
          role: "Guest",
          avatar:
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
      ],
      featured: true,
    },
    {
      id: "2",
      image: "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
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
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
        {
          name: "Ola Luki",
          role: "Senior Product Designer",
          avatar:
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
        {
          name: "Steve Mao",
          role: "Guest",
          avatar:
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
      ],
    },
    {
      id: "3",
      image: "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
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
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
        {
          name: "Priya Patel",
          role: "AI Researcher",
          avatar:
            "https://c.animaapp.com/mkmm0u1u5wob0l/img/episodelisting.png",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen w-full overflow-x-hidden">
      <GlobalHeader />

      <section
        id="episodes"
        className="w-full max-w-[1440px] bg-white px-4 sm:px-6 md:px-10 lg:px-[80px] py-16 sm:py-20 md:py-24 lg:py-[90px] mx-auto"
        aria-label="Episode Listing"
      >
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-[40px]">
            <h1 className="[font-family:'Geist',Helvetica] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[70px]">
              <span className="text-[#ed2939]">All </span>
              <span className="text-[#7cb403]">Episodes</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[32px]">
            {episodes.map((episode) => (
              <article
                key={episode.id}
                className="flex flex-col bg-white rounded-xl md:rounded-[16px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] bg-[#2d2d2d] overflow-hidden">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  {episode.featured && (
                    <div className="absolute top-[16px] left-[16px] bg-[#7c3] text-white text-[11px] font-bold px-[12px] py-[6px] rounded-[20px] uppercase tracking-[0.05em]">
                      Featured
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-[24px] flex-1">
                  <div className="mb-2 sm:mb-3 md:mb-[12px]">
                    <span className="text-[#ff4444] text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase">
                      {episode.category}
                    </span>
                  </div>

                  <h2 className="text-[#1a1a1a] text-base sm:text-lg md:text-[20px] font-bold leading-[1.3] mb-2 sm:mb-3 md:mb-[12px]">
                    {episode.title}
                  </h2>

                  <p className="text-[#666666] text-xs sm:text-sm md:text-[14px] leading-[1.6] mb-3 sm:mb-4 md:mb-[20px] flex-1">
                    {episode.description}
                  </p>

                  <div className="flex items-center gap-2 sm:gap-3 md:gap-[12px] text-[#999999] text-[10px] sm:text-[11px] md:text-[12px] mb-3 sm:mb-4 md:mb-[20px]">
                    <span className="flex items-center gap-[4px]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 3.5V7L9.5 8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {episode.duration}
                    </span>
                    <span>•</span>
                    <span>{episode.date}</span>
                  </div>

                  <div className="border-t border-[#eeeeee] pt-3 sm:pt-4 md:pt-[20px]">
                    <div className="text-[#1a1a1a] text-[10px] sm:text-[11px] font-bold tracking-[0.05em] uppercase mb-2 sm:mb-3 md:mb-[12px]">
                      Speakers
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-[12px]">
                      {episode.speakers.map((speaker, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3 md:gap-[12px]"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] rounded-full bg-[#e5e5e5] overflow-hidden flex-shrink-0">
                            <img
                              src={speaker.avatar}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1a1a1a] text-xs sm:text-[13px] font-semibold truncate">
                              {speaker.name}
                            </div>
                            {speaker.role && (
                              <div className="text-[#999999] text-[10px] sm:text-[11px] truncate">
                                {speaker.role}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewEpisode(episode.id)}
                    className="mt-3 sm:mt-4 md:mt-[20px] w-full bg-transparent border-0 text-[#7c3] text-xs sm:text-[13px] font-bold tracking-[0.05em] uppercase py-2.5 sm:py-3 md:py-[12px] hover:bg-[#f0f9f0] rounded-lg transition-colors duration-200 cursor-pointer touch-manipulation"
                    aria-label={`View episode: ${episode.title}`}
                  >
                    View Episode →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutUsSection />
      <PodcastScheduleSection />
      <FooterSection />
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { GlobalHeader } from "../../components/GlobalHeader";
import { TheThreeChaptersSection } from "./sections/TheThreeChaptersSection";
import { FooterSection } from "./sections/FooterSection";
import { ContactUsSection } from "./sections/ContactUsSection";

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

export const SingaporePodcast = (): JSX.Element => {
  const navigate = useNavigate();

  const handleViewEpisode = (episodeId: string) => {
    navigate(`/episode/${episodeId}`, { state: { edition: "Singapore" } });
  };

  const episodes: Episode[] = [
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
              <span className="text-[#7cb403]">All </span>
              <span className="text-[#ed2939]">Episodes</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[32px]">
            {episodes.map((episode) => (
              <button
                key={episode.id}
                onClick={() => handleViewEpisode(episode.id)}
                className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02] text-left border-none cursor-pointer group"
              >
                <div className="relative w-full h-[240px] bg-[#2d2d2d] overflow-hidden">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {episode.featured && (
                    <div className="absolute top-[16px] left-[16px] bg-[#7c3] text-white text-[11px] font-bold px-[12px] py-[6px] rounded-[20px] uppercase tracking-[0.05em]">
                      Featured
                    </div>
                  )}
                  {/* Play Icon Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16 bg-[#7bb302] rounded-full flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-[24px] flex-1">
                  <div className="mb-[12px]">
                    <span className="text-[#ff4444] text-[11px] font-bold tracking-[0.1em] uppercase">
                      {episode.category}
                    </span>
                  </div>

                  <h2 className="text-[#1a1a1a] text-[20px] font-bold leading-[1.3] mb-[12px]">
                    {episode.title}
                  </h2>

                  <p className="text-[#666666] text-[14px] leading-[1.6] mb-[20px] flex-1">
                    {episode.description}
                  </p>

                  <div className="flex items-center gap-[12px] text-[#999999] text-[12px] mb-[20px]">
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

                  <div className="border-t border-[#eeeeee] pt-[20px]">
                    <div className="text-[#1a1a1a] text-[11px] font-bold tracking-[0.05em] uppercase mb-[12px]">
                      Speakers
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      {episode.speakers.map((speaker, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[12px]"
                        >
                          <div className="w-[32px] h-[32px] rounded-full bg-[#e5e5e5] overflow-hidden flex-shrink-0">
                            <img
                              src={speaker.avatar}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1a1a1a] text-[13px] font-semibold truncate">
                              {speaker.name}
                            </div>
                            {speaker.role && (
                              <div className="text-[#999999] text-[11px] truncate">
                                {speaker.role}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <TheThreeChaptersSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

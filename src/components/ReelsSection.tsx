import { useEffect, useRef } from "react";

interface ReelVideo {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
}

export const ReelsSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const reelVideos: ReelVideo[] = [
    {
      id: 1,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Leadership Insights",
      description: "Key moments from our leadership discussions",
    },
    {
      id: 2,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Innovation Stories",
      description: "Inspiring stories of innovation and change",
    },
    {
      id: 3,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Future of Work",
      description: "Exploring the evolving workplace landscape",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play all videos when section enters viewport
            videoRefs.current.forEach((video) => {
              if (video) {
                video.play().catch((error) => {
                  console.log("Video autoplay failed:", error);
                });
              }
            });
          } else {
            // Pause all videos when section leaves viewport
            videoRefs.current.forEach((video) => {
              if (video) {
                video.pause();
              }
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[90px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Reels Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
          {reelVideos.map((reel, index) => (
            <div
              key={reel.id}
              className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group"
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                src={reel.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* Overlay with Title (appears on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <h3 className="[font-family:'Geist',Helvetica] font-semibold text-white text-base sm:text-lg md:text-xl tracking-[-0.40px] leading-[normal] mb-1 sm:mb-2">
                  {reel.title}
                </h3>
                <p className="[font-family:'Geist',Helvetica] font-normal text-white/80 text-xs sm:text-sm leading-[normal]">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

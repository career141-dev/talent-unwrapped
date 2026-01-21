import { useState, useEffect } from "react";

interface VideoSlide {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl?: string;
}

export const HeroBannerSingapore = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoSlides: VideoSlide[] = [
    {
      id: 1,
      thumbnail: "https://c.animaapp.com/6IK4krLc/img/frame-4449037-1.png",
      title: "Episode 1: Leadership in Singapore",
      videoUrl: "#",
    },
    {
      id: 2,
      thumbnail: "https://c.animaapp.com/6IK4krLc/img/frame-4449037-1.png",
      title: "Episode 2: Innovation Hub",
      videoUrl: "#",
    },
    {
      id: 3,
      thumbnail: "https://c.animaapp.com/6IK4krLc/img/frame-4449037-1.png",
      title: "Episode 3: Sustainable Growth",
      videoUrl: "#",
    },
    {
      id: 4,
      thumbnail: "https://c.animaapp.com/6IK4krLc/img/frame-4449037-1.png",
      title: "Episode 4: Future Ready",
      videoUrl: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videoSlides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full max-w-[1440px] min-h-[600px] md:min-h-[800px] lg:h-[1137px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] py-8 md:py-12 lg:py-0 mx-auto">
      <div className="hidden lg:inline-flex items-end gap-4 absolute top-[159px] left-[60px]">
        <div className="relative w-[372px] h-[108px] bg-white rounded-xl overflow-hidden rotate-180">
          <img
            className="absolute top-0 left-0 w-[372px] h-[72px] -rotate-180 object-cover"
            alt="Logo prasperant"
            src="https://c.animaapp.com/6IK4krLc/img/logo-prasperant-1-1.png"
          />
        </div>
      </div>

      <h2 className="relative lg:absolute top-0 lg:top-[68px] left-0 lg:left-[506px] w-full lg:w-auto text-center lg:text-left [font-family:'Geist',Helvetica] font-medium text-[#232323] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] tracking-[-1px] lg:tracking-[-2.08px] leading-normal mb-2 lg:mb-0">
        Conversations that feel
      </h2>

      <button
        onClick={() => {
          const speakersSection = document.getElementById('speakers');
          if (speakersSection) {
            speakersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="hidden xl:block absolute top-[66px] left-[1055px] w-[120px] xl:w-[152px] h-auto cursor-pointer hover:scale-110 transition-transform duration-300 bg-transparent border-none p-0"
        aria-label="Go to speakers section"
        type="button"
      >
        <img
          className="w-full h-full"
          alt=""
          src="https://c.animaapp.com/6IK4krLc/img/frame-1000002831.svg"
        />
      </button>

      <h1 className="relative lg:absolute top-0 lg:top-[120px] left-0 lg:left-[496px] w-full lg:w-auto max-w-full lg:max-w-[919px] text-center lg:text-left [font-family:'Geist',Helvetica] font-medium text-[#7bb302] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[144px] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-5.76px] leading-tight lg:leading-[normal] mb-8 lg:mb-0">
        ideas that stay
      </h1>

      <div className="relative lg:absolute top-auto lg:top-[355px] left-0 lg:left-[50%] lg:transform lg:-translate-x-1/2 w-full max-w-[calc(100%-2rem)] lg:max-w-[1320px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-[#00000033] rounded-2xl lg:rounded-3xl overflow-hidden mt-8 lg:mt-0 mx-auto">
        {/* Video Slides */}
        <div className="relative w-full h-full">
          {videoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt={slide.title}
                src={slide.thumbnail}
              />
            </div>
          ))}
        </div>

        {/* Edition Badge */}
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 absolute top-4 sm:top-6 md:top-[39px] left-4 sm:left-6 md:left-[49px] bg-[#7bb302] rounded-[40px] z-20">
          <img
            className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            alt=""
            src="https://c.animaapp.com/6IK4krLc/img/vuesax-bold-play-circle.svg"
          />
          <span className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.80px] leading-[normal]">
            Singapore Edition
          </span>
        </div>

        {/* Play Button */}
        <button
          type="button"
          className="absolute top-[calc(50%-40px)] sm:top-[calc(50%-50px)] md:top-[calc(50%-63px)] left-[calc(50%-40px)] sm:left-[calc(50%-50px)] md:left-[calc(50%-66px)] w-20 h-20 sm:w-24 sm:h-24 md:w-[134px] md:h-[134px] cursor-pointer hover:scale-110 transition-transform z-20"
          aria-label="Play podcast episode"
        >
          <img
            className="w-full h-full"
            alt=""
            src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-play.svg"
          />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] left-2 sm:left-4 md:left-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm"
          aria-label="Previous video"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute top-[calc(50%-20px)] sm:top-[calc(50%-25px)] md:top-[calc(50%-30px)] right-2 sm:right-4 md:right-[30px] w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] bg-white/80 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition-all z-20 backdrop-blur-sm"
          aria-label="Next video"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-[30px] left-[calc(50%-60px)] sm:left-[calc(50%-70px)] md:left-[calc(50%-80px)] flex items-center gap-2 sm:gap-2.5 md:gap-3 z-20">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-7 md:w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        {/* Video Counter */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-[30px] right-4 sm:right-6 md:right-[30px] bg-black/60 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full z-20">
          <span className="[font-family:'Geist',Helvetica] font-medium text-white text-xs sm:text-sm">
            {currentSlide + 1} / {videoSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
};

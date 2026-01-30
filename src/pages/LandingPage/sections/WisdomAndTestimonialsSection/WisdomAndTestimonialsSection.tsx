import { useEffect, useRef, useState } from "react";

export const WisdomAndTestimonialsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full max-w-[1440px] bg-white px-4 sm:px-6 md:px-10 lg:px-[60px] -mt-[150px] sm:-mt-[80px] md:mt-0 py-0 sm:py-6 md:py-10 lg:py-14 mx-auto overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Layout Container - Responsive Flex */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 w-full h-full">
        
        {/* Left Side - Image */}
        <div className={`hidden lg:block w-full lg:w-[45%] xl:w-[50%] max-w-[595px] lg:max-w-none order-1 lg:order-1 transition-all duration-700 lg:-ml-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] bg-[#cecece] rounded-2xl md:rounded-3xl overflow-hidden rotate-180 shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              className="w-full h-full -rotate-180 object-cover hover:scale-105 transition-transform duration-500"
              alt="Professional microphone and studio equipment"
              src="https://c.animaapp.com/6IK4krLc/img/professional-microphone-and-studio-equipment-2025-03-08-12-56-45.png"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`w-full lg:w-[55%] xl:w-[50%] max-w-[665px] lg:max-w-none order-2 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="flex flex-col items-start w-full md:gap-8 sm:gap-10 lg:gap-12">
            
            {/* Top Section - Heading & CTA */}
            <div className="flex flex-col items-start w-full md:gap-[9.284px] sm:gap-6 gap-6 sm:gap-8 lg:gap-10">
              <div className="flex flex-col items-start w-full md:gap-[9.284px] sm:gap-4 gap-3 sm:gap-4">
                <p className="w-full [font-family:'Geist',Helvetica] font-bold text-[#7bb302] text-sm sm:text-base md:hidden tracking-[-0.32px] leading-[normal]">
                  ABOUT
                </p>

                <h2
                  id="about-heading"
                  className="w-full [font-family:'Geist',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl md:text-[37.135px] lg:text-[56px] xl:text-[64px] md:tracking-[-1.485px] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.56px] md:leading-[106%] leading-tight sm:leading-[1.1] lg:leading-[67.8px]"
                >
                  <span className="text-[#959494] md:tracking-[-1.485px] tracking-[-1.64px]">
                    Talent Unwrapped:
                    <br />
                  </span>

                  <span className="text-[#ed2939] md:tracking-[-1.485px] tracking-[-1.64px]">
                    Singapore Edition
                  </span>
                </h2>
              </div>

              <a
                href="#episodes"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex md:w-[74.777px] md:h-[31.333px] md:px-[11.605px] md:py-[9.284px] md:justify-between h-12 sm:h-[54px] items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-4 bg-[#7CB403] md:bg-[#7CB403] rounded-[60px] md:rounded-[34.814px] no-underline cursor-pointer hover:bg-[#6a9e02] transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2 group touch-manipulation"
              >
                <span className="w-fit [font-family:'Geist',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[-0.48px] leading-[normal]">
                  Explore
                </span>

                <img
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
                  alt=""
                  src="https://c.animaapp.com/6IK4krLc/img/vuesax-linear-arrow-right-2@2x.png"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Bottom Section - Quote & Attribution */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 w-full">
              <div className="flex items-center gap-2.5 px-0 py-2 sm:py-2.5 w-full border-b border-solid border-neutral-200">
                <p className="w-full [font-family:'Geist',Helvetica] font-medium text-[#222223] text-sm sm:text-base tracking-[-0.32px] leading-[normal]">
                  Because talent isn&apos;t found. It&apos;s designed, felt, and
                  lived.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
                <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 w-full">
                  <blockquote className="w-full [font-family:'Geist',Helvetica] font-medium md:font-500 text-[#232323] md:text-[#232323] md:text-[11.605px] text-base sm:text-lg md:text-xl md:tracking-[-0.232px] tracking-[-0.40px] md:leading-[normal] leading-relaxed sm:leading-[1.6]">
                    &quot;For over two decades, Career141 has connected people to
                    opportunity. Now, through Talent Unwrapped, we&apos;re creating
                    space for unfiltered conversations — about how corporate
                    change-makers lead transformation, how digital disruption
                    redefines collaboration, and how AI reshapes decision-making.
                    It&apos;s where the next era of leadership is decoded —
                    exploring how foresight, agility, and emotional intelligence
                    empower leaders to thrive amid constant evolution.&quot;
                  </blockquote>

                  <p className="w-full [font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-sm sm:text-base tracking-[-0.64px] leading-[normal]">
                    — M A Azeemusham (Managing Director)
                  </p>
                </div>

                <img
                  className="hidden sm:block w-[1.5px] h-20 md:h-[127px] flex-shrink-0"
                  alt=""
                  src="https://c.animaapp.com/6IK4krLc/img/vector-4877.svg"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ExpertQandASection } from "../routes/KeyQuesions/screens/sections/ExpertQandASection";
import { LeadershipInsightsSection } from "../routes/KeyQuesions/screens/sections/LeadershipInsightsSection";
import { LeadershipInterviewsSection } from "../routes/KeyQuesions/screens/sections/LeadershipInterviewsSection";
import { LeadershipProfilesSection } from "../routes/KeyQuesions/screens/sections/LeadershipProfilesSection";
import { SessionTitleSection } from "../routes/KeyQuesions/screens/sections/SessionTitleSection";

interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  linkedin: string;
  imageUrl: string;
  imageStyles: string;
}

export const KeyQuestionsSection = (): JSX.Element => {
  const expertProfiles: ExpertProfile[] = [
    {
      id: "echo-wu",
      name: "Echo Wu",
      title: "Leadership & Mental",
      subtitle: "Toughness Expert",
      linkedin: "https://www.linkedin.com/in/echoleadership/",
      imageUrl: "https://c.animaapp.com/mknscg4zvttudp/img/1756292060602-1.png",
      imageStyles: "w-[60px] h-[60px] object-cover",
    },
    {
      id: "avik-ghosh",
      name: "Avik Ghosh",
      title: "Executive Director",
      subtitle: "",
      linkedin: "https://www.linkedin.com/in/avikghosh/",
      imageUrl: "https://c.animaapp.com/mknscg4zvttudp/img/1621657233961-1.png",
      imageStyles: "mt-px w-[59px] h-[59px] object-cover",
    },
    {
      id: "ella-sherman",
      name: "Ella Sherman",
      title: "Head of HR APAC",
      subtitle: "",
      linkedin: "https://www.linkedin.com/in/ella-sherman",
      imageUrl: "https://c.animaapp.com/mknscg4zvttudp/img/1545386579437-1.png",
      imageStyles: "mt-[5px] w-[59px] h-[55px] object-cover",
    },
  ];

  const paginationDots = [
    { active: true, bgColor: "bg-[#7bb302]" },
    { active: false, bgColor: "bg-neutral-90" },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-[90px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
      <div className="max-w-[1320px] mx-auto w-full">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2.5 p-3 mb-8 bg-[#7bb302] rounded-[40px]">
          <img
            className="relative w-6 h-6"
            alt="Video icon"
            src="https://c.animaapp.com/mknscg4zvttudp/img/vuesax-bold-video-circle.svg"
          />
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h2 className="[font-family:'Geist',Helvetica] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[-1px] lg:tracking-[-2px] leading-tight lg:leading-[70px] mb-8">
            <span className="text-[#7cb403]">Key Questions </span>
            <span className="text-[#ed2939]">Discussed</span>
          </h2>
        </div>

        {/* Session Title with Border */}
        <div className="flex items-center gap-4 pb-6 mb-8 border-b border-neutral-200">
          <h3 className="flex-1 [font-family:'Geist',Helvetica] font-medium text-xl sm:text-2xl md:text-[29px] tracking-[-0.8px] lg:tracking-[-1.16px] leading-tight">
            <span className="text-[#7bb302]">Session 01 - Beyond Resilience: </span>
            <span className="text-[#ed2939]">Redefining Leadership Strength and Organizational Agility</span>
          </h3>
          <button
            type="button"
            aria-label="Export session"
            className="flex-shrink-0 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
          >
            <img
              className="w-full h-full"
              alt="Export"
              src="https://c.animaapp.com/mknscg4zvttudp/img/vuesax-linear-export.svg"
            />
          </button>
        </div>

        {/* Session Description */}
        <div className="mb-12">
          <p className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Resilience means bouncing back after disruption — recovering from adversity. But "Beyond Resilience" challenges leaders to go further than simply recovering. It's about adapting, reinventing, and thriving through change — turning disruption into transformation.
          </p>

          <div className="space-y-4">
            <h4 className="[font-family:'Geist',Helvetica] font-bold text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed">
              What It Means for Leadership
            </h4>

            <p className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed">
              For today's leaders, "Beyond Resilience" is about:
            </p>

            <ul className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed space-y-3 pl-6">
              <li>• Anticipating change instead of just reacting to it.</li>
              <li>• Transforming adversity into innovation.</li>
              <li>• Balancing strength with empathy — sustaining teams emotionally and mentally while driving performance.</li>
              <li>• Creating agility at the leadership core — the ability to pivot strategies, redeploy talent, and keep culture intact through volatility.</li>
            </ul>
          </div>
        </div>

        {/* Expert Profiles with Questions */}
        <div className="space-y-16">
          {/* Expert 1 - Echo Wu */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex items-start gap-4 flex-shrink-0">
              <div className="w-[60px] h-[60px] flex justify-center bg-[#00000033] rounded-full overflow-hidden border-2 border-solid border-white flex-shrink-0">
                <img
                  className={expertProfiles[0].imageStyles}
                  alt={expertProfiles[0].name}
                  src={expertProfiles[0].imageUrl}
                />
              </div>
              <div className="flex flex-col">
                <p className="[font-family:'Geist',Helvetica] font-medium text-[#222223] text-base sm:text-lg tracking-[-0.14px] leading-tight">
                  {expertProfiles[0].name}
                </p>
                <p className="[font-family:'Geist',Helvetica] font-normal text-[#939393] text-sm sm:text-base tracking-[-0.14px] leading-tight">
                  {expertProfiles[0].title}
                  {expertProfiles[0].subtitle && (
                    <>
                      <br />
                      {expertProfiles[0].subtitle}
                    </>
                  )}
                </p>
                <a
                  href={expertProfiles[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Geist',Helvetica] font-light text-[#939393] text-xs sm:text-sm tracking-[-0.14px] leading-tight hover:text-[#7bb302] transition-colors mt-1"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex-1 space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l border-neutral-200">
              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q1 - </span>
                  <span className="font-light text-[#222223]">
                    In today's volatile environment, how can leaders practically build mental toughness — not just for themselves but across their teams — to sustain high performance under pressure?
                  </span>
                </p>
              </div>

              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q2 - </span>
                  <span className="font-light text-[#222223]">
                    Calm, confidence, and clarity as the foundation for great leadership. How can executives cultivate these qualities amidst organizational chaos or transformation?
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Expert 2 - Avik Ghosh */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex items-start gap-4 flex-shrink-0">
              <div className="w-[60px] h-[60px] flex justify-center bg-[#00000033] rounded-full overflow-hidden border-2 border-solid border-white flex-shrink-0">
                <img
                  className={expertProfiles[1].imageStyles}
                  alt={expertProfiles[1].name}
                  src={expertProfiles[1].imageUrl}
                />
              </div>
              <div className="flex flex-col">
                <p className="[font-family:'Geist',Helvetica] font-medium text-[#222223] text-base sm:text-lg tracking-[-0.14px] leading-tight">
                  {expertProfiles[1].name}
                </p>
                <p className="[font-family:'Geist',Helvetica] font-normal text-[#939393] text-sm sm:text-base tracking-[-0.14px] leading-tight">
                  {expertProfiles[1].title}
                </p>
                <a
                  href={expertProfiles[1].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Geist',Helvetica] font-light text-[#939393] text-xs sm:text-sm tracking-[-0.14px] leading-tight hover:text-[#7bb302] transition-colors mt-1"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex-1 space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l border-neutral-200">
              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q1 - </span>
                  <span className="font-light text-[#222223]">
                    You've led large-scale organizational redesigns and new business expansions across diverse industries. When building organizations in emerging markets, how can leaders move beyond resilience — to create structures that are not only adaptive but strategically agile from day one?
                  </span>
                </p>
              </div>

              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q2 - </span>
                  <span className="font-light text-[#222223]">
                    In your experience aligning HR, business, and technology to drive transformation, what practical steps did you take to embed agility into the company's DNA — so that adaptability became part of how people think and operate every day?
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Expert 3 - Ella Sherman */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex items-start gap-4 flex-shrink-0">
              <div className="w-[60px] h-[60px] flex justify-center bg-[#00000033] rounded-full overflow-hidden border-2 border-solid border-white flex-shrink-0">
                <img
                  className={expertProfiles[2].imageStyles}
                  alt={expertProfiles[2].name}
                  src={expertProfiles[2].imageUrl}
                />
              </div>
              <div className="flex flex-col">
                <p className="[font-family:'Geist',Helvetica] font-medium text-[#222223] text-base sm:text-lg tracking-[-0.14px] leading-tight">
                  {expertProfiles[2].name}
                </p>
                <p className="[font-family:'Geist',Helvetica] font-normal text-[#939393] text-sm sm:text-base tracking-[-0.14px] leading-tight">
                  {expertProfiles[2].title}
                </p>
                <a
                  href={expertProfiles[2].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Geist',Helvetica] font-light text-[#939393] text-xs sm:text-sm tracking-[-0.14px] leading-tight hover:text-[#7bb302] transition-colors mt-1"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex-1 space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l border-neutral-200">
              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q1 - </span>
                  <span className="font-light text-[#222223]">
                    You've managed complex people dynamics across highly regulated environments. How can leaders balance empathy and governance when addressing conflict or organizational restructuring in today's transparent, multi-generational workforce?
                  </span>
                </p>
              </div>

              <div>
                <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                  <span className="font-bold text-[#ed2939]">Q2 - </span>
                  <span className="font-light text-[#222223]">
                    With AI and compliance reshaping HR's strategic function, how do you see the role of "human intelligence" — emotional, cultural, and ethical — evolving in board-level decision-making?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`relative w-2 h-2 ${dot.bgColor} rounded transition-all duration-300 ${
                dot.active ? 'w-8' : 'w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";

interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  linkedin: string;
  imageUrl: string;
  imageStyles: string;
}

interface Question {
  q: string;
  answer: string;
}

interface SessionContent {
  id: number;
  sessionTitle: string;
  sessionSubtitle: string;
  sessionDescription: string;
  sessionPoints: string[];
  experts: {
    profile: ExpertProfile;
    questions: Question[];
  }[];
}

export const KeyQuestionsSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const sessionContent: SessionContent[] = [
    {
      id: 0,
      sessionTitle: "Session 01 - Beyond Resilience: ",
      sessionSubtitle: "Redefining Leadership Strength and Organizational Agility",
      sessionDescription:
        "Resilience means bouncing back after disruption — recovering from adversity. But \"Beyond Resilience\" challenges leaders to go further than simply recovering. It's about adapting, reinventing, and thriving through change — turning disruption into transformation.",
      sessionPoints: [
        "Anticipating change instead of just reacting to it.",
        "Transforming adversity into innovation.",
        "Balancing strength with empathy — sustaining teams emotionally and mentally while driving performance.",
        "Creating agility at the leadership core — the ability to pivot strategies, redeploy talent, and keep culture intact through volatility.",
      ],
      experts: [
        {
          profile: expertProfiles[0],
          questions: [
            {
              q: "In today's volatile environment, how can leaders practically build mental toughness — not just for themselves but across their teams — to sustain high performance under pressure?",
              answer: "",
            },
            {
              q: "Calm, confidence, and clarity as the foundation for great leadership. How can executives cultivate these qualities amidst organizational chaos or transformation?",
              answer: "",
            },
          ],
        },
        {
          profile: expertProfiles[1],
          questions: [
            {
              q: "You've led large-scale organizational redesigns and new business expansions across diverse industries. When building organizations in emerging markets, how can leaders move beyond resilience — to create structures that are not only adaptive but strategically agile from day one?",
              answer: "",
            },
            {
              q: "In your experience aligning HR, business, and technology to drive transformation, what practical steps did you take to embed agility into the company's DNA — so that adaptability became part of how people think and operate every day?",
              answer: "",
            },
          ],
        },
        {
          profile: expertProfiles[2],
          questions: [
            {
              q: "You've managed complex people dynamics across highly regulated environments. How can leaders balance empathy and governance when addressing conflict or organizational restructuring in today's transparent, multi-generational workforce?",
              answer: "",
            },
            {
              q: "With AI and compliance reshaping HR's strategic function, how do you see the role of \"human intelligence\" — emotional, cultural, and ethical — evolving in board-level decision-making?",
              answer: "",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      sessionTitle: "Session 02 - Future Ready Leaders: ",
      sessionSubtitle: "Navigating Digital Transformation and Human Connection",
      sessionDescription:
        "In an era of rapid technological advancement, leaders must balance innovation with empathy. Future-ready leaders understand that digital transformation is not just about technology — it's about people, culture, and the human experience.",
      sessionPoints: [
        "Embracing digital transformation while maintaining human connection.",
        "Building psychological safety in remote and hybrid work environments.",
        "Developing digital literacy across all leadership levels.",
        "Creating sustainable performance cultures in the age of AI and automation.",
      ],
      experts: [
        {
          profile: expertProfiles[0],
          questions: [
            {
              q: "As organizations accelerate digital transformation, how do leaders maintain psychological safety and build trust when the work environment is constantly evolving?",
              answer: "",
            },
            {
              q: "What are the key mindset shifts leaders need to make to embrace uncertainty and lead through continuous change?",
              answer: "",
            },
          ],
        },
        {
          profile: expertProfiles[1],
          questions: [
            {
              q: "How can executives strategically integrate AI and automation into their operations while keeping human talent and growth at the center?",
              answer: "",
            },
            {
              q: "What role does storytelling and culture play in leading people through technological disruption?",
              answer: "",
            },
          ],
        },
        {
          profile: expertProfiles[2],
          questions: [
            {
              q: "How should HR evolve to become a strategic partner in digital transformation and talent innovation?",
              answer: "",
            },
            {
              q: "What skills and competencies will be most valued in leaders 5-10 years from now, and how do we develop them today?",
              answer: "",
            },
          ],
        },
      ],
    },
  ];

  const paginationDots = [
    { id: 0, label: "Session 1" },
    { id: 1, label: "Session 2" },
  ];

  const currentSession = sessionContent[currentPage];

  return (
    <section className="relative w-full bg-white py-10 sm:py-12 md:py-16 lg:py-[60px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
      <div className="max-w-[1320px] mx-auto w-full">
        {/* Header Badge and Title */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 p-3 bg-[#7bb302] rounded-[40px]">
              <img
                className="relative w-6 h-6"
                alt="Video icon"
                src="https://c.animaapp.com/mknscg4zvttudp/img/vuesax-bold-video-circle.svg"
              />
            </div>
            <h2 className="[font-family:'Geist',Helvetica] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[-0.8px] lg:tracking-[-1.68px] leading-tight lg:leading-[60px]">
              <span className="text-[#7cb403]">Key Questions </span>
              <span className="text-[#ed2939]">Discussed</span>
            </h2>
          </div>
        </div>

        {/* Animated Content Container */}
        <div className="transition-all duration-500 ease-in-out">
          {/* Session Title with Border */}
          <div className="flex items-center gap-4 pb-4 mb-6 border-b border-neutral-200">
            <h3 className="flex-1 [font-family:'Geist',Helvetica] font-medium text-xl sm:text-2xl md:text-[29px] tracking-[-0.8px] lg:tracking-[-1.16px] leading-tight">
              <span className="text-[#7bb302]">{currentSession.sessionTitle}</span>
              <span className="text-[#ed2939]">{currentSession.sessionSubtitle}</span>
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
          <div className="mb-8 sm:mb-10">
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5">
              {currentSession.sessionDescription}
            </p>

            <div className="space-y-4">
              <h4 className="[font-family:'Geist',Helvetica] font-bold text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed">
                What It Means for Leadership
              </h4>

              <p className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed">
                For today's leaders:
              </p>

              <ul className="[font-family:'Geist',Helvetica] font-normal text-[#8d8d8d] text-base sm:text-lg md:text-xl leading-relaxed space-y-3 pl-6">
                {currentSession.sessionPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expert Profiles with Questions */}
          <div className="space-y-16">
            {currentSession.experts.map((expert, expertIndex) => (
              <div key={expertIndex} className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex items-start gap-4 flex-shrink-0">
                  <div className="w-[60px] h-[60px] flex justify-center bg-[#00000033] rounded-full overflow-hidden border-2 border-solid border-white flex-shrink-0">
                    <img
                      className={expert.profile.imageStyles}
                      alt={expert.profile.name}
                      src={expert.profile.imageUrl}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="[font-family:'Geist',Helvetica] font-medium text-[#222223] text-base sm:text-lg tracking-[-0.14px] leading-tight">
                      {expert.profile.name}
                    </p>
                    <p className="[font-family:'Geist',Helvetica] font-normal text-[#939393] text-sm sm:text-base tracking-[-0.14px] leading-tight">
                      {expert.profile.title}
                      {expert.profile.subtitle && (
                        <>
                          <br />
                          {expert.profile.subtitle}
                        </>
                      )}
                    </p>
                    <a
                      href={expert.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[font-family:'Geist',Helvetica] font-light text-[#939393] text-xs sm:text-sm tracking-[-0.14px] leading-tight hover:text-[#7bb302] transition-colors mt-1"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="flex-1 space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l border-neutral-200">
                  {expert.questions.map((question, qIndex) => (
                    <div key={qIndex}>
                      <p className="[font-family:'Geist',Helvetica] text-base sm:text-lg md:text-[19px] leading-relaxed">
                        <span className="font-bold text-[#ed2939]">Q{qIndex + 1} - </span>
                        <span className="font-light text-[#222223]">{question.q}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-16">
          {paginationDots.map((dot) => (
            <button
              key={dot.id}
              onClick={() => setCurrentPage(dot.id)}
              className={`relative h-2 rounded transition-all duration-300 cursor-pointer touch-manipulation ${
                dot.id === currentPage ? 'w-8 bg-[#7bb302]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={dot.label}
              aria-current={dot.id === currentPage ? "true" : "false"}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

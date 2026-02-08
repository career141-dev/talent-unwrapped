import { EXPERT_IMAGES } from "../assets";

export interface ExpertProfile {
    id: string;
    name: string;
    title: string;
    subtitle?: string;
    linkedin: string;
    imageUrl: string;
    imageStyles: string;
}

export interface Question {
    q: string;
    answer: string;
}

export interface SessionContent {
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

export const EXPERT_PROFILES: ExpertProfile[] = [
    {
        id: "echo-wu",
        name: "Echo Wu",
        title: "Leadership & Mental",
        subtitle: "Toughness Expert",
        linkedin: "https://www.linkedin.com/in/echoleadership/",
        imageUrl: EXPERT_IMAGES.echoWu,
        imageStyles: "w-[60px] h-[60px] object-cover",
    },
    {
        id: "avik-ghosh",
        name: "Avik Ghosh",
        title: "Executive Director",
        subtitle: "",
        linkedin: "https://www.linkedin.com/in/avikghosh/",
        imageUrl: EXPERT_IMAGES.avikGhosh,
        imageStyles: "mt-px w-[59px] h-[59px] object-cover",
    },
    {
        id: "ella-sherman",
        name: "Ella Sherman",
        title: "Head of HR APAC",
        subtitle: "",
        linkedin: "https://www.linkedin.com/in/ella-sherman",
        imageUrl: EXPERT_IMAGES.ellaSherman,
        imageStyles: "mt-[5px] w-[59px] h-[55px] object-cover",
    },
];

export const SESSION_CONTENT: SessionContent[] = [
    {
        id: 0,
        sessionTitle: "Session 01 - Beyond Resilience: ",
        sessionSubtitle:
            "Redefining Leadership Strength and Organizational Agility",
        sessionDescription:
            'Resilience means bouncing back after disruption — recovering from adversity. But "Beyond Resilience" challenges leaders to go further than simply recovering. It\'s about adapting, reinventing, and thriving through change — turning disruption into transformation.',
        sessionPoints: [
            "Anticipating change instead of just reacting to it.",
            "Transforming adversity into innovation.",
            "Balancing strength with empathy — sustaining teams emotionally and mentally while driving performance.",
            "Creating agility at the leadership core — the ability to pivot strategies, redeploy talent, and keep culture intact through volatility.",
        ],
        experts: [
            {
                profile: EXPERT_PROFILES[0],
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
                profile: EXPERT_PROFILES[1],
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
                profile: EXPERT_PROFILES[2],
                questions: [
                    {
                        q: "You've managed complex people dynamics across highly regulated environments. How can leaders balance empathy and governance when addressing conflict or organizational restructuring in today's transparent, multi-generational workforce?",
                        answer: "",
                    },
                    {
                        q: 'With AI and compliance reshaping HR\'s strategic function, how do you see the role of "human intelligence" — emotional, cultural, and ethical — evolving in board-level decision-making?',
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
                profile: EXPERT_PROFILES[0],
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
                profile: EXPERT_PROFILES[1],
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
                profile: EXPERT_PROFILES[2],
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

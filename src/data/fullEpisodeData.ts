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
    {
        id: "mohammed-haffejee",
        name: "Mohammed Haffejee",
        title: "AVP Senior HRBP",
        subtitle: "Emirates NBD",
        linkedin: "https://www.linkedin.com/in/mohammed-haffejee-6b26543/",
        imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618640/1756292060602_1_df82j8.png",
        imageStyles: "w-[60px] h-[60px] object-cover",
    },
    {
        id: "gargi-bannerjee",
        name: "Gargi Bannerjee",
        title: "VP HR",
        subtitle: "SkipperSeil Limited",
        linkedin: "https://www.linkedin.com/in/gargi-banerjee-strategichr/",
        imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618639/1621657233961_1_helgwf.png",
        imageStyles: "w-[60px] h-[60px] object-cover",
    },
    {
        id: "franklyn-henriques",
        name: "Franklyn Henriques",
        title: "Regional HR Director",
        subtitle: "SGS (Middle East)",
        linkedin: "https://www.linkedin.com/in/franklyn-henriques-chartered-fcipd-339aa05/",
        imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618638/1545386579437_1_vl1nrk.png",
        imageStyles: "w-[60px] h-[60px] object-cover",
    },
];

export const SINGAPORE_SESSION_CONTENT: SessionContent[] = [
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
];

export const DUBAI_SESSION_CONTENT: SessionContent[] = [
    {
        id: 0,
        sessionTitle: "Session 01 - From HR to Business Impact: ",
        sessionSubtitle: "Building Future-Ready Teams in GCC",
        sessionDescription:
            "The GCC region is undergoing rapid economic transformation. HR leaders are no longer just support functions but strategic partners driving business impact. This session explores how to build teams that are ready for the future challenges of the region.",
        sessionPoints: [
            "Aligning HR strategy with national vision and business goals.",
            "Navigating talent acquisition and retention in a competitive market.",
            "Fostering a culture of innovation and continuous learning.",
            "Leveraging data and technology to drive workforce planning.",
        ],
        experts: [
            {
                profile: EXPERT_PROFILES[3],
                questions: [
                    {
                        q: "From your experience across global HR operations, what do you see as the biggest shift happening in the HR function today—and how should organisations prepare for it?",
                        answer: "",
                    },
                    {
                        q: "What practical advice would you give companies in the UAE and GCC trying to balance efficiency, employee experience, and nationalisation goals all at once?",
                        answer: "",
                    },
                ],
            },
            {
                profile: EXPERT_PROFILES[4],
                questions: [
                    {
                        q: "You strongly believe HR is a business engine. In simple terms, what makes HR truly commercial—and why do some organisations still miss this link?",
                        answer: "",
                    },
                    {
                        q: "From your 20+ years across multiple sectors, what have you learned about building future-ready talent pipelines that leaders can actually rely on?",
                        answer: "",
                    },
                ],
            },
            {
                profile: EXPERT_PROFILES[5],
                questions: [
                    {
                        q: "From your regional experience, what are the top challenges organisations face when trying to transform, and what separates the ones that succeed from the ones that stagnate?",
                        answer: "",
                    },
                    {
                        q: "What does it truly take for a professional to thrive in the GCC today — in terms of skills, readiness, and the mindset required to stay competitive in this fast-evolving market?",
                        answer: "",
                    },
                ],
            },
        ],
    },
];

export const getSessionContentByEdition = (edition: "dubai" | "singapore" = "dubai") => {
    return edition === "singapore" ? SINGAPORE_SESSION_CONTENT : DUBAI_SESSION_CONTENT;
};

// Deprecated: default export for backward compatibility
export const SESSION_CONTENT = SINGAPORE_SESSION_CONTENT;

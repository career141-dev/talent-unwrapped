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
    {
        id: "ayin-shah-jahan",
        name: "Ayin Shah Jahan",
        title: "Location Talent Leader",
        subtitle: "EY GDS Sri Lanka",
        linkedin: "https://www.linkedin.com/",
        imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770618640/1756292060602_1_df82j8.png",
        imageStyles: "w-[60px] h-[60px] object-cover",
    },
    {
        id: "sumudu-thanthirigoda",
        name: "Sumudu Thanthirigoda",
        title: "CEO",
        subtitle: "Maliban Group",
        linkedin: "https://www.linkedin.com/",
        imageUrl: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👤</text></svg>",
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

export const SRI_LANKA_SESSION_CONTENT: SessionContent[] = [
    {
        id: 0,
        sessionTitle: "Session 01 - Talent Suite Colombo 2025: ",
        sessionSubtitle: "Building Future-Ready Talent in Sri Lanka",
        sessionDescription:
            "Exploring the evolving landscape of talent in Sri Lanka, this session brings together leaders to discuss how organizations can build future-ready teams amid digital disruption and changing market dynamics.",
        sessionPoints: [
            "Strategies for talent development in the Sri Lankan market.",
            "Adapting to digital disruption and AI in HR.",
            "Leadership agility in a fast-evolving economy.",
            "Fostering innovation and sustainable growth.",
        ],
        experts: [
            {
                profile: EXPERT_PROFILES[6],
                questions: [
                    {
                        q: "How are you seeing talent trends evolve in the Sri Lankan market, and what should leaders focus on for the next 5 years?",
                        answer: "",
                    },
                    {
                        q: "What role does organizational culture play in retaining top talent in a competitive global landscape?",
                        answer: "",
                    },
                ],
            },
            {
                profile: EXPERT_PROFILES[7],
                questions: [
                    {
                        q: "As a CEO, how do you balance long-term strategic growth with the immediate need for agility and adaptation?",
                        answer: "",
                    },
                    {
                        q: "What are the common pitfalls organizations face when trying to scale their talent pipelines?",
                        answer: "",
                    },
                ],
            },
        ],
    },
];

export const getSessionContentByEdition = (edition: "dubai" | "singapore" | "sri-lanka" = "dubai") => {
    if (edition === "singapore") return SINGAPORE_SESSION_CONTENT;
    if (edition === "sri-lanka") return SRI_LANKA_SESSION_CONTENT;
    return DUBAI_SESSION_CONTENT;
};

// Deprecated: default export for backward compatibility
export const SESSION_CONTENT = SINGAPORE_SESSION_CONTENT;

export const EPISODE_3_CUSTOM_CONTENT = {
    expertName: "Ayin Shah Jahan",
    expertTitle: "Location Talent Leader",
    expertSubtitle: "EY GDS Sri Lanka",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770883420/Frame_4449057_1_1_npu1wb.png",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "What worries or surprises Ayin Shah Jahan about Sri Lankan talent?",
            answer: "",
        },
        {
            q: "How do culture and diversity influence inclusive leadership in Sri Lanka?",
            answer: "",
        },
        {
            q: "What are the most pressing skill gaps in Sri Lanka's workforce today?",
            answer: "",
        },
    ]
};

export const EPISODE_4_CUSTOM_CONTENT = {
    expertName: "Sumudu Thanthirigoda",
    expertTitle: "CEO",
    expertSubtitle: "Maliban Group, Milk and Agri",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👤</text></svg>",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "What worries or surprises Sumudu most about Sri Lankan talent if it were “a gift you unwrap”?",
            answer: "",
        },
        {
            q: "How critical is employer branding in consumer-driven industries where the product brand often overshadows the corporate identity?",
            answer: "",
        },
        {
            q: "How are organizations adapting to changing talent expectations and evolving retention values today?",
            answer: "",
        },
    ]
};

export const EPISODE_5_CUSTOM_CONTENT = {
    expertName: "Surani Amarasinghe",
    expertTitle: "Director Country People Partnering",
    expertSubtitle: "LSEG",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770886780/Frame_4449056_1_hxhoao.png",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "What concerns exist around the confidence and global competitiveness of Sri Lankan talent?",
            answer: "",
        },
        {
            q: "How can best practices be successfully adapted across industries without conflicting with a new organization’s culture or business model?",
            answer: "",
        },
        {
            q: "What strategies are most effective for attracting and retaining top talent across different industries?",
            answer: "",
        },
    ]
};

export const EPISODE_6_CUSTOM_CONTENT = {
    expertName: "Ashan Ransilige",
    expertTitle: "CEO",
    expertSubtitle: "Link Natural Product (Pvt) Ltd",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770886856/Frame_4449055_1_tegt2m.png",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "What first reactions arise when Sri Lankan talent is viewed as a “gift” in a global context?",
            answer: "",
        },
        {
            q: "How has globalization influenced employment practices, redundancy approaches, and cultural transformation across markets?",
            answer: "",
        },
        {
            q: "What challenges does Sri Lankan talent face globally, and what shifts are needed for individuals and organizations to stay competitive?",
            answer: "",
        },
    ]
};

export const EPISODE_7_CUSTOM_CONTENT = {
    expertName: "Inoka Dias",
    expertTitle: "Senior Director/Head of Human Resource",
    expertSubtitle: "Virtusa",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770887023/Frame_4449058_1_qy12hi.png",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "What defines Sri Lankan talent today, and what challenges exist in retaining talent within the country?",
            answer: "",
        },
        {
            q: "How can organizations help employees thrive in rapidly evolving digital roles without burnout or disengagement?",
            answer: "",
        },
        {
            q: "How can HR leaders balance efficiency from AI and automation with human-centric talent management, including upskilling and redeployment?",
            answer: "",
        },
    ]
};

export const EPISODE_8_CUSTOM_CONTENT = {
    expertName: "Karthik Badrinath",
    expertTitle: "Head of Sales Development",
    expertSubtitle: "LinkedIn-India",
    linkedin: "https://www.linkedin.com/",
    imageUrl: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👤</text></svg>",
    imageStyles: "w-[60px] h-[60px] object-cover",
    questions: [
        {
            q: "Should organizations move fully toward remote work or return employees to the office?",
            answer: "",
        },
        {
            q: "How can leaders balance cost control with employee well-being in a transforming workplace?",
            answer: "",
        },
        {
            q: "How can organizations integrate AI-driven efficiency while maintaining human-centered leadership?",
            answer: "",
        },
        {
            q: "How can AI be used to augment human potential rather than replace human roles?",
            answer: "",
        },
        {
            q: "Why is trust considered the new productivity engine in modern organizations?",
            answer: "",
        },
    ]
};

export interface ReelVideo {
    id: number;
    videoUrl: string;
    title: string;
    description: string;
    thumbnailUrl?: string; // Added for poster image
    edition?: string; // Added to distinguishing editions
}

const SINGAPORE_REELS_SOURCE = [
    {
        id: 1,
        title: "Two Paramount Things for an Agile Organization",
        description: "(Disruptions today impact everything…) Two essentials for building an agile organization: strong listening/sensing across internal and external environments, and the ability to convert insight into decisions and action at speed.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQB0KDtpXrtiTa2t_W26ZI0CAZwo6OLdKvD1FykffhsC7zM?e=a0G8dr&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709637/Unwrapped_thumbnail_-_Avik_1_de0dh5.png",
        edition: "Singapore"
    },
    {
        id: 2,
        title: "Mental Toughness: Surviving vs. Thriving",
        description: "(People really like to work with them even when the situation is tough…) Mental toughness goes beyond resilience—calmness, confidence, and a challenge mindset enable teams to sustain performance under pressure.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQBY41oAWEwkRYZFRbrPaIFIAep__5q-vIQzqvKo7RUGI4o?e=UfkFxx&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709853/Unwrapped_thumbnail_-_Echo_1_g0i2ae.png",
        edition: "Singapore"
    },
    {
        id: 3,
        title: "Agility Is Systemic, Not Just Individual Behavior",
        description: "(So I think for me agility is a lot more than just…) Agility must be designed into the organization—breaking silos across business, HR, and technology so adaptability becomes the default operating model.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQDABvo3UXIoQoJ4d5RbjnpfAUO4kWaxK8lpTH6qtPcnsJU?e=hA9pdX&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709636/Unwrapped_thumbnail_-_Avik_2_izrbve.png",
        edition: "Singapore"
    },
    {
        id: 4,
        title: "How to Measure Agility: Reading Energy Flows",
        description: "(So if there is energy loss happening in any system…) A practical way to assess agility is to track where the organization gains or loses energy—friction points, decision delays, information gaps—and use analytics to act on what the data reveals.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQDYsXKwW_4KRoEPYxUkCPlwAX6pWWMXEw8fWLjLnDDzK7U?e=6Gqq9I&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709638/Unwrapped_thumbnail_-_Avik_3_fdzecl.png",
        edition: "Singapore"
    },
    {
        id: 5,
        title: "Leadership Beyond Resilience: Orchestrating Energy",
        description: "(I think the real demand and coming back to something…) Great leaders read the organization’s energy—frustrations, frictions, and momentum—before dashboards show it, and they know how to orchestrate that energy to drive performance.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQCcRqHotNfLQZtM2gneBk7TASfAsUpUGVZKgeMRczb2P7w?e=FL6zCk&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709637/Unwrapped_thumbnail_-_Avik_4_zro5d4.png",
        edition: "Singapore"
    },
    {
        id: 6,
        title: "Practice What You Preach on Employee Wellness",
        description: "(Should be having actual opportunities for people…) Employee wellness must move beyond policies and campaigns—organizations need real support systems, sustainable workloads, and clear boundaries that allow people to switch off and recover.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQCE7_tSAWI1SbHnaXkv0La4AWM3O777lW0hlDpa2GVbnyo?e=VVLcrc&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709852/Unwrapped_thumbnail_-_Ella_2_r6uwdx.png",
        edition: "Singapore"
    },
    {
        id: 7,
        title: "Calmness and Clarity: The Free Diver’s Mindset",
        description: "(As great leaders end of the day…) Calm leadership is trainable—through breathing, awareness, and mindset. In chaos, leaders who regulate themselves make clearer decisions and create stability for their teams.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQA5CEUywJj_T60TxxKc580OAWhVGye52r8pzjFygdM3cpc?e=cHsDcP&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709852/Unwrapped_thumbnail_-_Echo_2_copy_wkmwlm.png",
        edition: "Singapore"
    },
    {
        id: 8,
        title: "The Human Touch in the Age of AI",
        description: "(So AI is certainly paving the way for efficiencies…) AI can transform HR efficiency, but organizations must protect the human experience—especially in hiring, employee relations, and ethically sensitive moments where empathy and judgment matter most.",
        videoUrl: "https://careerc141.sharepoint.com/:v:/s/DIGITALTEAM/IQDn6b0nE_R1SJtmD2MRtjodAQPQyxSRihueIhS9Pj56Hec?e=ZFCQDn&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709851/Unwrapped_thumbnail_-_Ella_1_ktt1nm.png",
        edition: "Singapore"
    }
];

// Duplicate the Singapore reels to reach 16 items as required for now
// In a real scenario, the second 8 would be Dubai reels
export const REELS_DATA: ReelVideo[] = [
    ...SINGAPORE_REELS_SOURCE,
    ...SINGAPORE_REELS_SOURCE.map(reel => ({
        ...reel,
        id: reel.id + 8, // Shift IDs for the second batch
        edition: "Dubai" // Placeholder edition label
    }))
];

export interface ReelVideo {
    id: number;
    videoUrl: string;
    title: string;
    description: string;
    thumbnailUrl?: string;
    edition?: string;
}

const SINGAPORE_REELS_SOURCE = [
    {
        id: 1,
        title: "Two Paramount Things for an Agile Organization",
        description: "(Disruptions today impact everything…) Two essentials for building an agile organization: strong listening and sensing, and the ability to convert insight into action at speed.",
        videoUrl: "https://www.youtube.com/embed/IfQAJBQhrBg",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709637/Unwrapped_thumbnail_-_Avik_1_de0dh5.png",
        edition: "Singapore"
    },
    {
        id: 2,
        title: "Mental Toughness: Surviving vs Thriving",
        description: "(People really like to work with them even when the situation is tough…) Mental toughness goes beyond resilience — calmness, confidence, and challenge mindset drive high performance.",
        videoUrl: "https://www.youtube.com/embed/Co2JDUgjzRs",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709853/Unwrapped_thumbnail_-_Echo_1_g0i2ae.png",
        edition: "Singapore"
    },
    {
        id: 3,
        title: "Agility Is Systemic, Not Just Individual",
        description: "(So I think for me agility is a lot more than just…) Agility must be embedded into organizational design across business, HR and technology.",
        videoUrl: "https://www.youtube.com/embed/bvJcQBQT6E8",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709636/Unwrapped_thumbnail_-_Avik_2_izrbve.png",
        edition: "Singapore"
    },
    {
        id: 4,
        title: "Measuring Agility Through Energy",
        description: "(So if there is energy loss happening in any system…) Understanding where organizations gain or lose energy helps design true agility.",
        videoUrl: "https://www.youtube.com/embed/Tkm_d0zvzEc",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709638/Unwrapped_thumbnail_-_Avik_3_fdzecl.png",
        edition: "Singapore"
    },
    {
        id: 5,
        title: "Leadership Beyond Resilience",
        description: "(I think the real demand…) Leaders must read and orchestrate organizational energy to move beyond resilience into real performance.",
        videoUrl: "https://www.youtube.com/embed/Qckzt2JnfJA",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709637/Unwrapped_thumbnail_-_Avik_4_zro5d4.png",
        edition: "Singapore"
    },
    {
        id: 6,
        title: "Practice What You Preach on Wellness",
        description: "(Should be having actual opportunities for people…) Employee wellness must be real and actionable, not just policies or messaging.",
        videoUrl: "https://www.youtube.com/embed/pzqttBRPe_c",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709852/Unwrapped_thumbnail_-_Ella_2_r6uwdx.png",
        edition: "Singapore"
    },
    {
        id: 7,
        title: "Calmness and Clarity in Leadership",
        description: "(As great leaders end of the day…) Leaders who manage mindset, breathing, and awareness stay calm and decisive during chaos.",
        videoUrl: "https://www.youtube.com/embed/04Dd99rH20k",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709852/Unwrapped_thumbnail_-_Echo_2_copy_wkmwlm.png",
        edition: "Singapore"
    },
    {
        id: 8,
        title: "Human Touch in the Age of AI",
        description: "(So AI is certainly paving the way…) Technology improves efficiency, but organizations must protect human empathy and judgment.",
        videoUrl: "https://www.youtube.com/embed/2XvJs2YTox8",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770709851/Unwrapped_thumbnail_-_Ella_1_ktt1nm.png",
        edition: "Singapore"
    }
];

const DUBAI_REELS_SOURCE = [
    {
        id: 9,
        title: "Why Curiosity Beat Experience in Leadership Growth",
        videoUrl: "https://www.youtube.com/embed/-AQj4q7Ymyg",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791419/Frame_1000003799_k8puhf.png",
        description: "It's not the smartest. It's not the most experienced. The leaders who grow are the ones who stay curious, adaptable, and willing to learn. A powerful reminder drawn from leadership development experiences and insights shared by Franklyn Henriques and Ajmal Hussain.",
        edition: "Dubai"
    },
    {
        id: 10,
        title: "Nationalization Done Right: From Hiring Quotas to Talent Pipelines",
        videoUrl: "https://www.youtube.com/embed/6_clS1_RJsk",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791423/Frame_1000003801_q9huic.png",
        description: "Nationalization is not about numbers. It's about quality, movement, and opportunity. Organizations that focus on developing national talent build stronger pipelines and better cultures. Perspectives shaped through conversations with Ajmal Hussain and Mohammed Haffejee.",
        edition: "Dubai"
    },
    {
        id: 11,
        title: "Leading Large-Scale Location Transformations Without Breaking the Business",
        videoUrl: "https://www.youtube.com/embed/3PsHr9Re3bA",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791419/Frame_1000003798_chw5ji.png",
        description: "Transformation is not just about moving work — it's about protecting continuity, managing risk, and taking people along. When done right, location transformations don't disrupt the business — they build the future. Insights from Gargi Bannerjee and Franklyn Henriques.",
        edition: "Dubai"
    },
    {
        id: 12,
        title: "Why HR Transformations Fail Without Communication and Capability",
        videoUrl: "https://www.youtube.com/embed/7_I5azq8KDo",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791427/Frame_1000003800_t6advc.png",
        description: "Most HR transformations don't fail because of technology. They fail because the business doesn't understand the why — and capability is assumed, not built. Clear communication and real capability investment are the real success formula.",
        edition: "Dubai"
    },
    {
        id: 13,
        title: "How HR Earns the Seat at the Table: From Process Partner to Business Partner",
        videoUrl: "https://www.youtube.com/embed/SZPx2g6ziUw",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791424/Frame_1000003802_gtjp7a.png",
        description: "A seat at the table is not asked for — it's earned. HR earns credibility when it speaks the language of business and links people decisions to real outcomes. Reflections inspired by discussions with Gargi Bannerjee and Franklyn Henriques.",
        edition: "Dubai"
    },
    {
        id: 14,
        title: "The Real Cost HR Needs to Talk About: Beyond Cost per Hire",
        videoUrl: "https://www.youtube.com/embed/yV73MLf2aQQ",
        thumbnailUrl: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770791428/Frame_1000003803_rwingb.png",
        description: "We talk a lot about cost per hire. But do we talk enough about the cost of the wrong hire and long vacancy days? When HR links hiring decisions to revenue risk and productivity loss, the conversation shifts from process to outcomes.",
        edition: "Dubai"
    }
];

const SRI_LANKA_REELS_SOURCE = [
    {
        id: 15,
        title: "Building Future-Ready Talent in Sri Lanka",
        videoUrl: "https://www.youtube.com/embed/WI_QCvUUfgw",
        thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-2@2x.png",
        description: "Insights from the Talent Suite Colombo 2025 on reshaping leadership and talent development in the region.",
        edition: "Sri Lanka"
    },
    {
        id: 16,
        title: "CEO Insights: Growth and Agility",
        videoUrl: "https://www.youtube.com/embed/ZOVPQRmFpRw",
        thumbnailUrl: "https://c.animaapp.com/6IK4krLc/img/video-3@2x.png",
        description: "Maliban Group CEO shares perspectives on driving agility and sustainable growth in competitive markets.",
        edition: "Sri Lanka"
    }
];

// Export combined reels data in a mixed order by interleaving editions (Singapore and Dubai only)
export const REELS_DATA: ReelVideo[] = (() => {
    const mixedCount = Math.max(
        SINGAPORE_REELS_SOURCE.length,
        DUBAI_REELS_SOURCE.length
    );
    const result: ReelVideo[] = [];

    for (let i = 0; i < mixedCount; i++) {
        if (i < SINGAPORE_REELS_SOURCE.length) result.push(SINGAPORE_REELS_SOURCE[i]);
        if (i < DUBAI_REELS_SOURCE.length) result.push(DUBAI_REELS_SOURCE[i]);
    }

    return result;
})();

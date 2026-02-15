/**
 * Centralized Assets Configuration
 */

export const ASSETS = {
    logo: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770915535/Artboard_3_1_5_kzzyhs.png",
    prasperant: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770609977/Artboard_1_copy_2x_xhwixf.png",
    contactBanner: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770915535/Artboard_3_1_5_kzzyhs.png",
    manInHeadphones: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770805222/Frame_1000003696_kdgg5i.png",
    youngBlackMan: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770805222/Frame_1000003561_1_uzsupn.png",
    professionalMicrophone: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770915545/Frame_1000003710_zcypj4.png",
    handsomeElegantMen: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770896296/Group_39885_dqyew3.jpg",
    professionalBusinessman: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770896213/Group_39884_hcx9sa.jpg",
    recreationArea: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770896137/Group_39883_xiydss.jpg",
    teamReporters: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770896055/Group_39882_2_wj3cps.jpg",
    fourPeopleMeeting: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770895938/Group_39881_qvljdb.jpg",
};

export const EPISODE_IMAGES = {
    handsomeElegantMen: ASSETS.handsomeElegantMen,
    professionalBusinessman: ASSETS.professionalBusinessman,
    recreationArea: ASSETS.recreationArea,
    teamReporters: ASSETS.teamReporters,
    fourPeopleMeeting: ASSETS.fourPeopleMeeting,
};

export const LOGOS = {
    logo: ASSETS.logo,
    contactBanner: ASSETS.contactBanner,
    prasperant: ASSETS.prasperant,
};

export const DECORATIVE_IMAGES = {
    manInHeadphones: ASSETS.manInHeadphones,
    youngBlackMan: ASSETS.youngBlackMan,
    professionalMicrophone: ASSETS.professionalMicrophone,
};

export const EXPERT_IMAGES = {
    echoWu: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1756292060602_1_5_arkico.png",
    avikGhosh: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1621657233961_1_dbrjce.png",
    ellaSherman: "https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770617937/1545386579437_1_rv6wmx.png",
};

export const SPEAKER_IMAGES = EXPERT_IMAGES;

export const LINKS = {
    socials: {
        youtube: "https://www.youtube.com/@TalentUnwrapped",
        linkedin: "https://www.linkedin.com/company/talent-unwrapped",
        instagram: "https://www.instagram.com/talentunwrapped",
        whatsapp: "https://wa.me/yourphonenumber",
    },
    contact: {
        email: "hello@talentunwrapped.com",
        whatsapp: "https://wa.me/yourphonenumber",
    },
    platforms: {
        spotify: "https://open.spotify.com/show/...",
        applePodcasts: "https://podcasts.apple.com/...",
    },
    executiveSearch: "https://career141.com/executive-search",
    culture: "https://career141.com/our-culture",
    ourJourney: "https://career141.com/our-journey",
    jobs: "https://career141.com/job-openings",
    contactUs: "https://career141.com/contact-us",
    CAREER141: "https://www.career141.com",
};

export { EPISODES, LATEST_PODCASTS, getEpisodesByEdition, getEpisodeById } from "../data/episodes";

export default ASSETS;

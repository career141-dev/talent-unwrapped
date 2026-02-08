import { JoinUsForm } from "../../Forms";
import { FORM_ICONS } from "@/assets";
import { SECTION_DESCRIPTIONS, FORMS_CONTENT } from "@/constants/copy";

export const SubmitFormSection = (): JSX.Element => {
  const features = [
    {
      icon: FORM_ICONS.dynamicForm,
      title: FORMS_CONTENT.FEATURE_TITLE_1,
      description: SECTION_DESCRIPTIONS.PROFESSIONAL_COMMUNITY,
    },
    {
      icon: FORM_ICONS.assignmentInd,
      title: FORMS_CONTENT.FEATURE_TITLE_2,
      description: FORMS_CONTENT.FEATURE_DESC_2,
    },
    {
      icon: FORM_ICONS.shape,
      title: FORMS_CONTENT.FEATURE_TITLE_3,
      description: FORMS_CONTENT.FEATURE_DESC_3,
    },
  ];

  return (
    <section
      id="join-us"
      className="flex w-full max-w-[1500px] flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 lg:py-20 relative bg-white mx-auto"
    >
      {/* Left Side - Insights Box */}
      <div className="relative w-full lg:w-[620px] flex-shrink-0">
        <div
          className="relative w-full h-auto lg:h-full bg-white rounded-3xl
                  p-5 sm:p-7 lg:p-0
                  flex flex-col justify-start lg:gap-12"
        >
          {/* Main Heading */}
          <div className="mb-4 sm:mb-5 lg:mb-0">
            <h2
              className="[font-family:'Geist',Helvetica] font-medium text-transparent
               text-[40px] leading-[1.15]
               sm:text-5xl md:text-6xl lg:text-[64px]
               tracking-[-1px] sm:tracking-[-1.8px] lg:tracking-[-2.56px] lg:leading-[1.1]"
            >
              <span className="text-[#7bb302]">{FORMS_CONTENT.HEADING_READY}</span>
              <span className="text-[#ed2939]">{FORMS_CONTENT.HEADING_UNWRAP}</span>
              <br className="block sm:hidden" />
              <span className="text-[#7bb302]">{FORMS_CONTENT.HEADING_YOUR}</span>
              <span className="text-[#ed2939]">{FORMS_CONTENT.HEADING_INSIGHTS}</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-7 lg:mb-0">
            <p
              className="[font-family:'Geist',Helvetica] font-normal text-black
                    text-base sm:text-lg lg:text-[18.7px]
                    tracking-[0] leading-[1.6] sm:leading-[1.65] lg:leading-[28.1px]"
            >
              {SECTION_DESCRIPTIONS.SUBMIT_FORM_DESC}
            </p>
          </div>

          {/* Features List */}
          <div
            className="flex-1 flex flex-col
                    gap-4 sm:gap-5 lg:gap-6
                    justify-start"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 lg:gap-2
                     opacity-80 hover:opacity-100
                     transition-opacity duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 lg:w-[30px] lg:h-7 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    alt={feature.title}
                    src={feature.icon}
                  />
                </div>

                <div className="flex-1">
                  <p
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#444141]
                          text-sm sm:text-base lg:text-[14.1px]
                          tracking-[0] leading-[1.6] sm:leading-[1.65] lg:leading-[19.9px]"
                  >
                    <span className="font-bold">{feature.title}</span>
                    <span className="ml-1">{feature.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex flex-col items-start justify-center gap-0 relative w-full lg:w-[540px] h-auto lg:h-full lg:min-h-[550px] bg-white rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-12 lg:ml-0 mt-0 lg:mt-0">
        <JoinUsForm />
      </div>
    </section>
  );
};

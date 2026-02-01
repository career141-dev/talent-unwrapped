import { FormEvent, useState } from "react";

export const SubmitFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    designation: "",
  });

  const features = [
    {
      icon: "https://c.animaapp.com/mknnhkkeW4H68A/img/dynamic-form-black-24dp.png",
      title: "Be part of a meaningful exchange.",
      description:
        "Share your perspective with a community of 100K+ professionals worldwide",
    },
    {
      icon: "https://c.animaapp.com/mknnhkkeW4H68A/img/ic-assignment-ind.png",
      title: "Build lasting connections.",
      description:
        "Join conversations with leaders shaping the next era of business.",
    },
    {
      icon: "https://c.animaapp.com/mknnhkkeW4H68A/img/shape.svg",
      title: "Grow together.",
      description:
        "Explore partnership opportunities that create impact beyond the episode.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      designation: "",
    });
  };

  return (

    <section id="join-us" className="flex w-full max-w-[1500px] flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-[60px] py-12 lg:py-20 relative bg-white mx-auto">

      {/* Left Side - Insights Box */}
      <div className="relative w-full lg:w-[620px] flex-shrink-0">
        <div className="relative w-full h-auto lg:h-full bg-white rounded-3xl
                  p-5 sm:p-7 lg:p-0
                  flex flex-col justify-start lg:gap-12">

          {/* Main Heading */}
          <div className="mb-4 sm:mb-5 lg:mb-0">
            <h2
              className="[font-family:'Geist',Helvetica] font-medium text-transparent
               text-[40px] leading-[1.15]
               sm:text-5xl md:text-6xl lg:text-[64px]
               tracking-[-1px] sm:tracking-[-1.8px] lg:tracking-[-2.56px] lg:leading-[1.1]"
            >
              <span className="text-[#7bb302]">Ready to </span>
              <span className="text-[#ed2939]">unwrap</span>
              <br className="block sm:hidden" />
              <span className="text-[#7bb302]">your </span>
              <span className="text-[#ed2939]">insights?</span>
            </h2>
          </div>


          {/* Description */}
          <div className="mb-6 sm:mb-7 lg:mb-0">
            <p className="[font-family:'Geist',Helvetica] font-normal text-black
                    text-base sm:text-lg lg:text-[18.7px]
                    tracking-[0] leading-[1.6] sm:leading-[1.65] lg:leading-[28.1px]">
              If you&apos;re shaping ideas, leading teams, or driving transformation —
              we&apos;d love to connect. Share your details with us here — our team
              will reach you personally.
            </p>
          </div>

          {/* Features List */}
          <div className="flex-1 flex flex-col
                    gap-4 sm:gap-5 lg:gap-6
                    justify-start">
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
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#444141]
                          text-sm sm:text-base lg:text-[14.1px]
                          tracking-[0] leading-[1.6] sm:leading-[1.65] lg:leading-[19.9px]">
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
      <div className="flex flex-col items-start justify-center gap-0 relative w-full lg:w-[540px] h-auto lg:h-full lg:min-h-[550px] bg-white rounded-3xl shadow-lg p-0 lg:ml-0 mt-0 lg:mt-0 pb-14 lg:pb-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-[26px] relative self-stretch w-full"
        >
          {/* First Name & Last Name Row */}
          <div className="flex flex-col sm:flex-row w-full items-start gap-4 sm:gap-8 relative">
            <div className="flex flex-col items-start gap-1.5 flex-1 w-full sm:w-auto">
              <label
                className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
                htmlFor="firstName"
              >
                First name
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
                <input
                  className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5 flex-1 w-full sm:w-auto">
              <label
                className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
                htmlFor="lastName"
              >
                Last name
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
                <input
                  className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full items-start gap-1.5 relative">
            <label
              className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
              <input
                className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
                id="email"
                name="email"
                placeholder="you@company.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="flex flex-col w-full items-start gap-1.5 relative">
            <label
              className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
              htmlFor="company"
            >
              Company
            </label>
            <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
              <input
                className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
                id="company"
                name="company"
                placeholder="Company name"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Designation Field */}
          <div className="flex flex-col w-full items-start gap-1.5 relative">
            <label
              className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
              htmlFor="designation"
            >
              Designation
            </label>
            <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
              <input
                className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
                id="designation"
                name="designation"
                placeholder="Designation name"
                type="text"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full h-12 items-center justify-center gap-2 px-8 py-2 relative bg-[#7cb403] rounded-xl cursor-pointer hover:bg-[#6da002] transition-all duration-300 hover:shadow-lg border-none touch-manipulation"
          >
            <span className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

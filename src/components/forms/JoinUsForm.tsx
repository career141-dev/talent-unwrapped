import { FormEvent, useState } from "react";
import { FORM_LABELS, FORM_PLACEHOLDERS, FEEDBACK_MESSAGES, FORMS_CONTENT } from "@/constants/copy";

export const JoinUsForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    designation: "",
  });

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
    alert(FEEDBACK_MESSAGES.FORM_SUCCESS);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      designation: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-4 sm:gap-[26px] relative self-stretch w-full"
    >
      {/* First Name & Last Name Row */}
      <div className="flex flex-col sm:flex-row w-full items-start gap-4 sm:gap-8 relative">
        <div className="flex flex-col items-start gap-1.5 flex-1 w-full sm:w-auto">
          <label
            className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
            htmlFor="firstName"
          >
            {FORM_LABELS.FIRST_NAME_ALT}
          </label>
          <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
            <input
              className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
              id="firstName"
              name="firstName"
              placeholder={FORM_LABELS.FIRST_NAME_ALT}
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
            {FORM_LABELS.LAST_NAME_ALT}
          </label>
          <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
            <input
              className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
              id="lastName"
              name="lastName"
              placeholder={FORM_LABELS.LAST_NAME_ALT}
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Email & Company Row - Side by side on sm+ to save height */}
      <div className="flex flex-col sm:flex-row w-full items-start gap-4 sm:gap-8 relative">
        {/* Email Field */}
        <div className="flex flex-col items-start gap-1.5 flex-1 w-full sm:w-auto">
          <label
            className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
            htmlFor="email"
          >
            {FORM_LABELS.EMAIL}
          </label>
          <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
            <input
              className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
              id="email"
              name="email"
              placeholder={FORM_PLACEHOLDERS.EMAIL_INPUT}
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Company Field */}
        <div className="flex flex-col items-start gap-1.5 flex-1 w-full sm:w-auto">
          <label
            className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
            htmlFor="company"
          >
            {FORM_LABELS.COMPANY}
          </label>
          <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
            <input
              className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
              id="company"
              name="company"
              placeholder={FORM_PLACEHOLDERS.COMPANY}
              type="text"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Designation Field */}
      <div className="flex flex-col w-full items-start gap-1.5 relative">
        <label
          className="[font-family:'Geist',Helvetica] font-medium text-gray-700 text-sm tracking-[0] leading-5"
          htmlFor="designation"
        >
          {FORM_LABELS.DESIGNATION}
        </label>
        <div className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e8f5e9] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#7bb302] transition-colors">
          <input
            className="relative flex-1 w-full [font-family:'Geist',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 bg-transparent border-none outline-none p-0"
            id="designation"
            name="designation"
            placeholder={FORM_PLACEHOLDERS.DESIGNATION}
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
          {FORMS_CONTENT.SEND_MESSAGE}
        </span>
      </button>
    </form>
  );
};

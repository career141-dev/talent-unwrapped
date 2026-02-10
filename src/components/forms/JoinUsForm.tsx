import { FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, X } from "lucide-react";
import { FORM_LABELS, FORM_PLACEHOLDERS, FEEDBACK_MESSAGES, FORMS_CONTENT } from "@/constants/copy";

export const JoinUsForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    designation: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setShowModal(true);
    }
  }, [status]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS credentials are missing in .env");
        throw new Error("Missing configuration");
      }

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: "Admin",
        email: formData.email,
        company: formData.company,
        designation: formData.designation,
        message: `New message from ${formData.firstName} ${formData.lastName} (${formData.email})
        Company: ${formData.company}
        Designation: ${formData.designation}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      console.log("Form submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        designation: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      alert("Failed to send message. Please ensure your .env file is configured correctly and try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
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
        disabled={status === "sending"}
        className={`flex w-full h-12 items-center justify-center gap-2 px-8 py-2 relative rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg border-none touch-manipulation ${status === "sending"
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#7cb403] hover:bg-[#6da002]"
          }`}
      >
        <span className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
          {status === "sending" ? "Sending..." : FORMS_CONTENT.SEND_MESSAGE}
        </span>
      </button>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7bb302] to-[#ed2939]" />

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
              <CheckCircle2 className="text-[#7bb302] w-12 h-12" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 [font-family:'Geist',Helvetica]">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-8 [font-family:'Geist',Helvetica]">
              {FEEDBACK_MESSAGES.FORM_SUCCESS}
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-[#7bb302] hover:bg-[#6da002] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

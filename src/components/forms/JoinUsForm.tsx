import { FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Star, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FORM_LABELS, FORM_PLACEHOLDERS, FORMS_CONTENT } from "@/constants/copy";

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

  // Assuming light mode by default for now, or check system preference if needed
  const isDarkMode = false;
  const showSuccessPopup = showModal;

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

  const sendContactEmails = async (data: typeof formData) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_TEAM_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_TEAM_ID;
    const TEMPLATE_AUTOREPLY_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_TEAM_ID || !TEMPLATE_AUTOREPLY_ID || !PUBLIC_KEY) {
      throw new Error("Missing EmailJS environment variables");
    }

    const { firstName, lastName, email, company, designation } = data;

    const commonParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      company: company,
      designation: designation,
      to_email: email, // Used for auto-reply
    };

    // Parallel execution for better performance
    await Promise.all([
      // 1. Send Team Notification
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_TEAM_ID,
        {
          ...commonParams,
          subject: `New Talent Unwrapped Inquiry: ${firstName} ${lastName}`,
          message: `New inquiry received from ${firstName} ${lastName} at ${company}.`,
        },
        PUBLIC_KEY
      ),
      // 2. Send Auto-reply to User
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTOREPLY_ID,
        {
          ...commonParams,
          to_name: firstName, // Personalize auto-reply
        },
        PUBLIC_KEY
      )
    ]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendContactEmails(formData);

      setStatus("success");
      console.log("Emails submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        designation: "",
      });
    } catch (error) {
      console.error("Failed to send emails:", error);
      setStatus("error");

      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      if (errorMessage.includes("Missing EmailJS")) {
        alert("Configuration Error: Missing EmailJS environment variables. Please check your .env file.");
      } else {
        alert("Failed to send message. Please try again later.");
      }
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
        className={`flex w-full h-12 items-center justify-center gap-2 px-8 py-2 relative rounded-xl cursor-pointer shadow-sm hover:shadow-lg border-none touch-manipulation ${status === "sending"
          ? "bg-gray-400 cursor-not-allowed"
          : "glass-button-primary active:scale-95"
          }`}
      >
        <span className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
          {status === "sending" ? "Sending..." : FORMS_CONTENT.SEND_MESSAGE}
        </span>
      </button>

      {/* Animated Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`max-w-sm w-full rounded-2xl p-8 shadow-2xl text-center relative ${isDarkMode ? "bg-gray-950 border border-gray-700" : "bg-white border border-gray-200"
                }`}
            >
              {/* Close Button - Added manually for UX */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <span className="sr-only">Close</span>
                {/* Simple X icon SVG or text since X is not imported, or just use &times; */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>

              {/* Star Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
                className="relative mx-auto mb-4"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-white fill-white" />
                </motion.div>

                {/* Sparkle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 40]
                    }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                  />
                ))}
              </motion.div>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", duration: 0.5 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${isDarkMode ? "bg-green-500/20 text-green-400" : "bg-green-500/10 text-green-600"
                  }`}
              >
                <CheckCircle className="w-6 h-6" />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">Thank You! ✨</h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Your message has been sent successfully! I'll get back to you within 24 hours.
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 2 }}
                className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

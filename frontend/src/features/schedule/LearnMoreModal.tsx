import { JoinUsForm } from "../../components/forms";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreModal = ({
  isOpen,
  onClose,
}: LearnMoreModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[580px] bg-white rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-300 mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header Area */}
        <div className="p-5 sm:p-8 pb-4 pt-8">
          <h2 className="[font-family:'Geist',Helvetica] font-medium text-transparent text-2xl sm:text-4xl tracking-tight leading-tight mb-4">
            <span className="text-[#7bb302]">Ready to </span>
            <span className="text-[#ed2939]">unwrap</span>
            <br className="sm:hidden" />
            <span className="text-[#7bb302]"> your </span>
            <span className="text-[#ed2939]">insights?</span>
          </h2>
          <p className="[font-family:'Geist',Helvetica] font-normal text-gray-600 text-base leading-relaxed">
            Interested in being a part of Talent Unwrapped? Share your details
            below and our team will get back to you shortly.
          </p>
        </div>

        {/* Form Area */}
        <div className="p-5 sm:p-8 pt-0 pb-6">
          <JoinUsForm />
        </div>
      </div>
    </div>
  );
};

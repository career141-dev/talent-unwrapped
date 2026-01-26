import { useEffect, useRef, useCallback } from "react";

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreModal = ({ isOpen, onClose }: LearnMoreModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Focus management - set initial focus to close button
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Handle click outside modal
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[640px] mx-4 sm:mx-6 md:mx-0 bg-white rounded-xl md:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7bb302]"
          aria-label="Close modal"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 md:p-10">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232323] mb-4"
          >
            Podcast Schedule Details
          </h2>

          {/* Description */}
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-8">
            Learn more about how our podcast schedule works, important timings, and how you can
            participate in upcoming episodes.
          </p>

          {/* Information Cards */}
          <div className="space-y-6 mb-10">
            {/* Card 1: What this schedule means */}
            <div className="border-l-4 border-[#7bb302] pl-4 py-3">
              <h3 className="text-lg font-semibold text-[#232323] mb-2">
                What this schedule means
              </h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                The dates displayed show our planned recording and release slots for upcoming
                podcast episodes. These are carefully scheduled to bring you fresh content and
                expert insights on a regular basis.
              </p>
            </div>

            {/* Card 2: Time & timezone */}
            <div className="border-l-4 border-[#7bb302] pl-4 py-3">
              <h3 className="text-lg font-semibold text-[#232323] mb-2">Time & timezone</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                All times are displayed in <span className="font-semibold">Asia/Colombo (GMT+5:30)</span>. If you're in a different timezone, please adjust accordingly. Live sessions will include timezone conversions during booking.
              </p>
            </div>

            {/* Card 3: Updates */}
            <div className="border-l-4 border-[#7bb302] pl-4 py-3">
              <h3 className="text-lg font-semibold text-[#232323] mb-2">Updates & changes</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                Schedule dates may be subject to change due to unforeseen circumstances. We'll
                notify you via email and update this page as soon as possible if any changes occur.
              </p>
            </div>

            {/* Card 4: How to participate */}
            <div className="border-l-4 border-[#7bb302] pl-4 py-3">
              <h3 className="text-lg font-semibold text-[#232323] mb-2">How to participate</h3>
              <ol className="text-[#666666] text-sm sm:text-base leading-relaxed space-y-2">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#7bb302] flex-shrink-0">1.</span>
                  <span>Check the scheduled dates that interest you</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#7bb302] flex-shrink-0">2.</span>
                  <span>Confirm your availability and interest in participating</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#7bb302] flex-shrink-0">3.</span>
                  <span>Receive meeting link or studio details via email</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#7bb302] flex-shrink-0">4.</span>
                  <span>Join on the scheduled date and share your insights</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border-2 border-[#232323] text-[#232323] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2"
              type="button"
            >
              Contact us
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-[#7bb302] text-white font-semibold rounded-lg hover:bg-[#6a9902] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7bb302] focus:ring-offset-2"
              type="button"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

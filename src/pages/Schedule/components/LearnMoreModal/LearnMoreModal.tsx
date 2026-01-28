interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnMoreModal = ({ isOpen, onClose }: LearnMoreModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4">Learn More</h2>
        <p className="text-gray-600 mb-6">
          This is more information about the Talent Unwrapped podcast schedule.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

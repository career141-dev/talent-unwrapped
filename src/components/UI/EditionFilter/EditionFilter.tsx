interface EditionFilterProps {
  selectedEdition: "singapore" | "dubai";
  onEditionChange: (edition: "singapore" | "dubai") => void;
}

export const EditionFilter = ({ selectedEdition, onEditionChange }: EditionFilterProps): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-2 bg-white rounded-full p-1 shadow-sm border border-gray-200">
      <button
        onClick={() => onEditionChange("singapore")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedEdition === "singapore"
            ? "bg-[#7bb302] text-white"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
        aria-pressed={selectedEdition === "singapore"}
      >
        🇸🇬 Singapore
      </button>
      <button
        onClick={() => onEditionChange("dubai")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedEdition === "dubai"
            ? "bg-[#7bb302] text-white"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
        aria-pressed={selectedEdition === "dubai"}
      >
        🇦🇪 Dubai
      </button>
    </div>
  );
};

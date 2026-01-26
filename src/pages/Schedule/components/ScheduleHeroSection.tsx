import { useState } from "react";
import { LearnMoreModal } from "./LearnMoreModal";

export const ScheduleHeroSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Learn More Modal */}
      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

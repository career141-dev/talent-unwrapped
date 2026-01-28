import { useState } from "react";
import { LearnMoreModal } from "../LearnMoreModal";

export const ScheduleHeroSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Podcast Schedule</h1>
          <p className="text-xl mb-8">
            Join us for insightful conversations with industry leaders
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

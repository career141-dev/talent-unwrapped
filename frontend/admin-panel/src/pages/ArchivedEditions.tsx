import React from 'react';
import EditionCard from '../components/EditionCard';

const MOCK_EDITIONS = [
  { id: '1', name: 'Singapore Edition', location: 'Singapore', date: 'Oct 2024', status: 'live' },
  { id: '2', name: 'Dubai Edition', location: 'Dubai, UAE', date: 'Dec 2024', status: 'live' },
  { id: '3', name: 'Colombo Edition', location: 'Sri Lanka', date: 'Jan 2025', status: 'draft' },
  { id: '4', name: 'Riyadh Special', location: 'Saudi Arabia', date: 'May 2024', status: 'archived' },
];

const ArchivedEditions: React.FC = () => {
  const archivedEditions = MOCK_EDITIONS.filter(edition => edition.status === 'archived');

  const handleRestore = (id: string) => {
    console.log(`Restoring edition ${id}`);
    // Future backend logic will go here to update status back to 'draft' or 'live'
  };

  return (
    <div className="space-y-10 md:space-y-16 animate-fade-in">
      <header className="flex flex-col gap-4 pb-8 border-b border-white/5">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white italic">Archived Editions</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed opacity-60">
          View your past and inactive podcast editions. Restoring features will be deployed soon.
        </p>
      </header>

      {archivedEditions.length === 0 ? (
        <div className="w-full py-20 flex flex-col items-center justify-center text-muted-foreground bg-white/5 border border-white/10 border-dashed rounded-3xl">
          <p className="text-lg font-medium">No archived editions found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-10">
          {archivedEditions.map((edition) => (
            <EditionCard
              key={edition.id}
              {...edition}
              onRestore={handleRestore}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchivedEditions;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditionFormUI from '../components/EditionFormUI';
import EditionCard from '../components/EditionCard';

const MOCK_EDITIONS = [
  { id: '1', name: 'Singapore Edition', location: 'Singapore', date: 'Oct 2024', status: 'live' },
  { id: '2', name: 'Dubai Edition', location: 'Dubai, UAE', date: 'Dec 2024', status: 'live' },
  { id: '3', name: 'Colombo Edition', location: 'Sri Lanka', date: 'Jan 2025', status: 'draft' },
  { id: '4', name: 'Riyadh Special', location: 'Saudi Arabia', date: 'May 2024', status: 'archived' },
];

const EditEdition: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleArchive = (archiveId: string) => {
    console.log(`Archiving edition ${archiveId}`);
  };

  useEffect(() => {
    if (id) {
      console.log(`Editing edition ID: ${id}`);
    }
  }, [id]);

  // If we have an ID, render the actual form to edit it
  if (id) {
    return <EditionFormUI isEditing={true} />;
  }

  // Otherwise, render the list to select what to edit
  const activeEditions = MOCK_EDITIONS.filter(edition => edition.status !== 'archived');

  const filteredEditions = activeEditions.filter(edition => {
    const query = searchQuery.toLowerCase();
    return (
      edition.name.toLowerCase().includes(query) ||
      edition.location.toLowerCase().includes(query) ||
      edition.date.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-10 md:space-y-16 animate-fade-in">
      <div className="flex justify-end pb-8 border-b border-white/5">
        <div className="w-full lg:w-[400px] h-14 bg-white/5 border border-white/10 rounded-2xl px-6 flex items-center gap-4 text-muted-foreground hover:bg-white/[0.08] hover:border-[#7bb302]/40 transition-all group focus-within:border-[#7bb302]/50 focus-within:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-focus-within:opacity-100 transition-opacity group-focus-within:text-[#7bb302]"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            placeholder="Search editions, locations or dates..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-sm font-medium text-white placeholder-muted-foreground"
          />
        </div>
      </div>

      {filteredEditions.length === 0 ? (
        <div className="w-full py-20 flex flex-col items-center justify-center text-muted-foreground bg-white/5 border border-white/10 border-dashed rounded-3xl">
          <p className="text-lg font-medium">No editions found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-10">
          {filteredEditions.map((edition) => (
            <EditionCard
              key={edition.id}
              {...edition}
              onArchive={handleArchive}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EditEdition;

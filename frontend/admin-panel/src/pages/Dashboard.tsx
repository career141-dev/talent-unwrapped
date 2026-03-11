import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditionCard from '../components/EditionCard';

const MOCK_EDITIONS = [
  { id: '1', name: 'Singapore Edition', location: 'Singapore', date: 'Oct 2024', status: 'live' },
  { id: '2', name: 'Dubai Edition', location: 'Dubai, UAE', date: 'Dec 2024', status: 'live' },
  { id: '3', name: 'Colombo Edition', location: 'Sri Lanka', date: 'Jan 2025', status: 'draft' },
  { id: '4', name: 'Riyadh Special', location: 'Saudi Arabia', date: 'May 2024', status: 'archived' },
];

const Dashboard = () => {
  const handleArchive = (id: string) => {
    console.log(`Archiving edition ${id}`);
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <header className="flex justify-between items-end gap-12">
        <div className="space-y-4">
          <h2 className="text-5xl font-black tracking-tight text-white italic">Editions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed opacity-60">
            Oversee your global podcast landscape. Manage episodes, regions, and speaker deployments.
          </p>
        </div>
        <Link to="/edition/new" className="btn-primary flex items-center gap-3 !px-10 !py-5 hover:scale-105 transition-all shadow-2xl">
          <Plus size={24} />
          <span className="text-lg">New Edition</span>
        </Link>
      </header>

      {/* Professional Dashboard Sub-header */}
      <div className="flex flex-col md:flex-row gap-8 items-end justify-between pb-8 border-b border-white/5">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Total Volume</span>
            <span className="text-3xl font-black text-white">{MOCK_EDITIONS.length}</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-16">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Production Live</span>
            <span className="text-3xl font-black text-[#7bb302]">2</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-16">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Pending Drafts</span>
            <span className="text-3xl font-black text-orange-400">1</span>
          </div>
        </div>
        <div className="w-full md:w-[400px] h-14 bg-white/5 border border-white/10 rounded-2xl px-6 flex items-center gap-4 text-muted-foreground hover:bg-white/[0.08] hover:border-[#7bb302]/40 transition-all group">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7bb302] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium">Search editions, locations or dates...</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_EDITIONS.map((edition) => (
          <EditionCard
            key={edition.id}
            {...edition}
            onArchive={handleArchive}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

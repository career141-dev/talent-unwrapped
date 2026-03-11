import React from 'react';
import { Archive, ExternalLink, Edit2, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EditionCardProps {
  id: string;
  name: string;
  location: string;
  date: string;
  status: string;
  onArchive?: (id: string) => void;
}

const EditionCard: React.FC<EditionCardProps> = ({ id, name, location, date, status, onArchive }) => {
  return (
    <div className="glass-card p-14 flex flex-col justify-between group h-full">
      <div className="flex justify-between items-start mb-12">
        <div className={`px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest leading-none ${
          status === 'live' ? 'bg-[#7bb302]/20 text-[#7bb302] border border-[#7bb302]/30' : 
          status === 'draft' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 
          'bg-slate-500/20 text-slate-400 border border-slate-500/30'
        }`}>
          {status}
        </div>
        <button className="p-3 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 transition-all">
          <MoreVertical size={20} />
        </button>
      </div>
      
      <div className="mb-12 space-y-4">
        <h3 className="text-3xl font-bold text-white tracking-tight">{name}</h3>
        <p className="text-muted-foreground text-lg flex items-center gap-2 opacity-80">
          {location} • {date}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Link 
          to={`/edition/edit/${id}`} 
          className="btn-card-action !py-5 text-sm"
        >
          <Edit2 size={16} />
          <span>Edit Edition</span>
        </Link>
        <button className="flex items-center justify-center p-4 min-w-[60px] min-h-[60px] bg-white/5 hover:bg-white/10 rounded-xl text-muted-foreground hover:text-white transition-all border border-white/5 group-hover:border-[#7bb302]/30">
          <ExternalLink size={18} />
        </button>
        {status !== 'archived' && (
          <button 
            title="Archive" 
            onClick={() => onArchive?.(id)}
            className="flex items-center justify-center p-4 min-w-[60px] min-h-[60px] bg-white/5 hover:bg-destructive/10 rounded-xl text-muted-foreground hover:text-destructive transition-all border border-white/5"
          >
            <Archive size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default EditionCard;

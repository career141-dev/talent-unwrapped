import React from 'react';
import { Save, UserPlus, Film, Mic, Video, Trash2, ArrowLeft, Plus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const FormSection: React.FC<{ title: string; icon: any; children: React.ReactNode; onSave?: () => void }> = ({ title, icon: Icon, children, onSave }) => (
  <section className="glass-card overflow-hidden animate-fade-in group">
    <div className="px-10 py-8 border-b border-white/5 flex items-center justify-between group-hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 bg-[#7bb302]/10 rounded-2xl flex items-center justify-center text-[#7bb302] group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight text-white">{title}</h3>
      </div>
      {onSave && (
        <button 
          onClick={onSave}
          className="btn-primary flex items-center gap-2 !px-6 !py-2 !text-sm"
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      )}
    </div>
    <div className="p-12 space-y-12 bg-black/10">
      {children}
    </div>
  </section>
);

const EditionForm = () => {
  const { id } = useParams();
  const isEditing = !!id;

  const handleSaveSection = (sectionName: string) => {
    console.log(`Saving section: ${sectionName}`);
  };

  return (
    <div className="space-y-12 pb-20">
      <header className="flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all text-base group mb-8">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white underline decoration-[#7bb302]/50 decoration-4 underline-offset-8 decoration-dashed">{isEditing ? 'Modify Edition' : 'New Edition'}</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">Configure metadata, episodes, and multimedia assets for this geographical edition.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-5 py-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-widest">Draft Mode</div>
          </div>
        </div>
      </header>

      {/* SECTION: GENERAL METADATA */}
      <FormSection title="Edition Metadata" icon={Mic} onSave={() => handleSaveSection('metadata')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="label">Edition Name</label>
            <input type="text" placeholder="e.g. Singapore 2024" className="input-field" />
          </div>
          <div className="space-y-3">
            <label className="label">Location Label</label>
            <select className="input-field bg-[#1a1c22]">
              <option>Singapore</option>
              <option>Dubai, UAE</option>
              <option>Colombo, Sri Lanka</option>
              <option>Riyadh, Saudi Arabia</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-3">
            <label className="label">Internal Notes</label>
            <textarea placeholder="Any context or private notes for this edition..." className="input-field min-h-[100px] resize-none"></textarea>
          </div>
        </div>
      </FormSection>

      {/* SECTION: EPISODE DETAILS */}
      <FormSection title="Main Episode Details" icon={Video} onSave={() => handleSaveSection('episode')}>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="label">Episode Title</label>
              <input type="text" placeholder="Featured Episode Name" className="input-field" />
            </div>
            <div className="space-y-3">
              <label className="label">YouTube Embed URL</label>
              <input type="text" placeholder="https://youtube.com/embed/..." className="input-field" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="label">Description</label>
            <textarea placeholder="Summarize the core conversation and key takeaways..." className="input-field min-h-[120px] resize-none"></textarea>
          </div>
          <div className="space-y-3">
            <label className="label">Thumbnail URL (Cloudinary Preferred)</label>
            <div className="flex gap-4">
              <input type="text" placeholder="https://res.cloudinary.com/..." className="input-field flex-1" />
              <button className="btn-secondary whitespace-nowrap text-xs !px-6 !py-3">Browse Gallery</button>
            </div>
          </div>
        </div>
      </FormSection>

      {/* SECTION: SPEAKERS */}
      <FormSection title="Guest Speakers" icon={UserPlus} onSave={() => handleSaveSection('speakers')}>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 group/speaker">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex-shrink-0 border-2 border-white/10 flex items-center justify-center overflow-hidden text-white">
                <UserPlus size={24} />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 text-white">
                <div className="space-y-2">
                  <label className="label">Full Name</label>
                  <input type="text" className="input-field py-2" placeholder="Speaker name" />
                </div>
                <div className="space-y-2">
                  <label className="label">Role / Position</label>
                  <input type="text" className="input-field py-2" placeholder="C-Suite / Leader" />
                </div>
                <div className="col-span-2 space-y-2">
                   <label className="label">LinkedIn URL</label>
                   <input type="text" className="input-field py-2" placeholder="https://linkedin.com/in/..." />
                </div>
              </div>
              <button className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <button className="w-full flex items-center justify-center gap-2 py-4 border border-dashed border-white/20 rounded-2xl text-muted-foreground hover:text-white hover:border-[#7bb302]/50 hover:bg-[#7bb302]/5 transition-all text-sm font-bold">
            <Plus size={16} />
            <span>Add Guest Speaker</span>
          </button>
        </div>
      </FormSection>

      {/* SECTION: REELS */}
      <FormSection title="Podcast Reels" icon={Film} onSave={() => handleSaveSection('reels')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card p-4 flex flex-col gap-4 text-white">
              <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center text-slate-700">
                <Film size={32} />
              </div>
              <div className="space-y-2 text-white">
                <label className="label">Reel Title</label>
                <input type="text" className="input-field py-2 text-xs" placeholder="Topic of the clip" />
              </div>
              <div className="space-y-2">
                <label className="label">Video URL</label>
                <input type="text" className="input-field py-2 text-xs" placeholder="YouTube URL" />
              </div>
              <button className="w-full py-2 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-destructive/20 transition-all">Remove reel</button>
            </div>
          ))}
          <button className="h-full flex flex-col items-center justify-center gap-3 p-10 border border-dashed border-white/20 rounded-2xl text-muted-foreground hover:text-white hover:border-[#7bb302]/50 hover:bg-[#7bb302]/5 transition-all min-h-[200px]">
            <Plus size={32} className="text-[#7bb302]/50" />
            <span className="text-sm font-bold">Upload New Reel</span>
          </button>
        </div>
      </FormSection>
    </div>
  );
};

export default EditionForm;

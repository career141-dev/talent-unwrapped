import React, { useState, useRef } from 'react';
import { Save, UserPlus, Film, Mic, Video, ArrowLeft, Plus, ChevronDown, Upload, X, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import GuestSpeakerCard from './GuestSpeakerCard';
import type { GuestSpeaker } from './GuestSpeakerCard';
import PodcastReelCard from './PodcastReelCard';
import type { PodcastReel } from './PodcastReelCard';

const FormSection: React.FC<{ title: string; icon: any; children: React.ReactNode; onSave?: () => void }> = ({ title, icon: Icon, children, onSave }) => (
  <section className="glass-card overflow-hidden animate-fade-in group !p-0">
    <div className="p-6 md:px-10 md:py-8 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group-hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7bb302]/10 rounded-2xl flex items-center justify-center text-[#7bb302] group-hover:scale-110 transition-transform shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">{title}</h3>
      </div>
      {onSave && (
        <button 
          onClick={onSave}
          className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 !px-6 !py-3 md:!py-2 !text-sm"
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      )}
    </div>
    <div className="p-6 md:p-12 space-y-8 md:space-y-12 bg-black/10">
      {children}
    </div>
  </section>
);

interface EditionFormUIProps {
  isEditing: boolean;
}

const EditionFormUI: React.FC<EditionFormUIProps> = ({ isEditing }) => {
  const [isThumbnailModalOpen, setIsThumbnailModalOpen] = useState(false);
  const [speakerModalIndex, setSpeakerModalIndex] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const speakerFileInputRef = useRef<HTMLInputElement>(null);

  const [speakers, setSpeakers] = useState<GuestSpeaker[]>([
    { id: '1', name: '', role: '', linkedin: '', country: '', location: '' },
    { id: '2', name: '', role: '', linkedin: '', country: '', location: '' }
  ]);

  const [reels, setReels] = useState<PodcastReel[]>([
    { id: '1', title: '', description: '', views: '', thumbnailUrl: '', url: '' },
    { id: '2', title: '', description: '', views: '', thumbnailUrl: '', url: '' }
  ]);

  const handleSaveSection = (sectionName: string) => {
    console.log(`Saving section: ${sectionName}`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(`Selected file: ${e.target.files[0].name}`);
      // Normally we would upload this file to Cloudinary and insert URL here
      setIsThumbnailModalOpen(false);
    }
  };

  const handleSpeakerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(`Selected photo for speaker ${speakerModalIndex}: ${e.target.files[0].name}`);
      // Normally process file here
      setSpeakerModalIndex(null);
    }
  };

  const handleAddSpeaker = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setSpeakers([...speakers, { id: newId, name: '', role: '', linkedin: '', country: '', location: '' }]);
  };

  const handleRemoveSpeaker = (id: string) => {
    setSpeakers(speakers.filter(s => s.id !== id));
  };

  const handleUpdateSpeaker = (id: string, field: keyof GuestSpeaker, value: string) => {
    setSpeakers(speakers.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleAddReel = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setReels([...reels, { id: newId, title: '', description: '', views: '', thumbnailUrl: '', url: '' }]);
  };

  const handleRemoveReel = (id: string) => {
    setReels(reels.filter(r => r.id !== id));
  };

  const handleUpdateReel = (id: string, field: keyof PodcastReel, value: string) => {
    setReels(reels.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const [keyQuestions, setKeyQuestions] = useState<{ id: string; text: string }[]>([
    { id: '1', text: '' },
  ]);

  const handleAddQuestion = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setKeyQuestions([...keyQuestions, { id: newId, text: '' }]);
  };

  const handleRemoveQuestion = (id: string) => {
    setKeyQuestions(keyQuestions.filter(q => q.id !== id));
  };

  const handleUpdateQuestion = (id: string, value: string) => {
    setKeyQuestions(keyQuestions.map(q => q.id === id ? { ...q, text: value } : q));
  };

  return (
    <div className="space-y-12 pb-20">
      <header className="flex flex-col gap-6">
        <Link to={isEditing ? "/editions/edit" : "/"} className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all text-base group mb-8 w-fit">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>{isEditing ? 'Back to Editions' : 'Back to Dashboard'}</span>
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white underline decoration-[#7bb302]/50 decoration-4 underline-offset-8 decoration-dashed">
              {isEditing ? 'Modify Edition' : 'New Edition'}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm md:text-base">
              Configure metadata, episodes, and multimedia assets for this geographical edition.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-5 py-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Draft Mode</div>
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
            <div className="relative">
              <select className="input-field appearance-none cursor-pointer pr-10 relative z-10 bg-transparent" defaultValue="">
                <option value="" disabled className="bg-[#0a0a0c] text-muted-foreground">Select a location</option>
                <option value="singapore" className="bg-[#0a0a0c] text-white py-2">Singapore</option>
                <option value="dubai" className="bg-[#0a0a0c] text-white py-2">Dubai, UAE</option>
                <option value="colombo" className="bg-[#0a0a0c] text-white py-2">Colombo, Sri Lanka</option>
                <option value="riyadh" className="bg-[#0a0a0c] text-white py-2">Riyadh, Saudi Arabia</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-0" size={18} />
            </div>
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
            <div className="space-y-3">
              <label className="label">Duration</label>
              <input type="text" placeholder="e.g. 1h 24m" className="input-field" />
            </div>
            <div className="space-y-3">
              <label className="label">Added Date</label>
              <input type="date" className="input-field" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="label">Description</label>
            <textarea placeholder="Summarize the core conversation and key takeaways..." className="input-field min-h-[120px] resize-none"></textarea>
          </div>

          {/* Key Questions — dynamic list */}
          <div className="space-y-4">
            <label className="label">Key Questions Discussed</label>
            <div className="space-y-3">
              {keyQuestions.map((q, index) => (
                <div key={q.id} className="flex items-center gap-3 group/kq">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#7bb302]/20 text-[#7bb302] text-xs font-bold flex items-center justify-center">{index + 1}</span>
                  <input
                    type="text"
                    className="input-field flex-1 py-2"
                    placeholder={`e.g. What is the biggest challenge facing leaders today?`}
                    value={q.text}
                    onChange={(e) => handleUpdateQuestion(q.id, e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveQuestion(q.id)}
                    disabled={keyQuestions.length === 1}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddQuestion}
              className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-white hover:text-[#7bb302] transition-colors"
            >
              <Plus size={14} />
              <span>Add Another Question</span>
            </button>
          </div>

          <div className="space-y-3">
            <label className="label">Thumbnail URL (Cloudinary Preferred)</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="https://res.cloudinary.com/..." className="input-field flex-1" />
              <button 
                onClick={() => setIsThumbnailModalOpen(true)}
                className="btn-secondary whitespace-nowrap text-xs !px-6 !py-3 sm:!py-auto w-full sm:w-auto"
              >
                Browse Gallery
              </button>
            </div>
          </div>
        </div>
      </FormSection>

      {/* SECTION: SPEAKERS */}
      <FormSection title="Guest Speakers" icon={UserPlus} onSave={() => handleSaveSection('speakers')}>
        <div className="space-y-6">
          {speakers.map((speaker) => (
            <GuestSpeakerCard
              key={speaker.id}
              speaker={speaker}
              onUpdate={handleUpdateSpeaker}
              onRemove={handleRemoveSpeaker}
              onUploadPhoto={setSpeakerModalIndex}
            />
          ))}
          <button 
            type="button" 
            onClick={handleAddSpeaker}
            className="w-full flex items-center justify-center gap-2 py-4 border border-dashed border-white/20 rounded-2xl text-muted-foreground hover:text-white hover:border-[#7bb302]/50 hover:bg-[#7bb302]/5 transition-all text-sm font-bold"
          >
            <Plus size={16} />
            <span>Add Guest Speaker</span>
          </button>
        </div>
      </FormSection>

      {/* SECTION: REELS */}
      <FormSection title="Podcast Reels" icon={Film} onSave={() => handleSaveSection('reels')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reels.map((reel) => (
            <PodcastReelCard
              key={reel.id}
              reel={reel}
              onUpdate={handleUpdateReel}
              onRemove={handleRemoveReel}
            />
          ))}
          <button 
            type="button"
            onClick={handleAddReel}
            className="h-full flex flex-col items-center justify-center gap-3 p-10 border border-dashed border-white/20 rounded-2xl text-muted-foreground hover:text-white hover:border-[#7bb302]/50 hover:bg-[#7bb302]/5 transition-all min-h-[200px]"
          >
            <Plus size={32} className="text-[#7bb302]/50" />
            <span className="text-sm font-bold">Upload New Reel</span>
          </button>
        </div>
      </FormSection>

      {/* MODALS */}
      {isThumbnailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-card w-full max-w-md p-8 relative flex flex-col gap-8 shadow-2xl border border-white/20">
            <button 
              onClick={() => setIsThumbnailModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#7bb302]/20 rounded-2xl mx-auto flex items-center justify-center text-[#7bb302] mb-4">
                <Upload size={32} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Upload Thumbnail</h3>
              <p className="text-muted-foreground text-sm">Select an image file directly from your computer.</p>
            </div>

            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="btn-primary w-full flex items-center justify-center gap-3 py-4"
            >
              <HardDrive size={20} />
              <span>Browse from this PC</span>
            </button>
          </div>
        </div>
      )}

      {speakerModalIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-card w-full max-w-md p-8 relative flex flex-col gap-8 shadow-2xl border border-white/20">
            <button 
              onClick={() => setSpeakerModalIndex(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#7bb302]/20 rounded-2xl mx-auto flex items-center justify-center text-[#7bb302] mb-4">
                <UserPlus size={32} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Upload Speaker Photo</h3>
              <p className="text-muted-foreground text-sm">Select a professional headshot for this speaker.</p>
            </div>

            <input 
              type="file" 
              ref={speakerFileInputRef} 
              onChange={handleSpeakerFileChange} 
              accept="image/*" 
              className="hidden" 
            />
            
            <button 
              onClick={() => speakerFileInputRef.current?.click()}
              className="btn-primary w-full flex items-center justify-center gap-3 py-4"
            >
              <HardDrive size={20} />
              <span>Browse from this PC</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditionFormUI;

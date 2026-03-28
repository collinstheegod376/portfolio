interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Footer = ({ activeTab, setActiveTab }: FooterProps) => (
  <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 pb-safe bg-slate-950 border-t border-blue-900/30 shadow-[0_-4px_20px_rgba(0,241,254,0.05)]">
    <button onClick={() => setActiveTab('hero')} className={`flex flex-col items-center justify-center transition-colors ${activeTab === 'hero' ? 'text-primary scale-110' : 'text-slate-600 hover:text-blue-200'}`}>
      <span className="material-symbols-outlined">flash_on</span>
      <span className="font-label text-[10px] uppercase mt-1">CORE</span>
    </button>
    <button onClick={() => setActiveTab('projects')} className={`flex flex-col items-center justify-center transition-colors ${activeTab === 'projects' ? 'text-primary scale-110' : 'text-slate-600 hover:text-blue-200'}`}>
      <span className="material-symbols-outlined">radar</span>
      <span className="font-label text-[10px] uppercase mt-1">PROJECTS</span>
    </button>
    <button onClick={() => setActiveTab('about')} className={`flex flex-col items-center justify-center transition-colors ${activeTab === 'about' ? 'text-primary scale-110' : 'text-slate-600 hover:text-blue-200'}`}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>category</span>
      <span className="font-label text-[10px] uppercase mt-1">SKILLS</span>
    </button>
    <button onClick={() => setActiveTab('contact')} className={`flex flex-col items-center justify-center transition-colors ${activeTab === 'contact' ? 'text-primary scale-110' : 'text-slate-600 hover:text-blue-200'}`}>
      <span className="material-symbols-outlined">terminal</span>
      <span className="font-label text-[10px] uppercase mt-1">CONTACT</span>
    </button>
  </footer>
);

export default Footer;

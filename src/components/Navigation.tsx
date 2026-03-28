import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'hero', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'SKILLS & EXPERTISE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-slate-950/90 backdrop-blur-xl shadow-[0_0_20px_rgba(150,204,255,0.1)] border-b border-outline-variant/30">
        <div 
          className="text-2xl font-black text-blue-400 tracking-[0.2em] font-headline cursor-pointer select-none uppercase hover:text-blue-300 transition-colors"
          onClick={() => setActiveTab('hero')}
        >
          KILLUA
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full border border-primary/30 overflow-hidden cursor-pointer hover:border-primary transition-colors" onClick={() => setActiveTab('hero')}>
            <img 
              alt="Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://pbs.twimg.com/profile_images/2037135244990509056/vtcTwfL6_400x400.jpg"
            />
          </div>
          <button onClick={() => setIsOpen(true)} className="p-2 hover:bg-surface-container text-on-surface transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/20 via-transparent to-primary/20 h-[1px] w-full absolute bottom-0 left-0"></div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 p-2 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            <nav className="flex flex-col items-center space-y-8 font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleTabClick(tab.id)}
                  className={`transition-colors relative group ${
                    activeTab === tab.id
                      ? 'text-primary'
                      : 'text-on-surface hover:text-secondary-container'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-1 bg-primary shadow-[0_0_15px_#96ccff]" />
                  )}
                </motion.button>
              ))}
            </nav>
            
            <div className="absolute bottom-12 flex space-x-6 text-outline">
              <span className="font-label text-xs uppercase tracking-widest">Awaiting Contracts...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

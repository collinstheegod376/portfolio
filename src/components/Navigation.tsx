import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Inventory' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-center items-center pointer-events-none">
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex glass rounded-full px-8 py-4 items-center space-x-12 pointer-events-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-headline text-lg transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-white font-semibold'
                : 'text-on-surface hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="nav-pill"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden w-full flex justify-end pointer-events-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="glass-card p-3 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            className="absolute top-20 right-4 glass-card rounded-2xl flex flex-col p-2 space-y-1 pointer-events-auto min-w-[200px] border border-glass-border shadow-[0_0_40px_rgba(0,0,0,0.5)] md:hidden"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setIsOpen(false); }}
                className={`font-headline text-lg text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary-light font-semibold'
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navigation;

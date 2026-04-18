import { motion } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const tabs = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Inventory' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center items-center pointer-events-none">
      <nav className="glass rounded-full px-8 py-4 flex items-center space-x-12 pointer-events-auto">
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
    </header>
  );
};

export default Navigation;

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const icons = document.createElement('link');
    icons.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    icons.rel = 'stylesheet';
    document.head.appendChild(icons);

    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pb-32 relative">
        <AnimatePresence mode="wait">
            {activeTab === 'hero' && (
              <motion.div key="hero" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{ duration: 0.3 }}>
                <Hero setActiveTab={setActiveTab} />
              </motion.div>
            )}
            {activeTab === 'projects' && (
              <motion.div key="projects" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{ duration: 0.3 }}>
                <Projects />
              </motion.div>
            )}
            {activeTab === 'about' && (
              <motion.div key="about" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{ duration: 0.3 }}>
                <About />
              </motion.div>
            )}
            {activeTab === 'contact' && (
              <motion.div key="contact" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{ duration: 0.3 }}>
                <Contact />
              </motion.div>
            )}
        </AnimatePresence>
      </main>

    </div>
  );
}

export default App;

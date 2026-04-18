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
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap';
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
    <div className="min-h-screen relative font-body text-on-background overflow-hidden selection:bg-primary-light selection:text-white">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-glow blur-[120px] mix-blend-screen opacity-50 animate-blob pointer-events-none"></div>
      <div className="fixed top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-[rgba(59,130,246,0.3)] blur-[100px] mix-blend-screen opacity-50 animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[35%] h-[40%] rounded-full bg-[rgba(147,197,253,0.2)] blur-[120px] mix-blend-screen opacity-40 animate-blob pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
            {activeTab === 'hero' && (
              <motion.div key="hero" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 1.05}} transition={{ type: 'spring', bounce: 0, duration: 0.8 }}>
                <Hero setActiveTab={setActiveTab} />
              </motion.div>
            )}
            {activeTab === 'projects' && (
              <motion.div key="projects" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 1.05}} transition={{ type: 'spring', bounce: 0, duration: 0.8 }}>
                <Projects />
              </motion.div>
            )}
            {activeTab === 'about' && (
              <motion.div key="about" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 1.05}} transition={{ type: 'spring', bounce: 0, duration: 0.8 }}>
                <About />
              </motion.div>
            )}
            {activeTab === 'contact' && (
              <motion.div key="contact" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 1.05}} transition={{ type: 'spring', bounce: 0, duration: 0.8 }}>
                <Contact />
              </motion.div>
            )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

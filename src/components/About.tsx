import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [tab, setTab] = useState<'dev' | 'crypto'>('dev');

  const skills = [
    { id: '01', name: 'React', desc: 'Building scalable front-end architectures with modern component-based design.', icon: 'deployed_code' },
    { id: '02', name: 'TypeScript', desc: 'Enforcing robust typing for enterprise-grade maintainability.', icon: 'data_object' },
    { id: '03', name: 'Tailwind CSS', desc: 'Rapid UI engineering with utility-first precision and fluidity.', icon: 'grid_view' },
    { id: '04', name: 'Framer Motion', desc: 'Crafting buttery smooth, physics-based interactions and transitions.', icon: 'motion_mode' },
    { id: '05', name: 'Node.js', desc: 'Architecting high-concurrency backend services and REST APIs.', icon: 'hub' },
    { id: '06', name: 'Optimization', desc: 'Maximizing edge-level performance and vital metrics.', icon: 'bolt' },
  ];

  const cryptoSkills = [
    { id: '01', name: 'Technical Analysis', desc: 'Reading market structures, volume profiles, and trend momentum.', icon: 'candlestick_chart' },
    { id: '02', name: 'Degen Trades', desc: 'Executing high-speed, asymmetric risk opportunities on-chain.', icon: 'rocket_launch' },
    { id: '03', name: 'Forex', desc: 'Navigating macroeconomic trends and global liquidity pools.', icon: 'currency_exchange' },
    { id: '04', name: 'On-chain Analytics', desc: 'Tracking smart money and monitoring decentralized ledgers.', icon: 'account_tree' },
  ];

  const currentSkills = tab === 'dev' ? skills : cryptoSkills;

  return (
    <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto space-y-24 min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gradient leading-none">
            About Me
          </h1>
          <div className="glass-card p-10 relative overflow-hidden">
            <p className="text-lg md:text-xl font-body leading-relaxed relative z-10 text-on-surface-variant">
              I specialize in bridging the gap between exceptional design and flawless engineering. My focus is on crafting digital experiences that don't just function perfectly, but feel alive and fluid to the user.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ type: 'spring', duration: 1, delay: 0.2, bounce: 0.3 }}
          className="relative group"
        >
          <div className="aspect-[4/3] glass-card overflow-hidden relative shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <img 
              alt="Developer Profile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://pbs.twimg.com/profile_images/2037135244990509056/vtcTwfL6_400x400.jpg" 
            />
          </div>
        </motion.div>
      </section>

      <section className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-glass-border pb-6 gap-6">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
            Technical Stack
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setTab('dev')} 
              className={`font-headline px-6 py-2 rounded-full transition-all duration-300 ${tab === 'dev' ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'glass hover:text-white text-on-surface-variant'}`}
            >
              Development
            </button>
            <button 
              onClick={() => setTab('crypto')} 
              className={`font-headline px-6 py-2 rounded-full transition-all duration-300 ${tab === 'crypto' ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'glass hover:text-white text-on-surface-variant'}`}
            >
              Crypto
            </button>
          </div>
        </div>

        <motion.div 
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentSkills.map((skill, i) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col gap-4 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-glow/20 border border-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
              </div>
              <h3 className="font-bold font-headline text-xl text-white tracking-tight">{skill.name}</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default About;

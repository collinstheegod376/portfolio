import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [tab, setTab] = useState<'dev' | 'crypto'>('dev');

  const skills = [
    { id: '001', name: 'REACT.JS', desc: 'Core engine for scalable front-end interfaces. Component-based architecture.', icon: 'deployed_code', color: 'text-primary', bgHover: 'group-hover:bg-primary-container', fill: 'bg-primary/10', width: 'w-[95%]', bar: 'bg-primary-container' },
    { id: '002', name: 'TYPESCRIPT', desc: 'Adding strict typing for robust and maintainable codebases.', icon: 'data_object', color: 'text-secondary-container', bgHover: 'group-hover:bg-secondary-container', fill: 'bg-secondary-container/10', width: 'w-[90%]', bar: 'bg-secondary-container' },
    { id: '003', name: 'TAILWIND CSS', desc: 'Rapid structural styling. Utility-first minimalism for absolute layout control.', icon: 'grid_view', color: 'text-tertiary-fixed', bgHover: 'group-hover:bg-tertiary-fixed', fill: 'bg-tertiary-fixed/10', width: 'w-[95%]', bar: 'bg-tertiary-fixed' },
    { id: '004', name: 'FRAMER MOTION', desc: 'Fluidity of movement. Orchestrating high-performance declarative animations.', icon: 'motion_mode', color: 'text-primary', bgHover: 'group-hover:bg-primary-container', fill: 'bg-primary/10', width: 'w-[85%]', bar: 'bg-primary-container' },
    { id: '005', name: 'NODE.JS & EXPRESS', desc: 'Backend architecture. Handling asynchronous events and highly scalable APIs.', icon: 'hub', color: 'text-secondary-container', bgHover: 'group-hover:bg-secondary-container', fill: 'bg-secondary-container/10', width: 'w-[88%]', bar: 'bg-secondary-container' },
    { id: '006', name: 'OPTIMIZATION', desc: 'Performance profiling and maximizing system efficiency at edge locations.', icon: 'terminal', color: 'text-tertiary-fixed', bgHover: 'group-hover:bg-tertiary-fixed', fill: 'bg-tertiary-fixed/10', width: 'w-[98%]', bar: 'bg-tertiary-fixed' },
  ];

  const cryptoSkills = [
    { id: 'C01', name: 'TECHNICAL ANALYSIS', desc: 'Precision chart reading, identifying key support/resistance blocks and trend formations.', icon: 'candlestick_chart', color: 'text-tertiary-fixed', bgHover: 'group-hover:bg-tertiary-fixed', fill: 'bg-tertiary-fixed/10', width: 'w-[95%]', bar: 'bg-tertiary-fixed' },
    { id: 'C02', name: 'DEGEN', desc: 'High-speed execution. Sniping early opportunities and managing high-risk asymmetric bets.', icon: 'rocket_launch', color: 'text-error', bgHover: 'group-hover:bg-error', fill: 'bg-error/10', width: 'w-[90%]', bar: 'bg-error' },
    { id: 'C03', name: 'FOREX', desc: 'Navigating traditional currency flows and leveraging global macroeconomic sentiment.', icon: 'currency_exchange', color: 'text-primary', bgHover: 'group-hover:bg-primary-container', fill: 'bg-primary/10', width: 'w-[85%]', bar: 'bg-primary-container' },
    { id: 'C04', name: 'BLOCKCHAIN ANALYSIS', desc: 'On-chain surveillance, wallet tracking, and auditing smart contract fund movements.', icon: 'account_tree', color: 'text-secondary-container', bgHover: 'group-hover:bg-secondary-container', fill: 'bg-secondary-container/10', width: 'w-[98%]', bar: 'bg-secondary-container' },
  ];

  const currentSkills = tab === 'dev' ? skills : cryptoSkills;

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-16 lg:space-y-24">
      {/* Hero / Bio Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-primary/10 border-l-4 border-primary text-primary font-label text-xs tracking-widest uppercase">
            PROFILE_DATA // 001
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-on-surface">
            About <br />
            <span className="text-secondary-container">The Dev</span>
          </h1>
          <div className="p-6 bg-surface-container-lowest border-l-2 border-secondary-container relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-[0.03]">
              <span className="material-symbols-outlined text-[100px]">account_tree</span>
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md relative z-10 text-on-surface-variant">
              I'm a full-stack developer passionate about building dynamic, responsive, and highly polished web experiences. I specialize in the modern web ecosystem, transforming complex logic into flawless user interfaces.
            </p>
          </div>
        </motion.div>

        {/* Profile Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 relative group"
        >
          <div className="aspect-video bg-surface-container-low overflow-hidden relative border border-outline-variant/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <img 
              alt="Developer Profile" 
              className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700" 
              src="https://pbs.twimg.com/profile_images/2037135244990509056/vtcTwfL6_400x400.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            
            {/* Tactical HUD Overlay */}
            <div className="absolute top-4 left-4 font-label text-[10px] text-tertiary-fixed space-y-1 bg-slate-950/50 backdrop-blur-sm p-3">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-tertiary-fixed animate-pulse shadow-[0_0_5px_#f5e56b]"></span> COMPILING</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary"></span> NO_ERRORS</div>
            </div>
          </div>
          
          <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-secondary-container"></div>
          <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-primary"></div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-outline-variant/30 pb-4 gap-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-3">
            <span className="text-primary material-symbols-outlined text-4xl">code_blocks</span>
            Technical Expertise
          </h2>
          <div className="flex gap-6">
            <button onClick={() => setTab('dev')} className={`font-label text-sm md:text-base uppercase tracking-widest pb-2 border-b-2 transition-colors ${tab === 'dev' ? 'border-primary text-primary' : 'border-transparent text-outline hover:text-on-surface'}`}>Dev</button>
            <button onClick={() => setTab('crypto')} className={`font-label text-sm md:text-base uppercase tracking-widest pb-2 border-b-2 transition-colors ${tab === 'crypto' ? 'border-primary text-primary' : 'border-transparent text-outline hover:text-on-surface'}`}>Crypto</button>
          </div>
        </div>

        <motion.div 
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-outline-variant/10"
        >
          {currentSkills.map((skill, i) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 border border-outline-variant/20 relative group hover:bg-surface-container-high transition-colors ${i % 2 !== 0 ? 'bg-surface-container-low' : ''}`}
            >
              <div className="absolute top-0 right-0 font-label text-[10px] p-4 text-outline">{skill.id}</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${skill.fill} flex items-center justify-center ${skill.color} ${skill.bgHover} group-hover:text-on-primary transition-all`}>
                    <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
                  </div>
                  <h3 className={`font-bold text-xl uppercase tracking-widest ${skill.color}`}>{skill.name}</h3>
                </div>
                <p className="text-sm text-on-surface-variant font-medium min-h-[40px] leading-relaxed relative z-10">{skill.desc}</p>
                <div className="h-1 bg-surface-container-lowest w-full overflow-hidden mt-6">
                  <div className={`h-full ${skill.bar} ${skill.width} ${i === currentSkills.length - 1 ? 'animate-pulse' : ''} shadow-[0_0_10px_currentColor]`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default About;

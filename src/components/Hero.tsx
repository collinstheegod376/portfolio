import { motion } from 'framer-motion';

const Hero = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <div className="pt-20 lg:pt-24">
      <main className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Background Layer: Reactive Particle Network & Lightning Aura */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,166,255,0.05)_0%,_transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <filter id="noise">
                <feTurbulence baseFrequency="0.65" numOctaves={3} stitchTiles="stitch" type="fractalNoise"></feTurbulence>
              </filter>
              <rect filter="url(#noise)" height="100%" opacity="0.1" width="100%"></rect>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-12 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-[2px] bg-tertiary-fixed shadow-[0_0_10px_#f5e56b]"></div>
              <span className="font-label text-sm uppercase tracking-widest text-primary">@promisedkillua</span>
            </div>
            
            <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] text-on-background uppercase italic pb-2">
              PROMISED<br/>
              <span className="text-primary-container">KILLUA</span>
            </h1>

            <div className="max-w-xl space-y-2">
              <p className="font-headline font-extrabold text-lg md:text-2xl text-secondary-container tracking-tight">
                Full-Stack Developer & UI Designer
              </p>
              
              <div className="flex items-center space-x-2 font-label text-on-surface-variant bg-surface-container-lowest/50 p-3 border-l-4 border-tertiary-fixed">
                <span className="text-tertiary-fixed">&gt;</span>
                <span className="type-effect min-h-[24px]">Building modern digital experiences</span>
                <span className="w-2 h-5 bg-tertiary-fixed animate-pulse"></span>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveTab('contact')}
                className="glitch-border group relative px-8 py-4 bg-primary-container text-on-primary-fixed font-black uppercase tracking-tighter flex items-center space-x-3"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-tertiary-fixed group-hover:scale-125 transition-transform duration-75">bolt</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('projects')}
                className="px-8 py-4 border border-outline-variant/30 text-primary font-bold uppercase tracking-tighter hover:bg-surface-container transition-colors"
              >
                View Projects
              </button>
            </div>
          </motion.div>

          {/* Right Column: Asymmetric Data Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative mt-8 md:mt-0"
          >
            <div className="bg-surface-container-low border border-outline-variant/10 p-1 relative group overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-tertiary-fixed opacity-50"></div>
              <img 
                alt="Profile Setup" 
                className="w-full aspect-[4/5] object-cover contrast-110 hover:contrast-100 transition-all duration-300"
                src="https://pbs.twimg.com/profile_images/2037135244990509056/vtcTwfL6_400x400.jpg" 
              />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="bg-slate-950/90 backdrop-blur-md p-3">
                  <p className="font-label text-[10px] text-slate-500 uppercase">Availability</p>
                  <p className="font-label text-xl text-primary-container">OPEN</p>
                  <div className="h-1 bg-surface-container mt-1">
                    <div className="h-full bg-primary-container w-full shadow-[0_0_10px_#00a6ff]"></div>
                  </div>
                </div>
                <div className="bg-slate-950/90 backdrop-blur-md p-3">
                  <p className="font-label text-[10px] text-slate-500 uppercase">Status</p>
                  <p className="font-label text-xl text-tertiary-fixed">ONLINE</p>
                  <div className="h-1 bg-surface-container mt-1">
                    <div className="h-full bg-tertiary-fixed w-full shadow-[0_0_10px_#f5e56b]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticker Banner */}
            <div className="mt-4 bg-surface-container-lowest p-2 overflow-hidden whitespace-nowrap">
              <div className="font-label text-[10px] text-primary flex space-x-8 animate-[marquee_10s_linear_infinite]">
                <span>SYS: ONLINE AND RESPONSIVE</span>
                <span>LOC: REMOTE</span>
                <span>ROLE: FULL-STACK ENGINEER</span>
                <span>STATUS: READY FOR DEPLOYMENT</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </main>

      {/* Bento Stats Section */}
      <section className="bg-surface-dim px-6 py-20 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Bento Item 1 */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 bg-surface-container-low p-8 border-l-2 border-primary-container flex flex-col justify-between min-h-[240px]">
              <span className="font-label text-primary-container text-xs tracking-widest uppercase">Featured Initiative</span>
              <h3 className="font-headline font-black text-3xl md:text-4xl text-on-background leading-none mt-4 uppercase">ENTERPRISE<br/>SYSTEMS</h3>
              <p className="text-on-surface-variant font-body mt-4 max-w-sm">
                Designing scalable, high-performance web applications using modern stacks for businesses worldwide.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="font-label px-2 py-1 bg-surface border border-outline/20 text-[10px] text-primary">#REACT</span>
                <span className="font-label px-2 py-1 bg-surface border border-outline/20 text-[10px] text-primary">#NEXT.JS</span>
                <span className="font-label px-2 py-1 bg-surface border border-outline/20 text-[10px] text-primary">#TYPESCRIPT</span>
              </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:row-span-2 bg-surface-container-highest p-8 flex flex-col justify-end relative overflow-hidden group">
              <img 
                alt="System Analytics" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-500" 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-4">analytics</span>
                <h4 className="font-headline font-extrabold text-2xl text-on-background uppercase">Data Driven</h4>
                <p className="text-on-surface-variant text-sm mt-2">Integrating robust analytics and real-time data processing for precision insights.</p>
              </div>
            </motion.div>

            {/* Bento Item 3 */}
            <div className="bg-surface-container p-6 flex flex-col justify-center items-center text-center">
              <p className="font-label text-4xl text-tertiary-fixed font-bold">4</p>
              <p className="font-label text-[10px] text-slate-500 uppercase tracking-widest mt-1">Projects Deployed</p>
            </div>

            {/* Bento Item 4 */}
            <div className="md:col-span-2 bg-primary-container/10 p-8 border-t-2 border-primary">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline font-black text-2xl text-on-background uppercase">High Performance</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Optimizing web-vitals and reducing latency for seamless UX.</p>
                </div>
                <span className="font-label text-primary text-xl">100%</span>
              </div>
              <div className="mt-6 h-1 w-full bg-surface-container overflow-hidden">
                <div className="h-full bg-primary w-full shadow-[0_0_15px_#96ccff]"></div>
              </div>
            </div>

            {/* Bento Item 5 */}
            <div onClick={() => setActiveTab('contact')} className="bg-surface-container-high p-6 flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-tertiary-fixed text-4xl group-hover:rotate-12 transition-transform">mail</span>
              <p className="font-label text-[10px] text-tertiary mt-4 uppercase">Contact Me</p>
            </div>
            
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

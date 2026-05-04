import { motion } from 'framer-motion';

const Hero = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <div className="pt-32 pb-20 lg:pt-48 flex flex-col items-center justify-center min-h-[90vh]">
      <main className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          className="space-y-8 max-w-4xl"
        >
          <div className="inline-block px-6 py-2 glass-card rounded-full border border-primary/20 bg-primary/5">
            <span className="font-headline text-sm font-medium text-primary-light flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              Full-Stack Developer
            </span>
          </div>
          
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-gradient leading-tight pb-4">
            PROMISED KILLUA
          </h1>

          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Crafting premium digital experiences through refined engineering and immersive, glassmorphic design.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-headline font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]"
            >
              View Portfolio
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 glass-card rounded-full font-headline font-medium transition-all duration-300 hover:text-white"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ type: 'spring', duration: 1, delay: 0.2, bounce: 0.3 }}
           className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl pb-12"
        >
           <div className="glass-card flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl pointer-events-auto hover:-translate-y-1 transition-transform duration-300 border border-glass-border hover:border-primary/30 group">
             <span className="material-symbols-outlined text-primary/50 text-3xl mb-3 group-hover:text-primary transition-colors">code</span>
             <span className="text-4xl font-black text-white tracking-tighter">3</span>
             <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-headline font-medium">Projects</span>
           </div>

           <div className="glass-card flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl pointer-events-auto hover:-translate-y-1 transition-transform duration-300 border border-glass-border hover:border-primary/30 group">
             <span className="material-symbols-outlined text-primary/50 text-3xl mb-3 group-hover:text-primary transition-colors">speed</span>
             <span className="text-4xl font-black text-white tracking-tighter">20</span>
             <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-headline font-medium">Lighthouse</span>
           </div>

           <div className="glass-card flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl pointer-events-auto hover:-translate-y-1 transition-transform duration-300 border border-glass-border hover:border-primary/30 group">
             <span className="material-symbols-outlined text-primary/50 text-3xl mb-3 group-hover:text-primary transition-colors">public</span>
             <span className="text-4xl font-black text-white tracking-tighter">24/7</span>
             <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-headline font-medium">Availability</span>
           </div>

           <div className="glass-card flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl pointer-events-auto hover:-translate-y-1 transition-transform duration-300 border border-glass-border hover:border-primary/30 group">
             <span className="material-symbols-outlined text-primary/50 text-3xl mb-3 group-hover:text-primary transition-colors">diamond</span>
             <span className="text-4xl font-black text-white tracking-tighter">100</span>
             <span className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-headline font-medium">Commits</span>
           </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;

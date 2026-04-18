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
          <div className="inline-block px-6 py-2 glass-card rounded-full">
            <span className="font-headline text-sm font-medium text-primary-light">Full-Stack Developer & UI Designer</span>
          </div>
          
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-gradient leading-tight pb-4">
            PROMISED KILLUA
          </h1>

          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Crafting premium digital experiences through refined engineering and immersive, glassmorphic design.
          </p>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
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
      </main>
    </div>
  );
};

export default Hero;

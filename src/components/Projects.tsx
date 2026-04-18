import { motion } from 'framer-motion';

const Projects = () => {
  const missions = [
    {
      id: "01",
      title: "Sub Tracker",
      desc: "Manage and analyze your subscriptions with zero friction.",
      tech: ["NEXT.JS", "TAILWIND", "SUPABASE"],
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      delay: 0.1,
      link: "https://www.subtracker.sbs/"
    },
    {
      id: "02",
      title: "Bleem and Brew",
      desc: "A stunning storytelling landing page for a coffee shop featuring smooth scroll animations and modern layouts.",
      tech: ["NODE", "TAILWIND CSS", "SCROLLYTELLING"],
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      delay: 0.2,
      link: "https://bleem-and-brew.vercel.app/"
    },
    {
      id: "03",
      title: "Truck Landing Page",
      desc: "Clean and informative landing page built to capture user details seamlessly for logistics and trucking workflows.",
      tech: ["REACT", "TAILWIND CSS", "FORMS"],
      img: "/truck-bg.png",
      delay: 0.3,
      link: "https://truck-landing-page-two.vercel.app/"
    }
  ];

  return (
    <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gradient leading-none">
          Recent Inventory
        </h1>
        <p className="font-body text-on-surface-variant mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          A showcase of recent web applications, demonstrating scalable design, smooth animations, and high performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {missions.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8, delay: project.delay, bounce: 0.3 }}
            className="glass-card overflow-hidden flex flex-col group h-full"
          >
            <div className="h-48 overflow-hidden relative border-b border-glass-border">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={project.title} 
                src={project.img} 
              />
              <div className="absolute inset-0 bg-background-dark/30 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-primary-light">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-headline font-semibold text-primary group-hover:text-primary-light transition-all flex items-center shrink-0 w-max bg-primary-glow/10 px-4 py-2 rounded-full border border-primary/20"
                >
                  Live Demo
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Projects;

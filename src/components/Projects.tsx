import { motion } from 'framer-motion';

const Projects = () => {
  const missions = [
    {
      id: "01",
      status: "[DEPLOYED]",
      tag: "FINTECH",
      title: "Sub Tracker",
      desc: "Manage and analyze your subscriptions. Next-gen monitoring for your spendings.",
      tech: ["NEXT.JS", "TAILWIND", "SUPABASE"],
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      color: "text-primary",
      lineColor: "bg-primary",
      shadowColor: "shadow-[0_0_15px_#96ccff]",
      span: "md:col-span-8",
      delay: 0.1,
      link: "https://www.subtracker.sbs/"
    },
    {
      id: "02",
      status: "[ONGOING]",
      tag: "SAAS",
      title: "Enterprise Analytics ORM",
      desc: "Cloud-based customer analytics platform with high-throughput indexing.",
      tech: ["VUE", "NODE"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      color: "text-tertiary-fixed",
      lineColor: "bg-tertiary-fixed",
      shadowColor: "shadow-[0_0_15px_#f5e56b]",
      span: "md:col-span-4",
      delay: 0.2
    },
    {
      id: "03",
      status: "[PRIVATE]",
      tag: "WEB3",
      title: "Decentralized Auth Portal",
      desc: "Private gateway for asset management. Encrypted ledger for high-value contract distributions. Includes biometric integration.",
      tech: ["NEXT.JS", "WEB3", "PRISMA"],
      img: "",
      color: "text-error",
      lineColor: "bg-error",
      shadowColor: "shadow-[0_0_15px_#ffb4ab]",
      span: "md:col-span-5",
      delay: 0.3
    },
    {
      id: "04",
      status: "[DEPLOYED]",
      tag: "PLATFORM",
      title: "Real-time Messaging Protocol",
      desc: "P2P encrypted messaging layer with zero-trace latency. Optimized for rapid communication across global nodes.",
      tech: ["TYPESCRIPT", "WEBSOCKETS"],
      img: "",
      color: "text-secondary-container",
      lineColor: "bg-secondary-container",
      shadowColor: "shadow-[0_0_15px_#00f1fe]",
      span: "md:col-span-7",
      delay: 0.4
    }
  ];

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 relative"
      >
        <div className="flex items-baseline space-x-4 mb-2">
          <span className="font-label text-secondary-container text-xs tracking-widest uppercase">Directory: /projects/active</span>
          <span className="h-[1px] flex-grow bg-outline-variant/30"></span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-primary leading-none">
          Recent <span className="text-on-surface-variant">Deployments</span>
        </h1>
        <p className="font-label text-on-surface-variant mt-4 max-w-xl text-sm leading-relaxed border-l-2 border-primary pl-4">
          A showcase of recent engineering work, ranging from scalable web applications to high-performance enterprise systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/20 border border-outline-variant/20 overflow-hidden">
        {missions.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: project.delay }}
            className={`${project.span} group relative bg-surface-container-lowest overflow-hidden transition-all duration-300 hover:bg-surface-container-low border-b md:border-b-0 md:border-r border-outline-variant/20`}
          >
            <div className="p-8 flex flex-col h-full justify-between z-10 relative">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-label text-xs ${project.color}`}>{project.status}</span>
                  <span className="font-label text-outline-variant text-xs">ID: {project.id} - {project.tag}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-label text-on-surface group-hover:text-primary transition-colors mb-4 uppercase tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant max-w-md font-label text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="mt-12 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-surface-container text-[10px] font-label text-outline uppercase border border-outline-variant/20">
                      {t}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-label text-primary text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 flex items-center shrink-0">
                    Live Demo
                    <span className="material-symbols-outlined ml-1 text-xs">
                      open_in_new
                    </span>
                  </a>
                ) : (
                  <button className="font-label text-primary text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 flex items-center shrink-0">
                    {project.status === '[PRIVATE]' ? 'Request Access' : 'View Code'} 
                    <span className="material-symbols-outlined ml-1 text-xs">
                      {project.status === '[PRIVATE]' ? 'lock' : 'open_in_new'}
                    </span>
                  </button>
                )}
              </div>
            </div>
            
            {project.img && (
              <div className="absolute inset-0 opacity-10 group-hover:opacity-[0.15] transition-opacity">
                <img className="w-full h-full object-cover grayscale" alt={project.title} src={project.img} />
              </div>
            )}
            
            <div className={`absolute bottom-0 left-0 w-full h-[2px] ${project.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${project.shadowColor}`}></div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-wrap gap-12 border-t border-outline-variant/20 pt-8 mt-16">
        <div>
          <div className="font-label text-outline text-[10px] uppercase mb-1">Total Projects</div>
          <div className="font-label text-2xl font-bold text-on-surface">5</div>
        </div>
        <div>
          <div className="font-label text-outline text-[10px] uppercase mb-1">Frameworks Mastered</div>
          <div className="font-label text-2xl font-bold text-secondary-container">12</div>
        </div>
        <div>
          <div className="font-label text-outline text-[10px] uppercase mb-1">Code Quality</div>
          <div className="font-label text-2xl font-bold text-tertiary-fixed">99.9%</div>
        </div>
        <div className="ml-auto hidden md:block">
          <div className="font-label text-outline text-[10px] uppercase mb-1">System Status</div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#96ccff]"></span>
            <span className="font-label text-sm text-on-surface">CORE_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;

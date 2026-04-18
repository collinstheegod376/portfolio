import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-32 px-4 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-secondary text-sm font-label uppercase tracking-widest bg-secondary-container/10 px-2 py-1">Communications // Module</span>
          <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-on-background leading-none">
          Get In <span className="text-primary italic">Touch</span>
        </h1>
      </div>

      {/* Terminal Interface */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        autoFocus={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-surface-container-lowest border border-outline-variant/20 shadow-[0_0_50px_rgba(0,166,255,0.05)] relative overflow-hidden group"
      >
        <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-error rounded-[1px]"></div>
            <div className="w-3 h-3 bg-tertiary rounded-[1px]"></div>
            <div className="w-3 h-3 bg-secondary-container rounded-[1px]"></div>
          </div>
          <div className="text-[10px] font-label text-outline uppercase tracking-widest leading-none bg-black/20 px-3 py-1 selection:bg-none">TERMINAL_CLIENT_V4</div>
          <div className="w-12"></div>
        </div>

        <div className="p-6 md:p-8 font-label text-sm md:text-base leading-relaxed">
          <div className="mb-6 space-y-1">
            <p className="text-outline">Terminal Interface [Version 1.0.42-Core]</p>
            <p className="text-outline">(c) 2030 OS Systems. All rights reserved.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-tertiary-fixed font-bold shrink-0">$&gt;</span>
              <p className="text-primary-fixed-dim">contact --initiate</p>
            </div>
            
            <div className="pl-8 space-y-4 border-l-2 border-primary/20 py-2 mt-4 relative">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-primary/40 animate-pulse"></div>
              <p className="text-secondary-container animate-pulse">[ANALYZING CONNECTION PARAMETERS...]</p>
              <p className="text-on-surface-variant">Uplink established. Awaiting user input...</p>

              <form action="mailto:promisedkillua@gmail.com" method="GET" className="bg-surface-container mt-8 border-l-4 border-secondary-container p-6 space-y-6 max-w-3xl relative z-10 transition-all hover:border-primary focus-within:border-primary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] text-secondary font-bold uppercase tracking-widest" htmlFor="subject">Subject_Line</label>
                    <input 
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-surface-container-low border-b-2 border-primary p-3 text-on-surface focus:ring-0 focus:outline-none focus:bg-surface-container-high transition-all font-label placeholder:text-outline-variant/50" 
                      placeholder="ENTER TOPIC" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] text-secondary font-bold uppercase tracking-widest">Return_Address</label>
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-primary p-3 text-on-surface focus:ring-0 focus:outline-none focus:bg-surface-container-high transition-all font-label placeholder:text-outline-variant/50 pointer-events-none opacity-50" 
                      placeholder="Will send from your email client" 
                      type="text"
                      readOnly
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] text-secondary font-bold uppercase tracking-widest" htmlFor="body">Message_Body</label>
                  <textarea 
                    id="body"
                    name="body"
                    required
                    className="w-full bg-surface-container-low border-b-2 border-primary p-3 text-on-surface focus:ring-0 focus:outline-none focus:bg-surface-container-high transition-all font-label placeholder:text-outline-variant/50 resize-y" 
                    placeholder="ENTER INQUIRY OR PROJECT DETAILS..." 
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/10">
                  <p className="text-[10px] text-outline italic">Target Address: promisedkillua@gmail.com</p>
                  <button type="submit" className="bg-primary-container text-on-primary-fixed font-bold px-8 py-3 hover:bg-tertiary-fixed transition-colors border-b-4 border-transparent hover:border-tertiary-fixed-dim uppercase tracking-tighter text-sm flex items-center gap-2 group/btn">
                    Launch_Client
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="launch">launch</span>
                  </button>
                </div>
              </form>

              <div className="pt-8 flex flex-wrap gap-4 relative z-10">
                <a className="group flex items-center gap-2 bg-surface-container-high px-4 py-2 border border-outline-variant/30 hover:border-secondary-container transition-all" href="https://x.com/promisedkillua" target="_blank" rel="noreferrer">
                  <span className="text-secondary-container font-bold text-sm">@promisedkillua</span>
                  <span className="material-symbols-outlined text-sm text-outline group-hover:text-secondary-container">open_in_new</span>
                </a>
                <div className="px-4 py-2 border border-outline-variant/10 text-outline-variant cursor-not-allowed text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  SECURE_COMMS_002
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-8">
              <span className="text-tertiary-fixed font-bold shrink-0">$&gt;</span>
              <div className="w-2 h-5 bg-tertiary-fixed animate-[pulse_1s_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border-t border-outline-variant/20 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6 overflow-hidden whitespace-nowrap">
            <span className="text-secondary-container font-bold text-xs uppercase tracking-widest hidden sm:inline">System_Logs</span>
            <div className="flex gap-4 md:gap-8 text-[10px] font-label uppercase tracking-widest text-outline">
              <span className="flex items-center gap-2 text-tertiary-fixed"><span className="w-1.5 h-1.5 bg-tertiary-fixed rounded-sm"></span> [STATUS: ONLINE]</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-outline-variant rounded-sm"></span> [ACCEPTING GIGS]</span>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;

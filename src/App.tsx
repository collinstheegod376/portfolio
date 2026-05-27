import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Github = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Telegram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
);

const Mail = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const Download = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const TechCategory = ({ title, items }: { title: string, items: { name: string, iconUrl: string }[] }) => (
  <div className="flex flex-col w-full md:w-[305px] min-h-[180px] bg-surface rounded-xl border border-white/5 p-6 box-border">
    <h4 className="font-sans font-normal text-[16px] leading-[22px] text-white mb-[25px]">
      {title}
    </h4>
    <div className="flex flex-col gap-[14px]">
      {items.map(item => (
        <div key={item.name} className="flex flex-row items-center gap-[14px]">
          <div className="w-[34px] h-[34px] rounded-full bg-[#272727] flex items-center justify-center shrink-0">
            <img src={item.iconUrl} alt={item.name} className="w-[18px] h-[18px] object-contain" />
          </div>
          <span className="font-sans font-normal text-[16px] leading-[22px] text-white">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SkillCard = ({ title, color, textColor, children }: { title: string, color: string, textColor: string, children: React.ReactNode }) => (
  <div className="shrink-0 w-[409px] h-[277px] rounded-[60px] flex flex-col justify-center px-12 relative transition-all duration-300 hover:-translate-y-2 snap-center" style={{ backgroundColor: color }}>
    <div className="absolute top-[90px] w-[60px] h-[60px] flex items-center justify-center">
      {children}
    </div>
    <span className="font-sans font-bold text-[26px] leading-[31px] absolute top-[161px]" style={{ color: textColor }}>{title}</span>
  </div>
);

const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 409 + 40; // 409px card + 40px gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = 409 + 40;
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (index !== activeSlide) setActiveSlide(index);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-bright selection:bg-accent-purple selection:text-white pb-32 font-sans overflow-x-hidden">
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-surface-light/40 backdrop-blur-3xl border border-white/5 rounded-full px-8 py-3 flex items-center gap-8 shadow-2xl">
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <a href="#home" className="hover:text-accent-purple transition-colors">HOME</a>
            <a href="#education" className="hover:text-accent-purple transition-colors text-text-muted">EDUCATION</a>
            <a href="#experience" className="hover:text-accent-purple transition-colors text-text-muted">WORKS</a>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/collinstheegod376" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors"><Github size={16} /></a>
            <a href="https://t.me/promisedkillua" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors"><Telegram size={16} /></a>
            <a href="mailto:promisedkillua@gmail.com" className="text-text-muted hover:text-white transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </nav>

      <main id="home" className="pt-56 px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
            Hi, I'm Killua
          </h1>
          <p className="max-w-[662px] font-light text-[24px] leading-[48px] text-[#6F6F6F] mb-12">
            Hello Promised Killua Here I Am A <span className="font-bold text-white">Fullstack Web Developer</span>. I Have Over <span className="font-bold text-white">7 Months</span> Of Experience In Web Development. I Have Worked On Various Web Applications,
          </p>
          <div className="flex flex-row items-start gap-[31px]">
            <a href="/Promised_Killua_CV_Professional.pdf" download="Promised_Killua_CV_Professional.pdf" className="flex flex-row justify-center items-center px-[40px] py-[12px] gap-[8px] bg-white text-background rounded-[100px] font-bold text-sm hover:bg-accent-mint transition-colors w-[184px] h-[46px]">
              Dowload CV <Download size={16} />
            </a>
            <a href="#experience" className="text-accent-purple font-medium text-sm hover:text-white transition-colors flex items-center h-[46px]">
              My works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative w-full max-w-[400px] aspect-[390/380]">
            <div className="absolute inset-0 bg-accent-mint/20 rounded-full blur-3xl scale-90 rotate-12"></div>
            <svg viewBox="0 0 390 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-2xl brightness-95 grayscale-[10%] transition-transform hover:scale-[1.02] duration-500">
              <defs>
                <clipPath id="heroBlob">
                  <path d="M178.449 12.313C231.026 4.33956 289.336 -13.7022 331.794 18.3164C377.15 52.5196 392.159 114.906 389.755 171.662C387.446 226.192 358.273 274.303 319.334 312.547C280.803 350.389 232.121 385.199 178.449 379.194C127.733 373.519 99.191 322.886 65.919 284.191C36.4549 249.925 0.0863102 216.854 0.000174852 171.662C-0.0860628 126.416 31.7407 88.8386 65.4893 58.7022C97.052 30.5177 136.612 18.6577 178.449 12.313Z" />
                </clipPath>
              </defs>
              <image
                href="https://pbs.twimg.com/profile_images/2056295886104170496/zFmgiPIl_400x400.jpg"
                width="390"
                height="380"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#heroBlob)"
              />
            </svg>
          </div>
        </motion.div>
      </main>

      <section className="mt-40 max-w-[1781px] mx-auto relative px-8 lg:px-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-[40px]">
          {/* Left Text Box */}
          <div className="flex flex-col w-[250px] shrink-0 pt-10">
            <span className="font-sans font-medium text-[16px] leading-[48px] text-[#6F6F6F]">
              7 Months  of
            </span>
            <h2 className="font-sans font-bold text-[80px] leading-[48px] text-white my-4">
              XP
            </h2>
            <p className="font-sans font-medium text-[16px] leading-[19px] text-[#6F6F6F]">
              with the most popular ecosystem frontend
            </p>
          </div>

          {/* Right Scrollable Cards */}
          <div className="flex-1 w-full relative">
            <div ref={scrollRef} onScroll={handleScroll} className="flex items-center gap-[40px] overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              <SkillCard title="JavaScript" color="#C3C99E" textColor="#272727">
                <svg viewBox="0 0 128 128" className="w-[60px] h-[60px] rounded">
                  <path fill="#D9F431" d="M1.3 1.3h125.4v125.4H1.3z" />
                  <path fill="#120F1A" d="M116.6 99.2c-1.4-4.8-6-9.8-20.4-14-5-2.1-10.6-3.2-12.2-6.4-.6-1.8-.7-2.8-.3-3.9.3-3 3.2-3.9 6.3-3.4 2 .3 3.9 1.4 5.1 3.5 5.4-3.5 5.4-3.5 9.2-5.9-1.4-2.2-2.1-3.2-3.1-4.1-3.4-3.8-7.4-5.7-14.3-5.5l-3.6.5C77.7 61.2 74 63.6 72.4 66.7c-5.5 8.7-1.6 21.4 6.8 25.8 8.2 4.6 18.2 5.5 22.2 11.4 1.3 3.7-.4 9-7.4 8.3-4.8-.8-7.5-3.5-10.4-8l-9.6 5.6a32 32 0 0 0 4.9 7c9.6 9.6 33.5 9.1 37.8-5.5.1-.5 1.5-4.5.5-10.6zm-54.5-42h-11.9c0 10.3-.1 20.5-.1 30.8 0 6.5.3 12.5-1.9 15.7-2.2 4-7.9 3.5-10.5 2.8-2.7-1.4-4-3.4-5.6-6.2-.4-.7-.8-1.4-.8-1.4l-9.6 5.9c1.6 3.3 3.9 6.2 6.8 8 4.4 2.8 10.4 3.7 16.6 2.2 4.1-1.3 7.6-3.8 9.5-7.6 2.8-5.3 2.2-11.8 2.1-19 .1-10.4 0-20.8 0-31.2z" />
                </svg>
              </SkillCard>

              <SkillCard title="React" color="#7D9CA5" textColor="#272727">
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-[52px] h-[52px]">
                  <circle cx="0" cy="0" r="2.05" fill="#61DBFB" />
                  <g stroke="#61DBFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </SkillCard>

              <SkillCard title="Next.JS" color="#C2C2C2" textColor="#272727">
                <svg viewBox="0 0 512 512" className="w-[52px] h-[52px]">
                  <circle cx="256" cy="256" r="256" fill="#1A1A1A" />
                  <path fill="url(#next-gradient)" d="M374 413.5l-155.8-216h-44.5v197.6h38v-138l125 178.6c13.7-6 26.5-13.6 37.3-22.2z" />
                  <path fill="#fff" d="M327.9 197.5h38.2v197.5h-38.2z" />
                  <defs>
                    <linearGradient id="next-gradient" x1="272.5" y1="363.5" x2="384.5" y2="408.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </SkillCard>

              <SkillCard title="Figma" color="#C0E6D7" textColor="#272727">
                <svg viewBox="0 0 38 57" className="w-[35px] h-[52px]">
                  <path fill="#0ACF83" d="M19 28.5c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5z" />
                  <path fill="#A259FF" d="M0 9.5C0 4.253 4.253 0 9.5 0S19 4.253 19 9.5s-4.253 9.5-9.5 9.5S0 14.747 0 9.5z" />
                  <path fill="#F24E1E" d="M0 28.5c0-5.247 4.253-9.5 9.5-9.5S19 23.253 19 28.5s-4.253 9.5-9.5 9.5S0 33.747 0 28.5z" />
                  <path fill="#FF7262" d="M0 47.5c0-5.247 4.253-9.5 9.5-9.5S19 42.253 19 47.5s-4.253 9.5-9.5 9.5S0 52.747 0 47.5z" />
                  <path fill="#1ABCFE" d="M19 9.5C19 4.253 23.253 0 28.5 0S38 4.253 38 9.5s-4.253 9.5-9.5 9.5S19 14.747 19 9.5z" />
                </svg>
              </SkillCard>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center gap-[6px] mt-6">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-[13px] rounded-[100px] transition-all duration-300 cursor-pointer ${activeSlide === i ? 'w-[66.29px] bg-[#D9D9D9]' : 'w-[20.43px] bg-[#606060] hover:bg-[#808080]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-72 px-8 max-w-6xl mx-auto">
        <h3 className="font-sans font-normal text-[60px] leading-[70px] text-[#C8C8C8] mb-28 max-w-lg">
          These are the <br /> technologies <br /> that I've been using
        </h3>

        <div className="flex flex-wrap gap-12 justify-center lg:justify-start max-w-5xl mx-auto">
          <TechCategory
            title="Publications in both stores"
            items={[
              { name: "App Store", iconUrl: "https://cdn.simpleicons.org/appstore/0D96F6" },
              { name: "Play Store", iconUrl: "https://cdn.simpleicons.org/googleplay" }
            ]}
          />
          <TechCategory
            title="Front-end Engineer Design"
            items={[
              { name: "React JS", iconUrl: "https://cdn.simpleicons.org/react/61DBFB" },
              { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react/61DBFB" },
              { name: "Next.JS", iconUrl: "https://cdn.simpleicons.org/nextdotjs/white" },
              { name: "Vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF" },
              { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma" },
              { name: "Jest", iconUrl: "https://cdn.simpleicons.org/jest/C21325" },
              { name: "React Testing Library", iconUrl: "https://cdn.simpleicons.org/testinglibrary/E33332" }
            ]}
          />
          <TechCategory
            title="Languages"
            items={[
              { name: "Javascript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
              { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" }
            ]}
          />
          <TechCategory
            title="Devops"
            items={[
              { name: "Github Actions", iconUrl: "https://cdn.simpleicons.org/githubactions/2088FF" },
              { name: "Nginx", iconUrl: "https://cdn.simpleicons.org/nginx/009639" },
              { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" }
            ]}
          />
          <TechCategory
            title="Back-end"
            items={[
              { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
              { name: "Prisma", iconUrl: "https://cdn.simpleicons.org/prisma/white" }
            ]}
          />
        </div>
      </section>

      <footer className="mt-72 px-8 py-20 border-t border-white/5 bg-surface/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <span className="text-text-muted font-black uppercase tracking-[0.3em] text-xs">Follow me</span>
          <div className="flex gap-12">
            <a href="https://github.com/collinstheegod376" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-purple transition-all hover:scale-110"><Github size={24} /></a>
            <a href="https://t.me/promisedkillua" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-purple transition-all hover:scale-110"><Telegram size={24} /></a>
            <a href="mailto:promisedkillua@gmail.com" className="text-text-muted hover:text-accent-purple transition-all hover:scale-110"><Mail size={24} /></a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-text-bright font-black tracking-widest text-sm">KILLUA Z.</span>
            <span className="text-text-muted text-[10px] font-bold uppercase tracking-widest">zoldyck © 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

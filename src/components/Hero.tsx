import { motion } from 'motion/react';
import { Sparkles, Brain, Cpu, Code, Server, GitBranch, ArrowRight, Mail, Download, Layers } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollIntoView = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Define floating tech items with their respective Lucide Icons, positions and speeds
  const floatingTech = [
    { icon: <AtomIcon className="text-sky-400" />, label: 'React', delay: 0, x: '2%', y: '12%', scale: 1.1 },
    { icon: <Brain className="text-fuchsia-400" size={24} />, label: 'AI', delay: 1, x: '78%', y: '15%', scale: 1.2 },
    { icon: <Cpu className="text-amber-400" size={22} />, label: 'TensorFlow', delay: 2, x: '85%', y: '55%', scale: 1 },
    { icon: <Code className="text-yellow-400" size={20} />, label: 'JavaScript', delay: 0.5, x: '5%', y: '68%', scale: 1 },
    { icon: <Server className="text-green-400" size={22} />, label: 'Node', delay: 1.5, x: '25%', y: '85%', scale: 1.1 },
    { icon: <GitBranch className="text-orange-400" size={20} />, label: 'Git', delay: 2.5, x: '68%', y: '82%', scale: 1 },
    { icon: <Layers className="text-blue-400" size={22} />, label: 'Docker', delay: 1.2, x: '12%', y: '40%', scale: 1.05 },
    { icon: <TerminalIcon className="text-green-500" />, label: 'Python', delay: 1.8, x: '82%', y: '32%', scale: 1.15 }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-blue-600/10 dark:bg-blue-600/12 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-600/10 dark:bg-purple-600/12 blur-[120px]" />
        {/* Particle/Grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for Hire
          </motion.div>

          {/* Subtext and Greeting */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-500 dark:text-neutral-400 font-mono text-xs md:text-sm uppercase tracking-[0.25em] mb-3"
          >
            Hello, I'm
          </motion.h3>

          {/* Core Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-white dark:to-neutral-500 bg-clip-text text-transparent mb-4 font-sans"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Rotating Typewriter Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-6 h-10 flex items-center"
          >
            <TypingAnimation words={personalInfo.subTitles} />
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-neutral-600 dark:text-neutral-300 max-w-xl text-sm md:text-base leading-relaxed mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollIntoView('projects')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 text-white transition-all shadow-lg shadow-blue-500/10 hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => scrollIntoView('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <Mail size={14} className="mr-1" />
              Contact Me
            </button>

            <a
              href="/Muzamil_Dars_CV.pdf"
              download="/Muzamil_Dars_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase bg-neutral-200/50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all hover:scale-[1.02]"
            >
              <Download size={14} className="mr-1" />
              Get Resume
            </a>
          </motion.div>

        </div>

        {/* Right Side: Interactive Profile Circle & Floating Icons */}
        <div className="lg:col-span-5 flex items-center justify-center relative select-none mt-8 lg:mt-0">
          <div className="relative w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] flex items-center justify-center">
            
            {/* Pulsing Glowing Background Circles */}
            <div className="absolute inset-2 rounded-full border border-violet-500/20 dark:border-violet-500/10 animate-ping-slow pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-indigo-500/30 dark:border-indigo-500/15 animate-[pulse_4s_infinite]" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500/10 via-transparent to-indigo-500/10 blur-xl pointer-events-none" />

            {/* Glowing Ring Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-neutral-200 dark:border-neutral-800"
            />

            {/* Main Circular Profile Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[16rem] h-[16rem] md:w-[19rem] md:h-[19rem] rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20"
            >
              {/* Profile Image with Overlay */}
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-4 border-white dark:border-neutral-950 relative group">
                <img
                  src={personalInfo.profileImage}
                  alt="Muzamil Dars Profile"
                  className="w-full h-full object-cover transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Tech Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-60" />
                
                {/* Cyber Matrix Tech Text overlay on hover */}
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-neutral-950/80 px-3 py-1.5 rounded-full border border-neutral-800 font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                    MUZAMIL DARS
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Render Floating technology icons around the avatar */}
            {floatingTech.map((tech, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  left: tech.x,
                  top: tech.y,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: tech.delay,
                  ease: 'easeInOut',
                }}
                className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-violet-500/40 hover:dark:border-violet-500/40 shadow-md shadow-neutral-950/5 dark:shadow-black/50 flex items-center justify-center cursor-pointer group hover:scale-110 hover:-translate-y-1 transition-all z-20"
                title={tech.label}
              >
                {tech.icon}
                <div className="absolute top-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded shadow border border-neutral-800 pointer-events-none">
                  {tech.label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

// Custom inline SVG icons representing Atom (React) and Terminal (Python) for clean self-containment
function AtomIcon({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={`w-5 h-5 fill-none ${className}`}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function TerminalIcon({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

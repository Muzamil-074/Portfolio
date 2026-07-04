import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          setTimeout(onComplete, 1200); // Allow exit animations to complete
          return 100;
        }
        // Increment progress dynamically for a natural loading feel
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950 text-white"
        >
          {/* Futuristic background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo Icon Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl shadow-blue-500/10"
            >
              <span className="font-mono font-bold text-2xl tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MD
              </span>
              <div className="absolute inset-0 rounded-2xl border border-blue-500/20 animate-pulse" />
            </motion.div>

            {/* Name Reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-2xl md:text-3xl font-bold tracking-widest text-neutral-100"
              >
                MUZAMIL DARS
              </motion.h1>
            </div>

            {/* Title / Description */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-xs md:text-sm font-mono tracking-wider text-neutral-400 uppercase"
              >
                AI Engineer & Full-Stack Developer
              </motion.p>
            </div>

            {/* Progress Container */}
            <div className="w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div 
              className="font-mono text-sm tracking-wider text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Core tech overlay details */}
          <div className="absolute bottom-10 left-0 right-0 text-center font-mono text-[10px] text-neutral-500 tracking-[0.2em] uppercase">
            Initiating Core Intelligence Modules...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

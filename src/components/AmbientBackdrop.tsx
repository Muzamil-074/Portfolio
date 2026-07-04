import { motion } from 'motion/react';

export default function AmbientBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic drifting background orbs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-blue-500/5 dark:bg-blue-500/[0.04] blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-purple-500/5 dark:bg-purple-500/[0.03] blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[50%] left-[40%] w-[25rem] h-[25rem] rounded-full bg-violet-500/5 dark:bg-violet-500/[0.03] blur-[120px]"
      />

      {/* Cyberpunk high-tech grid mesh pattern spanning the whole page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />

      {/* Futuristic digital glow scanline overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/[0.02] dark:via-white/[0.01] to-transparent mix-blend-overlay pointer-events-none" />
    </div>
  );
}

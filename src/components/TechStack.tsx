import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export default function TechStack() {
  const techs = [
    { name: 'React.js', icon: <Icons.Atom size={24} className="text-sky-400" />, glow: 'group-hover:shadow-sky-500/20' },
    { name: 'TypeScript', icon: <Icons.Code size={24} className="text-blue-500" />, glow: 'group-hover:shadow-blue-500/20' },
    { name: 'Python', icon: <Icons.Terminal size={24} className="text-green-500" />, glow: 'group-hover:shadow-green-500/20' },
    { name: 'Node.js', icon: <Icons.Server size={24} className="text-emerald-500" />, glow: 'group-hover:shadow-emerald-500/20' },
    { name: 'TensorFlow', icon: <Icons.Brain size={24} className="text-orange-500" />, glow: 'group-hover:shadow-orange-500/20' },
    { name: 'PyTorch', icon: <Icons.Cpu size={24} className="text-red-500" />, glow: 'group-hover:shadow-red-500/20' },
    { name: 'Next.js', icon: <Icons.Sparkles size={24} className="text-violet-400" />, glow: 'group-hover:shadow-violet-400/20' },
    { name: 'MongoDB', icon: <Icons.Database size={24} className="text-green-400" />, glow: 'group-hover:shadow-green-400/20' },
    { name: 'Firebase', icon: <Icons.Flame size={24} className="text-amber-500" />, glow: 'group-hover:shadow-amber-500/20' },
    { name: 'Docker', icon: <Icons.Package size={24} className="text-cyan-500" />, glow: 'group-hover:shadow-cyan-500/20' },
    { name: 'Git', icon: <Icons.GitBranch size={24} className="text-orange-600" />, glow: 'group-hover:shadow-orange-600/20' },
    { name: 'Tailwind CSS', icon: <Icons.Palette size={24} className="text-teal-400" />, glow: 'group-hover:shadow-teal-400/20' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors relative overflow-hidden border-t border-b border-neutral-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Simple visual section heading */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 dark:text-neutral-500 uppercase block mb-3">
            Core Toolkit
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
            Technologies I Exploit Daily
          </h2>
          <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Tech stack items row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 flex items-center gap-3 group hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:scale-[1.03] hover:shadow-md cursor-pointer"
            >
              <div className={`p-2.5 rounded-xl bg-white dark:bg-neutral-950 shadow-sm transition-all group-hover:scale-115 ${tech.glow}`}>
                {tech.icon}
              </div>
              <span className="font-semibold text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

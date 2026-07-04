import { motion } from 'motion/react';
import { Briefcase, Calendar, Award, CheckCircle, Sparkles } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors relative"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative border-l-2 border-neutral-100 dark:border-neutral-800 ml-4 md:ml-32 space-y-12">
          
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              
              {/* Left Floating Timeline Date (Desktop Only) */}
              <div className="hidden md:block absolute right-full top-1 mr-12 text-right">
                <span className="block text-sm font-bold text-neutral-950 dark:text-white">
                  {exp.duration}
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-1">
                  {exp.company}
                </span>
              </div>

              {/* Central Timeline Dot Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="absolute left-0 -translate-x-1/2 top-0.5 w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 z-10"
              >
                <span className="font-bold text-xs font-mono">{exp.logoText}</span>
              </motion.div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all group cursor-pointer relative"
              >
                {/* Floating Date (Mobile Only) */}
                <div className="inline-flex md:hidden items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-4">
                  <Calendar size={10} />
                  {exp.duration} • {exp.company}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 font-mono">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Core Mandate
                  </span>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                        <CheckCircle size={14} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements block */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-white/5 mb-6">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                      <Award size={12} className="text-blue-500" />
                      Key Milestones & Achievements
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-0.5 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used chips list */}
                <div className="space-y-3">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Technologies Exploited
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-white/5 text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

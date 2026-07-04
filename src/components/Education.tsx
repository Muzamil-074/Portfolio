import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Education
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            Academic Foundation
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm relative overflow-hidden group cursor-pointer hover:border-blue-500/20"
            >
              {/* Highlight background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-neutral-100 dark:border-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                       {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 font-mono">
                      {edu.university} • {edu.year}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold font-mono tracking-wider">
                  CGPA: {edu.cgpa}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Coursework list */}
                <div className="space-y-4">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen size={12} className="text-blue-500" />
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-white/5 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>


              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Globe, Shield, Calendar, UserCheck, Briefcase, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const details = [
    { icon: <MapPin className="text-blue-500" size={16} />, label: 'Location', value: personalInfo.location },
    { icon: <Mail className="text-blue-500" size={16} />, label: 'Email', value: personalInfo.email, isEmail: true },
    { icon: <Phone className="text-blue-500" size={16} />, label: 'Phone', value: personalInfo.phone },
    { icon: <Globe className="text-blue-500" size={16} />, label: 'Languages', value: personalInfo.languages.join(', ') },
    { icon: <Shield className="text-blue-500" size={16} />, label: 'Nationality', value: personalInfo.nationality },
    { icon: <UserCheck className="text-blue-500" size={16} />, label: 'Availability', value: personalInfo.availability, highlight: true },
    { icon: <Briefcase className="text-blue-500" size={16} />, label: 'Freelance Status', value: personalInfo.freelanceStatus },
    { icon: <Calendar className="text-blue-500" size={16} />, label: 'Experience', value: `${personalInfo.yearsExperience}+ Years` }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Who I Am
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Outer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Personal Info Grid (Glass Cards) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-xl shadow-neutral-950/5 relative overflow-hidden group"
          >
            {/* Glowing corner flare */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all" />

            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full" />
              Personal Overview
            </h3>

            {/* Info Grid */}
            <div className="space-y-4">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 shadow-sm transition-all hover:scale-[1.02]"
                >
                  <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400">
                    {detail.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-semibold text-neutral-400 tracking-wider uppercase">
                      {detail.label}
                    </span>
                    {detail.isEmail ? (
                      <a
                        href={`mailto:${detail.value}`}
                        className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span
                        className={`block text-sm font-medium truncate ${
                          detail.highlight
                            ? 'text-green-600 dark:text-green-400 font-semibold'
                            : 'text-neutral-800 dark:text-neutral-200'
                        }`}
                      >
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Detailed Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                Engineering Intelligent Systems and Next-Gen Interfaces
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                As an AI Engineer and Full-Stack Developer, my journey revolves around marrying logic with design. 
                I specialize in developing responsive websites, writing highly secure backend endpoints in Express, 
                and crafting intelligent modules powered by machine learning and custom LLM connections.
              </p>

              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Whether it's building clean, interactive react panels with optimized local states or orchestrating 
                autonomous AI agents with multi-document parsing architectures, I thrive on writing production-ready code 
                that stands out. I keep up to date with modern best practices, deploying standard, scalable containers 
                and leveraging deep learning libraries.
              </p>

              {/* Core Philosophy Milestones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                  <span className="font-sans font-bold text-lg text-neutral-950 dark:text-white block mb-2">
                    Our Design Creed
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed block">
                    Focus on clean Apple, Vercel-like typography, generous negative space, high contrast ratios, and purposeful animations.
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                  <span className="font-sans font-bold text-lg text-neutral-950 dark:text-white block mb-2">
                    Core Mission
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed block">
                    Deliver production-grade, highly optimized, responsive full stack software that improves user engagement and speeds workflows.
                  </span>
                </div>
              </div>
            </div>

            {/* Download CTA Action Row */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-900">
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.yearsExperience}+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 leading-snug">
                  Years of Professional<br />Software Engineering
                </span>
              </div>

              <div className="sm:ml-auto">
                <a
                  href="/public/Muzamil_Dars_CV.pdf"
                  download="public/Muzamil_Dars_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 text-white transition-all shadow-lg shadow-blue-500/10 hover:scale-[1.02]"
                >
                  <Download size={14} />
                  Download Resume / CV
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

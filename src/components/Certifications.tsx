import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-neutral-950 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Credentials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            Certifications
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-5 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 relative flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Banner Cover Image */}
              <div className="relative h-32 w-full rounded-2xl overflow-hidden bg-neutral-950 mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/20" />
                
                {/* Visual Icon Badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-blue-600/90 flex items-center justify-center text-white backdrop-blur-sm">
                  <ShieldCheck size={16} />
                </div>
              </div>

              {/* Text content details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-neutral-950 dark:text-white line-clamp-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <span className="block text-[10px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
                    {cert.issuer}
                  </span>
                </div>

                <div className="space-y-4 pt-3 border-t border-neutral-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    <Calendar size={12} />
                    {cert.date}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-bold text-neutral-700 dark:text-neutral-300 transition-colors"
                  >
                    View Credential
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

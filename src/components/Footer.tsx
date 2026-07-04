import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth'
      });
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Icons.Github size={16} />;
      case 'Linkedin': return <Icons.Linkedin size={16} />;
      case 'Facebook': return <Icons.Facebook size={16} />;
      case 'Instagram': return <Icons.Instagram size={16} />;
      case 'Twitter': return <Icons.Twitter size={16} />;
      case 'Youtube': return <Icons.Youtube size={16} />;
      default: return <Icons.MessageSquare size={16} />;
    }
  };

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-white/5 transition-colors pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-100 dark:border-white/5">
          
          {/* Col 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-lg text-white">
                MD
              </div>
              <span className="font-bold text-lg text-neutral-950 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Crafting state-of-the-art intelligent algorithms and polished responsive full stack digital applications that stand out.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-neutral-950 dark:text-white text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services overview */}
          <div>
            <h4 className="font-bold text-neutral-950 dark:text-white text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AI Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Machine Learning Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Premium React Apps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Full Stack Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact links / social */}
          <div>
            <h4 className="font-bold text-neutral-950 dark:text-white text-sm uppercase tracking-wider mb-6">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.slice(0, 5).map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-white/5 hover:border-blue-500/20 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors shadow-sm"
                  title={social.platform}
                >
                  {getSocialIcon(social.iconName)}
                </a>
              ))}
            </div>
            <span className="block text-xs font-mono text-neutral-400">
              collabwithmuzamil@gmail.com
            </span>
          </div>

        </div>

        {/* Bottom row copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
            <span>© {new Date().getFullYear()} Muzamil Dars. All rights reserved.</span>
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
            Designed & Developed with
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            by Muzamil Dars
          </p>
        </div>

      </div>

      {/* Floating Back-to-Top Button trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-2xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-900 dark:hover:bg-neutral-100 z-40 shadow-xl transition-transform hover:scale-110 active:scale-95 border border-neutral-100/10"
            aria-label="Back to Top"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

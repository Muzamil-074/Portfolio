import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navItems, personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple intersection observer behavior for active nav highlighting
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/70 backdrop-blur-md border-b border-neutral-100/80 dark:border-white/5 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-all">
            MD
          </div>
          <span className="font-bold text-lg text-neutral-950 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
            {personalInfo.name}
          </span>
        </div>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide uppercase transition-all ${
                activeSection === item.target
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-500/5 dark:bg-violet-500/10'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Elements (Theme Toggle + Download CV) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-all shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-violet-600" />
            )}
          </button>

          <a
            href="/Muzamil_Dars_CV.pdf"
            download="/Muzamil_Dars_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide bg-neutral-950 dark:bg-white text-white dark:text-black hover:bg-neutral-900 dark:hover:bg-neutral-200 transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-all shadow-sm"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-all shadow-sm"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.target
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-500/5 dark:bg-violet-500/10'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-neutral-100 dark:bg-neutral-950/40 my-3" />

              <a
                href="/Muzamil_Dars_CV.pdf"
                download="/Muzamil_Dars_CV.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-neutral-950 dark:bg-neutral-100 hover:bg-neutral-900 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 transition-all"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

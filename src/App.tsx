import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgressBar from './components/ScrollProgressBar';
import AmbientBackdrop from './components/AmbientBackdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {/* Immersive Loader reveal screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 selection:bg-violet-500/30 font-sans transition-colors duration-300 relative overflow-hidden">
          
          {/* Dynamic background effects */}
          <AmbientBackdrop />

          {/* Top visual scroll tracker */}
          <ScrollProgressBar />

          {/* Direct interactive client mouse aura */}
          <CursorGlow />

          {/* Sticky header navbar controls */}
          <Navbar />

          {/* Section Portfolio panels */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <TechStack />
            <GithubSection />
            <Contact />
          </main>

          {/* Footer brand and back-to-top trigger */}
          <Footer />

        </div>
      )}
    </ThemeProvider>
  );
}

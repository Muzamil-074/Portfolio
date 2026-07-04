import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Sparkles, Code, Check } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filters = ['All', 'AI', 'Web', 'React', 'Python', 'Machine Learning', 'Node'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(proj => proj.category === selectedFilter || proj.techStack.includes(selectedFilter));

  const toggleDetails = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors relative"
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
            Showcase
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            My Recent Work
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 scale-[1.03]'
                  : 'bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProjectId === project.id}
                onToggleExpand={() => toggleDetails(project.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component ProjectCard with individual 3D perspective tilt hover engine
interface ProjectCardProps {
  key?: string;
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Pure CSS 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const width = box.width;
    const height = box.height;
    const mouseX = e.clientX - box.left - width / 2;
    const mouseY = e.clientY - box.top - height / 2;

    // Constrain tilt angle (max 8 degrees)
    const tiltX = (mouseY / (height / 2)) * -6;
    const tiltY = (mouseX / (width / 2)) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.25s ease',
        }}
        className="w-full rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/60 hover:border-blue-500/25 group flex flex-col justify-between"
      >
        {/* Project Thumbnail Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating Category Indicator */}
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/75 border border-neutral-800 text-[10px] font-bold text-blue-400 uppercase tracking-widest backdrop-blur-sm shadow-md">
            <Sparkles size={10} />
            {project.category}
          </span>
        </div>

        {/* Card Content body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Project tech stack tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 rounded-md bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 text-[10px] font-mono font-medium text-neutral-400">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Card interactive controls row */}
          <div>
            {/* Collapse Details drawer indicator */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-2 pb-2 overflow-hidden"
                >
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Code size={12} />
                    Project Details & Features
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={12} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons list */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 mt-3">
              <button
                onClick={onToggleExpand}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-bold text-neutral-700 dark:text-neutral-300 transition-colors"
              >
                {isExpanded ? (
                  <>
                    Hide Details <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    View Details <ChevronDown size={14} />
                  </>
                )}
              </button>

              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-blue-500 dark:hover:text-blue-400 text-neutral-600 dark:text-neutral-400 transition-colors"
                  title="Source Code"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-950 dark:bg-neutral-100 hover:bg-neutral-900 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

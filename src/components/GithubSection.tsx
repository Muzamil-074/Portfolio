import { motion } from 'motion/react';
import { Github, Star, GitFork, BookOpen, Users, Folder, MessageSquare } from 'lucide-react';
import { gitHubStatsMock } from '../data/portfolioData';

export default function GithubSection() {
  const stats = [
    { label: 'Followers', value: gitHubStatsMock.followers, icon: <Users size={16} /> },
    { label: 'Repositories', value: gitHubStatsMock.repositories, icon: <Folder size={16} /> },
    { label: 'Total Contributions', value: gitHubStatsMock.totalContributions, icon: <MessageSquare size={16} /> },
    { label: 'Stars Earned', value: gitHubStatsMock.stars, icon: <Star size={16} /> }
  ];

  // Generate mock contribution graph days (53 weeks * 7 days = 371 cells)
  // We'll vary the green shade based on mock commits
  const generateGraphCells = () => {
    const cells = [];
    const intensities = [
      'bg-neutral-100 dark:bg-neutral-900', // empty
      'bg-emerald-500/20 dark:bg-emerald-950/40', // low
      'bg-emerald-500/45 dark:bg-emerald-800/60', // medium
      'bg-emerald-500/75 dark:bg-emerald-600/80', // high
      'bg-emerald-500 dark:bg-emerald-400' // extreme
    ];

    for (let i = 0; i < 112; i++) { // show a compact grid of 112 cells for visual cleanliness
      const intensityIndex = Math.floor(Math.random() * 5);
      cells.push(intensities[intensityIndex]);
    }
    return cells;
  };

  const graphCells = generateGraphCells();

  return (
    <section
      id="github"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors relative"
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
            Open Source
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white flex items-center justify-center gap-3"
          >
            <Github size={32} className="text-blue-600 dark:text-blue-400" />
            GitHub Activity
          </motion.h2>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Profile Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm flex items-center gap-4 hover:border-blue-500/10 transition-colors"
            >
              <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                {stat.icon}
              </div>
              <div>
                <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1.5">
                  {stat.label}
                </span>
                <span className="text-2xl font-extrabold text-neutral-950 dark:text-white font-sans leading-none">
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Mock Contribution Graph and Language distribution */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mock Contribution Graph Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm"
            >
              <h3 className="font-bold text-sm text-neutral-950 dark:text-white mb-4 font-mono uppercase tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Contributions in the Last Year
              </h3>

              {/* Grid cells */}
              <div className="grid grid-cols-16 gap-1.5 md:gap-2 mb-4">
                {graphCells.map((className, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-sm ${className} transition-colors duration-500 hover:scale-115 cursor-pointer`}
                    title="Mock Contribution commit cell"
                  />
                ))}
              </div>

              {/* Legend info row */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 justify-end">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-neutral-100 dark:bg-neutral-900" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/20" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/50" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                <span>More</span>
              </div>
            </motion.div>

            {/* Language Distribution Metric Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm"
            >
              <h3 className="font-bold text-sm text-neutral-950 dark:text-white mb-5 font-mono uppercase tracking-wide">
                Most Used Languages
              </h3>

              {/* Combined Progress Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex mb-6">
                {gitHubStatsMock.mostUsedLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    className="h-full first:rounded-l-full last:rounded-r-full"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Breakdown Legend */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gitHubStatsMock.mostUsedLanguages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      style={{ backgroundColor: lang.color }}
                      className="w-2.5 h-2.5 rounded-full"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {lang.name}
                      </span>
                      <span className="block text-[10px] font-mono text-neutral-400 mt-0.5">
                        {lang.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Side: Pinned Repositories List */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest pl-2 mb-1">
              Pinned Repositories
            </span>

            {gitHubStatsMock.pinnedRepos.map((repo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 relative group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-blue-500 shrink-0" />
                    <a
                      href={`https://github.com/${gitHubStatsMock.username}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm text-neutral-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                    >
                      {repo.name}
                    </a>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider uppercase">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {repo.description}
                </p>

                {/* Stars & Forks display row */}
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-3 border-t border-neutral-100 dark:border-white/5">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    {repo.stars} Stars
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} className="text-neutral-400" />
                    {repo.forks} Forks
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

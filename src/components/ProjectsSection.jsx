import React from 'react';

export default function ProjectsSection({ t }) {
  // Usiamo direttamente le proprietà ricevute tramite la prop t
  const section = t?.projectsSection || {};
  const data = t?.projectsData || {};

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20" id="projects">
      <div className="text-center mb-16">
        <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 mb-4 inline-block">
          {section.badge || "Portfolio & Showcases"}
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {section.title || "Soluzioni e Progetti in Evidenza"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {section.subtitle || "Architetture web scalabili sviluppate per web agencies e brand."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Progetto 1: Freelance Match */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Freelance Match App</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            {data.freelanceDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://freelance-match-app-eyd9.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/freelance-match-strengths.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 2: Velvet Café */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Velvet Café & Lounge</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            {data.velvetDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://coffee-lounge-saas-zy5p-lake.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/velvet-cafe-strengths.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
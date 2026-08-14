import React from 'react';
import { translations } from '../i18n/translations.js';

export default function CvSection({ lang = 'it' }) {
  // Recupera le traduzioni dal file centrale, con fallback su 'it'
  const t = translations[lang] || translations['it'];
  const c = t.cvSection;

  // Liste delle competenze tradotte per ogni lingua supportata nel file translations.js
  const skillsContent = {
    it: {
      feItems: ["React 19 / Vite", "Astro & SSR", "Next.js", "Tailwind CSS", "TypeScript"],
      beItems: ["Node.js & Express", "REST & GraphQL APIs", "Headless CMS", "Database SQL / NoSQL"],
      wfItems: ["Git / GitHub Workflow", "CI/CD & Vercel", "Performance Optimization", "Code Review & Agile"]
    },
    en: {
      feItems: ["React 19 / Vite", "Astro & SSR", "Next.js", "Tailwind CSS", "TypeScript"],
      beItems: ["Node.js & Express", "REST & GraphQL APIs", "Headless CMS", "SQL / NoSQL Databases"],
      wfItems: ["Git / GitHub Workflow", "CI/CD & Vercel", "Performance Optimization", "Code Review & Agile"]
    },
    es: {
      feItems: ["React 19 / Vite", "Astro y SSR", "Next.js", "Tailwind CSS", "TypeScript"],
      beItems: ["Node.js y Express", "APIs REST y GraphQL", "Headless CMS", "Bases de datos SQL / NoSQL"],
      wfItems: ["Git / GitHub Workflow", "CI/CD y Vercel", "Optimización de Rendimiento", "Code Review y Agile"]
    },
    fr: {
      feItems: ["React 19 / Vite", "Astro & SSR", "Next.js", "Tailwind CSS", "TypeScript"],
      beItems: ["Node.js & Express", "REST & GraphQL APIs", "Headless CMS", "Bases de données SQL / NoSQL"],
      wfItems: ["Git / GitHub Workflow", "CI/CD & Vercel", "Performance Optimization", "Code Review & Agile"]
    },
    de: {
      feItems: ["React 19 / Vite", "Astro & SSR", "Next.js", "Tailwind CSS", "TypeScript"],
      beItems: ["Node.js & Express", "REST & GraphQL APIs", "Headless CMS", "SQL / NoSQL Datenbanken"],
      wfItems: ["Git / GitHub Workflow", "CI/CD & Vercel", "Performance Optimization", "Code Review & Agile"]
    }
  };

  const currentLang = translations[lang] ? lang : 'it';
  const currentSkills = skillsContent[currentLang] || skillsContent['it'];

  return (
    <section id="cv" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-800">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
          {c.badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {c.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {c.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-4 text-indigo-500 flex items-center gap-2">
              <i className="fa-solid fa-code"></i> {c.frontend}
            </h3>
            <ul className="space-y-2.5">
              {currentSkills.feItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-4 text-indigo-500 flex items-center gap-2">
              <i className="fa-solid fa-server"></i> {c.backend}
            </h3>
            <ul className="space-y-2.5">
              {currentSkills.beItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workflow Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-4 text-indigo-500 flex items-center gap-2">
              <i className="fa-solid fa-laptop-code"></i> {c.workflow}
            </h3>
            <ul className="space-y-2.5">
              {currentSkills.wfItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
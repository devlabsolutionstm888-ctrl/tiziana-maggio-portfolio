import React, { useState, useEffect } from 'react';

export default function Navbar({ currentLang = 'it', t = {} }) {
  const [darkMode, setDarkMode] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  // Fallback sicuro se t.nav non è definito
  const navText = t.nav || {
    projects: "Progetti",
    cv: "CV / Skills",
    agencies: "Web Agencies",
    contact: "Contatti"
  };

  // Prefisso base per la lingua corrente (es. "" per it, oppure "/en", "/es", ecc.)
  const basePath = currentLang === 'it' ? '' : `/${currentLang}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <a href={`${basePath || '/'}`} className="font-bold text-lg tracking-tight flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></span>
          Tiziana Maggio <span className="text-indigo-500">Dev</span>
        </a>

        {/* Menu Navigazione Centrale */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href={`${basePath}/#projects`} className="hover:text-indigo-500 transition">{navText.projects}</a>
          <a href={`${basePath}/#cv`} className="hover:text-indigo-500 transition">{navText.cv}</a>
          <a href={`${basePath}/#agenzie`} className="hover:text-indigo-500 transition">{navText.agencies}</a>
          <a href={`${basePath}/#contatti`} className="hover:text-indigo-500 transition">{navText.contact}</a>
        </nav>

        {/* Azioni: Lingua & Dark Mode */}
        <div className="flex items-center gap-3">
          
          {/* Selettore Lingue */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <span>{languages.find(l => l.code === currentLang)?.flag || '🇮🇹'}</span>
              <span className="uppercase">{currentLang}</span>
              <i className="fa-solid fa-chevron-down text-[10px] ml-1"></i>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl py-1 z-50">
                {languages.map((l) => (
                  <a
                    key={l.code}
                    href={l.code === 'it' ? '/' : `/${l.code}`}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-500 transition"
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Pulsante Dark/Light Mode */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-indigo-600"></i>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
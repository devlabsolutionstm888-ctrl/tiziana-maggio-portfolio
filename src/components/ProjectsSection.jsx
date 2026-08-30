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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Progetto 1: Sportello Facile */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sportello Facile</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Piattaforma web di gestione amministrativa avanzata e intuitiva progettata per ottimizzare la gestione di pratiche, clienti e servizi digitali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://sportello-facile-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
          </div>
        </div>

        {/* Progetto 2: Freelance Match */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Freelance Match App</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            {data.freelanceDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://freelance-match-app-oc2l.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/freelance-match-strengths.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 3: Tavola Smeraldina React (Con PDF specifico collegato) */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tavola Smeraldina React</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Applicazione web moderna sviluppata in React, progettata per offrire un'esperienza interattiva avanzata, flussi fluidi e una gestione ottimizzata dei contenuti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://tavola-smeraldina-react30.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="https://drive.google.com/file/d/14MfCDULbj2jqq0VufI989Q6oAzDHLMv2/preview" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 4: Velvet Café */}
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

        {/* Progetto 5: Life Flow */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Life Flow</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            App olistica e monetizzata creata con Lovable per una vita sana ed equilibrata. Unisce ricette casalinghe e vegane, report finanziari sui risparmi rispetto al ristorante, e un sistema di premi artistici con citazioni della Grecia antica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://lifeflow-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/Life_Flow_Progetto.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 6: Kebab Pedro Queens */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Kebab Pedro Queens</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Piattaforma web moderna e ultra-veloce dedicata al Kebab, progettata per offrire un'esperienza utente fluida, menu interattivo e ottime performance su mobile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://kebab-pedro-main.vercel.app/es/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/modello_versatilita.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 7: HTSX Language Engine */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">HTSX Language Engine</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            App avanzata basata su IA per un apprendimento linguistico fluido e naturale. Contenuti inesauribili, monetizzazione etica con abbonamento tramite Lemon Squeezy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://htsx-language-engine.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/presentazione_HTSX.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 8: Dev Workflow Assistant */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dev Workflow Assistant</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Assistente di produttività all-in-one per sviluppatori. Include task management, timer Pomodoro, strumenti di sicurezza, chat di team simulata e sistema di licenze software (Lemon Squeezy) con modalità demo protetta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://dev-workflow-assistant.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/dev-workflow-assistant.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 9: OmniaDesk */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">OmniaDesk</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-4 leading-relaxed">
            Piattaforma professionale per studi commerciali. Ottimizza la gestione dei ticket e il flusso di lavoro con un'interfaccia intuitiva e sicura.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-lg border border-indigo-100 dark:border-indigo-900/50">
            <span>💻</span> Dashboard gestionale: consigliata la visualizzazione da PC
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://omnia-desk.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="/pdf/omniadesk.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

        {/* Progetto 10: Med on Hand */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Med on Hand</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Piattaforma web innovativa e user-friendly progettata per facilitare l'accesso ai servizi medici e di supporto sanitario con un'interfaccia rapida e intuitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://med-on-hand.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
          </div>
        </div>

        {/* Progetto 11: Domus Omnia ES */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Domus Omnia ES</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Piattaforma web per la gestione amministrativa avanzata dedicata al mercato spagnolo, progettata per la gestione e la monetizzazione di annunci e servizi immobiliari con un'esperienza utente ottimizzata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://domus-omnia-es.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
          </div>
        </div>

        {/* Progetto 12: Flutter Loom Ultimate Portfolio (Con PDF collegato) */}
        <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flutter Loom Ultimate Portfolio</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
            Piattaforma e portfolio avanzato sviluppato con tecnologie moderne, ottimizzato per un'esperienza visiva fluida e una presentazione professionale dei progetti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a href="https://flutter-loom-ultimate-3-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-6 rounded-xl transition">
              {section.liveDemo || "Live Demo"}
            </a>
            <a href="https://drive.google.com/file/d/1wBg_AnfOxKbxkcPZ8fIizPZem8PwD5ym/preview" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center font-bold py-3 px-6 rounded-xl transition">
              {section.details || "Dettagli"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

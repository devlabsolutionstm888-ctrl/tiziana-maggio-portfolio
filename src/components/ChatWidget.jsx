import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget({ lang = 'it' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Normalizziamo la lingua ricevuta (fallback a 'it' se non supportata)
  const currentLang = ['it', 'en', 'es', 'fr', 'de'].includes(lang) ? lang : 'it';

  // Database multilingua aggiornato con i link reali dei progetti
  const responses = {
    it: {
      welcome: "Ciao! Sono il Mini-Brain di Tiziana Maggio. Chiedimi pure delle sue competenze Full-Stack, dei progetti o dei contatti per collaborazioni!",
      website: "Certamente! Tiziana realizza siti web, e-commerce e applicazioni web su misura con React e Astro ad alte prestazioni. Puoi scriverle subito su WhatsApp (+39 347 810 1692) o via email a devlabsolutionstm888@gmail.com per parlarne!",
      contact: "Puoi contattare Tiziana via email a devlabsolutionstm888@gmail.com, o tramite WhatsApp in Italia (+39 347 810 1692) e Spagna (+34 602 708 829).",
      skills: "Tiziana è specializzata in React 19, Vite, Astro, Tailwind CSS, TypeScript, Node.js e integrazioni CMS.",
      projects: "Ecco i principali progetti realizzati da Tiziana:\n\n1. Freelance Match App:\nhttps://freelance-match-app-eyd9.vercel.app/\n\n2. Velvet Café & Lounge:\nhttps://coffee-lounge-saas-zy5p-lake.vercel.app/\n\n(Consulta anche la sezione progetti del portfolio per scaricare i PDF con i punti di forza!)",
      fallback: "Perfetto! Per avviare il tuo progetto o ricevere un preventivo su misura, puoi contattare direttamente Tiziana via email a devlabsolutionstm888@gmail.com o su WhatsApp in Italia (+39 347 810 1692) e Spagna (+34 602 708 829)."
    },
    en: {
      welcome: "Hello! I'm Tiziana Maggio's Mini-Brain. Feel free to ask about her Full-Stack skills, projects, or contacts!",
      website: "Sure thing! Tiziana builds custom, high-performance websites, e-commerce stores, and web apps using React and Astro. Reach out via WhatsApp (+39 347 810 1692) or email at devlabsolutionstm888@gmail.com!",
      contact: "You can reach Tiziana via email at devlabsolutionstm888@gmail.com, or via WhatsApp in Italy (+39 347 810 1692) and Spain (+34 602 708 829).",
      skills: "Tiziana specializes in React 19, Vite, Astro, Tailwind CSS, TypeScript, Node.js, and Headless CMS integrations.",
      projects: "Here are Tiziana's main projects:\n\n1. Freelance Match App:\nhttps://freelance-match-app-eyd9.vercel.app/\n\n2. Velvet Café & Lounge:\nhttps://coffee-lounge-saas-zy5p-lake.vercel.app/\n\n(Check out the portfolio projects section to view their strengths PDFs!)",
      fallback: "Great! To discuss your project or get a custom quote, feel free to contact Tiziana directly at devlabsolutionstm888@gmail.com or via WhatsApp."
    },
    es: {
      welcome: "¡Hola! Soy el Mini-Brain de Tiziana Maggio. ¡Pregúntame sobre sus habilidades Full-Stack, proyectos o contactos!",
      website: "¡Claro que sí! Tiziana desarrolla sitios web a medida, tiendas online y aplicaciones de alto rendimiento con React y Astro. ¡Escríbela por WhatsApp (+34 602 708 829) o correo (devlabsolutionstm888@gmail.com)!",
      contact: "Puedes contactar a Tiziana por correo a devlabsolutionstm888@gmail.com, o vía WhatsApp en Italia (+39 347 810 1692) y España (+34 602 708 829).",
      skills: "Tiziana se especializa en React 19, Vite, Astro, Tailwind CSS, TypeScript, Node.js e integraciones con CMS Headless.",
      projects: "Aquí tienes los proyectos principales de Tiziana:\n\n1. Freelance Match App:\nhttps://freelance-match-app-eyd9.vercel.app/\n\n2. Velvet Café & Lounge:\nhttps://coffee-lounge-saas-zy5p-lake.vercel.app/\n\n(¡Consulta también la sección de proyectos para ver los PDF con los puntos clave!)",
      fallback: "¡Perfecto! Para iniciar tu proyecto o recibir un presupuesto a medida, contacta directamente a Tiziana por correo electrónico o WhatsApp."
    },
    fr: {
      welcome: "Bonjour! Je suis le Mini-Brain de Tiziana Maggio. Posez-moi des questions sur ses compétences Full-Stack ou ses projets!",
      website: "Bien sûr ! Tiziana crée des sites web sur mesure, des e-commerce et des applications haute performance avec React et Astro. Contactez-la par WhatsApp ou email (devlabsolutionstm888@gmail.com) !",
      contact: "Vous pouvez contacter Tiziana par email à devlabsolutionstm888@gmail.com, ou via WhatsApp en Italie (+39 347 810 1692) et en Espagne (+34 602 708 829).",
      skills: "Tiziana est spécialisée en React 19, Vite, Astro, Tailwind CSS, TypeScript, Node.js et intégrations CMS Headless.",
      projects: "Voici les principaux projets de Tiziana :\n\n1. Freelance Match App:\nhttps://freelance-match-app-eyd9.vercel.app/\n\n2. Velvet Café & Lounge:\nhttps://coffee-lounge-saas-zy5p-lake.vercel.app/",
      fallback: "Parfait ! Pour discuter de votre projet ou obtenir un devis, contactez directement Tiziana par email ou via WhatsApp."
    },
    de: {
      welcome: "Hallo! Ich bin Tizianas Mini-Brain. Frag mich gerne nach ihren Full-Stack-Fähigkeiten, Projekten oder Kontakten!",
      website: "Gerne! Tiziana entwickelt maßgeschneiderte Websites, E-Commerce-Plattformen und Webanwendungen mit React und Astro. Schreiben Sie ihr per WhatsApp oder E-Mail (devlabsolutionstm888@gmail.com)!",
      contact: "Sie können Tiziana per E-Mail unter devlabsolutionstm888@gmail.com oder per WhatsApp in Italien (+39 347 810 1692) und Spanien (+34 602 708 829) erreichen.",
      skills: "Tiziana ist spezialisiert auf React 19, Vite, Astro, Tailwind CSS, TypeScript, Node.js und Headless CMS-Integrationen.",
      projects: "Hier sind Tizianas Hauptprojekte:\n\n1. Freelance Match App:\nhttps://freelance-match-app-eyd9.vercel.app/\n\n2. Velvet Café & Lounge:\nhttps://coffee-lounge-saas-zy5p-lake.vercel.app/",
      fallback: "Perfekt! Um Ihr Projekt zu besprechen oder ein Angebot zu erhalten, kontaktieren Sie Tiziana direkt per E-Mail oder WhatsApp."
    }
  };

  const currentDict = responses[currentLang];

  const [messages, setMessages] = useState([
    { sender: 'bot', text: currentDict.welcome }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Logica intelligente: riconosce l'intenzione dell'utente MA risponde rigorosamente nella lingua della pagina attiva
  const getBotResponse = (text) => {
    const query = text.toLowerCase();

    // Rileva richiesta sito web / progetti / e-commerce in qualsiasi lingua
    if (
      query.includes('sito') || query.includes('web') || query.includes('pagina') || 
      query.includes('ecommerce') || query.includes('tienda') || query.includes('shop') || 
      query.includes('app') || query.includes('need') || query.includes('necesito') || 
      query.includes('quiero') || query.includes('brauche') || query.includes('besoin') ||
      query.includes('site')
    ) {
      return currentDict.website;
    }

    // Rileva contatti
    if (
      query.includes('contatt') || query.includes('email') || query.includes('telefono') || 
      query.includes('phone') || query.includes('contacto') || query.includes('kontakt') || 
      query.includes('contact') || query.includes('whatsapp')
    ) {
      return currentDict.contact;
    }

    // Rileva competenze e stack
    if (
      query.includes('react') || query.includes('skill') || query.includes('stack') || 
      query.includes('tecnolog') || query.includes('habilidad') || query.includes('kompetenz') || 
      query.includes('competence') || query.includes('tecnologia')
    ) {
      return currentDict.skills;
    }

    // Rileva progetti passati
    if (
      query.includes('progett') || query.includes('project') || query.includes('lavor') || 
      query.includes('work') || query.includes('proyectos') || query.includes('projekti') ||
      query.includes('portfolio')
    ) {
      return currentDict.projects;
    }

    // Fallback pulito e professionale nella lingua attiva
    return currentDict.fallback;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(userText);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  // Placeholder dinamici in base alla lingua
  const placeholders = {
    it: "Scrivi un messaggio...",
    en: "Type a message...",
    es: "Escribe un mensaje...",
    fr: "Écrivez un message...",
    de: "Nachricht schreiben..."
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl flex flex-col h-[450px] overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  TM
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-indigo-600 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Mini-Brain IA</h3>
                <span className="text-[10px] text-indigo-200">Tiziana Maggio Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Area Messaggi */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-950/50 text-sm whitespace-pre-line">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-sm' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700/50 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={placeholders[currentLang]}
              className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              type="submit"
              className="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center transition shadow-md shadow-indigo-500/20"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      )}

      {/* Pulsante Floating */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Open AI Assistant"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-gray-900 rounded-full animate-pulse"></span>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-brain'} text-xl transition-transform duration-300 group-hover:rotate-12`}></i>
      </button>
    </div>
  );
}
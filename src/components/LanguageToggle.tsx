import { useState, useEffect } from 'react';

interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  en: {
    services: 'Services',
    about: 'About Us',
    team: 'Team',
    testimonials: 'Testimonials',
    contact: 'Contact',
    startProject: 'Start Your Project',
    // Agrega más traducciones según sea necesario
  },
  es: {
    services: 'Servicios',
    about: 'Sobre Nosotros',
    team: 'Equipo',
    testimonials: 'Testimonios',
    contact: 'Contacto',
    startProject: 'Inicia tu Proyecto',
    // Agrega más traducciones según sea necesario
  },
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState('es');

  // Cargar el idioma inicial desde localStorage, si existe
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

  // Cambiar idioma y guardar en localStorage
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
      // Emitir un evento personalizado para que otros componentes puedan escuchar el cambio de idioma
      window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }));
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <span className="text-gray-800 dark:text-gray-200 font-medium">
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}

// Exportar traducciones para usarlas en otros componentes
export { translations };

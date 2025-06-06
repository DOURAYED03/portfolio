import React, { useState, useEffect } from 'react';
import LogoActive from './images/ChatGPT-Image-Red-Fixed.svg';

function Navbar({ theme, toggleTheme }) {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (page, event) => {
    event.preventDefault();
    setActivePage(page);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'communityengagement', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActivePage(section);
          found = true;
          break;
        }
      }
      if (!found) {
        setActivePage('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full p-4 items-center justify-center h-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4">
        <div className="hidden md:flex text-lg font-bold items-center justify-between w-full">
          <a
            href="#about"
            className={`w-1/6 text-center cursor-pointer ${activePage === 'about' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('about', e)}
          >
            about
          </a>
          <a
            href="#projects"
            className={`w-1/6 text-center cursor-pointer ${activePage === 'projects' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('projects', e)}
          >
            projects
          </a>
          <a
            href="#home"
            className="w-1/6 text-center flex-shrink-0 mx-8"
            onClick={(e) => handleClick('home', e)}
          >
            <img
              src={LogoActive}
              alt="DG Logo"
              className={`relative transition-all duration-500 ease-in-out ${activePage === 'home' ? 'h-40 -mb-20 text-red-100' : 'h-32 grayscale -mb-18'}`}
            />
          </a>
          <a
            href="#communityengagement"
            className={`w-1/6 text-center cursor-pointer ${activePage === 'communityengagement' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('communityengagement', e)}
          >
            Community Engagement
          </a>
          <a
            href="#contact"
            className={`w-1/6 text-center cursor-pointer ${activePage === 'contact' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('contact', e)}
          >
            contact
          </a>
          <button
            onClick={toggleTheme}
            className="w-1/6 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} role="img" aria-label="Sun icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 4.24l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none" role="img" aria-label="Moon icon">
                <path d="M21.64 13.64a9 9 0 11-11.28-11.28 7 7 0 0011.28 11.28z" />
              </svg>
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed top-24 left-0 right-0 bg-white dark:bg-slate-900 z-40 shadow-md`}>
          <a
            href="#about"
            className={`block px-4 py-3 text-center cursor-pointer border-b border-gray-300 dark:border-gray-700 ${activePage === 'about' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('about', e)}
          >
            about
          </a>
          <a
            href="#projects"
            className={`block px-4 py-3 text-center cursor-pointer border-b border-gray-300 dark:border-gray-700 ${activePage === 'projects' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('projects', e)}
          >
            projects
          </a>
          <a
            href="#home"
            className="block px-4 py-3 text-center cursor-pointer border-b border-gray-300 dark:border-gray-700"
            onClick={(e) => handleClick('home', e)}
          >
            home
          </a>
          <a
            href="#communityengagement"
            className={`block px-4 py-3 text-center cursor-pointer border-b border-gray-300 dark:border-gray-700 ${activePage === 'communityengagement' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('communityengagement', e)}
          >
            Community Engagement
          </a>
          <a
            href="#contact"
            className={`block px-4 py-3 text-center cursor-pointer border-b border-gray-300 dark:border-gray-700 ${activePage === 'contact' ? 'text-red-500' : theme === 'dark' ? 'text-slate-100' : 'text-gray-800'}`}
            onClick={(e) => handleClick('contact', e)}
          >
            contact
          </a>
          <button
            onClick={toggleTheme}
            className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 4.24l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path d="M21.64 13.64a9 9 0 11-11.28-11.28 7 7 0 0011.28 11.28z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

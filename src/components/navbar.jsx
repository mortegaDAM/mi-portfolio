// src/components/Navbar.jsx

import { useState } from 'react';
import { useAppNavigation } from '../utils/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { goToSection } = useAppNavigation();

  const handleNavClick = (path, sectionId) => {
    setIsMenuOpen(false); // Cerrar el menú siempre
    goToSection(path, sectionId);
  };

  return (
    <>
      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end py-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 text-violet-400 bg-transparent border-0 text-3xl lg:text-2xl focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Línea superior */}
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45' : 'rotate-0'
              }`}
            ></span>
            {/* Línea central (se oculta cuando está abierto) */}
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
              }`}
            ></span>
            {/* Línea inferior */}
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45' : 'rotate-0'
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Fondo oscuro semitransparente */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menú desplegable */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden transition-all duration-700 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Máscara SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-40"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="circleClip">
              <circle r={isMenuOpen ? 80 : 0} cx="95" cy="5" fill="white" />
            </clipPath>
          </defs>
          <rect clipPath="url(#circleClip)" width="100%" height="100%" fill="transparent" />
        </svg>

        {/* Menú real */}
        <div className="relative bg-gray-900 bg-opacity-90 rounded-lg shadow-2xl p-8 w-64 lg:w-80 backdrop-blur-md transform transition-all duration-500">
          <ul className="flex flex-col space-y-6 text-white text-lg lg:text-xl font-medium text-center">
            <li>
              <button
                onClick={() => handleNavClick('/', '')}
                className="text-gray-200 bg-transparent p-0 hover:text-violet-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/about', '')}
                className="text-gray-200 bg-transparent p-0 hover:text-violet-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/', 'skills')}
                className="text-gray-200 bg-transparent p-0 hover:text-violet-400 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/', 'projects')}
                className="text-gray-200 bg-transparent p-0 hover:text-violet-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/contact', '')}
                className="text-gray-200 bg-transparent p-0 hover:text-violet-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
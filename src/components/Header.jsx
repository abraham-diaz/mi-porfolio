import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollDetection, useScrollDirection, scrollToSection as smoothScroll } from './script';

export default function Header() {
  const isScrolled = useScrollDetection();
  const isVisible = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    smoothScroll(sectionId, () => setIsMobileMenuOpen(false));
  };

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-transform duration-700 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Navegación Desktop - Estilo Pill Centrado */}
          <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full ${
            isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-white hover:shadow'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menú móvil */}
          {isMobileMenuOpen && (
            <nav className={`md:hidden space-y-2 rounded-2xl p-2 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : isScrolled
                      ? 'text-gray-700 hover:bg-white'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
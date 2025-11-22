import { useEffect, useState } from 'react';

/**
 * Hook para detectar el scroll y cambiar el estilo del header
 */
export function useScrollDetection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
}

/**
 * Función para navegación suave a las secciones
 * @param sectionId - ID de la sección a la que navegar
 * @param onNavigate - Callback opcional a ejecutar después de navegar
 */
export function scrollToSection(sectionId: string, onNavigate?: () => void) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Altura del header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  if (onNavigate) {
    onNavigate();
  }
}

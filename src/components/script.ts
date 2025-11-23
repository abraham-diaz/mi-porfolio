import { useEffect, useState } from 'react';

// Variable global para rastrear si el scroll es programático
let isProgrammaticScroll = false;

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
 * Hook para detectar la dirección del scroll y mostrar/ocultar el header
 * @returns {boolean} true si el header debe estar visible, false si debe ocultarse
 */
export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ignorar el scroll si es programático (navegación por botones)
      if (isProgrammaticScroll) {
        // Actualizar lastScrollY para evitar saltos cuando termine el scroll programático
        setLastScrollY(currentScrollY);
        return;
      }

      // Mostrar header si está en el top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Ocultar si hace scroll hacia abajo
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Mostrar si hace scroll hacia arriba
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isVisible;
}

/**
 * Función para navegación suave a las secciones
 * @param sectionId - ID de la sección a la que navegar
 * @param onNavigate - Callback opcional a ejecutar después de navegar
 */
export function scrollToSection(sectionId: string, onNavigate?: () => void) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Marcar que el scroll es programático
    isProgrammaticScroll = true;

    const offset = 80; // Altura del header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Después de que termine el scroll suave (~1.5 segundos), volver a permitir detección
    setTimeout(() => {
      isProgrammaticScroll = false;
    }, 1500);
  }

  if (onNavigate) {
    onNavigate();
  }
}

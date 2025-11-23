import { useState } from 'react';
import Loading from './components/Loadin.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// COLOR GLOBAL DEL PORTFOLIO
// Para gradiente, usa: 'linear-gradient(to bottom right, #ColorInicial, #ColorFinal)'
// Para color sólido, usa: '#CodigoColor'
const BACKGROUND_GLOBAL = 'linear-gradient(to bottom right, #fafafa, #e8e8e8)';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Pantalla de carga inicial */}
      {loading && <Loading onLoadingComplete={() => setLoading(false)} />}

      {/* Contenido principal del portfolio */}
      {!loading && (
        <div className="min-h-screen" style={{ background: BACKGROUND_GLOBAL }}>
          {/* Header fijo con navegación */}
          <Header />

          {/* Sección Hero - Presentación principal */}
          <section id="hero">
            <Hero />
          </section>

          {/* Sección Skills - Habilidades y tecnologías */}
          <section id="skills">
            <Skills />
          </section>

          {/* Sección Projects - Proyectos realizados */}
          <section id="projects">
            <Projects />
          </section>

          {/* Sección Contact - Formulario de contacto */}
          <section id="contact">
            <Contact />
          </section>

          {/* Footer - Información adicional y redes sociales */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
import { useState } from 'react';
import Loading from './components/Loadin.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Pantalla de carga inicial */}
      {loading && <Loading onLoadingComplete={() => setLoading(false)} />}

      {/* Contenido principal del portfolio */}
      {!loading && (
        <div className="min-h-screen bg-gray-50">
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
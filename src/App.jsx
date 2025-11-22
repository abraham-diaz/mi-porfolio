import { useState } from 'react';
import Loading from './components/Loadin.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading onLoadingComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="min-h-screen bg-gray-50">
          {/* Tu contenido principal del portfolio */}
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center">
              ¡Portfolio Cargado! 🎉
            </h1>
            <p className="text-center mt-4 text-gray-600">
              Aquí irá tu contenido principal
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
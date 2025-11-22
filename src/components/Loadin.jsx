import { useState, useEffect } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Espera un poco antes de ocultar
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2; // Velocidad de la barra
      });
    }, 30); // Actualiza cada 30ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-with-600 to-black-700 flex flex-col items-center justify-center z-50">
      {/* Logo o Nombre */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-2">
          Bienvenido
        </h1>
        <p className="text-black/90 text-lg animate-pulse">Cargando...</p>
      </div>

      {/* Barra de progreso */}
      <div className="w-80 h-2 bg-black/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Porcentaje */}
      <p className="text-black mt-4 text-xl font-semibold animate-pulse">
        {progress}%
      </p>
    </div>
  );
};

export default Loading;
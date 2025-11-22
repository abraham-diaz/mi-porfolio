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
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center z-50">
      {/* Logo o Nombre */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-2 animate-pulse">
          Bienvenido
        </h1>
        <p className="text-white/80 text-lg">Cargando...</p>
      </div>

      {/* Barra de progreso */}
      <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Porcentaje */}
      <p className="text-white mt-4 text-xl font-semibold">
        {progress}%
      </p>
    </div>
  );
};

export default Loading;
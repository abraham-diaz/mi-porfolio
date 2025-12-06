export default function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda - Espacio para imagen o decoración */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
              <span className="text-gray-400 text-lg">Tu foto aquí</span>
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Acerca de mí
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
             Me formé como Técnico Superior en Desarrollo de Aplicaciones Web, 
             aprendiendo fundamentos de programación, diseño de bases de datos y desarrollo de aplicaciones tanto en frontend como en backend. 
             La formación me permitió trabajar en proyectos completos y entender buenas prácticas desde la base.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
             Hoy continúo ampliando mis conocimientos para crecer como desarrollador backend.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

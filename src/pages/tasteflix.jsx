// src/pages/TasteFlix.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const TasteFlix = () => {
  return (
    <div className="bg-gray-900 font-dosis text-white min-h-screen">
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/encabezado.png"
          alt="TasteFlix - App de cine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 flex items-end px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              TasteFlix
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Una aplicación intuitiva para descubrir películas, series, libros y restaurantes. **(Todavía no está disponible)**.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-6 text-xl bg-gray-800 md:px-12 lg:px-24 space-y-16">
        {/* Descripción */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Descripción</h2>
          <p className="text-gray-300 leading-relaxed">
            TasteFlix es una plataforma web desarrollada para ayudar a los usuarios a encontrar contenido audiovisual basado en sus preferencias.
            Con un diseño minimalista y funcional, ofrece una experiencia fluida al explorar películas, ver listas, perfiles y guardar tus favoritos.
            Puedes navegar y buscar las listas con más likes, los perfiles con más seguidores y filtrar en tus búsquedas para encontrar justo lo que necesitas.
            Desarrollada desde cero.
            Desarrollé esta aplicación durante mi primer año de formación, por ello no utiliza teconologías que aprendí
            posteriormente como TailwindCSS, que me habría facilitado mucho el desarrollo de los estilos y de la UI responsiva.
          </p>
        </section>

        {/* Challenge & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Desafío</h3>
            <p className="text-gray-300">
              Crear una aplicación que ayudara a la gente a encontrar recomendaciones basadas en sus preferencias mediante una interfaz sencilla e intuitiva.
              Conectada a una base de datos para almacenar usuarios, listas y recomendaciones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Solución</h3>
            <p className="text-gray-300">
              Diseñé una UI modular con React y consumí APIs como FastAPI para mostrar datos en tiempo real. Implementé todo en una base de datos y fui creando la lógica y despliegue de cada uno 
              de los endpoint necesarios para su funcionamiento.
            </p>
          </motion.div>
        </section>

        {/* Tecnologías */}
        <section className=" flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tecnologías Utilizadas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'CSS', 'Fast API', 'PostgreSQL', 'JavaScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 lg:w-24 text-center bg-gray-800 text-violet-400 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Galería */}
        <section className="w-full mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/perfilclaro.png" alt="Pantalla 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/crearlistaclaro.png" alt="Pantalla 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/buscarclaro.png" alt="Pantalla 3" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/likesclaro.png" alt="Pantalla 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/rankingsclaro.png" alt="Pantalla 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9] ">
              <img src="/images/editarlistaclaro.png" alt="Pantalla 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            ¿Quieres ver otro de mis proyectos?
          </motion.p>
          <a
            href="/#projects"
            className="inline-block px-6 py-3 bg-violet-400 hover:bg-violet-500 text-white font-medium rounded-lg transition"
          >
            Volver a proyectos
          </a>
        </section>
      </main>

    
    </div>
  );
};

export default TasteFlix;
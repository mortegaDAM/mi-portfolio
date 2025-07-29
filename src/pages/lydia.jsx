// src/pages/Lydia.jsx
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
const Lydia = () => {
  return (
    <div className="bg-gray-900 font-dosis text-white min-h-screen">
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src=" /images/iniciolypsi.png"
          alt="Lydia - Proyecto Personal"
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
            <h1 className=" text-4xl lg:text-6xl md:text-5xl py-2 font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              Lydia
            </h1>
            <p className="text-xl md:text-xl text-gray-300">
             Proyecto de página web desarrollado para una psicólogca clínica. Proyecto moderno y elegante, enfocado al usuario. **(Todavía no está disponible)**.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-6 text-xl lg:text-xl bg-gray-800 md:px-12 lg:px-24 space-y-16">
        {/* Descripción */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Descripción</h2>
          <p className="text-gray-300 leading-relaxed">
            Lydia es una página web desarrollada desde cero. Desarrollada con Vite React, junto con TailwindCSS para aplicar un estilo visual e 
            intuitivo para el usuario. 
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
              Diseñar una página visual, rápida y fácil de mantener, sin recargarla con efectos innecesarios, fácil para el usuario e intuitiva.
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
              Incluí animaciones sutiles para destacar sin saturar, con una paleta de colores adaptada a la psicología y a mi clienta, y un efoque moderno y elegante.
            </p>
          </motion.div>
        </section>

        {/* Tecnologías */}
        <section className="  flex flex-col items-center justify-center  max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tecnologías Utilizadas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TailwindCSS', 'Vite', 'Framer Motion', 'Git', 'JavaScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-violet-400 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
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
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/iniciolypsi.png" alt="Captura 1" className="w-full h-full object-cover" />
            </motion.div>
             <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/barranavlypsi.png" alt="Captura 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/sobremilypsi.png" alt="Captura 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/precioslypsi.png" alt="Captura 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/especialidadeslypsi.png" alt="Captura 3" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg aspect-[16/9]">
              <img src=" /images/contactolypsi.png" alt="Captura 3" className="w-full h-full object-cover" />
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
            ¿Te gustaría navegar por otros proyectos o contactarme directamente?
          </motion.p>
          <a
            href="/#projects"
            className="inline-block px-6 py-3 bg-violet-400 lg:hover:bg-violet-500 text-white font-medium rounded-lg transition"
          >
            Ver más proyectos
          </a>
        </section>
      </main>

    </div>
  );
};

export default Lydia;
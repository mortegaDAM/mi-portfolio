import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';


const About = () => {
  return (
    <div className="min-h-screen font-dosis bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl  md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            Sobre Mí
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Soy desarrollador web full-stack apasionado por crear interfaces intuitivas y soluciones escalables.
            Me encanta aprender nuevas tecnologías y construir proyectos útiles y elegantes. Mi objetivo es combinar funcionalidad y diseño visual en cada proyecto.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Habilidades</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-5">
            Aquí están alguna de las habilidades, programas, tecnologías etc. con las que estoy familiarizadO. 
            De igual manera, en el apartado skills se ven reflejadas de una manera más visual reflejando mi conocimiento en cada una de ellas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Node.js', 'MongoDB', 'Git','Python', 'MySQL', 'Github', 'Java'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                <span className="text-lg font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Story / Philosophy Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mi Historia</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Todo comenzó cuando descubrí la programación en mis estudios universitarios. Desde entonces,
            no he parado de aprender y mejorar. Estoy deseando entrar al mundo laboral y ahora busco colaborar en proyectos ambiciosos donde poder aportar mi visión técnica y creativa.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Creo firmemente en el desarrollo centrado en el usuario, código limpio y soluciones mantenibles con un enfoque muy visual y elegante.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres saber más?</h2>
          <p className="text-lg text-gray-300 mb-8">
            ¡Estoy emocionado de conocer nuevos retos y oportunidades!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition"
            >
              Contáctame
            </a>
            <a
              href="/CV.pdf" 
              download="Mi_CV.pdf" 
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition"
            >
              Descargar CV
            </a>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default About;
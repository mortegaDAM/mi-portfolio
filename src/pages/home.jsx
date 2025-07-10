import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { useEffect } from 'react';
import Tasteflix from '../pages/tasteflix';
import Lydia from '../pages/lydia';
import { Link } from 'react-router-dom';


function Home() {
const projects = [
  {
    title: "Portfolio personal",
    description: "Mi portafolio actual hecho con React, TailwindCSS y animaciones personalizadas.",
    image: "https://picsum.photos/400/300?random=1",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    link: "/",
  },
  {
    title: "App de listas de recomendación",
    description: "Aplicación full-stack para crear listas de recomendaciones de películas, series, libros o resturantes.",
    image: " https://picsum.photos/400/300?random=2",
    tags: ["React", "PostgreSQL", "FastAPI"],
    link: "/tasteflix",
  },
  {
    title: "Página web psicología",
    description: "Página web responsive para una psicóloga general sanitaria.",
    image: " https://picsum.photos/400/300?random=3",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    link: "/lydia",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

    useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <main >
        <Navbar />
        <div id='home' className="flex flex-col items-center justify-center min-h-svh w-full bg-gray-800 px-2 font-dosis text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className='relative'>
            <div className=' absolute inset-0 bg-gradient-to-r from-violet-900 via-violet-300 to-blue-300 rounded-xl blur-2xl opacity-60 h-35'></div>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4">Mario Ortega</h1>
        </div>
        <div className=' flex  gap-3 justify-center items-center mt-7 mb-6'>
            <span class=" h-[1px] w-8 sm:w-12 bg-violet-500"></span>
            <h2 className="text-2xl text-violet-500 tracking-wide">
            Full-stack developer
            </h2>
            <span class=" h-[1px] w-8 sm:w-12 bg-violet-500"></span>
        </div>
        <p className='text-gray-300 text-xl mb-4'>
            Crafting complete and modern web solutions
        </p>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-wrap justify-center lg:gap-4 gap-2 mb-7 '
        >
            <span className=' bg-gray-500 text-gray-200 rounded-full w-auto lg:w-24 h-auto px-4 py-3  lg:hover:bg-gray-700 cursor-default'>
                React
            </span>
            <span className='bg-gray-500 text-gray-200 rounded-full w-auto lg:w-24 h-auto px-4 py-3 lg:hover:bg-gray-700 cursor-default'>
                SQL
            </span>
            <span className='bg-gray-500 text-gray-200 rounded-full w-auto lg:w-24 h-auto px-4 py-3 lg:hover:bg-gray-700 cursor-default'>
                Node.js
            </span>
            <span className='bg-gray-500 text-gray-200 rounded-full w-auto lg:w-24 h-auto px-4 py-3 lg:hover:bg-gray-700 cursor-default'>
                Javascript
            </span>
            <span className='bg-gray-500 text-gray-200 rounded-full w-auto lg:w-auto h-auto px-4 py-3 lg:hover:bg-gray-700 cursor-default'>
                TailwindCSS
            </span>
            <span className='bg-gray-500 text-gray-200 rounded-full w-auto lg:w-24 h-auto px-4 py-3 lg:hover:bg-gray-700 cursor-default'>
                FastAPI
            </span>
        </motion.div>
        <div className='flex flex-row gap-4 justify-center p-2'>
        <a href="#projects" class="group relative inline-flex items-center justify-center">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-violet-900 to-blue-300 rounded-full blur opacity-75 lg:group-hover:opacity-100 transition"></div>
            <span class="relative px-6 sm:px-8 py-3 text-gray-200 bg-gray-800 rounded-full inline-flex items-center justify-center w-full sm:w-auto">View My Work
                <svg class="w-4 h-4 ml-2 transform lg:group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </span>
        </a>
        <a href="/about" class="group relative inline-flex items-center justify-center bg-violet-400 text-gray-200 w-24 rounded-full hover:scale-105 hover:bg-violet-500 hover:text-gray-200">
            <span>About me</span>
        </a>
        </div>
        
      </motion.div>
      <div class="absolute bottom-0 lg:bottom-4 inset-x-0 flex flex-col items-center animate-bounce">
            <span class="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        </div>
        <section id='skills' className='flex flex-col justify-center items-center w-full bg-gray-700 py-10'> {/* Added py-10 for vertical spacing */}
    <div className='w-11/12 mx-auto'> {/* Added max-w-4xl and mx-auto for better control on large screens */}
        <h2 className='text-gray-200 m-3 text-3xl font-dosis font-bold lg:text-5xl text-center mb-8' >Skills</h2> {/* Added text-center */}

        {/* ¡NUEVO CONTENEDOR FLEXIBLE PARA LOS DOS BLOQUES! */}
        <div className='flex flex-col lg:flex-row gap-6 font-dosis'> {/* flex-col en móvil, flex-row en lg, con gap */}

            {/* PRIMER DIV DE INFORMACIÓN (Backend) */}
            <div className='bg-gray-800 text-gray-200 rounded-md px-3 py-4 flex-1'> {/* Added flex-1 to make them share space equally */}
                <div className='flex flex-row justify-center gap-3 text-gray-200 mb-4 lg:text-2xl'> {/* Added mb-4 for spacing */}
                    <span>🧠</span>
                    <h3 className='font-semibold'>Backend and APIs</h3>
                </div>
                <div>
                    {/* ... (tu contenido de Node.js, FastAPI, Database Design, Python) ... */}
                    <div>
                        <div className='flex justify-between mb-1' >
                            <span>Node.js</span>
                            <span>80%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4'>
                            <div className='h-full bg-gradient-to-r from-violet-400 to-violet-600 animate-expand origin-left' style={{width: "80%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>FastAPI</span>
                            <span>60%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4'>
                            <div className='h-full bg-gradient-to-r from-violet-400 to-violet-600 animate-expand origin-left' style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>Database Design</span>
                            <span>70%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4'>
                            <div className='h-full bg-gradient-to-r from-violet-400 to-violet-600 animate-expand origin-left' style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4'>
                            <div className='h-full bg-gradient-to-r from-violet-400 to-violet-600 animate-expand origin-left' style={{width: "70%"}}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEGUNDO DIV DE INFORMACIÓN (Frontend) */}
            <div className='bg-gray-800 text-gray-200 rounded-md px-3 py-4 flex-1'> {/* Added flex-1 */}
                <div className='flex flex-row justify-center gap-3 text-gray-200 mb-4 lg:text-2xl'> {/* Added mb-4 for spacing */}
                    <span>🎨</span>
                    <h3 className='font-semibold'>Frontend Development</h3>
                </div>
                <div>
                    {/* ... (tu contenido de React, TailwindCSS, Web Animation, JavaScript) ... */}
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>React</span>
                            <span>90%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#afffa6] to-[#699763] animate-expand origin-left' style={{width: "90%"}} ></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>TailwindCSS</span>
                            <span>70%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#afffa6] to-[#699763] animate-expand origin-left' style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>Web Animation</span>
                            <span>60%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#afffa6] to-[#699763] animate-expand origin-left' style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#afffa6] to-[#699763] animate-expand origin-left' style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-gray-200 rounded-md px-3 py-4 flex-1'> {/* Added flex-1 */}
                <div className='flex flex-row justify-center gap-3 text-gray-200 mb-4 lg:text-2xl'> {/* Added mb-4 for spacing */}
                    <span>🎨</span>
                    <h3 className='font-semibold'>Programms and Apps</h3>
                </div>
                <div>
                    {/* ... (tu contenido de React, TailwindCSS, Web Animation, JavaScript) ... */}
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>VSCode</span>
                            <span>95%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#a0e9ff] to-[#61c5e3] animate-expand origin-left' style={{width: "90%"}} ></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>Github</span>
                            <span>80%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#a0e9ff] to-[#61c5e3] animate-expand origin-left' style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>DevTools</span>
                            <span>80%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#a0e9ff] to-[#61c5e3] animate-expand origin-left' style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-1'>
                            <span>Eclipse</span>
                            <span>85%</span>
                        </div>
                        <div className='h-2 bg-gray-600 rounded-full overflow-hidden mb-4' >
                            <div className='h-full bg-gradient-to-r from-[#a0e9ff] to-[#61c5e3] animate-expand origin-left' style={{width: "80%"}}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div> {/* Cierre del nuevo contenedor flex */}
    </div>
</section>
<section id="projects" className="py-20 px-6 font-dosis  bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-dosis mb-12 text-center text-transparent pb-2 bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"
        >
          Proyectos Destacados
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gray-800 border-0 rounded-xl overflow-hidden shadow-lg  lg:hover:border-violet-500 transition group"
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-200 font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-block text-violet-400 lg:hover:text-violet-300 font-medium transition"
                >
                  Ver detalles →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action opcional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/#projects"
            className="px-6 py-3 text-gray-200 bg-violet-400 lg:hover:bg-violet-500 lg:hover:text-gray-200 rounded-lg font-medium transition"
          >
            Ver todos mis proyectos
          </a>
        </motion.div>
      </div>
    </section>
    </main>
  );
}

export default Home;
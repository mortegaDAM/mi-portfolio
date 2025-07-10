import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const Contact = () => {
  return (
    
    <div className="min-h-dvh flex items-center justify-center bg-gray-800 text-white px-6 py-20">
      <Navbar />
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Contáctame</h1>
        <p className="text-gray-300 mb-6">¿Tienes un proyecto o pregunta? ¡Escríbeme!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Tu email"
            className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-violet-500 lg:hover:bg-violet-600 border-0 text-white py-3 rounded font-medium transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
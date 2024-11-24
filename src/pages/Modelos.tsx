import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background_login.png";
import logo from "../assets/logo.png";
import Footer from "./Footer"; // Certifique-se de ajustar o caminho conforme necessário

const Models = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo */}
      <div className="absolute top-10">
        <img src={logo} alt="Logo" className="h-12 sm:h-16 w-auto mx-auto" />
      </div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-white text-4xl md:text-6xl font-bold mt-16 mb-8 text-center"
      >
        Modelos de Ficha
      </motion.h1>

      {/* Grid de Modelos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl px-4">
        {/* Modelo Básico */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Modelo Básico
          </h2>
          <p className="text-gray-600 mb-4">
            Simples e funcional, ideal para iniciantes.
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ Interface clean</li>
            <li>✔ Fácil configuração</li>
            <li>✔ Suporte básico</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Escolher Modelo
          </button>
        </motion.div>

        {/* Modelo Avançado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Modelo Avançado
          </h2>
          <p className="text-gray-600 mb-4">
            Repleto de funcionalidades para profissionais.
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ Design moderno</li>
            <li>✔ Integrações extras</li>
            <li>✔ Personalização completa</li>
            <li>✔ Análises e relatórios detalhados</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Escolher Modelo
          </button>
        </motion.div>

        {/* Modelo Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Modelo Premium
          </h2>
          <p className="text-gray-600 mb-4">
            O melhor desempenho para grandes demandas.
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ Recursos avançados</li>
            <li>✔ Suporte dedicado 24/7</li>
            <li>✔ Relatórios detalhados e customizados</li>
            <li>✔ Acesso completo a todas as funcionalidades</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Escolher Modelo
          </button>
        </motion.div>

        {/* Modelo Customizado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Modelo Customizado
          </h2>
          <p className="text-gray-600 mb-4">
            Para aqueles que precisam de algo exclusivo e sob medida.
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ Personalização total</li>
            <li>✔ Suporte dedicado exclusivo</li>
            <li>✔ Funcionalidades únicas de acordo com a necessidade</li>
            <li>✔ Integração com sistemas de terceiros</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Escolher Modelo
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Models;

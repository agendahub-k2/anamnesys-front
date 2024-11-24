import React from "react";
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
      <div className="absolute top-10"></div>

      {/* Título */}
      <h1 className="text-white text-4xl md:text-6xl font-bold mt-16 mb-8 text-center"></h1>

      {/* Grid de Modelos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl px-4">
        {/* Modelo Básico */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp">
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
        </div>

        {/* Modelo Avançado */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-150">
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
          </ul>
        </div>

        {/* Modelo Premium */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-300">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Modelo Premium
          </h2>
          <p className="text-gray-600 mb-4">
            O melhor desempenho para grandes demandas.
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ Recursos avançados</li>
            <li>✔ Suporte dedicado</li>
            <li>✔ Relatórios detalhados</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Models;

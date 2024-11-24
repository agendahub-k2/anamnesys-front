import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background_login.png";
import logo from "../assets/logo.png";
import Footer from "./Footer"; // Certifique-se de que o Footer está no mesmo diretório ou ajuste o caminho

const Plans = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-8 text-center"
      ></motion.h1>

      {/* Caixas de Planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {/* Plano Básico */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Plano Básico</h2>
          <p className="text-gray-600 mb-6">Ideal para quem está começando.</p>
          <p className="text-4xl font-bold text-blue-500 mb-4">R$ 19,90</p>
          <ul className="text-gray-700 mb-6">
            <li>✔ 5 fichas/mês</li>
            <li>✔ Suporte Básico</li>
            <li>✔ Acesso ao Dashboard</li>
          </ul>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Escolher Plano
          </button>
        </div>

        {/* Plano Padrão */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Plano Padrão</h2>
          <p className="text-gray-600 mb-6">
            O mais popular para profissionais.
          </p>
          <p className="text-4xl font-bold text-blue-500 mb-4">R$ 39,90</p>
          <ul className="text-gray-700 mb-6">
            <li>✔ 20 fichas/mês</li>
            <li>✔ Suporte Prioritário</li>
            <li>✔ Ferramentas Avançadas</li>
          </ul>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Escolher Plano
          </button>
        </div>

        {/* Plano Premium */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Plano Premium</h2>
          <p className="text-gray-600 mb-6">
            Para quem quer o máximo desempenho.
          </p>
          <p className="text-4xl font-bold text-blue-500 mb-4">R$ 79,90</p>
          <ul className="text-gray-700 mb-6">
            <li>✔ Fichas Ilimitadas</li>
            <li>✔ Suporte Exclusivo</li>
            <li>✔ Recursos Avançados</li>
          </ul>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Escolher Plano
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

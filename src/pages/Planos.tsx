import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background_login.png";
import "font-awesome/css/font-awesome.min.css";
import logo from "../assets/logo.png";

const Plans = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-gray-800"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Título e Descrição */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white mb-12"
      >
        <img
          // src={logo}
          // alt="Logo"
          className="mx-auto w-20 mb-4 animate-pulse"
        />
        <h1 className="text-5xl font-bold mb-4">Preços e Planos</h1>
        <p className="text-lg">
          Opções sob medida para facilitar o gerenciamento das suas fichas.
        </p>
      </motion.div>

      {/* Caixas de Planos */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {/* Plano Básico */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center transform transition-all"
        >
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Plano Básico
          </h2>
          <p className="text-gray-600 mb-6">Ideal para quem está começando.</p>
          <p className="text-5xl font-bold text-blue-500 mb-4">R$ 19,90</p>
          <p className="text-sm text-gray-500 mb-6">
            Cobrança mensal, sem taxas extras.
          </p>
          <ul className="space-y-4 mb-6">
            <li>✔ 5 fichas/mês</li>
            <li>✔ Suporte Básico</li>
            <li>✔ Acesso ao Dashboard</li>
            <li>✔ Ferramenta de Exportação Simples</li>
          </ul>
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Escolher Plano
          </button>
        </motion.div>

        {/* Plano Padrão */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded-xl p-8 text-center text-white transform transition-all border-4 border-white"
        >
          <h2 className="text-2xl font-bold mb-4">Plano Padrão</h2>
          <p className="text-white/80 mb-6">
            O mais popular entre os profissionais.
          </p>
          <p className="text-5xl font-bold mb-4">R$ 39,90</p>
          <p className="text-sm mb-6">
            Cobrança mensal, cancele a qualquer momento.
          </p>
          <ul className="space-y-4 mb-6">
            <li>✔ 20 fichas/mês</li>
            <li>✔ Suporte Prioritário</li>
            <li>✔ Ferramentas Avançadas</li>
            <li>✔ Integração com APIs</li>
            <li>✔ Relatórios Detalhados</li>
          </ul>
          <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition">
            Escolher Plano
          </button>
        </motion.div>

        {/* Plano Premium */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center transform transition-all"
        >
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Plano Premium
          </h2>
          <p className="text-gray-600 mb-6">
            Para quem quer o máximo desempenho.
          </p>
          <p className="text-5xl font-bold text-blue-500 mb-4">R$ 79,90</p>
          <p className="text-sm text-gray-500 mb-6">
            Cobrança anual, com desconto de 15%.
          </p>
          <ul className="space-y-4 mb-6">
            <li>✔ Fichas Ilimitadas</li>
            <li>✔ Suporte Exclusivo</li>
            <li>✔ Recursos Avançados</li>
            <li>✔ Acesso Premium ao Dashboard</li>
            <li>✔ Automação de Relatórios</li>
          </ul>
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Escolher Plano
          </button>
        </motion.div>
      </div>

      {/* Caixa flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-40 h-10 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-all"
      >
        <i className="fa fa-whatsapp text-4xl mr-3"></i>
        {/* Texto "Ajuda?" */}
        <span className="text-sm font-semibold">Ajuda?</span>{" "}
      </a>
    </div>
  );
};

export default Plans;

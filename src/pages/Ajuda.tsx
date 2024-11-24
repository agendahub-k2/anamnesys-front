import React from "react";
import backgroundImage from "../assets/background_login.png"; // Ajuste o caminho, se necessário
import logo from "../assets/logo.png"; // Ajuste o caminho, se necessário

const Help = () => {
  const whatsappNumber = "551199999999"; // Insira o número de WhatsApp
  const email = "suporte@exemplo.com"; // Insira o e-mail de suporte

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo */}
      <div className="absolute top-8"></div>

      {/* Título */}
      <h1 className="text-black text-4xl md:text-6xl font-bold mt-16 mb-8 text-center">
        Como podemos ajudar?
      </h1>

      {/* Opções de Ajuda */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Botão WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-60 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Fale pelo WhatsApp
        </a>

        {/* Botão Email */}
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center w-60 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Envie um E-mail
        </a>
      </div>

      {/* Informações de Contato */}
      <div className="mt-12 text-center text-white space-y-4">
        <p className="text-lg">
          <strong>WhatsApp:</strong> +55 (11) 99999-9999
        </p>
        <p className="text-lg">
          <strong>E-mail:</strong> suporte@exemplo.com
        </p>
      </div>
    </div>
  );
};

export default Help;

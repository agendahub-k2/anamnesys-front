import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header visual do footer */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/logoweb.png"
              alt="Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                ANAM<span className="text-blue-400">NESYS</span>
              </h1>
              <p className="text-sm">Conectando inovação com simplicidade</p>
            </div>
          </div>
          {/* <p className="mt-4 text-sm sm:mt-0">
            A plataforma ideal para simplificar e agilizar o preenchimento de
            fichas online.
          </p> */}
        </div>

        {/* Conteúdo do footer */}
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {/* Informações de contato */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaLocationArrow className="text-blue-400" />
                <span>Recife, Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMobileAlt className="text-blue-400" />
                <span>+55 81 91234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>contato@anamnesys.com.br</span>
              </li>
            </ul>
          </div>

          {/* Links rápidos */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-4">Links Rápidos</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#planos"
                  className="hover:text-blue-400 hover:underline"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#modelos"
                  className="hover:text-blue-400 hover:underline"
                >
                  Modelos
                </a>
              </li>
              <li>
                <a
                  href="#ajuda"
                  className="hover:text-blue-400 hover:underline"
                >
                  Ajuda
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-blue-400 hover:underline"
                >
                  Login
                </a>
              </li>
            </ul>
          </div> */}

          {/* Redes sociais */}
          <div>
            <h2 className="text-lg font-semibold mb-15">Redes Sociais</h2>
            <div className="flex space-x-6">
              {/* <a
                href="#"
                className="p-3 text-2xl bg-blue-700 rounded-full hover:bg-blue-400 transition-all"
              >
                <FaFacebook />
              </a> */}
              <a
                href="#"
                className="p-3 text-2xl bg-blue-700 rounded-full hover:bg-blue-400 transition-all"
              >
                <FaInstagram />
              </a>
              {/* <a
                href="#"
                className="p-3 text-2xl bg-blue-700 rounded-full hover:bg-blue-400 transition-all"
              >
                <FaLinkedin />
              </a> */}
            </div>
            <p className="mt-4 text-sm">
              Siga-nos para ficar por dentro das novidades!
            </p>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-10 border-t border-blue-400 pt-6 text-center text-sm">
          <p>© 2024 AnamnesysHub | Desenvolvido por k2 / Will</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

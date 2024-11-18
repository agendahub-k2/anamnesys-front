import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";  
import { Link } from "react-router-dom";  

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 flex items-center text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="flex items-center">
                <img
                  src="/src/assets/logoweb.png"
                  alt="Logo"
                  className="mr-2 h-8 w-8 sm:h-12 sm:w-12"
                />
                ANAM
                <span className="inline-block font-bold text-primary">
                  NESYS
                </span>
              </a>
            </h1>
            <p className="mb-5">
              Anamnesys, a plataforma ideal para simplificar e agilizar o
              preenchimento de fichas. Conectando profissionais e clientes com
              eficiência, inovação e segurança.
            </p>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Recife, Brasil</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+55 81 91234-5678</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaEnvelope />
              <p>contato@anamnesys.com.br</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links Importantes
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <ScrollLink
                      to="planos"  // ID da seção de Planos
                      smooth={true}  // Ativar rolagem suave
                      duration={500}  // Duração da rolagem
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      Planos
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="modelos"  
                      smooth={true}
                      duration={500}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      Modelos
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="ajuda"  
                      smooth={true}
                      duration={500}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      Ajuda
                    </ScrollLink>
                  </li>
                  <li>
                    <Link
                      to="/login" 
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links Úteis
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Política de Privacidade
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Serviços
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Sobre Nós
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Redes Sociais
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Assine nossa newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    type="text"
                    placeholder="E-mail"
                  />
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            © 2024 AnamnesysHub | Desenvolvido por k2 / Will
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

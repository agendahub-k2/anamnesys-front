import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import backgroundImage from '../assets/background_login.png'; 
import logo from '../assets/logo.png'; 
import Footer from './Footer';  // Certifique-se de que o Footer está no mesmo diretório ou ajuste o caminho

const Plans = () => {
  return (
    <PlansContainer>
      <BackgroundImage />

      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>

      <TextContainer>
        <PlansText
          as={motion.h1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MODELOS
        </PlansText>
      </TextContainer>

      {/* Footer adicionado aqui */}
      
    </PlansContainer>
  );
};

export default Plans;

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 10;
`;

const NavbarLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4c91f1;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;  
  top: 50%;  
  transform: translate(-50%, -50%); /* Centraliza a logo */
`;

const Logo = styled.img`
  width: 1000px; /* Tamanho grande da logo */
  height: auto;
  object-fit: contain;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 0 20px;
  text-align: center;
  z-index: 10;
`;

const PlansText = styled.h1`
  font-size: 100px; /* Tamanho bem grande */
  color: #000; /* Cor preta */
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 80px; /* Menor em telas médias */
  }

  @media (max-width: 480px) {
    font-size: 60px; /* Menor em telas pequenas */
  }
`;

import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from '../assets/background_login.png';
import logo from '../assets/logo.png';
import Service from './Service'; 
import Planos from './Planos'; 
import Modelos from './Modelos'; 
import Ajuda from './Ajuda'; 
import Footer from './Footer';

interface SectionProps {
  background?: string; 
}

const Home = () => {
  return (
    <>
      <Section background={`url(${backgroundImage}) no-repeat center center/cover`}>
        <Content>
          <Left>
            <Title
              as={motion.h1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              OTIMIZE SEUS ATENDIMENTOS<br /> COM FICHAS <br /> DE ANAMNESE PERSONALIZADAS!
            </Title>
            <Desc
              as={motion.p}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <strong>
                Agilize a coleta e organização de informações essenciais com fichas de anamnese inteligentes e intuitivas. Nossa solução oferece praticidade e personalização para diversos setores, como saúde, educação e negócios, garantindo uma experiência mais organizada e eficiente tanto para você quanto para seus clientes e pacientes.
              </strong>
            </Desc>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <StyledButton as={Link} to="/Register">
                <span>Clique aqui e realize seu cadastro</span>
                <MdKeyboardArrowRight size={30} />
              </StyledButton>
            </motion.div>
          </Left>
        </Content>

        <LogoContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Logo src={logo} alt="Logo" />
          </motion.div>
        </LogoContainer>
      </Section>

      {/* Ajuste para Service e Planos */}
      <ServiceContainer>
        <Service /> 
      </ServiceContainer>

      <PlanosContainer>
        <Planos />
      </PlanosContainer>

      <Modelos />
      <Ajuda />
      <Footer />
    </>
  );
};

export default Home;

const Section = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.background || '#f0f0f0'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

const Left = styled.div`
  max-width: 800px;
  padding-left: 70px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
`;

const Desc = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  --clr-font-main: hsla(0 0% 20% / 100);
  --btn-bg-1: hsla(194 100% 69% / 1);
  --btn-bg-2: hsla(217 100% 56% / 1);
  --btn-bg-color: hsla(360 100% 100% / 1);
  --radii: 0.5em;
  cursor: pointer;
  padding: 12.5px 30px;
  min-width: 120px;
  min-height: 44px;
  font-size: 1.25rem;
  font-weight: bold;
  transition: 0.8s;
  background-size: 100% auto;
  background-image: linear-gradient(30deg, #0400ff, #4ce3f7);
  border: none;
  border-radius: var(--radii);
  color: var(--btn-bg-color);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  white-space: nowrap;
  overflow: hidden;

  span {
    margin-right: 10px;
    color: #ffff;
    font-weight: bold;
    font-size: 1.25rem;
    display: inline-block;
    position: relative;
  }

  &:hover {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }

  &:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 3px var(--btn-bg-color),
      0 0 0 6px var(--btn-bg-2);
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #05bada66;
    }
    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }
    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-00%, -50%);
`;

const Logo = styled.img`
  width: 1000px;
  height: auto;
  object-fit: contain;
`;

const ServiceContainer = styled.div`
  position: relative;
  top: -150px; /* Ajuste a posição para o meio das seções */
  padding-top: 50px;
`;

const PlanosContainer = styled.div`
  position: relative;
  top: -200px; /* Ajuste a distância entre Planos e Home */
  padding-top: 30px;
`;

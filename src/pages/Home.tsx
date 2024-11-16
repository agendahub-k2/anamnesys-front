import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

import backgroundImage from '../assets/background_login.png'; 
import logo from '../assets/logo.png'; 

interface SectionProps {
  background?: string;
}

const Home = () => {
  return (
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
            Agilize a coleta e organização de informações essenciais com fichas de anamnese inteligentes e intuitivas. Nossa solução oferece praticidade e personalização para diversos setores, como saúde, educação e negócios, garantindo uma experiência mais organizada e eficiente tanto para você quanto para seus clientes e pacientes.
          </Desc>

          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <StyledButton as={Link} to="/Register">
              <span>Clique aqui e realize seu cadastro</span>
              <MdKeyboardArrowRight size={24} />
            </StyledButton>
          </motion.div>
        </Left>
      </Content>

      {/* rotação da logo */}
      <LogoContainer>
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          style={{ transformOrigin: 'center' }}  
        >
          <Logo src={logo} alt="Logo" />
        </motion.div>
      </LogoContainer>
    </Section>
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
  position: relative; /* Necessário para posicionar a logo */
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  width: 80%;
`;

const Left = styled.div`
  max-width: 800px;
  padding-left: 70px; /* Mover textos para a direita */
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
`;

const Desc = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-top: 30px;

  span {
    margin-right: 10px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;  
  top: 50%;  
  transform: translate(-00%, -50%); /* Centraliza a logo */
`;

const Logo = styled.img`
  width: 1000px; /* Aumentar o tamanho da logo */
  height: auto;
  object-fit: contain;
`;

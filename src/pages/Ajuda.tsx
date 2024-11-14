import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Help = () => {
  return (
    <HelpContainer>
      <Content>
        <HelpText
          as={motion.h1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precisa de ajuda? Estamos aqui para ajudar! <br />
          Navegue pelos tópicos abaixo para encontrar as informações de que precisa. <br />
          Caso precise de mais assistência, entre em contato com nosso suporte!
        </HelpText>

        <ButtonContainer>
          <StyledButton as={motion.a} 
            href="/Modelos" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            Modelos de Fichas
          </StyledButton>
          <StyledButton as={motion.a} 
            href="/Planos" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Planos e Preços
          </StyledButton>
        </ButtonContainer>
      </Content>
    </HelpContainer>
  );
};

export default Help;

const HelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #55aaff, #f0f4f8);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 1000px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const HelpText = styled.h1`
  font-size: 40px;
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 30px;
  animation: fadeInText 1s ease-in-out;

  @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const StyledButton = styled.a`
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  border-radius: 25px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 15px 14px rgba(0, 42, 177, 0.12);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 18px rgba(0, 42, 177, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 25px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

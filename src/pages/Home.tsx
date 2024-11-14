import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BgImg from '../assets/background_login.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Content>
          <Left>
            <Title
              as={motion.h1} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Otimize seus atendimentos com <br /> nossas fichas de Anamnesys <br /> personalizadas!
            </Title>
            <Desc
              as={motion.p} 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Simplifique o processo de coleta e organização de informações essenciais com nossas fichas de anamnesys inteligentes e intuitivas! Seja para saúde, educação, negócios ou outros setores, ofereça uma experiência prática, organizada e personalizada para seus clientes e pacientes.
            </Desc>

            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <StyledButton to="/Register">
                <span>Clique aqui e realize seu cadastro</span>
                <MdKeyboardArrowRight size={24} />
              </StyledButton>
            </motion.div>
          </Left>
        </Content>
      </Section>
    </>
  );
};

export default Home;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif; /* Font customizada */
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
`;

const Section = styled.section`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh; 
  display: flex;
  align-items: center;  
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    background-size: cover;
    height: 100vh;  
  }

  @media (max-width: 768px) {
    background-size: cover;
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    background-size: cover; 
    padding: 30px 15px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;  
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    justify-content: center;
    text-align: center;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-top: 30px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  color: #04050a;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 24px;
    margin-top: 15px;
  }
`;

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgba(0, 42, 177, 0.12);
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 20px;
    height: 60px;
    margin: 30px auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 18px;
    height: 55px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

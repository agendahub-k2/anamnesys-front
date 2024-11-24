import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation'; // Navegação criada anteriormente

const Backoffice = () => {
  return (
    <Wrapper>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Content>
        <h1>Bem-vindo ao Backoffice</h1>
        <p>Gerencie suas fichas de anamnese e configurações aqui.</p>
      </Content>
    </Wrapper>
  );
};

export default Backoffice;

// Estilos
const Wrapper = styled.div`
  display: flex;
  height: 100vh; /* Garante que o layout ocupe toda a altura da viewport */
  background-color: #f8f9fa;
`;

const NavigationContainer = styled.div`
  width: 250px; /* Largura fixa da barra lateral */
  background-color: blue; /* Altere a cor conforme necessário */
  color: white;
  height: 100vh; /* Garante que o menu ocupe toda a altura da tela */
  position: fixed; /* Fixa a barra lateral à esquerda */
  left: 0;
  top: 0;
`;

const Content = styled.main`
  margin-left: 250px; /* Espaço para compensar a largura da barra lateral */
  flex: 1; /* Ocupa o espaço restante */
  padding: 20px;
  overflow-y: auto;

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
  }
`;

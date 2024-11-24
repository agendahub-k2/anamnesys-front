import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate
import styled from 'styled-components';

const Navigation = () => {
  const navigate = useNavigate(); // Hook para navegar

  // Função para lidar com logout
  const handleLogout = () => {
    localStorage.removeItem('authenticated'); // Limpa o token
    navigate('/'); // Redireciona para a home
  };

  return (
    <NavContainer>
      <Menu>
        <NavItem to="/clientes">Clientes</NavItem>
        <NavItem to="/fichas">Fichas</NavItem>
        <NavItem to="/templates">Templates</NavItem>
        <NavItem to="/ajuda">Ajuda</NavItem>
      </Menu>
      {/* Alterado para um botão com click handler */}
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </NavContainer>
  );
};

export default Navigation;

// Estilos
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to right, #0072ff, #00c6ff); /* Mesma cor da Navbar */
  padding: 20px 10px;
  width: 250px;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavItem = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #add8e6; /* Destaque no hover */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: #fff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LogoutButton = styled.button`
  background-color: #fff;
  color: #0072ff;
  font-size: 1rem;
  padding: 10px;
  border: 2px solid #0072ff;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto; /* Empurra o botão para o final */

  &:hover {
    background-color: #0072ff;
    color: #fff;
  }
`;

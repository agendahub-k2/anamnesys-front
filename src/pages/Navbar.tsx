  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import LogoImg from '../assets/logo.png';
  import styled from 'styled-components';

  interface NavProps {
    isMenuOpen: boolean;
  }

  interface ButtonProps {
    primary?: boolean;
  }

  interface NavLinkProps {
    to: string;
  }

  interface ButtonContainerProps {
    isMenuOpen: boolean;
  }

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <NavbarContainer>
        <NavbarWrap>
          <Link to='/'>
            <Logo>
              <img src={LogoImg} alt="Logo" />
            </Logo>
          </Link>

          <HamburgerIcon onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerIcon>

          <Nav isMenuOpen={isMenuOpen}>
            <NavLink to='/Planos'>PLANOS</NavLink>
            <NavLink to='/Modelos'>MODELOS</NavLink>
            <NavLink to='/Ajuda'>AJUDA</NavLink>

            <ButtonContainer isMenuOpen={isMenuOpen}>
              <Link to='/login'>
                <Button blue>LOGIN</Button>
              </Link>

              <Link to='/register'>
                <Button white>SIGN UP</Button>
              </Link>
            </ButtonContainer>
          </Nav>
        </NavbarWrap>
      </NavbarContainer>
    );
  };

  export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 100;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const NavbarWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: flex-end;
  }
`;

const Logo = styled.div`
  width: 140px;
  height: auto;
  margin-right: 0;
  margin-left: 20px;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Nav = styled.nav<NavProps>`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 50px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    background: #f1f1f1;
    border-radius: 10px;
    padding: 20px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-height: 100vh;
    overflow-y: auto;
  }
`;

const NavLink = styled(Link)<NavLinkProps>`
  color: #000;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  line-height: 80px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #000;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #add8e6;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 60px;
    padding: 0 10px;
  }
`;

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
  gap: 15px;
  position: absolute;
  left: 1000px; /* Distância do lado direito da tela */
  top: 50%; 
  transform: translateY(-50%); 
  width: auto; 

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    right: 10px; 
  }
`;

const Button = styled.div<ButtonProps & { blue?: boolean; white?: boolean }>`
  width: 130px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  border-radius: 25px;
  cursor: pointer;
  background: ${({ blue }) =>
    blue
      ? 'linear-gradient(to right, #0072ff, #00c6ff)' 
      : '#fff'}; // Fundo branco para SIGN UP
  color: #000; // Sempre define o texto em preto
  border: 2px solid #0072ff; 
  transition: all 0.3s ease;

  &:hover {
    background: #000; /* Fundo preto no hover */
    color: #fff; /* Texto branco no hover */
    border-color: #000; /* Borda preta no hover */
  }

  @media (max-width: 768px) {
    width: 120px;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
  }
`;


const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 30;

  div {
    width: 30px;
    height: 4px;
    background-color: #000;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

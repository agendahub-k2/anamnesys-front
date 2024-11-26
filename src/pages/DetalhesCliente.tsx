import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DetalhesCliente = () => {
  const { userId, patientId } = useParams(); // Captura os parâmetros da URL
  const [cliente, setCliente] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera o token do localStorage
    const authenticated = localStorage.getItem("authenticated");

    if (authenticated) {
      try {
        const parsedUser = JSON.parse(authenticated); // Parseia o JSON armazenado no localStorage
        setToken(parsedUser.token); // Define o token
      } catch (error) {
        console.error("Erro ao parsear o token:", error);
        navigate("/"); // Redireciona para a página inicial caso o token seja inválido
      }
    } else {
      console.log("Token não encontrado.");
      navigate("/"); // Redireciona para a página inicial
    }
  }, [navigate]);

  useEffect(() => {
    // Busca os dados do cliente apenas se o token estiver disponível
    const fetchCliente = async () => {
      if (!token) return; // Aguarda o token estar definido antes de realizar a requisição

      try {
        const response = await axios.get(
          `http://localhost:8080/${userId}/patientId/${patientId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCliente(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do cliente:", error);
      }
    };

    fetchCliente();
  }, [userId, patientId, token]);

  if (!cliente) {
    return <LoadingMessage>Carregando detalhes do cliente...</LoadingMessage>;
  }

  return (
    <Container>
      <h1>Detalhes do Cliente</h1>
      <Detail>
        <strong>Nome:</strong> {cliente.name}
      </Detail>
      <Detail>
        <strong>Email:</strong> {cliente.email}
      </Detail>
      <Detail>
        <strong>Telefone:</strong> {cliente.phone}
      </Detail>
      <Detail>
        <strong>Endereço:</strong> {cliente.address || "Não informado"}
      </Detail>
      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Detail = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #0072ff;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #0072ff;
  font-size: 1.5rem;
`;

export default DetalhesCliente;

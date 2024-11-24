import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation'; // Importando o menu lateral
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null); // Agora temos o estado do user
  const navigate = useNavigate();
  const authenticated = localStorage.getItem('authenticated');

  const clientsPerPage = 8;

  // Atualize o user antes de qualquer requisição
  useEffect(() => {
    if (authenticated) {
      setUser(JSON.parse(authenticated));  // Atualiza o estado do usuário
    } else {
      console.log("Token não encontrado.");
      navigate("/");
    }
  }, [authenticated, navigate]);  // Verifica e atualiza o estado do user quando 'authenticated' mudar

  useEffect(() => {
    if (!user) return;  // Não faz a requisição até que o estado do usuário esteja definido

    const fetchClientes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:8080/1/patientId`, 
          {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpdGFsb0BnbWFpbC5jb20ifQ.6HKwNKKjfSG7wEK6xku8jNXQQtU8r6czj1u4sY3bZvI`,
                'Content-Type': 'application/json',
            },
          }
        );
        console.log(response); // Adicione um log para ver a resposta
        setClientes(response.data.content); // Dados da página atual
        setTotalPages(response.data.totalPages); // Total de páginas
      } catch (error) {
        if (error.response) {
           console.error("Erro de resposta do servidor:", error.response);
        } else if (error.request) {
           console.error("Erro na requisição:", error.request);
        } else {
           console.error("Erro desconhecido:", error.message);
        }
     } finally {
        setIsLoading(false);
     }
    };

    fetchClientes();
  }, [currentPage, user]);  // A requisição agora depende de 'user'

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredClients = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Navigation />
      <ContentArea>
        <SearchInput 
          type="text" 
          placeholder="Filtrar por nome" 
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {isLoading ? (
          <LoadingMessage>Carregando...</LoadingMessage>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        
        <Pagination>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton 
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </Pagination>
      </ContentArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 250px;
  align-self: flex-start;
`;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: #0072ff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #0072ff;
  background-color: white;
  color: #0072ff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0072ff;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default Cliente;

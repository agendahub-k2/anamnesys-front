import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const authenticated = localStorage.getItem('authenticated');

  useEffect(() => {
    if (authenticated) {
      setUser(JSON.parse(authenticated));
    } else {
      console.log("Token não encontrado.");
      navigate("/");
    }
  }, [authenticated, navigate]);

  const fetchClientes = async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/${user.id}/patientId/find`,
        {
          params: {
            name: searchTerm || '', // Se não houver termo de busca, envia vazio
            page: currentPage - 1,
            size: 8,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setClientes(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Chama fetchClientes ao montar o componente e sempre que user mudar
  useEffect(() => {
    if (user) {
      fetchClientes();
    }
  }, [user, currentPage]);

  // Atualiza o termo de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reseta para a primeira página ao buscar
  };

  // Chama a busca com debounce quando searchTerm mudar
  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchClientes();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  // Atualiza a página atual
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.name}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.phone}</td>
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
              active={currentPage === index + 1}
            >
              {index + 1}
            </PageButton>
          ))}
        </Pagination>
      </ContentArea>
    </Container>
  );
};

// Estilização (mantém a mesma)
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

const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #0072ff;
  background-color: ${({ active }) => (active ? '#0072ff' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#0072ff')};
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

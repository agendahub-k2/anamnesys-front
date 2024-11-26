import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CadastroCliente = ({ user, onCadastro }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await axios.post(
        `http://localhost:8080/${user.id}/patientId/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({ name: "", email: "", phone: "" }); // Reseta o formulário
      if (onCadastro) onCadastro(); // Atualiza a lista de clientes
    } catch (err) {
      console.error("Erro ao cadastrar cliente:", err);
      setError("Não foi possível cadastrar o cliente. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Cadastro de Cliente</h3>
      <Input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </SubmitButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  );
};

// Estilos
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #0072ff;
  border-radius: 8px;
  background-color: #f0f8ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-weight: bold; /* Deixa o texto em negrito */
    color: #0072ff; /* Opcional: adiciona uma cor vibrante */
    margin-bottom: 10px;
  }
`;


const Input = styled.input`
  padding: 10px;
  font-size: 1.3rem;
  border-radius: 4px;
  border: 2px solid #0072ff;
  width: 100%;
  background-color: #ffffff;
  color: #333;

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 5px #0056b3;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.4rem;
  color: white;
  background-color: #0072ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 1.1rem;
  font-weight: bold;
`;


export default CadastroCliente;

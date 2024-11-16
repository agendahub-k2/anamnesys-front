import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputMask from "react-input-mask";
import { SizeBox, Size, Background, CButton } from "../styles/LoginAndRegister/styles";
import { IconButton } from "../components/IconButton/IconButton";
import { Button1 } from "../components/Button1/Button1";

// Imagens
import logo1 from "../assets/logo.png";

// Ícones
import iconBack from "../assets/img/icons/filled/back_filled.png";
import faceIcon from "../assets/img/icons/outline/face_id.png";
import phoneIcon from "../assets/img/icons/outline/phone.png";
import giftIcon from "../assets/img/icons/outline/gift.png";
import passwordIcon from "../assets/img/icons/outline/password.png";

export const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!password || !confirmPassword) {
            setError("Os campos de senha não podem estar vazios!");
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem!");
            return;
        }

        if (name.length < 3) {
            setError("Nome inválido - between 3 and 15 characters");
            return;
        }

        if (password.length < 4) {
            setError("Senha inválida - between 4 and 15 characters");
            return;
        }

        if (category.length < 4) {
            setError("Segmento inválido - between 4 and 15 characters");
            return;
        }

        if (phone.length != 11) {
            setError("Telefone inválido");
            return;
        }

        if (!name || !phone || !email || !category) {
            setError("Todos os campos devem ser preenchidos!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/user/create', {
                name: name,
                phone: phone,
                email: email,
                password: password,
                category: category
            });


            setSuccessMessage("Cadastro realizado com sucesso!");
            setError("");
            setTimeout(() => {
                navigate("/")
            }, 2000);

        } catch (error) {

            if (error.response) {
                if (error.response.data && error.response.data.errors) {
                    if (error.response.data.errors.length > 0) {
                        setError(error.response.data.errors[0].error);
                    } else {
                        setError(error.response.data.message);
                    }
                } else {
                    setError(`Erro ao realizar cadastro: ${error.response.statusText || error.response.data.message}`);
                }
            } else if (error.request) {
                setError("Erro na requisição, sem resposta do servidor.");
            } else {
                setError(`Erro inesperado: ${error.message}`);
            }
        }
    };

    return (
        <>
            <div className={`${Background.BACKGROUNDR} min-h-screen flex items-center justify-center`}>
                <div className={`flex flex-col items-center justify-center bg-white p-6 md:p-10 rounded-2xl shadow-xl ${SizeBox.BOX_R} w-full max-w-[500px]`}>
                    {/* Header */}
                    <section className="w-full flex items-center justify-start">
                        <Link to={'/'}>
                            <IconButton
                                id='iconBack'
                                image={iconBack}
                                style='w-[3vh] h-[3vh] max-w-[30px] max-h-[30px]'
                            />
                        </Link>
                    </section>

                    {/* Título e Logo */}
                    <section className="flex flex-col justify-center items-center mb-8">
                        <h1 className={`text-center ${Size.EXTRALARGE} font-[sansation-regular]`}>Criar conta</h1>
                        <div className="w-[40%]">
                            <img src={logo1} alt="Logo" className="w-full" />
                        </div>
                    </section>

                    {/* Formulário */}
                    <section className="flex w-full overflow-auto scrollbar-none">
                        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                            <div className="relative w-full space-y-5">
                                {/* Primeira linha */}
                                <div className="flex flex-col lg:flex-row justify-between gap-5">
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtNombreR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>Nome</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={faceIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <input
                                                type="text"
                                                id="txtNombreR"
                                                required
                                                className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                placeholder="Nome"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtApellidoR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>E-mail</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={faceIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <input
                                                type="email"
                                                id="txtApellidoR"
                                                required
                                                className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                placeholder="E-mail"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Segunda linha */}
                                <div className="flex flex-col lg:flex-row justify-between gap-5">
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtTelefonoR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>Telefone</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={phoneIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <InputMask
                                                mask="(99) 99999-9999"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                            >
                                                {() => (
                                                    <input
                                                        type="text"
                                                        id="txtTelefonoR"
                                                        required
                                                        className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                        placeholder="Telefone"
                                                    />
                                                )}
                                            </InputMask>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtSegmentR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>Segmento</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={giftIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <input
                                                type="text"
                                                id="txtSegmentR"
                                                required
                                                className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                placeholder="Segmento"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Terceira linha */}
                                <div className="flex flex-col lg:flex-row justify-between gap-5">
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtPasswordR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>Senha</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={passwordIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <input
                                                type="password"
                                                id="txtPasswordR"
                                                required
                                                className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                placeholder="Senha"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-[45%]">
                                        <label htmlFor="txtPasswordConfirmR" className={`block mb-2 ${Size.LARGE} font-[sansation-regular]`}>Confirmar Senha</label>
                                        <div className="flex">
                                            <span className={`bg-white inline-flex items-center px-3 ${Size.LARGE} rounded-l-full border border-neutral-400`}>
                                                <img src={passwordIcon} alt="icon" className="w-[20px] h-[20px] text-gray-500" />
                                            </span>
                                            <input
                                                type="password"
                                                id="txtPasswordConfirmR"
                                                required
                                                className={`bg-white rounded-none rounded-r-full w-full h-[40px] border text-[#353C43] flex-1 ${Size.LARGE} border-neutral-400 p-3 border-l-0 font-[sansation-regular]`}
                                                placeholder="Confirmar Senha"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mensagem de erro */}
                            {error && (
                                <div className="flex justify-center w-full mt-2">
                                    <p className="text-red-500 text-lg">{error}</p>
                                </div>
                            )}

                            {/* Mensagem de sucesso */}
                            {successMessage && (
                                <div className="flex justify-center w-full mt-2">
                                    <p className="text-green-500 text-lg">{successMessage}</p>
                                </div>
                            )}


                            {/* Botão Criar Conta */}
                            <div className="flex justify-center w-full mt-8">
                                <Button1 nombre='Criar conta' id='criarConta' type='submit' link='' color={CButton.MATE} />
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

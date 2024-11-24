import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Size, SizeBox, CButton, Background } from "../styles/LoginAndRegister/styles";
import { Button1 } from "../components/Button1/Button1";
import { IconButton } from "../components/IconButton/IconButton";
import { CheckBox } from "../components/CheckBox/CheckBox";

//Images
import logo1 from "../assets/logo.png";

//Icons
import iconBack from "../assets/img/icons/filled/back_filled.png";
import iconUser from "../assets/img/icons/filled/user_filled.png";
import iconPassword from "../assets/img/icons/filled/password_filled.png";
const iconTemplate = "bg-[url(assets/img/backgrounds/login/background_login_little.png)]";
const logo3 = "bg-[url(./assets/logo.png)]";

export const Login = () => {
  const navigate = useNavigate();

  // Função para enviar o formulário e fazer a requisição
  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const email = document.getElementById("txtUserL").value;
    const password = document.getElementById("txtPasswordL").value;

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        localStorage.setItem('authenticated', JSON.stringify(data));
        navigate('/backoffice'); 
      } else {

        console.log(response)
        const errorData = await response.json();
        const errorMessage = errorData?.message || "Ocorreu um erro. Por favor, tente novamente mais tarde.";
        toast.error(errorMessage)
      }
    } catch (error) {
      toast.error("Ocorreu um erro. Por favor, tente novamente mais tarde.")
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  return (
    <>
      <div className={`${Background.BACKGROUND}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full"
        >
          <div
            className={`flex bg-[#FAFAFF] rounded-xl shadow-[0px_0px_50px_10px_rgba(0,0,0,0.2)] ${SizeBox.BOX_L}`}
          >
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

              <section className="flex items-center justify-center w-full h-full">
                <form
                  onSubmit={handleLogin} // Chama a função handleLogin ao enviar o formulário
                  className="flex flex-col relative items-center justify-center w-full space-y-8 lg:space-y-16"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h2 className={`${Size.EXTRALARGE}`}>Bem-vindo (a)</h2>
                    <img
                      src={logo1}
                      alt="Logo"
                      className="h-[110px] md:h-[130px] lg:h-[150px] xl:h-[170px] max-w-full"
                    />
                  </div>

                  <section className="flex flex-col items-center justify-center w-full xl:px-[1.5vh] space-y-3">
                    <div className="relative w-full">
                      <img
                        src={iconUser}
                        alt="Ícone de usuário"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-[20px]"
                      />
                      <input
                        type="text"
                        id="txtUserL"
                        required
                        className={`bg-white rounded-full w-full h-[40px] border text-[#353C43] pl-10 pr-3 ${Size.EXTRALARGE} border-neutral-400 p-3 font-[sansation-regular]`}
                        placeholder="Usuário"
                      />
                    </div>

                    <div className="relative w-full">
                      <img
                        src={iconPassword}
                        alt="Ícone de senha"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-[20px]"
                      />
                      <input
                        type="password"
                        id="txtPasswordL"
                        required
                        className={`bg-white rounded-full w-full h-[40px] border text-[#353C43] pl-10 pr-3 ${Size.EXTRALARGE} border-neutral-400 p-3 font-[sansation-regular]`}
                        placeholder="Senha"
                      />
                    </div>

                    <section className="w-[90%] md:w-[70%] mt-[5px] xl:mt-[10px] flex items-center justify-between">
                      <CheckBox />
                      <div className="items-end text-right">
                        <p
                          className={`flex flex-col ${Size.MEDIUM} hover:text-[#0094FF] mr-3 text-right`}
                        >
                          <a>Esqueceu a senha?</a>
                        </p>
                      </div>
                    </section>
                  </section>

                  <section className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between w-[90%] md:w-[72%] mt-10 xl:mt-20 space-y-reverse space-y-3 md:space-y-0 md:space-x-5">
                    <Button1
                      nombre="Criar conta"
                      id="criarconta"
                      type="link"
                      link="/Register"
                      color={CButton.MATE}
                    />
                    <Button1
                      nombre="Iniciar sessão"
                      id="iniciarsesion"
                      type="submit"
                      link=""
                      color={CButton.GRADIENT}
                    />
                  </section>
                </form>
              </section>
            </div>

            <div
              className={`hidden lg:flex flex-col lg:w-1/2 ${iconTemplate} bg-cover bg-center rounded-r-xl xl:py-[30px] xl:px-[20px] text-black items-center justify-center`}
            >
              <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[150px]">
                <div
                  className={`${logo3} w-full h-[20vw] mb-[10px] max-h-[280px] bg-contain bg-no-repeat bg-center`}
                ></div>
                <p className={`${Size.EXTRALARGE} leading-[30px]`}>
                  Descubra, preencha e conecte-se com a plataforma de fichas
                  personalizadas que criamos para você!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Toast Container para mostrar as notificações */}
      <ToastContainer position="top-center" />
    </>
  );
};

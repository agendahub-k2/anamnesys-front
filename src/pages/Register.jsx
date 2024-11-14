import { Link } from "react-router-dom"

import { SizeBox, Size, Background, CButton } from "../styles/LoginAndRegister/styles"
import { IconButton } from "../components/IconButton/IconButton"
import { Input2 } from "../components/Input2/Input2"
import { Button1 } from "../components/Button1/Button1"

//Imagens
import logo1 from "../assets/logo.png"

//Ícones
import iconBack from "../assets/img/icons/filled/back_filled.png"
import faceIcon from "../assets/img/icons/outline/face_id.png"
import phoneIcon from "../assets/img/icons/outline/phone.png"
import giftIcon from "../assets/img/icons/outline/gift.png"
import userIcon from "../assets/img/icons/outline/user.png"
import passwordIcon from "../assets/img/icons/outline/password.png"

export const Register = () => {
    return(
        <>
          <div className={`${Background.BACKGROUNDR}`}>
            <div className={`flex flex-col items-center justify-center bg-white p-8 md:p-10 rounded-2xl shadow-xl ${SizeBox.BOX_R}`}>
                <section className="w-full flex px-[12px]">
                    <div className="py-[12px]">
                        <Link to={'/'}>
                            <IconButton id='iconBack' image={iconBack} style='w-[3vh] h-[3vh] max-w-[30px] max-h-[30px]'/>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center mb-12">
                    <h1 className={`text-center ${Size.EXTRALARGE} font-[sansation-regular]`}>Criar conta</h1>
                    <div className="w-[40%]">
                        <img src={logo1} alt="Logo" />
                    </div>
                </section>

                <section className="flex w-full overflow-auto scrollbar-none">
                    <form className="flex flex-col w-full">
                        <section className="flex w-full">
                            <div className="relative w-full space-y-7 mx-5">
                                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("text", "txtNombreR", "Nome e Sobrenome", faceIcon)}
                                    </div>
                                
                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("text", "txtApellidoR", "E-mail", faceIcon)}
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("number", "txtTelefonoR", "Telefone", phoneIcon)}
                                    </div>
                                
                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("date", "txtNascimentoR", "Data de nascimento", giftIcon)}
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("text", "txtUserR", "Usuário", userIcon)}
                                    </div>

                                    <div className="w-[100%] lg:w-[45%]">
                                        {Input2("password", "txtPasswordR", "Senha", passwordIcon)}
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                                    <div className="w-[100%] lg:w-[100%]">
                                        {Input2("password", "txtPasswordR", "Confirmar Senha", passwordIcon)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-center items-center w-full py-7 space-x-10">
                            <a href="" className="text-gray-700 text-2xl hover:bg-gray-200">❮</a> 
                            <a href="" className="text-gray-700 text-2xl hover:bg-gray-200">❯</a>
                        </div>

                        <div className="flex justify-center w-full mb-4">
                            <Button1 nombre='Criar conta' id='criarConta' type='submit' link='' color={CButton.MATE}/>
                        </div>
                    </form>
                </section>
            </div>
          </div>
        </>
    )
}

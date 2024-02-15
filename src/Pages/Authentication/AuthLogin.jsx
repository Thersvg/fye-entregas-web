import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, ErrorSpan, Section } from "./AuthLoginStyled";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "../../Schemas/loginSchema";
import { LoginContaEmpresa } from "../../services/EmpresaServices";
import Cookies from "js-cookie";
import { useState } from "react";
import logo from '../../images/empresa.png'

export function AuthenticateLogin(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(loginSchema)});

    const navigate = useNavigate();

    const [ErrorLogin, setErrorLogin] = useState('');
  
    async function inHandleSubmit(data){
        try{
            const response = await LoginContaEmpresa(data);
            Cookies.set("token", response.data, { secure: true, sameSite: 'Strict', expires: 1 });
            navigate("/");
            location.reload();
        }catch(error){           
            console.log(error);
            setErrorLogin(error.response.data);
        }
    }
     return(
        <AuthContainer>
            <Section type="Login">
                <img src={logo} alt="Entrar" />
                <form onSubmit={handleSubmit(inHandleSubmit)} >
                    <Input 
                        type= "email"
                        placeholder= "Email"
                        name= "email_empresa"   
                        register = {register}                          
                    />

                    {errors.email && (
                        <ErrorSpan>{errors.email.message}</ErrorSpan>
                    )}

                    <Input 
                        type= "password"
                        placeholder= "Password"
                        name= "password_empresa"   
                        register = {register}                          
                    />

                    {errors.password && (
                        <ErrorSpan>{errors.password.message}</ErrorSpan>
                    )}
                    <div>
                        <Link to="/cadastrar"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px' }} >Criar conta</Link>

                        <Button 
                            type= "submit"
                            text= "Entrar"
                        />
                    </div>
                    <footer>
                        <p>{ErrorLogin.message}</p>
                        <Link to="/recuperacao"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px' }} >Esqueci minha senha</Link>                       
                    </footer>
                </form>
            </Section>
        </AuthContainer>
     )
}
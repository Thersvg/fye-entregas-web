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
import logo from '../../images/logoazul.png';
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";
import { Helmet } from 'react-helmet';

export function AuthenticateLogin(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(loginSchema)});

    const navigate = useNavigate();

    const [ErrorLogin, setErrorLogin] = useState('');

    const [loading, setLoading] = useState(false);  
  
    async function inHandleSubmit(data){
        try{
            setLoading(true);
            const response = await LoginContaEmpresa(data);
            setLoading(false);
            Cookies.set("token", response.data, { secure: true, sameSite: 'Strict', expires: 1 });
            navigate("/");
            location.reload();
        }catch(error){   
            setLoading(false);        
            console.log(error);
            setErrorLogin(error.response.data);
        }

    }

     return(
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(
        <AuthContainer>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Entrar agora" />
                <meta name="keywords" content="Siteentregas, plataformaentregas, delivery, brasildelivery, empresadelivery, entregadordelivery" />
            </Helmet>
            <Section type="Login">
                <div style={{display: 'flex', justifyContent: 'center', alignContent:'center'}}>
                    <img src={logo} alt="Entrar" />
                </div>
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
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Link to="/cadastrar"  style={{color: '#000', fontWeight: '600', fontSize: '13px' }} >Cadastre-se</Link>

                        <Button 
                            type= "submit"
                            text= "Entrar"
                        />
                    </div>
                    <footer>
                        <div style={{width: '100%', height:'50%', justifyContent: 'center'}}>
                            <p>{ErrorLogin}</p>
                        </div>
                        <div style={{width: '100%', height:'50%', justifyContent: 'center'}}>
                            <Link to="/recuperacao"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '12px' }} >Esqueceu a senha?</Link>                       
                        </div>
                    </footer>
                </form>
            </Section>
        </AuthContainer>
        )}
        </>
     )
}
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, ErrorSpan, Section } from "./AuthLoginStyled";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "../../Schemas/loginSchema";
import { LoginContaEmpresa } from "../../services/EmpresaServices";
import Cookies from "js-cookie";

export function AuthenticateLogin(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(loginSchema)});

    const navigate = useNavigate();
    
    async function inHandleSubmit(data){
        try{
            const response = await LoginContaEmpresa(data);
            console.log(response.data);
            Cookies.set("token", response.data, { secure: true, sameSite: 'Strict', expires: 1 });
            navigate("/");
            console.log("Resultado do cookie:");
            console.log(Cookies.get("token"));
        }catch(error){
            console.log(error);
        }
    }

     return(
        <AuthContainer>
            <Section type="Login">
                <h2>Entrar</h2>
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

                    <Button 
                        type= "submit"
                        text= "Entrar"
                    />
                    <Link to="/cadastrar"  style={{textDecoration: 'none'}} >Criar conta</Link>
                </form>
            </Section>
        </AuthContainer>
     )
}
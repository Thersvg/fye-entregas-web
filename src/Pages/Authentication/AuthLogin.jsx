import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, ErrorSpan, Section } from "./AuthLoginStyled";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "../../Schemas/loginSchema";

export function AuthenticateLogin(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(loginSchema)});

    function inHandleSubmit(data){
        console.log(data)
    }

     return(
        <AuthContainer>
            <Section type="Login">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmit(inHandleSubmit)} >
                    <Input 
                        type= "email"
                        placeholder= "Email"
                        name= "email"   
                        register = {register}                          
                    />

                    {errors.email && (
                        <ErrorSpan>{errors.email.message}</ErrorSpan>
                    )}

                    <Input 
                        type= "password"
                        placeholder= "Password"
                        name= "password"   
                        register = {register}                          
                    />

                    {errors.password && (
                        <ErrorSpan>{errors.password.message}</ErrorSpan>
                    )}

                    <Button 
                        type= "submit"
                        text= "Entrar"
                    />
                    <Link to="/cadastrar" >Criar conta</Link>
                </form>
            </Section>
        </AuthContainer>
     )
}
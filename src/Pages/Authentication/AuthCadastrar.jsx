import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, ErrorSpan, Section } from "./AuthCadastrarStyled";
import { cadastrarSchema } from "../../Schemas/cadastrarSchema";
import { CriarContaEmpresa } from "../../services/EmpresaServices";
import Cookies from "js-cookie";
import { Link, useNavigate} from "react-router-dom";

export function AuthenticateCadastrar(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(cadastrarSchema)});

    const navigate = useNavigate();

    async function inHandleSubmit(data){
        console.log(data);
        try{
            const response = await CriarContaEmpresa(data);
            Cookies.set("token", response.data.token, {expires: 1});
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }

     return(
        <AuthContainer>
            <Section type="CadastrarEmpresa">
                <h2>CADASTRE-SE</h2>
                <form onSubmit={handleSubmit(inHandleSubmit)}>
                    <Input 
                        type= "text"
                        placeholder= "Nome da sua empresa*"
                        name= "name_empresa" 
                        register = {register}                              
                    />
                    {errors.name_empresa && (
                        <ErrorSpan>{errors.name_empresa.message}</ErrorSpan>
                    )}
                    <Input 
                        type= "text"
                        placeholder= "CNPJ/CPF*"
                        name= "cnpj_empresa" 
                        register = {register}                              
                    />
                    {errors.cnpj_empresa && (
                        <ErrorSpan>{errors.cnpj_empresa.message}</ErrorSpan>
                    )}
                    <Input 
                        type= "email"
                        placeholder= "Email*"
                        name= "email_empresa"   
                        register = {register}                            
                    />
                    {errors.email_empresa && (
                        <ErrorSpan>{errors.email_empresa.message}</ErrorSpan>
                    )}  
                    <Input 
                        type= "text"
                        placeholder= "Telefone*"
                        name= "telefone_empresa" 
                        register = {register}                                                      
                    />
                    {errors.telefone_empresa && (
                        <ErrorSpan>{errors.telefone_empresa.message}</ErrorSpan>
                    )} 
                    <Input 
                        type= "password"
                        placeholder= "Password*"
                        name= "password_empresa"       
                        register = {register}                        
                    />
                    {errors.password_empresa && (
                        <ErrorSpan>{errors.password_empresa.message}</ErrorSpan>
                    )}
                     <Input 
                        type= "text"
                        placeholder= "Cidade*"
                        name= "cidade_empresa"       
                        register = {register}                  
                    />
                    {errors.cidade_empresa && (
                        <ErrorSpan>{errors.cidade_empresa.message}</ErrorSpan>
                    )}  
                    <div>
                    <Link to="/login"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px'  }} >Voltar</Link>
                    <Button 
                        type= "submit"
                        text= "Criar"
                    />
                    </div>               
                </form>
            </Section>
        </AuthContainer>
     )
}
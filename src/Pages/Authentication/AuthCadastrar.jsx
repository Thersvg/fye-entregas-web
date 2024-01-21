import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, ErrorSpan, Section } from "./AuthCadastrarStyled";
import { cadastrarSchema } from "../../Schemas/cadastrarSchema";

export function AuthenticateCadastrar(){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(cadastrarSchema)});

    function inHandleSubmit(data){
        console.log(data)
    }


     return(
        <AuthContainer>
            <Section type="CadastrarEmpresa">
                <h2>Cadastrar Empresa</h2>
                <form onSubmit={handleSubmit(inHandleSubmit)}>
                    <Input 
                        type= "text"
                        placeholder= "Empresa"
                        name= "empresa" 
                        register = {register}                              
                    />
                    {errors.nome && (
                        <ErrorSpan>{errors.nome.message}</ErrorSpan>
                    )}
                    <Input 
                        type= "text"
                        placeholder= "CNPJ/CPF"
                        name= "cnpj" 
                        register = {register}                              
                    />
                    {errors.cnpj && (
                        <ErrorSpan>{errors.cnpj.message}</ErrorSpan>
                    )}
                    <Input 
                        type= "text"
                        placeholder= "Endereço"
                        name= "endereço" 
                        register = {register}                              
                    />
                    {errors.endereco && (
                        <ErrorSpan>{errors.endereco.message}</ErrorSpan>
                    )}                    
                    <Input 
                        type= "text"
                        placeholder= "Telefone"
                        name= "telefone" 
                        register = {register}                                                      
                    />
                    {errors.telefone && (
                        <ErrorSpan>{errors.telefone.message}</ErrorSpan>
                    )}                    
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
                    <Input 
                        type= "text"
                        placeholder= "Valor da taxa de entrega"
                        name= "taxaentrega"  
                        register = {register}                             
                    />
                    {errors.taxaentrega && (
                        <ErrorSpan>{errors.taxaentrega.message}</ErrorSpan>
                    )}                    
                    <Button 
                        type= "submit"
                        text= "Criar Conta"
                    />
                </form>
            </Section>
        </AuthContainer>
     )
}
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { useState } from "react";
import { UpdatePasswordService } from "../../services/EmpresaServices";
import Cookies from "js-cookie";

export function NewPasswordClient(){

    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState({});  

    const [ResultCreatePassword, setResultCreatePassword] = useState('');

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        const body = {
            password_empresa: dadosFormulario.password,
            email_empresa: Cookies.get('T5Xk8tWKeVpNDP1', { signed: true })
        }

        try{
        const response =  await UpdatePasswordService(body);
        Cookies.remove('rY6660v28hf87h3')
        Cookies.remove('T5Xk8tWKeVpNDP1')
        navigate("/login");
        }catch(error){
            setResultCreatePassword(error.response.data);
        }
    }

    return(
        <AuthContainerEmail>
        <SectionEmail type="verify">
            <h1>Nova Senha</h1>
            <form onSubmit={handleSubmit} >
                <InputEmail
                    type= "password"
                    placeholder= "Nova senha"
                    name= "password" 
                    onChange={handleChange}                        
                />
                <div>
                <Link to="/login"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px' }} >Voltar</Link>
                    <Button 
                        type= "submit"
                        text= "Criar"
                    />
                </div>
                <footer>
                    <p>{ResultCreatePassword.message}</p>
                </footer>
            </form>
        </SectionEmail>
        </AuthContainerEmail>
    )
}
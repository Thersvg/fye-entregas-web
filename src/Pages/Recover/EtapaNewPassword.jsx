import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { useState } from "react";
import { UpdatePasswordService } from "../../services/EmpresaServices";
import Cookies from "js-cookie";
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";


export function NewPasswordClient(){

    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState({});  

    const [ResultCreatePassword, setResultCreatePassword] = useState('');

    const [loading, setLoading] = useState(false); 

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
        setLoading(true);
        const response =  await UpdatePasswordService(body);
        Cookies.remove('rY6660v28hf87h3')
        Cookies.remove('T5Xk8tWKeVpNDP1')
        setLoading(false);
        navigate("/login");
        }catch(error){
            setLoading(false);
            alert("Erro");
            setResultCreatePassword(error.response.data);
        }
    }

    return(
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(
        <AuthContainerEmail>
        <SectionEmail type="verify">
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
        )}
        </>
    )
}
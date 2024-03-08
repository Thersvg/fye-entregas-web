import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { Link, useNavigate } from "react-router-dom";
import { ExpireCode, SendClientEmail } from "../../services/EmpresaServices";
import Cookies from "js-cookie";
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

export function GetEmailClient(){

const navigate = useNavigate();

const [dadosFormulario, setDadosFormulario] = useState({});  

const [ResultSendEmail, setResultSendEmail] = useState('');

const [loading, setLoading] = useState(false); 

const handleChange = (event) =>{
    const { name, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
}

const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
        setLoading(true);
        const response = await SendClientEmail(dadosFormulario);
        const responsecode =  await ExpireCode();
        Cookies.set("rY6660v28hf87h3", response.data, { secure: true, sameSite: 'Strict', expires: responsecode });
        Cookies.set("T5Xk8tWKeVpNDP1", dadosFormulario.email_empresa, { secure: true, sameSite: 'Strict', expires: responsecode });
        setLoading(false);
        navigate("/verificacao");
        location.reload();

    }catch(error){
        setLoading(false);
        console.log(error);
        setResultSendEmail(error.response.data);
    }
}

    return(
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(
        <AuthContainerEmail>
            <SectionEmail type="recover">
                <form onSubmit={handleSubmit} >
                    <InputEmail
                        type= "email"
                        placeholder= "Email"
                        name= "email_empresa" 
                        onChange={handleChange}                          
                    />
                    <div>
                    <Link to="/login"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px' }} >Voltar</Link>
                        <Button 
                            type= "submit"
                            text= "Enviar"
                        />
                    </div>
                    <footer>
                        <p>{ResultSendEmail.message}</p>
                    </footer>
                </form>
            </SectionEmail>
        </AuthContainerEmail>
        )}
        </>
    )
}
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { Button } from "../../components/Button/Button";
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

export function VerifyCodeClient(){

    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState({});  

    const [ResultVerifyCode, setResultVerifyCode] = useState('');

    const [loading, setLoading] = useState(false); 

    const [EmailClient, setEmailClient] = useState(Cookies.get('T5Xk8tWKeVpNDP1', { signed: true }));

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            setLoading(true);
            const code = Cookies.get('rY6660v28hf87h3', { signed: true })
            if(dadosFormulario.codigo == code){
                setLoading(false);
                navigate("/newpassword");

            }else{
                setResultVerifyCode('Codigo inválido');
            }
        }catch(error){
            setLoading(false);
            alert("Erro");
            setResultVerifyCode(error.response.data);
        }
    }

    return(
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(
        <AuthContainerEmail>
        <SectionEmail type="verify">
            <p>Enviamos um código para: <b>{EmailClient}.</b> Atenção o código expira em <b>10 minutos.</b></p>
            <form onSubmit={handleSubmit} >
                <InputEmail
                    type= "text"
                    placeholder= "Código"
                    name= "codigo" 
                    onChange={handleChange}                          
                />
                <div>
                <Link to="/recuperacao"  style={{textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '14px' }} >Voltar</Link>
                    <Button 
                        type= "submit"
                        text= "Enviar"
                    />
                </div>
                <footer>
                    <p>{ResultVerifyCode}</p>
                </footer>
            </form>
        </SectionEmail>
    </AuthContainerEmail>
    )}
    </>
    )
}
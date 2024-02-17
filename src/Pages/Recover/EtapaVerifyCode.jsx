import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { Button } from "../../components/Button/Button";

export function VerifyCodeClient(){

    const navigate = useNavigate();

    const [dadosFormulario, setDadosFormulario] = useState({});  

    const [ResultVerifyCode, setResultVerifyCode] = useState('');

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const code = Cookies.get('rY6660v28hf87h3', { signed: true })

            if(dadosFormulario.codigo == code){
                navigate("/newpassword");
                location.reload(); 
            }else{
                setResultVerifyCode('Codigo inválido');
            }
        }catch(error){
            setResultVerifyCode(error.response.data);
        }
    }

    return(
        <AuthContainerEmail>
        <SectionEmail type="verify">
            <h1>Digite seu codigo</h1>
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
    )
}
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { AuthContainerEmail, InputEmail, SectionEmail } from "./EtapaEmailStyled";
import { Link } from "react-router-dom";
import { SendClientEmail } from "../../services/EmpresaServices";

export function GetEmailClient(){

const [dadosFormulario, setDadosFormulario] = useState({});  

const handleChange = (event) =>{
    const { name, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
}

const handleSubmit = async (event) =>{
    event.preventDefault();
    const response = await SendClientEmail(dadosFormulario);
    console.log(response);
}


    return(
        <AuthContainerEmail>
            <SectionEmail type="recover">
                <h1>Recuperação</h1>
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
                </form>
            </SectionEmail>
        </AuthContainerEmail>
    )
}
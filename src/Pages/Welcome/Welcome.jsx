import { useNavigate } from "react-router-dom";
import { Container, ContainerContent, EntryTop } from "./welcomeStyled";
import Button from '@mui/material/Button';
import imgbackground from '../../images/city.jpg'

export function Welcome(){

    const navigate = useNavigate();
    return(
        <>
            <Container>
                <div style={{width: '100%', height: '100%'}}>
                    <img style={{width: 'auto', height: 'auto'}} src={''} alt="" />
                </div>
            <EntryTop>
                <div style={{width: '98%', display: 'flex' ,justifyContent: 'flex-end'}}>
                    <div>
                        <Button sx={{color: "#fff", fontWeight: 800 ,border: 'none',backgroundColor: '#transparent', ":hover": {border: 'none',backgroundColor:'#fff', color: '#03bb85'}}} onClick={() => navigate('/login')} variant="outlined">Entrar</Button>
                    </div>
                </div>
            </EntryTop>
                <ContainerContent> 
                    <div style={{gap: 15,borderRadius: '2%',backgroundColor:'#03bb85',width: '40%', height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <h1 style={{fontSize: 60, color: '#fff'}}>Seja bem vindo!</h1>
                        <p style={{color: '#fff'}}>Várias pessoas mudando de vida, mude a sua agora mesmo.</p>
                        <div>
                        <Button sx={{width: '100%',color: "#fff", fontWeight: 800, borderColor: '#fff',backgroundColor: '#transparent', ":hover": {border: 'none',backgroundColor:'#fff', color: '#03bb85'}}} onClick={() => navigate('/login')} variant="outlined">Cadastrar-se</Button> 
                        </div>
                    </div>
                </ContainerContent>
            </Container>
        </>
    )
}
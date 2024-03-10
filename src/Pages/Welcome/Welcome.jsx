import { useNavigate } from "react-router-dom";
import { Container, ContainerContent, EntryTop, SubscribeContainer } from "./welcomeStyled";
import Button from '@mui/material/Button';
import imgbackground from '../../images/city.jpg'

export function Welcome(){

    const navigate = useNavigate();
    return(
        <>
            <Container>
            <EntryTop>
                <div style={{width: '98%', display: 'flex' ,justifyContent: 'flex-end'}}>
                    <div>
                        <Button sx={{color: "#fff", fontWeight: 800 ,border: 'none',backgroundColor: '#transparent', ":hover": {border: 'none',backgroundColor:'#fff', color: '#03bb85'}}} onClick={() => navigate('/login')} variant="outlined">Entrar</Button>
                    </div>
                </div>
            </EntryTop>
                <ContainerContent> 
                    <SubscribeContainer>
                        <div>
                            <h1 style={{fontSize: 60, color: '#fff'}}>Seja bem vindo!</h1>
                        </div>
                        <div>
                            <p style={{color: '#fff'}}>Várias pessoas mudando de vida, mude a sua agora mesmo.</p>
                        </div>
                        <div>
                            <Button sx={{width: '100%',color: "#fff", fontWeight: 800, borderColor: '#fff',backgroundColor: '#transparent', ":hover": {border: 'none',backgroundColor:'#fff', color: '#03bb85'}}} onClick={() => navigate('/cadastrar')} variant="outlined">Cadastrar-se</Button> 
                        </div>
                    </SubscribeContainer>
                </ContainerContent>
            </Container>
        </>
    )
}
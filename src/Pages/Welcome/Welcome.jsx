import { Link, useNavigate } from "react-router-dom";
import { Container, ContainerContent, EntryTop, SubscribeContainer } from "./welcomeStyled";
import { Helmet } from 'react-helmet';
import Button from '@mui/material/Button';
import logo from '../../images/empresa.png'


export function Welcome(){

    const navigate = useNavigate();
    return(
        <>
            <Helmet>
                <title>Bem vindo</title>
                <meta name="description" content="Faça parte da maior e mais fácil plataforma de entregas para Deliverys do Brasil" />
                <meta name="keywords" content="Siteentregas, plataformaentregas, delivery, brasildelivery, empresadelivery, entregadordelivery" />
            </Helmet>
            <Container>
            <EntryTop>
                <div style={{width: '98%', height: '40px'}}>
                    <div style={{width: '100%', height: '100%',display: 'flex' ,justifyContent: 'space-between'}}>
                        <Link to={"/welcome"}>
                            <img style={{width: '100px', height: '100%'}} src={logo} alt="logo-for-you-entregas" />
                        </Link> 
                        <Button sx={{color: "#fff", fontWeight: 800 ,border: 'none',backgroundColor: '#transparent', ":hover": {border: 'none',backgroundColor:'#fff', color: '#03bb85'}}} onClick={() => navigate('/login')} variant="outlined">Entrar</Button>
                    </div>
                </div>
            </EntryTop>
                <ContainerContent> 
                    <SubscribeContainer>
                        <div>
                            <h1>Bem vindo</h1>
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
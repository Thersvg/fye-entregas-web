import { useNavigate } from "react-router-dom";
import { Container, ContainerContent, EntryTop } from "./welcomeStyled";
import Button from '@mui/material/Button';

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
                </ContainerContent>
            </Container>
        </>
    )
}
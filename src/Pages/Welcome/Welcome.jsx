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
                        <Button sx={{backgroundColor: '#03bb85', ":hover": {backgroundColor:'#04b3ba'}}} onClick={() => navigate('/login')} variant="contained">Entrar</Button>
                    </div>
                </div>
            </EntryTop>
                <ContainerContent>
                    
                </ContainerContent>
            </Container>
        </>
    )
}
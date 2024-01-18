import logo from '../../images/foryou.png'
import Logoempresa from '../../images/HIRENA.png'
import { ContainerNav, Nav, ImageLogo, ImagePerfilUser } from './NavbarStyled'

export default function Navbar(){
    return(
        <>
            <Nav> 
                <ContainerNav>
                    <ImageLogo src={logo} alt="logo-for-you-entregas" />
                    <ImagePerfilUser src={Logoempresa} alt="perfil-usuário" />
                </ContainerNav>
            </Nav>
        </>
    )
}

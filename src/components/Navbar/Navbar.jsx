import { Link, Outlet } from 'react-router-dom'
import logo from '../../images/foryou.png'
import Logoempresa from '../../images/HIRENA.png'
import IconLocation from "../../images/local.png"
import { ContainerNav, Nav, ImageLogo, ImagePerfilUser, BoasVindasLocalizacao} from './NavbarStyled'

export default function Navbar(){
    return(
        <>
            <Nav> 
                <ContainerNav>
                    <Link to={"/"}>
                        <ImageLogo src={logo} alt="logo-for-you-entregas" />
                    </Link>
                    
                    <div>
                        <div>
                            <BoasVindasLocalizacao>
                            <p>Olá, Dona Hirena</p>
                            <div>
                                <img src={IconLocation} alt="Localização" />
                                <p>Pontes e Lacerda MT</p>
                            </div>
                            </BoasVindasLocalizacao>
                        <Link to={"/Profile"}>
                            <ImagePerfilUser src={Logoempresa} alt="perfil-usuário" />
                        </Link>
                        </div>
                    </div>
                </ContainerNav>
            </Nav>
            <Outlet />
        </>
    )
}

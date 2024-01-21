import { Link, Outlet } from 'react-router-dom'
import logo from '../../images/foryou.png'
import Logoempresa from '../../images/HIRENA.png'
import IconLocation from "../../images/local.png"
import { ContainerNav, Nav, ImageLogo, ImagePerfilUser, BoasVindasLocalizacao} from './NavbarStyled'
import { EmpresaLogged } from '../../services/EmpresaServices'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Navbar(){

    const [empresa, setEmpresa] = useState({});

    async function findEmpresaLogged(){
        try{
            const response =  await EmpresaLogged();
            setEmpresa(response.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
       if (Cookies.get("token")) findEmpresaLogged();
    }, [])

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
                            <p>Olá, {empresa.name_empresa}</p>
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

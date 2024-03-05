import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../images/empresa.png'
import logoexit from "../../images/exit.png"
import { ContainerNav, Nav, ImageLogo, ImagePerfilUser, Exit, ProfileLogoEmpresa} from './NavbarStyled'
import { EmpresaLogged } from '../../services/EmpresaServices'
import { useContext, useEffect} from 'react'
import Cookies from 'js-cookie'
import { EmpresaContext } from '../../Context/EmpresaContext'

export default function Navbar(){

    const {empresa, setEmpresa} = useContext(EmpresaContext);

    async function findEmpresaLogged(){
        try{
            const response =  await EmpresaLogged();
            setEmpresa(response.data);
        }catch(error){
            console.log(error);
        }
    }

    const navigate = useNavigate();

    function exit(){
        Cookies.remove("token");
        setEmpresa(undefined);
        navigate("/login");
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
                            <ProfileLogoEmpresa>
                                <Link to={"/Profile"}>
                                    <ImagePerfilUser src={empresa?.logo_empresa} alt="perfil" />
                                </Link>
                            </ProfileLogoEmpresa>                       
                            <Exit>
                                <img src={logoexit} alt="sair" onClick={exit}/>
                            </Exit>
                        </div>
                    </div>
                </ContainerNav>
            </Nav>
            <Outlet />
        </>
    )
}

import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../images/foryou.png'
import Logoempresa from '../../images/HIRENA.png'
import logoexit from "../../images/exit.png"
import IconLocation from "../../images/local.png"
import { ContainerNav, Nav, ImageLogo, ImagePerfilUser, BoasVindasLocalizacao, ProfileLogoSair, Exit} from './NavbarStyled'
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
                            {empresa ? (
                                <BoasVindasLocalizacao>
                                <p>Olá, {empresa.name_empresa}</p>
                                <div>
                                    <img src={IconLocation} alt="Localização" />
                                    <p>Pontes e Lacerda MT</p>
                                </div>
                                </BoasVindasLocalizacao>                                
                            ) : (
                                <BoasVindasLocalizacao>
                                <p>Olá</p>
                                <div>
                                    <img src={IconLocation} alt="Localização" />
                                    <p>Pontes e Lacerda MT</p>
                                </div>
                                </BoasVindasLocalizacao>   
                            )}

                        <ProfileLogoSair>
                            <Link to={"/Profile"}>
                                <ImagePerfilUser src={Logoempresa} alt="perfil-usuário" />
                            </Link>
                        </ProfileLogoSair>
                        </div>
                        <Exit>
                            <img src={logoexit} alt="sair" onClick={exit}/>
                        </Exit>
                    </div>
                </ContainerNav>
            </Nav>
            <Outlet />
        </>
    )
}

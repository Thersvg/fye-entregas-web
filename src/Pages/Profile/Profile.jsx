import { useContext } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";
import { AllPedidosEntregues, ContainerProfile, DadosEmpresaProfile, DadosHistoricoPedidosProfile, DadosPessoais, PictureLogo} from "./ProfileStyled";
import Logoempresa from '../../images/user.jpg'
import iconupload from '../../images/upload.png'

export function Profile(){
    const {empresa} = useContext(EmpresaContext);
    return (
        <>
            <ContainerProfile>

                <DadosEmpresaProfile>
                    <PictureLogo>
                        <img src={Logoempresa} alt="logo" />
                    </PictureLogo>
                    <DadosPessoais>
                            <div>
                                <label htmlFor="">EMPRESA:</label>
                                <p>{empresa.name_empresa}</p>
                                <label htmlFor="">CNPJ/CPF:</label>
                                <p>{empresa.cnpj_empresa}</p>
                                <label htmlFor="">EMAIL:</label>
                                <p>{empresa.email_empresa}</p>
                            </div>
                            <div>
                                <label htmlFor="">TELEFONE:</label>
                                <p>{empresa.telefone_empresa}</p>
                                <label htmlFor="">ENDEREÇO:</label>
                                <p>{empresa.endereco_empresa}</p>
                                <label htmlFor="">TAXA DE ENTREGA:</label>
                                <p>{empresa.taxa_entrega_empresa}</p>
                            </div>
                    </DadosPessoais>
                </DadosEmpresaProfile>

                <DadosHistoricoPedidosProfile>
                    <AllPedidosEntregues>
                        <div>
                            <h4>uuu</h4>
                        </div>
                    </AllPedidosEntregues>
                </DadosHistoricoPedidosProfile>

            </ContainerProfile>
        </>
    )
}
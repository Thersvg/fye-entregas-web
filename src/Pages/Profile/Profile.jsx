import { useContext, useEffect, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";
import { AltDados, ContainerProfile, DadosEmpresaProfile, DadosPessoais, MsgRetorno, PictureLogo, ProfileAllPedidosEntregues, Suporte} from "./ProfileStyled";
import Logoempresa from '../../images/user.png'
import { FindPedidosHistorico } from "../../services/PedidosServices";
import { HistoricoPedidos } from "../../components/HistoricoPedidos/HistoricoPedidos";
import { CardHistorico } from "../../components/HistoricoPedidos/HistoricoPedidosStyled";
import LogoModificar from '../../images/modified.png'
import HandleModalProfile from "../../components/ModalProfile/UpdateDadosProfile";
import CustomSkeletonProfile from "../../components/ProfileSkeleton/ProfileSkeleton";
import { Link } from "react-router-dom";

export function Profile(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [loading, setLoading] = useState(true);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const {empresa} = useContext(EmpresaContext);

    console.log(empresa);
    const [pedidosHistorico, setPedidosHistorico] = useState([]);

    async function FindAllPedidosHistorico(){
        const response = await FindPedidosHistorico(empresa._id);
        setPedidosHistorico(response.data);

    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            FindAllPedidosHistorico();
            setLoading(false);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [])


    return (
        <>
            {loading ? (
                <CustomSkeletonProfile />
            ):(
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
                            <AltDados>
                                <div>
                                    <button onClick={openModal}><img src={LogoModificar} alt="Alterar" /></button>
                                </div>                          
                                <HandleModalProfile isOpen={isModalOpen} onClose={closeModal}>
                                </HandleModalProfile>
                            </AltDados>
                            <Suporte>
                                <Link to={""} style={{ fontSize: 14, fontWeight: 800, color: 'inherit', textDecoration: 'none'}}>Cancelar minha assinatura</Link>
                            </Suporte> 
                    </DadosEmpresaProfile>
                <ProfileAllPedidosEntregues>
                {pedidosHistorico.length > 0 ? (
                        <CardHistorico>
                                        {pedidosHistorico.map((item) => 
                                            <HistoricoPedidos
                                                key={item.id} 
                                                id={item._id} 
                                                codigo = {item.detalhes_pedido.codigo_pedido}
                                                name = {item.detalhes_pedido.name_cliente}
                                                valor = {item.detalhes_pedido.valor_pedido}
                                                endereco = {item.detalhes_pedido.endereco_cliente}
                                                telefone  = {item.detalhes_pedido.telefone_cliente}
                                                descricao  = {item.detalhes_pedido.descricao_pedido}
                                                forma_p  = {item.detalhes_pedido.forma_pagamento}
                                                taxa_ent = {item.detalhes_pedido.taxa_entrega}
                                                name_emp = {item.name_empresa}
                                                entregador_name = {item.name_entregador}
                                                entregador_cpf = {item.name_entregador?.cpf_entregador}
                                                entregador_telefone = {item.name_entregador?.telefone_entregador}
                                                form_pagamento_entr = {item.name_entregador?.formaDepagamento_entregador}
                                            /> 
                                        )} 
                        </CardHistorico> 

                ):(
                  <MsgRetorno>
                    <p>Nenhuma entrega concluida.</p>
                  </MsgRetorno>
                )}
                </ProfileAllPedidosEntregues>
            </ContainerProfile>
            )}
        </>
    )
}

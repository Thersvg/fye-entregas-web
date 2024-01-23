import { useContext, useEffect, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";
import { ContainerProfile, DadosEmpresaProfile, DadosPessoais, PictureLogo, ProfileAllPedidosEntregues, ProfileDadosHistoricoPedidosProfile} from "./ProfileStyled";
import Logoempresa from '../../images/user.jpg'
import { FindPedidosHistorico } from "../../services/PedidosServices";
import { HistoricoPedidos } from "../../components/HistoricoPedidos/HistoricoPedidos";

export function Profile(){

    const {empresa} = useContext(EmpresaContext);

    const [pedidosHistorico, setPedidosHistorico] = useState([]);

    async function FindAllPedidosHistorico(){
        console.log(empresa._id);
        const response = await FindPedidosHistorico(empresa._id);
        setPedidosHistorico(response.data);
        console.log(response);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            FindAllPedidosHistorico();
        }, 4000);
        return () => clearInterval(intervalId);
    }, [])


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

                <ProfileDadosHistoricoPedidosProfile>
                    <ProfileAllPedidosEntregues>
                        <div>
                            <>
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
                                entregador_cpf = {item.name_entregador}
                                entregador_email = {item.name_entregador}
                                form_pagamento_entr = {item.name_entregador}
                                /> 
                                )} 
                            </>
                        </div> 
                    </ProfileAllPedidosEntregues>
                </ProfileDadosHistoricoPedidosProfile>

            </ContainerProfile>
        </>
    )
}
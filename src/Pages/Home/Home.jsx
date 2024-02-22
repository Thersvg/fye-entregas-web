import { EmpresaContext } from "../../Context/EmpresaContext";
import Footer from "../../components/Footer/Footer";
import { PedidosAceitos } from "../../components/PedidosAceitos/PedidosAceitos";
import { PedidosPendente } from "../../components/PedidosPendentes/PedidosPendente";
import { GetAllPedidos, GetAllPedidosAceitos } from "../../services/PedidosServices";
import { HomeBody, HomePedidosAceitos, HomePedidosPendentes, MsgRetorno} from "./HomeStyled";
import { useContext, useEffect, useId, useState } from "react";
import NotificationSound from "../../Sounds/notification.mp3";
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

export default function Home(){

    const {empresa} = useContext(EmpresaContext);

    const [loading, setLoading] = useState(true);

    const [pedidos, setPedidos] = useState([]);

    async function findAllPedidos(){
        const response = await GetAllPedidos();
        setPedidos(response.data);
    }

    const [pedidosAceitos, setPedidosAceitos] = useState([]);

    const [tamanhoAnterior, setTamanhoAnterior] = useState(0);

    const notificationAudio = new Audio(NotificationSound);


    async function FindAllPedidosAceitos(){
        const response = await GetAllPedidosAceitos(empresa._id);
        setPedidosAceitos(response.data);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
        findAllPedidos();
        FindAllPedidosAceitos();
        setLoading(false);
        }, 4000);
        return () => {
        clearInterval(intervalId);
        };
    }, [])


    useEffect(() => {
        const verificarPedidosEEnviarNotificacao = async () => {
            const tamanhoAtual = pedidosAceitos.length;
            if (tamanhoAtual > 0 && tamanhoAtual > tamanhoAnterior) {
                notificationAudio.play();
            }
            setTamanhoAnterior(tamanhoAtual);
        };

        verificarPedidosEEnviarNotificacao();
    }, [pedidosAceitos, tamanhoAnterior]);

 
    return (
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(        
        <HomeBody>
            {pedidos.length > 0 ? (
                <HomePedidosPendentes>
                    <div>
                        <>
                        {pedidos.map((item, index) => 
                            <PedidosPendente 
                                key={index} 
                                id={item._id} 
                                codigo = {item.codigo_pedido}
                                name = {item.name_cliente}
                                valor = {item.valor_pedido}
                                endereco = {item.endereco_cliente}
                                telefone  = {item.telefone_cliente}
                                descricao  = {item.descricao_pedido}
                                forma_p  = {item.forma_pagamento}
                                taxa_ent = {item.taxa_entrega}
                                nome_empresa = {item.name_empresa.name_empresa}
                                endereco_empresa = {item.name_empresa.endereco_empresa}
                                telefone_empresa = {item.name_empresa.telefone_empresa}
                             /> 
                            )}
                        </>
                    </div>
                </HomePedidosPendentes>

            ):(
             <MsgRetorno>
                <p>Nenhuma entrega criada.</p>
             </MsgRetorno> 
            )}
            {pedidosAceitos.length > 0 ? (            
                  <HomePedidosAceitos>
                        <div>
                            <>
                            {pedidosAceitos.map((item, index) => 
                                <PedidosAceitos 
                                key={index} 
                                id={item._id} 
                                codigo = {item.detalhes_pedido.codigo_pedido}
                                name = {item.detalhes_pedido.name_cliente}
                                valor = {item.detalhes_pedido.valor_pedido}
                                endereco = {item.detalhes_pedido.endereco_cliente}
                                telefone  = {item.detalhes_pedido.telefone_cliente}
                                descricao  = {item.detalhes_pedido.descricao_pedido}
                                forma_p  = {item.detalhes_pedido.forma_pagamento}
                                taxa_ent = {item.detalhes_pedido.taxa_entrega}
                                entregador_name = {item.name_entregador?.name_entregador}
                                entregador_cpf = {item.name_entregador?.cpf_entregador}
                                entregador_telefone = {item.name_entregador?.telefone_entregador}
                                form_pagamento_entr = {item.name_entregador?.formaDepagamento_entregador}
                                
                                /> 
                            )}
                            </>
                        </div> 
                        </HomePedidosAceitos>
            ):(
                <MsgRetorno>
                    <p>Nenhuma entrega foi aceita.</p>
                </MsgRetorno>
            )}
        </HomeBody>
        )}
        <Footer />
        </>
    );
}
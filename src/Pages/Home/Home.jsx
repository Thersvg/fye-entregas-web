import { EmpresaContext } from "../../Context/EmpresaContext";
import Footer from "../../components/Footer/Footer";
import { PedidosPendente } from "../../components/PedidosPendentes/PedidosPendente";
import { GetAllPedidos, GetAllPedidosAceitos } from "../../services/PedidosServices";
import { HomeBody, HomePedidosAceitos, HomePedidosPendentes} from "./HomeStyled";
import { useContext, useEffect, useState } from "react";


export default function Home(){

    const {empresa} = useContext(EmpresaContext);

    const [pedidos, setPedidos] = useState([]);
    async function findAllPedidos(){
        const response = await GetAllPedidos();
        setPedidos(response.data);
    }

    const [pedidosAceitos, setPedidosAceitos] = useState([]);
    async function FindAllPedidosAceitos(){

        console.log(empresa._id);
        const response = await GetAllPedidosAceitos(empresa._id);
        setPedidosAceitos(response);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
        findAllPedidos();
        FindAllPedidosAceitos();
        }, 2000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
        <HomeBody>
            <HomePedidosPendentes>
                <div>
                    <>
                    {pedidos.map((item) => 
                    <PedidosPendente 
                    key={item.id} 
                    id={item._id} 
                    codigo = {item.codigo_pedido}
                    name = {item.name_cliente}
                    valor = {item.valor_pedido}
                    endereco = {item.endereco_cliente}
                    telefone  = {item.telefone_cliente}
                    descricao  = {item.descricao_pedido}
                    forma_p  = {item.forma_pagamento}
                    taxa_ent = {item.taxa_entrega}
                    name_emp = {item.name_empresa}
                    /> 
                    )}
                    </>
                </div>
            </HomePedidosPendentes>
            <HomePedidosAceitos>
                <div>
                    <>
                    {pedidosAceitos.map((item) => 
                    <PedidosPendente 
                    key={item.id} 
                    id={item._id} 
                    codigo = {item.codigo_pedido}
                    name = {item.name_cliente}
                    valor = {item.valor_pedido}
                    endereco = {item.endereco_cliente}
                    telefone  = {item.telefone_cliente}
                    descricao  = {item.descricao_pedido}
                    forma_p  = {item.forma_pagamento}
                    taxa_ent = {item.taxa_entrega}
                    name_emp = {item.name_empresa}
                    entregador_name = {item.name_entregador.name_entregador}
                    entregador_cpf = {item.name_entregador.cpf_entregador}
                    entregador_email = {item.name_entregador.email_entregador}
                    form_pagamento_entr = {item.name_entregador.formaDepagamento_entregador}
                    /> 
                    )}
                    </>
                </div>
            </HomePedidosAceitos>
        </HomeBody>
        <Footer />
        </>
    );
}
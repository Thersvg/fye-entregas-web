import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { PedidosPendente } from "../../components/PedidosPendentes/PedidosPendente";
import { GetAllPedidos } from "../../services/PedidosServices";
import { HomeBody, HomePedidosAceitos, HomePedidosPendentes} from "./HomeStyled";
import { useEffect, useState } from "react";


export default function Home(){
    const [pedidos, setNews] = useState([]);

    async function findAllPedidos(){
        const response = await GetAllPedidos();
        setNews(response.data.pedidos);
    }

    useEffect(() => {
        findAllPedidos();
    }, [])

    return (
        <>
        <Navbar />
        <HomeBody>
            <HomePedidosPendentes>
                <div>
                    <>
                    {pedidos.map((item) => 
                    <PedidosPendente 
                    key={item.id} 
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
                    {pedidos.map((item) => 
                    <PedidosPendente 
                    key={item.id} 
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
            </HomePedidosAceitos>
        </HomeBody>
        <Footer />
        </>
    );
}
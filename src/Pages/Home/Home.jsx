import Navbar from "../../components/Navbar/Navbar";
import { PedidosPendente } from "../../components/PedidosPendentes/PedidosPendente";
import { pedido } from "../../Data"

export default function Home(){
    return (
        <>
        <Navbar />
        {pedido.map((item,index) => <PedidosPendente key={index} pedido={item}/> 
        )}
        </>
    );
}
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { PedidosPendente } from "../../components/PedidosPendentes/PedidosPendente";
import { pedido } from "../../Data"
import { HomeBody, HomePedidosAceitos, HomePedidosPendentes } from "./HomeStyled";

export default function Home(){
    return (
        <>
        <Navbar />
        <HomeBody>
            <HomePedidosPendentes>
                <>
                {pedido.map((item,index) => <PedidosPendente key={index} pedido={item}/> 
                )}
                </>
            </HomePedidosPendentes>
            <HomePedidosAceitos>
            </HomePedidosAceitos>
        </HomeBody>
        <Footer />
        </>
    );
}
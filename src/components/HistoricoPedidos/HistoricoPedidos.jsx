import { useState } from "react";
import { ContainerCard, ContainerTop, DivBody, FooterCard, HeaderCard, RodapeCard } from "./HistoricoPedidosStyled";
import PropTypes from 'prop-types'; 
import { PedidoFinalizadoFunc } from "../../services/PedidosServices";
import LogoCheck from '../../images/route.png';
import LogoCode from '../../images/ticket.png';
import LogoUser from '../../images/circle-user.png';
import LogoTelefone from '../../images/circle-phone.png';
import LogoEndereco from '../../images/marker.png';
import LogoOrder from '../../images/box-circle-check.png';
import LogoPay from '../../images/moneypay.png';
import LogoMotobike from '../../images/moped.png';
import LogoOrderExit from '../../images/expense.png';
import LogoDeliveryman from '../../images/biking-mountain.png';
import LogoDeliverymancpf from '../../images/id-card-clip-alt.png';
import LogoDeliverymantelefone from '../../images/circle-phone.png';
import LogoDeliverymanpayment from '../../images/key.png';

export function HistoricoPedidos(props){

    const [statePedidoFinalizado, setFinalized] = useState(false);

    async function handlePedidoFinalizado(){
    try{ 
        setFinalized(true);
        await PedidoFinalizadoFunc(props.id); 
        setFinalized(false);
    }catch(error){
        console.error("Erro ao finalizar pedido", error);
        setFinalized(false);    
    }      
    }

    return(
        <DivBody>
        <ContainerTop>
            <HeaderCard>
                        <p>FINALIZADO <img src={LogoCheck} alt="check" /> </p>
                        <p> <img src={LogoCode} alt="code" /> {props.codigo}</p>
            </HeaderCard>
                <ContainerCard>
                    <div>
                        <label><img src={LogoUser} alt="name_user" /> <p>{props.name}</p></label>
                        <label><img src={LogoTelefone} alt="_telefone_user" /> <p>{props.telefone}</p></label>
                    </div>

                    <div>
                        <label><img src={LogoEndereco} alt="endereco_user" /> <p>{props.endereco}</p></label>
                    </div>    

                    <div>
                        <label><img src={LogoOrder} alt="description_order_user" /><p>{props.descricao}</p></label>
                    </div>    

                    <div>
                        <label><img src={LogoPay} alt="payment"/><p>{props.forma_p} R$ {props.valor}</p></label>
                    </div>                    
                </ContainerCard>
                <RodapeCard>
                    <footer>
                        <div>
                            <label><img src={LogoMotobike} alt="delivery"/> <p>R$ {props.taxa_ent}</p></label>
                        </div>                
                        <button onClick={handlePedidoFinalizado} disabled={statePedidoFinalizado}><img src={LogoOrderExit} alt="Saiu para entrega" /></button>
                    </footer>
                </RodapeCard>  
        </ContainerTop>
        <FooterCard>
            <div><h3>Dados do entregador</h3></div>
            <div>
            <label><img src={LogoDeliveryman} alt="delivery_man"/><p>{props.entregador_name}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymancpf} alt="delivery_man_cpf"/><p>{props.entregador_cpf}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymantelefone} alt="delivery_man_telefone"/><p>{props.entregador_telefone}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymanpayment} alt="delivery_man_payment"/><p>{props.form_pagamento_entr}</p></label>
            </div>

            </FooterCard> 
        </DivBody>
    )
}

HistoricoPedidos.propTypes = {
    name: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    forma_p: PropTypes.string.isRequired,
    taxa_ent: PropTypes.string.isRequired,
    codigo: PropTypes.string.isRequired,
    name_emp: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    entregador_name: PropTypes.string.isRequired,
}; 
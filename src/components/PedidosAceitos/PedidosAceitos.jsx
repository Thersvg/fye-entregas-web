import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, FooterCard,HeaderCard,RodapeCard } from './PedidosAceitosStyled';
import { useState } from 'react';
import { PedidoEntregue } from '../../services/PedidosServices';
import LogoCheck from '../../images/check.png'


export function PedidosAceitos(props){

    const [statePedidoEntregue, setCompleted] = useState(false);

    async function handlePedidoEntregue(){
    try{ 
        setCompleted(true);
        await PedidoEntregue(props.id); 
        location.reload(); 
        setCompleted(false);

    }catch(error){
        console.error("Erro marcar pedido como pago", error);
        setCompleted(false);    
    }      
    }

    return(
            <DivBody>
            <ContainerTop>
                <HeaderCard>
                            <label>{props.codigo}</label>
                    </HeaderCard>
                    <ContainerCard>
                            <label>CLIENTE: <p>{props.name}</p></label>
                            <label>TELEFONE: <p>{props.telefone}</p></label>
                            <label>ENDEREÇO: <p>{props.endereco}</p></label>
                            <label>DESCRIÇÃO: <p>{props.descricao}</p></label>
                            <label>VALOR DO PEDIDO: <p>R$ {props.valor}</p></label>
                            <label>FORMA DE PAGAMENTO: <p>{props.forma_p}</p></label>
                    </ContainerCard>
                    <RodapeCard>
                            <label>ENTREGA: <p>R$ {props.taxa_ent}</p></label>
                            <button onClick={handlePedidoEntregue} disabled={statePedidoEntregue}><img src={LogoCheck} alt="Entregue" /></button>
                    </RodapeCard>  
            </ContainerTop> 
            <FooterCard>
                <label>ENTREGADOR: <p>{props.entregador_name.name_entregador}</p></label>
                <label>CPF: <p>{props.entregador_name.cpf_entregador}</p></label>
                <label>TELEFONE: <p>{props.entregador_name.telefone_entregador}</p></label>
                <label>FORMA DE PAGAMENTO: <p>{props.entregador_name.formaDepagamento_entregador}</p></label>
            </FooterCard>
            </DivBody>
    )
}

PedidosAceitos.propTypes = {
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
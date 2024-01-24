import { ContainerCard, ContainerTop, DivBody, FooterCard, HeaderCard, RodapeCard } from "./HistoricoPedidosStyled";
import PropTypes from 'prop-types'; 

export function HistoricoPedidos(props){
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
                        <button>FINALIZAR</button>
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
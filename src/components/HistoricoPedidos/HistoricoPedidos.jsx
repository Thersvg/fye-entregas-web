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
                        <label>CLIENTE: {props.name}</label>
                        <label>TELEFONE: {props.telefone}</label>
                        <label>ENDEREÇO: {props.endereco}</label>
                        <label>DESCRIÇÃO: {props.descricao}</label>
                        <label>VALOR DO PEDIDO: {props.valor}</label>
                        <label>FORMA DE PAGAMENTO: {props.forma_p}</label>
                </ContainerCard>
                <RodapeCard>
                        <label>ENTREGA: R${props.taxa_ent}</label>
                        <button>PAGO</button>
                </RodapeCard>  
        </ContainerTop> 
        <FooterCard>
            <label>ENTREGADOR: {props.entregador_n}</label>
            <label>CPF: {props.entregador_cp}</label>
            <label>EMAIL: {props.entregador_em}</label>
            <label>FORMA DE PAGAMENTO: {props.form_pagamento_en}</label>
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
    entregador_n: PropTypes.string.isRequired,
    entregador_cp: PropTypes.string.isRequired,
    entregador_em: PropTypes.string.isRequired,
    form_pagamento_en: PropTypes.string.isRequired,
}; 
import PropTypes from 'prop-types';
import { ButtonDeleteBox, ContainerPedido } from './PedidosPendenteStyled';
export function PedidosPendente({pedido}){
    return(
        <>
        <ContainerPedido>
                <article>
                        <label htmlFor="">Nome Cliente:</label>
                        <p>{pedido.name_cliente}</p>
                        <label htmlFor="">Endereço Cliente:</label>
                        <p>{pedido.endereco_cliente}</p>
                        <label htmlFor="">Descrição Pedido:</label>
                        <p>{pedido.descricao_pedido}</p>
                </article>
                <article>
                        <label htmlFor="">Telefone Cliente:</label>
                        <p>{pedido.telefone_cliente}</p>
                        <label htmlFor="">Forma de Pagamento:</label>
                        <p>{pedido.forma_pagamento}</p>
                        <label htmlFor="">Valor do Pedido:</label>
                        <p>{pedido.valor_pedido}</p>
                </article>
                <article>
                    <label htmlFor="">Taxa de Entrega:</label>
                    <p>{pedido.taxa_entrega}</p>
                    <label htmlFor="">Código do Pedido:</label>
                    <p>{pedido.codigo_pedido}</p>
                    <ButtonDeleteBox>Excluir</ButtonDeleteBox>
                </article>
        </ContainerPedido>
        </>
    )
}
PedidosPendente.propTypes = {
    pedido: PropTypes.shape({
      name_cliente: PropTypes.string,
      telefone_cliente: PropTypes.string,
      endereco_cliente: PropTypes.string,
      descricao_pedido: PropTypes.string,
      valor_pedido: PropTypes.number,
      forma_pagamento: PropTypes.string,
      taxa_entrega: PropTypes.number,
      codigo_pedido: PropTypes.string,
    }).isRequired,
  };
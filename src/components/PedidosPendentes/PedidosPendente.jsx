import PropTypes from 'prop-types';
export function PedidosPendente({pedido}){
    return(
        <>
        <section>
            <div>
                <label htmlFor="">Nome Cliente:</label>
                <h4>{pedido.name_cliente}</h4>
                <label htmlFor="">Telefone Cliente:</label>
                <h4>{pedido.telefone_cliente}</h4>
                <label htmlFor="">Endereço Cliente:</label>
                <h4>{pedido.endereco_cliente}</h4>
                <label htmlFor="">Descrição Pedido:</label>
                <h4>{pedido.descricao_pedido}</h4>
                <label htmlFor="">Valor do Pedido:</label>
                <h4>{pedido.valor_pedido}</h4>
                <label htmlFor="">Forma de Pagamento:</label>
                <h4>{pedido.forma_pagamento}</h4>
                <label htmlFor="">Taxa de Entrega:</label>
                <h4>{pedido.taxa_entrega}</h4>
                <label htmlFor="">Código do Pedido:</label>
                <h4>{pedido.codigo_pedido}</h4>

            </div>
        </section>
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
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

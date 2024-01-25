import { FormOrder } from "./OrderModalStyled";

export default function HandleModalOrder({ isOpen, onClose, children }){
    if (!isOpen) {
        return null;
      }

    

    return (
        <>
        <FormOrder onSubmit={""}>
        <section>
            <h4>NOVA ENTREGA</h4>
        </section>
          <label htmlFor="nameCliente">Cliente:</label>
          <input
            type="text"
            id="nameCliente"
            name="nameCliente"
          />
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
          />
          <label htmlFor="descricaoPedido">Descrição:</label>
          <input
            type="text"
            id="descricaoPedido"
            name="descricaoPedido"
          />
          <label htmlFor="telefoneCliente">Telefone:</label>
          <input
            type="text"
            id="telefoneCliente"
            name="telefoneCliente"
          />
          <label htmlFor="valorPedido">Valor pedido:</label>
          <input
            type="text"
            id="valorPedido"
            name="valorPedido"
          />
          <label htmlFor="formaPagamento">Forma de pagamento:</label>
          <input
            type="text"
            id="formaPagamento"
            name="formaPagamento"
          />
          <footer>
            <button type="submit">Enviar</button>
          </footer>
        </FormOrder>
        </>
    )
}
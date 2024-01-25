import { useState } from "react";
import { FormOrder } from "./OrderModalStyled";
import { CreateNewOrder } from "../../services/PedidosServices";

export default function HandleModalOrder({ isOpen, onClose, children }){
    if (!isOpen) {
        return null;
      }

      const [dadosFormulario, setDadosFormulario] = useState({
        name_cliente: '',
        endereco_cliente: '',
        descricao_pedido: '',
        telefone_cliente: '',
        valor_pedido: '',
        forma_pagamento: '',
      });  

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        CreateOrder(dadosFormulario)
      };


      async function CreateOrder(dadosFormulario){
        await CreateNewOrder(dadosFormulario);
        onClose();
      }

    return (
        <>
        <FormOrder onSubmit={handleSubmit}>
        <section>
            <h4>NOVA ENTREGA</h4>
        </section>
          <label htmlFor="nameCliente">Cliente:</label>
          <input
            type="text"
            id="nameCliente"
            name="name_cliente"
            onChange={handleInputChange}
          />
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco_cliente"
            onChange={handleInputChange}
          />
          <label htmlFor="descricaoPedido">Descrição:</label>
          <input
            type="text"
            id="descricaoPedido"
            name="descricao_pedido"
            onChange={handleInputChange}
          />
          <label htmlFor="telefoneCliente">Telefone:</label>
          <input
            type="text"
            id="telefoneCliente"
            name="telefone_cliente"
            onChange={handleInputChange}
          />
          <label htmlFor="valorPedido">Valor pedido:</label>
          <input
            type="text"
            id="valorPedido"
            name="valor_pedido"
            onChange={handleInputChange}
          />
          <label htmlFor="formaPagamento">Forma de pagamento:</label>
          <input
            type="text"
            id="formaPagamento"
            name="forma_pagamento"
            onChange={handleInputChange}
          />
          <footer>
            <button onClick={onClose}>Fechar</button>
            <button type="submit">Enviar</button>
          </footer>
        </FormOrder>
        </>
    )
}
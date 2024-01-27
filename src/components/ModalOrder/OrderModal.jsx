import { FormOrder } from "./OrderModalStyled";
import { CreateNewOrder } from "../../services/PedidosServices";
import LogoDelete from '../../images/delete.png'
import LogoSend from '../../images/send.png'
import { useContext, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";

export default function HandleModalOrder({ isOpen, onClose}){
    if (!isOpen) {
        return null;
      }

      const [dadosFormulario, setDadosFormulario] = useState({});  

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        CreateOrder(dadosFormulario)
      };

      const { empresa } = useContext(EmpresaContext);

      async function CreateOrder(dadosFormulario){  
        await CreateNewOrder(dadosFormulario, empresa.taxa_entrega_empresa);
        onClose();
        location.reload(); 
      }

    return (
        <>
        <FormOrder onSubmit={handleSubmit}>
        <section>
            <h4>NOVA ENTREGA</h4>
        </section>
          <label htmlFor="nameCliente">Cliente</label>
          <input
            type="text"
            id="nameCliente"
            name="name_cliente"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco_cliente"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="descricaoPedido">Descrição</label>
          <input
            type="text"
            id="descricaoPedido"
            name="descricao_pedido"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="telefoneCliente">Telefone</label>
          <input
            type="text"
            id="telefoneCliente"
            name="telefone_cliente"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="valorPedido">Valor pedido</label>
          <input
            type="text"
            id="valorPedido"
            name="valor_pedido"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="formaPagamento">Forma de pagamento</label>
          <input
            type="text"
            id="formaPagamento"
            name="forma_pagamento"
            onChange={handleInputChange}
            required
          />
          <footer>
            <button onClick={onClose}><img src={LogoDelete} alt="" /></button>
            <button type="submit"><img src={LogoSend} alt="" /></button>
          </footer>
        </FormOrder>
        </>
    )
}
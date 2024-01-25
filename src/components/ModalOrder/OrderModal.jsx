import { useContext, useState } from "react";
import { FormOrder } from "./OrderModalStyled";
import { CreateNewOrder } from "../../services/PedidosServices";
import LogoDelete from '../../images/delete.png'
import LogoSend from '../../images/send.png'
import { EmpresaContext } from "../../Context/EmpresaContext";

export default function HandleModalOrder({ isOpen, onClose}){
    if (!isOpen) {
        return null;
      }

      function gerarCaracteresAleatorios(tamanho) {
        const caracteresPermitidos =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let resultado = "";
    
        for (let i = 0; i < tamanho; i++) {
          const indiceAleatorio = Math.floor(
            Math.random() * caracteresPermitidos.length
          );
          resultado += caracteresPermitidos.charAt(indiceAleatorio);
        }
    
        return resultado;
      }

      const [dadosFormulario, setDadosFormulario] = useState({});  

      const { empresa } = useContext(EmpresaContext);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        CreateOrder(dadosFormulario)
      };

      async function CreateOrder(dadosFormulario){  
        let codigo = gerarCaracteresAleatorios(8);
        let taxa = empresa.taxa_entrega;
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
            required
          />
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco_cliente"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="descricaoPedido">Descrição:</label>
          <input
            type="text"
            id="descricaoPedido"
            name="descricao_pedido"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="telefoneCliente">Telefone:</label>
          <input
            type="text"
            id="telefoneCliente"
            name="telefone_cliente"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="valorPedido">Valor pedido:</label>
          <input
            type="text"
            id="valorPedido"
            name="valor_pedido"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="formaPagamento">Forma de pagamento:</label>
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
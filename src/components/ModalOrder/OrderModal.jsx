import { FormOrder } from "./OrderModalStyled";
import { CreateNewOrder } from "../../services/PedidosServices";
import LogoDelete from '../../images/cross-small.png'
import LogoSend from '../../images/box-circle-check.png'
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
        try{
          await CreateNewOrder(dadosFormulario, empresa.taxa_entrega_empresa);
          onClose();
          location.reload();
        }catch (error){
          alert("Erro");
          onClose();
        }

      }

    return (
        <>
        <FormOrder onSubmit={handleSubmit}>       
        <div>
        <label htmlFor="nameCliente">Cliente</label>
        </div>
          <input
            type="text"
            placeholder="Nome*"
            id="nameCliente"
            name="name_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="endereco">Endereço</label>
          </div>
          <input
            type="text"
            placeholder="Av. ou Rua e N°*"
            id="endereco"
            name="endereco_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="descricaoPedido">Descrição</label>
          </div>
          <input
            type="text"
            placeholder="Detalhes do pedido*"
            id="descricaoPedido"
            name="descricao_pedido"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="telefoneCliente">Telefone</label>
          </div>
          <input
            type="text"
            placeholder="(DDD) X XXXX - XXXX*"
            id="telefoneCliente"
            name="telefone_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="valorPedido">Valor pedido</label>
          </div>
          <input
            type="text"
            placeholder="ex. 65,00*"
            id="valorPedido"
            name="valor_pedido"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="formaPagamento">Forma de pagamento</label>
          </div>

          <select name="forma_pagamento" id="formaPagamento"
            onChange={handleInputChange}
            required
          >
            <option value="--"></option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Pix">Pix</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>

          <footer>
            <button onClick={onClose}><img src={LogoDelete} alt="Fechar" /></button>
            <button type="submit"><img src={LogoSend} alt="Criar" /></button>
          </footer>
        </FormOrder>
        </>
    )
}
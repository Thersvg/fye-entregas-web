import { FormOrder } from "./OrderModalStyled";
import { CreateNewOrder, SendNotification } from "../../services/PedidosServices";
import LogoDelete from '../../images/cross-small.png'
import LogoSend from '../../images/box-circle-check.png'
import React, { useContext, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

export default function HandleModalOrder({ isOpen, onClose}){
    if (!isOpen) {
        return null;
      }

      const [dadosFormulario, setDadosFormulario] = useState({});  

      const [open, setOpen] = React.useState(false);

      const navigate = useNavigate();

      const handleClickOpen = () => {
          setOpen(true);
      };
      
        const handleClose = () => {
          setOpen(false);
      };

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

        if(empresa.endereco_empresa == 'Endereço'){
            handleClickOpen();
        }else{
        try{
          await CreateNewOrder(dadosFormulario, empresa.taxa_entrega_empresa);
          await SendNotification();
          await 
          onClose();
          location.reload();
        }catch (error){
          alert("Erro");
          onClose();
        }
        }
      }

    return (
        <>
            <Dialog
            open={open}
            onClose={handleClose}

            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {"Atenção"}
            </DialogTitle>

            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Por favor altere seu endereço!
            </DialogContentText>
            </DialogContent>

            <DialogActions>
            <Button sx={{color: '#000'}} onClick={handleClose}>Fechar</Button>

            <Button sx={{color: '#03bb85'}} onClick={() => navigate("/Profile")} autoFocus>
                Alterar
            </Button>

            </DialogActions>
            </Dialog>

        <FormOrder onSubmit={handleSubmit}>       
        <div>
        <label htmlFor="nameCliente">Nome do cliente*</label>
        </div>
          <input
            type="text"
            id="nameCliente"
            name="name_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="endereco">Endereço (Rua/N°/Cidade)*</label>
          </div>
          <input
            type="text"
            id="endereco"
            name="endereco_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="descricaoPedido">Descrição do pedido*</label>
          </div>
          <input
            type="text"
            id="descricaoPedido"
            name="descricao_pedido"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="telefoneCliente">Telefone do cliente*</label>
          </div>
          <input
            type="text"
            id="telefoneCliente"
            name="telefone_cliente"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="valorPedido">Valor pedido*</label>
          </div>
          <input
            type="text"
            id="valorPedido"
            name="valor_pedido"
            onChange={handleInputChange}
            required
          />
          <div>
          <label htmlFor="formaPagamento">Forma de pagamento*</label>
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
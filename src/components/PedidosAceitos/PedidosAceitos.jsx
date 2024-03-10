import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, FooterCard,HeaderCard,RodapeCard } from './PedidosAceitosStyled';
import React, { useState } from 'react';
import { PedidoEntregue } from '../../services/PedidosServices';
import LogoCheck from '../../images/check-circle.png';
import LogoCode from '../../images/ticket.png';
import LogoUser from '../../images/circle-user.png';
import LogoTelefone from '../../images/circle-phone.png';
import LogoEndereco from '../../images/marker.png';
import LogoOrder from '../../images/box-circle-check.png';
import LogoPay from '../../images/moneypay.png';
import LogoMotobike from '../../images/moped.png';
import LogoOrderExit from '../../images/person-carry-box.png';
import LogoDeliveryman from '../../images/biking-mountain.png';
import LogoDeliverymancpf from '../../images/id-card-clip-alt.png';
import LogoDeliverymantelefone from '../../images/circle-phone.png';
import LogoDeliverymanpayment from '../../images/key.png';
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function PedidosAceitos(props){

    const [statePedidoEntregue, setCompleted] = useState(false);

    const [loading, setLoading] = useState(false);  

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };

    async function handlePedidoEntregue(){
    try{ 
        setLoading(true);
        setCompleted(true);
        await PedidoEntregue(props.id); 
        setCompleted(false);
        setOpen(false);
        setLoading(false);

    }catch(error){
        setOpen(false);
        setLoading(false);  
        alert("Erro");
        console.error("Erro marcar pedido como pago", error);
        setCompleted(false);  
    }      
    }

    return(
        <>
        {loading ? (
            <LoadingCylonHold />
        ):(
        <DivBody>
        <ContainerTop>

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
                Essa entrega já foi entregue para o cliente?
            </DialogContentText>
            </DialogContent>

            <DialogActions>
            <Button sx={{color: '#000'}} onClick={handleClose}>Fechar</Button>

            <Button sx={{color: '#03bb85'}} onClick={handlePedidoEntregue} autoFocus>
                Confirmar
            </Button>

            </DialogActions>
            </Dialog>

            <HeaderCard>
                        <p>ORDEM ACEITA <img src={LogoCheck} alt="check" /> </p>
                        <p> <img src={LogoCode} alt="code" /> {props.codigo}</p>
            </HeaderCard>
                <ContainerCard>
                    <div>
                        <label><img src={LogoUser} alt="name_user" /> <p>{props.name}</p></label>
                        <label><img src={LogoTelefone} alt="_telefone_user" /> <p>{props.telefone}</p></label>
                    </div>

                    <div>
                        <label><img src={LogoEndereco} alt="endereco_user" /> <p>{props.endereco}</p></label>
                    </div>    

                    <div>
                        <label><img src={LogoOrder} alt="description_order_user" /><p>{props.descricao}</p></label>
                    </div>    

                    <div>
                        <label><img src={LogoPay} alt="payment"/><p>{props.forma_p} R$ {props.valor}</p></label>
                    </div>                    
                </ContainerCard>
                <RodapeCard>
                    <footer>
                        <div>
                            <label><img src={LogoMotobike} alt="delivery"/> <p>R$ {props.taxa_ent}</p></label>
                        </div>                
                        <button onClick={handleClickOpen} disabled={statePedidoEntregue}><img src={LogoOrderExit} alt="Saiu para entrega" /></button>
                    </footer>
                </RodapeCard>  
        </ContainerTop>
        <FooterCard>
            <div><h3>Dados do entregador</h3></div>
            <div>
            <label><img src={LogoDeliveryman} alt="delivery_man"/><p>{props.entregador_name}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymancpf} alt="delivery_man_cpf"/><p>{props.entregador_cpf}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymantelefone} alt="delivery_man_telefone"/><p>{props.entregador_telefone}</p></label>
            </div>

            <div>
            <label><img src={LogoDeliverymanpayment} alt="delivery_man_payment"/><p>{props.form_pagamento_entr}</p></label>
            </div>

            </FooterCard> 
        </DivBody>
        )}
        </>
    )
}

PedidosAceitos.propTypes = {
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
    entregador_name: PropTypes.string.isRequired,
}; 
import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, HeaderCard, RodapeCard } from './PedidosPendenteStyled';
import { DeletePedido } from '../../services/PedidosServices';
import LogoDelete from '../../images/cross-small.png'
import LogoCheck from '../../images/exclamation.png'
import LogoCode from '../../images/ticket.png'
import LogoUser from '../../images/circle-user.png'
import LogoTelefone from '../../images/circle-phone.png'
import LogoEndereco from '../../images/marker.png'
import LogoOrder from '../../images/box-circle-check.png'
import LogoPay from '../../images/moneypay.png'
import LogoMotobike from '../../images/moped.png'
import React, { useState} from 'react';
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function PedidosPendente(props){

    const [deletando, setDeletando] = useState(false);

    const [loading, setLoading] = useState(false);  

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    async function handleDeletePedido(){
    try{ 
        setLoading(true);
        setDeletando(true);
        await DeletePedido(props.id); 
        setDeletando(false);
        setOpen(false);
        setLoading(false);

    }catch(error){
        setOpen(false);
        setLoading(false); 
        alert("Erro");
        console.error("Erro ao deletar pedido:", error);
        setDeletando(false); 
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
                Tem certeza que quer excluir essa ordem?
            </DialogContentText>
            </DialogContent>

            <DialogActions>
            <Button sx={{color: '#000'}} onClick={handleClose}>Fechar</Button>

            <Button sx={{color: '#03bb85'}} onClick={handleDeletePedido} autoFocus>
                Confirmar
            </Button>

            </DialogActions>
            </Dialog>

            <HeaderCard>
                        <p>ORDEM CRIADA <img src={LogoCheck} alt="check" /> </p>
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
                        <button onClick={handleClickOpen} disabled={deletando}><img src={LogoDelete} alt="Excluir" /></button>
                    </footer>
                </RodapeCard>  
        </ContainerTop> 
        </DivBody>
        )}
        </>
    )
}
PedidosPendente.propTypes = {
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
}; 
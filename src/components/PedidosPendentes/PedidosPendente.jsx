import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, HeaderCard, RodapeCard } from './PedidosPendenteStyled';
import { DeletePedido } from '../../services/PedidosServices';
import LogoDelete from '../../images/delete.png'
import LogoCheck from '../../images/check-circle.png'
import LogoCode from '../../images/ticket.png'
import LogoUser from '../../images/circle-user.png'
import LogoTelefone from '../../images/circle-phone.png'
import LogoEndereco from '../../images/marker.png'
import LogoOrder from '../../images/box-circle-check.png'
import LogoPay from '../../images/moneypay.png'
import LogoMotobike from '../../images/moped.png'
import { useState } from 'react';


export function PedidosPendente(props){

    const [deletando, setDeletando] = useState(false);

    async function handleDeletePedido(){
    try{ 
        setDeletando(true);
        await DeletePedido(props.id); 
        setDeletando(false);

    }catch(error){
        console.error("Erro ao deletar pedido:", error);
        setDeletando(false);    
    }      
    }

    return(
        <>
        <DivBody>
        <ContainerTop>
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
                        <button onClick={handleDeletePedido} disabled={deletando}><img src={LogoDelete} alt="Excluir" /></button>
                    </footer>
                </RodapeCard>  
        </ContainerTop> 
        </DivBody>
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
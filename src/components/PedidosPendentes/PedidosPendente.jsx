import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, FooterCard, HeaderCard, RodapeCard } from './PedidosPendenteStyled';
import { DeletePedido } from '../../services/PedidosServices';
import LogoDelete from '../../images/delete.png'
import { useState } from 'react';


export function PedidosPendente(props){

    const [deletando, setDeletando] = useState(false);

    async function handleDeletePedido(){
    try{ 
        setDeletando(true);
        await DeletePedido(props.id); 
        location.reload(); 
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
                        <label>{props.codigo}</label>
                </HeaderCard>
                <ContainerCard>
                        <label>CLIENTE: <p>{props.name}</p></label>
                        <label>TELEFONE: <p>{props.telefone}</p></label>
                        <label>ENDEREÇO: <p>{props.endereco}</p></label>
                        <label>DESCRIÇÃO: <p>{props.descricao}</p></label>
                        <label>VALOR DO PEDIDO: <p>R$ {props.valor}</p></label>
                        <label>FORMA DE PAGAMENTO: <p>{props.forma_p}</p></label>
                </ContainerCard>
                <RodapeCard>
                        <label>ENTREGA: <p>R$ {props.taxa_ent}</p></label>
                        <button onClick={handleDeletePedido} disabled={deletando}><img src={LogoDelete} alt="Excluir" /></button>
                </RodapeCard>  
        </ContainerTop> 
        <FooterCard>
            <label>EMPRESA: <p>{props.name_emp.name_empresa}</p></label>
            <label>ENDEREÇO: <p>{props.name_emp.endereco_empresa}</p></label>
            <label>TELEFONE: <p>{props.name_emp.telefone_empresa}</p></label>
        </FooterCard>
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
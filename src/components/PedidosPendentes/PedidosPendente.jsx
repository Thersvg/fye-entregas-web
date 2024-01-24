import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, FooterCard, HeaderCard, RodapeCard } from './PedidosPendenteStyled';
import { DeletePedido } from '../../services/PedidosServices';
import { useState } from 'react';


export function PedidosPendente(props){

/*     function RefreshPage(){
        location.reload();
    } */

    const [deletando, setDeletando] = useState(false);

    async function handleDeletePedido(){
    try{ 
        console.log(props.id);
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
{/*         <ContainerPedido>
                <InfPessoais>
                    <div>
                        <div>
                            <label htmlFor="">Nome: {props.name}</label>
                        </div>
                        <div>
                            <label htmlFor="">Descrição: {props.descricao}</label>   
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Telefone: {props.telefone}</label>
                        </div>
                        <div>
                            <label htmlFor="">Pagamento: {props.forma_p}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Valor R$: {props.valor}</label>
                        </div>
                        <div>
                            <label htmlFor="">Delivery R$: {props.taxa_ent}</label>
                        </div>
                    </div>
                </InfPessoais>

                <InfoDescricaoEndereco>
                    <label htmlFor="">Endereço: {props.endereco}</label>                   
                </InfoDescricaoEndereco> 

                <InfRodape>
                        <div>
                            <label htmlFor="">{props.name_emp.name_empresa}</label>
                        </div>
                        <div>
                            <label htmlFor="">Código: {props.codigo}</label>
                        </div>
                        <div>
                            <ButtonDeleteBox onClick={handleDeletePedido} disabled={deletando}>Excluir</ButtonDeleteBox>
                        </div>
                </InfRodape>
        </ContainerPedido>
        </> */}

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
                        <button onClick={handleDeletePedido} disabled={deletando}>EXCLUIR</button>
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
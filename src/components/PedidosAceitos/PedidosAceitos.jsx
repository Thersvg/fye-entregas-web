import PropTypes from 'prop-types'; 
import { ContainerCard, ContainerTop, DivBody, FooterCard,HeaderCard,RodapeCard } from './PedidosAceitosStyled';
import { useState } from 'react';
import { PedidoEntregue } from '../../services/PedidosServices';


export function PedidosAceitos(props){

    const [statePedidoEntregue, setCompleted] = useState(false);

    async function handlePedidoEntregue(){
    try{ 
        setCompleted(true);
  
        await PedidoEntregue(props.id); 
        setCompleted(false);

    }catch(error){
        console.error("Erro marcar pedido como pago", error);
        setCompleted(false);    
    }      
    }

    return(
/*             <ContainerPedidoAceito>
                <InfPessoaisPedidoAceito>
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
                </InfPessoaisPedidoAceito>
                <InfoDescricaoEnderecoPedidoAceito>
                    <label htmlFor="">Endereço: {props.endereco}</label>                   
                </InfoDescricaoEnderecoPedidoAceito> 

                <InfRodapePedidoAceito>
                        <div>
                            <label htmlFor="">{props.name_emp.name_empresa}</label>
                        </div>
                        <div>
                            <label htmlFor="">Código: {props.codigo}</label>
                        </div>
                        <div>
                            <ButtonConcluidoBox>ENTREGUE</ButtonConcluidoBox>
                        </div>
                </InfRodapePedidoAceito>
                <InfPessoaisPedidoAceitoEntregador>
                    <div>
                        <div>
                            <label htmlFor="">Entregador: {props.entregador_name.name_entregador}</label>
                        </div>
                        <div>
                            <label htmlFor="">CPF: {props.entregador_name.cpf_entregador}</label>   
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Email: {props.entregador_name.email_entregador}</label>
                        </div>
                        <div>
                            <label htmlFor="">Forma de Pagamento: {props.entregador_name.formaDepagamento_entregador}</label>
                        </div>
                    </div>
                </InfPessoaisPedidoAceitoEntregador>
        </ContainerPedidoAceito> */
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
                            <button onClick={handlePedidoEntregue} disabled={statePedidoEntregue}>PAGO</button>
                    </RodapeCard>  
            </ContainerTop> 
            <FooterCard>
                <label>ENTREGADOR: <p>{props.entregador_name.name_entregador}</p></label>
                <label>CPF: <p>{props.entregador_name.cpf_entregador}</p></label>
                <label>TELEFONE: <p>{props.entregador_name.telefone_entregador}</p></label>
                <label>FORMA DE PAGAMENTO: <p>{props.entregador_name.formaDepagamento_entregador}</p></label>
            </FooterCard>
            </DivBody>
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
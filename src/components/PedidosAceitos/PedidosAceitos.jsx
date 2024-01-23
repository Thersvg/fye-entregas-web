import PropTypes from 'prop-types'; 
import { ButtonConcluidoBox, ContainerPedidoAceito, InfPessoaisPedidoAceito, InfPessoaisPedidoAceitoEntregador, InfRodapePedidoAceito, InfoDescricaoEnderecoPedidoAceito } from './PedidosAceitosStyled';


export function PedidosAceitos(props){

    return(
            <ContainerPedidoAceito>
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
        </ContainerPedidoAceito>
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
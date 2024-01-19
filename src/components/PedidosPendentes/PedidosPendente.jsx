import PropTypes from 'prop-types'; 
import { ButtonDeleteBox, ContainerPedido, InfPessoais, InfRodape, InfoDescricaoPedido } from './PedidosPendenteStyled';
export function PedidosPendente(props){
    return(
        <>
        <ContainerPedido>
                <InfPessoais>
                    <div>
                        <div>
                            <label htmlFor="">Nome: {props.name}</label>
                        </div>
                        <div>
                            <label htmlFor="">Endereço: {props.endereco}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Telefone: {props.telefone}</label>
                        </div>
                        <div>
                            <label htmlFor="">Forma de Pagamento: {props.forma_p}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Valor do Pedido: {props.valor}</label>
                        </div>
                        <div>
                            <label htmlFor="">Taxa de Entrega: {props.taxa_ent}</label>
                        </div>
                    </div>

                </InfPessoais>

                <InfoDescricaoPedido>
                        <label htmlFor="">Descrição Pedido: {props.descricao}</label>
                </InfoDescricaoPedido>

                <InfRodape>
                        <label htmlFor="">Empresa: DONA HIRENA PIZZARIA</label>
                        <label htmlFor="">Código do Pedido: {props.codigo}</label>
                        <ButtonDeleteBox>Excluir</ButtonDeleteBox>
                </InfRodape>
        </ContainerPedido>
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
}; 
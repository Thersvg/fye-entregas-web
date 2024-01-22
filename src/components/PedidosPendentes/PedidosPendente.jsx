import PropTypes from 'prop-types'; 
import { ButtonDeleteBox, ContainerPedido, InfPessoais, InfRodape, InfoDescricaoEndereco } from './PedidosPendenteStyled';
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
                            <ButtonDeleteBox>Excluir</ButtonDeleteBox>
                        </div>
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
      name_emp: PropTypes.string.isRequired,
}; 
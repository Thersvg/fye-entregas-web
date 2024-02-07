import { useContext, useEffect, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";
import { AltDados, ContainerProfile, DadosEmpresaProfile, DadosPessoais, MsgRetorno, PictureLogo, ProfileAllPedidosEntregues, Suporte} from "./ProfileStyled";
import { FindPedidosHistorico } from "../../services/PedidosServices";
import { HistoricoPedidos } from "../../components/HistoricoPedidos/HistoricoPedidos";
import { CardHistorico } from "../../components/HistoricoPedidos/HistoricoPedidosStyled";
import LogoModificar from '../../images/modified.png'
import HandleModalProfile from "../../components/ModalProfile/UpdateDadosProfile";
import CustomSkeletonProfile from "../../components/ProfileSkeleton/ProfileSkeleton";
import { Link } from "react-router-dom";
import { UpdateDataService } from "../../services/EmpresaServices";

/* import {UpdateLogoService } from "../../services/EmpresaServices"; */

export function Profile(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const {empresa} = useContext(EmpresaContext);


    const [pedidosHistorico, setPedidosHistorico] = useState([]);
    async function FindAllPedidosHistorico(){
        const response = await FindPedidosHistorico(empresa._id);
        setPedidosHistorico(response.data);
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            FindAllPedidosHistorico();
            setLoading(false);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [])

 
    const [selectFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
        
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file); 

        const name = event.target.name;
        setFileName(name);
    };

    const handleSubmit = async (event) =>{
        event.preventDefault(); 
        if(selectFile){

            const requestBody = {
                logo_empresa: `${selectFile}`
            }
            const jsonBody = JSON.stringify(requestBody);

            console.log(jsonBody);

            try{
                const response = await UpdateDataService(jsonBody);
                console.log(response);
            }catch(error){
                console.log(error);
            }
        }else{
            console.log("Nenhum arquivo selecionado");
        }
    }   
    return (
        <>
            {loading ? (
                <CustomSkeletonProfile />
            ):(
            <ContainerProfile>
                    <DadosEmpresaProfile>
                            <PictureLogo>
                                <div>
                                    <img src={empresa.logo_empresa} alt="logo" />
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit} action="/upload">
                                        <input  name="logo_empresa" onChange={handleFileChange} type="file" accept="image/*" />
                                        <button type="submit">Enviar</button>
                                    </form>
                                </div>
                            </PictureLogo>
                                    <DadosPessoais>                     
                                        <div>
                                            <label htmlFor="">EMPRESA:</label>
                                            <p>{empresa.name_empresa}</p>
                                            <label htmlFor="">CNPJ/CPF:</label>
                                            <p>{empresa.cnpj_empresa}</p>
                                            <label htmlFor="">EMAIL:</label>
                                            <p>{empresa.email_empresa}</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">TELEFONE:</label>
                                            <p>{empresa.telefone_empresa}</p>
                                            <label htmlFor="">ENDEREÇO:</label>
                                            <p>{empresa.endereco_empresa}</p>
                                            <label htmlFor="">TAXA DE ENTREGA:</label>
                                            <p>{empresa.taxa_entrega_empresa}</p>
                                        </div>
                            </DadosPessoais>
                            <AltDados>
                                <div>
                                    <button onClick={openModal}><img src={LogoModificar} alt="Alterar" /></button>
                                </div>                          
                                <HandleModalProfile isOpen={isModalOpen} onClose={closeModal}>
                                </HandleModalProfile>
                            </AltDados>
                            <Suporte>
                                <Link to={""} style={{ fontSize: 14, fontWeight: 800, color: 'inherit', textDecoration: 'none'}}>Cancelar minha assinatura</Link>
                            </Suporte> 
                    </DadosEmpresaProfile>
                <ProfileAllPedidosEntregues>
                {pedidosHistorico.length > 0 ? (
                        <CardHistorico>
                                        {pedidosHistorico.map((item) => 
                                            <HistoricoPedidos
                                                key={item.id} 
                                                id={item._id} 
                                                codigo = {item.detalhes_pedido.codigo_pedido}
                                                name = {item.detalhes_pedido.name_cliente}
                                                valor = {item.detalhes_pedido.valor_pedido}
                                                endereco = {item.detalhes_pedido.endereco_cliente}
                                                telefone  = {item.detalhes_pedido.telefone_cliente}
                                                descricao  = {item.detalhes_pedido.descricao_pedido}
                                                forma_p  = {item.detalhes_pedido.forma_pagamento}
                                                taxa_ent = {item.detalhes_pedido.taxa_entrega}
                                                name_emp = {item.name_empresa}
                                                entregador_name = {item.name_entregador}
                                                entregador_cpf = {item.name_entregador?.cpf_entregador}
                                                entregador_telefone = {item.name_entregador?.telefone_entregador}
                                                form_pagamento_entr = {item.name_entregador?.formaDepagamento_entregador}
                                            /> 
                                        )} 
                        </CardHistorico> 

                ):(
                  <MsgRetorno>
                    <p>Nenhuma entrega concluida.</p>
                  </MsgRetorno>
                )}
                </ProfileAllPedidosEntregues>
            </ContainerProfile>
            )}
        </>
    )
}

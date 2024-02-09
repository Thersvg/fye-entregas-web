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
import LogoSendImage from "../../images/send.png"

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

    const [selectFile, setSelectedFile] = useState('');
    const [base64String, setBase64String] = useState(''); 
        
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file); 

        if(file){
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64 = e.target.result;
                setBase64String(base64);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) =>{
        event.preventDefault(); 
        if(selectFile){
            let Body = {"logo_empresa": `${base64String}`}  
                try{
                    const response = await UpdateDataService(Body);
                    console.log(response);
                    location.reload(); 
                }catch(error){
                    console.log(error);
                }
        }else{
            console.log("Nenhum arquivo selecionado");
            alert("Nenhum arquivo selecionado");
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
                                    <img src={empresa?.logo_empresa} alt="Logo"/>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit} action="/upload">
                                        <input name="logo_empresa" onChange={handleFileChange} type="file" accept="image/*" />
                                        <button type="submit"><img src={LogoSendImage} alt="" /></button>
                                    </form>
                                </div>
                            </PictureLogo>
                                    <DadosPessoais>                     
                                        <div>
                                            <label htmlFor="">EMPRESA:</label>
                                            <p>{empresa?.name_empresa}</p>
                                            <label htmlFor="">CNPJ/CPF:</label>
                                            <p>{empresa?.cnpj_empresa}</p>
                                            <label htmlFor="">EMAIL:</label>
                                            <p>{empresa?.email_empresa}</p>
                                        </div>
                                        <div>
                                            <label htmlFor="">TELEFONE:</label>
                                            <p>{empresa?.telefone_empresa}</p>
                                            <label htmlFor="">ENDEREÇO:</label>
                                            <p>{empresa?.endereco_empresa}</p>
                                            <label htmlFor="">TAXA DE ENTREGA:</label>
                                            <p>{empresa?.taxa_entrega_empresa}</p>
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

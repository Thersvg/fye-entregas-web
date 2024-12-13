import { useContext, useEffect, useId, useState } from "react";
import { EmpresaContext } from "../../Context/EmpresaContext";
import {ContainerProfile, DadosEmpresaProfile, DadosPessoais, HistoryOrdersProfile, MsgRetorno, PictureLogo, ProfileAllPedidosEntregues} from "./ProfileStyled";
import { FindPedidosHistorico } from "../../services/PedidosServices";
import { HistoricoPedidos } from "../../components/HistoricoPedidos/HistoricoPedidos";
import LogoModificar from '../../images/modified.png'
import HandleModalProfile from "../../components/ModalProfile/UpdateDadosProfile";
import { UpdateDataService } from "../../services/EmpresaServices";
import LogoSendImage from "../../images/arrow-up-from-square.png"
import LoadingCylonHold from "../../components/LoadingCylon/LoadingCylon";

import LogoEmpresa from "../../images/shop.png"
import LogoCNPJ from "../../images/id-card-clip-alt.png"
import LogoEMAIL from "../../images/envelope.png"

import LogoTelefone from "../../images/circle-phone.png"
import LogoEndereco from "../../images/marker.png"
import LogoTaxa from "../../images/moped.png"


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
                    setLoading(true);
                    const response = await UpdateDataService(Body);
                    location.reload();
                    setLoading(false);
                }catch(error){
                    setLoading(false);
                    alert("Erro");
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
                <LoadingCylonHold />
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
                                        <div style={{width: '100%'}}>
                                            <label> <img src={LogoEmpresa} alt="Empresa" /> <p>{empresa?.name_empresa}</p></label>
                                            <label> <img src={LogoCNPJ} alt="Identidade" /> <p>{empresa?.cnpj_empresa}</p></label>
                                            <label> <img src={LogoEMAIL} alt="Email" /> <p>{empresa?.email_empresa}</p></label>
                                            <label> <img src={LogoTelefone} alt="Telefone" /> <p>{empresa?.telefone_empresa}</p></label>
                                            <label> <img src={LogoEndereco} alt="Endereco" /> <p>{empresa?.endereco_empresa}</p></label>
                                            <label> <img src={LogoTaxa} alt="Taxa de entrega" /> <p>{empresa?.taxa_entrega_empresa}</p></label>
                                            
                                            <footer>
                                                <button onClick={openModal}><img src={LogoModificar} alt="Alterar" /></button>                         
                                                <HandleModalProfile isOpen={isModalOpen} onClose={closeModal}>
                                                </HandleModalProfile>     
                                            </footer>                                  
                                        </div>
                            </DadosPessoais>
                    </DadosEmpresaProfile>
                <ProfileAllPedidosEntregues>        
                {pedidosHistorico.length > 0 ? (
                    <HistoryOrdersProfile>
                        {pedidosHistorico.map((item) => 
                                <HistoricoPedidos
                                            key={useId} 
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
                                            entregador_name = {item.name_entregador?.name_entregador}
                                            entregador_cpf = {item.name_entregador?.cpf_entregador}
                                            entregador_telefone = {item.name_entregador?.telefone_entregador}
                                            form_pagamento_entr = {item.name_entregador?.formaDepagamento_entregador}
                                        /> 
                                    )} 
                    </HistoryOrdersProfile>
                ):(
                  <MsgRetorno>
                  </MsgRetorno>
                )}
                </ProfileAllPedidosEntregues>
            </ContainerProfile>
            )}
        </>
    )
}

import { useContext, useState } from 'react';
import LogoDelete from '../../images/cross-small.png'
import LogoSend from '../../images/arrow-up-from-square.png'
import { FormOrder } from './UpdateDadosProfileStyled';
import { EmpresaContext } from '../../Context/EmpresaContext';
import { UpdateDataService } from '../../services/EmpresaServices';

export default function HandleModalProfile({ isOpen, onClose}){
    if (!isOpen) {
        return null;
      }

      const [dadosFormulario, setDadosFormulario] = useState({});  

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        UpdateData(dadosFormulario)
      };


      async function UpdateData(dadosFormulario){  
        try{
          const response = await UpdateDataService(dadosFormulario);
          onClose();
          location.reload();
        } catch (error){
          alert("Erro");
          onClose();
        }    

      }

      const { empresa } = useContext(EmpresaContext);
      
    return (
        <>
        <FormOrder onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name_empresa">Nome*</label>
          </div>
          <input
            type="text"
            id="name_empresa"
            name="name_empresa"
            onChange={handleInputChange}
            placeholder={empresa.name_empresa}
          />
          <div>
          <label htmlFor="cnpj_empresa">CNPJ ou CPF*</label>
          </div>
          <input
            type="text"
            id="cnpj_empresa"
            name="cnpj_empresa"
            onChange={handleInputChange}
            placeholder={empresa.cnpj_empresa}
          />
          <div>
          <label htmlFor="email_empresa">Email*</label>
          </div>
          <input
            type="text"
            id="email_empresa"
            name="email_empresa"
            onChange={handleInputChange}
            placeholder={empresa.email_empresa}
          />
          <div>
          <label htmlFor="endereco_empresa">Endereço atual*</label>
          </div>
          <input
            type="text"
            id="endereco_empresa"
            name="endereco_empresa"
            onChange={handleInputChange}
            placeholder={empresa.endereco_empresa}
          />
          <div>
          <label htmlFor="telefone_empresa">Telefone*</label>
          </div>
          <input
            type="text"
            id="telefone_empresa"
            name="telefone_empresa"
            onChange={handleInputChange}
            placeholder={empresa.telefone_empresa}
          />
          <div>
          <label htmlFor="taxa_entrega_empresa">Taxa delivery*</label>
          </div>
          <input
            type="text"
            id="taxa_entrega_empresa"
            name="taxa_entrega_empresa"
            onChange={handleInputChange}
            placeholder={empresa.taxa_entrega_empresa}
          />
          <section>
            <button onClick={onClose}><img src={LogoDelete} alt="Fechar" /></button>
            <button type="submit"><img src={LogoSend} alt="Atualizar" /></button>
          </section>
        </FormOrder>
        </>
    )
}
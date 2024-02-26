import { useContext, useState } from 'react';
import LogoDelete from '../../images/delete.png'
import LogoSend from '../../images/send.png'
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
        const response = await UpdateDataService(dadosFormulario);
        console.log(response);
        onClose();
      }

      const { empresa } = useContext(EmpresaContext);
      
    return (
        <>
        <FormOrder onSubmit={handleSubmit}>
        <section>
            <h4>Minha empresa</h4>
        </section>
          <label htmlFor="name_empresa">Empresa</label>
          <input
            type="text"
            id="name_empresa"
            name="name_empresa"
            onChange={handleInputChange}
            placeholder={empresa.name_empresa}
          />
          <label htmlFor="cnpj_empresa">CNPJ</label>
          <input
            type="text"
            id="cnpj_empresa"
            name="cnpj_empresa"
            onChange={handleInputChange}
            placeholder={empresa.cnpj_empresa}
          />
          <label htmlFor="email_empresa">Email</label>
          <input
            type="text"
            id="email_empresa"
            name="email_empresa"
            onChange={handleInputChange}
            placeholder={empresa.email_empresa}
          />
          <label htmlFor="endereco_empresa">Endereço</label>
          <input
            type="text"
            id="endereco_empresa"
            name="endereco_empresa"
            onChange={handleInputChange}
            placeholder={empresa.endereco_empresa}
          />
          <label htmlFor="telefone_empresa">Telefone</label>
          <input
            type="text"
            id="telefone_empresa"
            name="telefone_empresa"
            onChange={handleInputChange}
            placeholder={empresa.telefone_empresa}
          />
          <label htmlFor="taxa_entrega_empresa">Valor taxa</label>
          <input
            type="text"
            id="taxa_entrega_empresa"
            name="taxa_entrega_empresa"
            onChange={handleInputChange}
            placeholder={empresa.taxa_entrega_empresa}
          />
          <footer>
            <button onClick={onClose}><img src={LogoDelete} alt="Fechar" /></button>
            <button type="submit"><img src={LogoSend} alt="Enviar" /></button>
          </footer>
        </FormOrder>
        </>
    )
}
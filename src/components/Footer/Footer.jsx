import { ContainerFooter } from "./FooterStyled";
import IconMake from "../../images/to-do.png"
import HandleModalOrder from "../ModalOrder/OrderModal";
import { useState } from "react";

export default function Footer(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <>
            <footer>
                <ContainerFooter>
                    <div style={{width: '100%'}}>
                    </div>

                    <div style={{width: 30}}>
                        <button style={{width: 30, height: '100%', cursor: 'pointer', backgroundColor: 'transparent'}} onClick={openModal} ><img style={{width: 30, height: 30, backgroundColor: 'transparent'}} src={IconMake} alt="Criar" /></button>
                    </div>
                    <HandleModalOrder isOpen={isModalOpen} onClose={closeModal}>
                    </HandleModalOrder>
                    
                    <div style={{width: '100%'}}>
                    </div>
                </ContainerFooter>
            </footer>
        </>
    )

}
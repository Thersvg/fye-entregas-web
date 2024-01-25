import { ContainerFooter } from "./FooterStyled";
import IconMake from "../../images/make.png"
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
                    <div>
                        <h3>Entregas pendentes</h3>
                    </div>
                    <div>
                        <button onClick={openModal} ><img src={IconMake} alt="" /></button>
                    </div>
                    <HandleModalOrder isOpen={isModalOpen} onClose={closeModal}>
                        <HandleModalOrder isOpen={isModalOpen} onClose={closeModal} />
                    </HandleModalOrder>
                    <div>
                        <h3>Entregas aceitas</h3>
                    </div>
                </ContainerFooter>
            </footer>
        </>
    )

}
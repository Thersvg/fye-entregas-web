import { ContainerFooter } from "./FooterStyled";


export default function Footer(){
    return (
        <>
            <footer>
                <ContainerFooter>
                    <div>
                        <h3>Pedidos Pendentes</h3>
                    </div>
                    <div>
                        <button>Criar Pedidos</button>
                    </div>
                    <div>
                        <h3>Pedidos Aceitos</h3>
                    </div>
                </ContainerFooter>
            </footer>
        </>
    )

}
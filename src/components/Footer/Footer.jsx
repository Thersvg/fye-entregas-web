import { ContainerFooter } from "./FooterStyled";


export default function Footer(){
    return (
        <>
            <footer>
                <ContainerFooter>
                    <div>
                        <h3>Entregas pendentes</h3>
                    </div>
                    <div>
                        <button>Criar</button>
                    </div>
                    <div>
                        <h3>Entregas aceitas</h3>
                    </div>
                </ContainerFooter>
            </footer>
        </>
    )

}
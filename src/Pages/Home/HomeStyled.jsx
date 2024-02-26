import styled from "styled-components"


export const HomeBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--thema-fundo-principal);
    width: 100%;
    height: 80vh;
    position: absolute;

    @media only screen and (max-width: 600px) {
    div{
        width:  100%;
    }
    }
`
export const HomePedidosPendentes = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--thema-fundo-principal);
    flex-direction: column;

    width: 100%;
    height: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: var(--thema-fundo-principal);
    }

    @media only screen and (max-width: 600px) {
    div{
        display: flex;
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    }
`
export const HomePedidosAceitos = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--thema-fundo-principal);
    flex-direction: column;
    position: relative;

    width: 100%;
    height: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: var(--thema-fundo-principal);
    }

    @media only screen and (max-width: 600px) {
    div{
        display: flex;
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    }
`

export const MsgRetorno = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 600px) {
    div{
        height: auto;
        width: auto;
    }
}
`
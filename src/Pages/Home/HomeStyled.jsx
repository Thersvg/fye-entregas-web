import styled from "styled-components"

export const HomeBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 82vh;
    background-color: #272727;
    overflow: hidden;

`
export const HomePedidosPendentes = styled.div`
    display: flex;
    align-items: center;
    background-color: #272727;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        background-color: #272727;
    }
`
export const HomePedidosAceitos = styled.div`
    display: flex;
    align-items: center;
    background-color: #272727;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        background-color: #272727;
    }
`
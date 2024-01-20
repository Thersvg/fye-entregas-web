import styled from "styled-components"

export const HomeBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #272727;
    width: 100%;
    height: 80vh;
    position: absolute;
`
export const HomePedidosPendentes = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-color: #272727;
    flex-direction: column;

    width: 100%;
    height: 100%;

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
    position: relative;

    width: 100%;
    height: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: #272727;
    }
`
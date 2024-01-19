import styled from "styled-components";

export const ContainerPedido = styled.section`
    display: flex;
    background-color: #fff;
    flex-direction: column;

    justify-content: center;
    align-items: stretch;

    align-self: center;
    
    width: 650px;
    height: 200px;

    border-radius: 5px;
    margin-top: 10px;
    padding-left: 5px;
    padding-right: 5px;

    overflow: hidden;

    label{
        font-weight: 500;
    }
`
export const ButtonDeleteBox = styled.button`
    width: 100px;
    height: 25px;
    font-weight: 800;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #ff0000;
    background-color: #fff;
    margin-top: 5px;
    overflow: hidden;

    &:hover{
        transition: 0.4s;
        background-color: #ff0000;
        color: #fff;
    }
`
export const InfPessoais = styled.article`
    display: flex;
    gap: 15px;
    overflow: hidden;
`

export const InfoDescricaoPedido = styled.article`
    overflow: hidden;
`

export const InfRodape = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    overflow: hidden;
    margin-top: 20px;
`
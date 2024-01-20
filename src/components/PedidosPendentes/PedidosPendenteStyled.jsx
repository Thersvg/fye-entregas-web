import styled from "styled-components";

export const ContainerPedido = styled.section`
    display: grid;
    grid-template-rows: 70px 40px 30px;
    color: #000;
    width: 600px;
    height: 150px;
    margin-top: 10px;
    overflow: hidden;

    border-radius: 5px 5px 0 0;
    label{
        font-weight: 600;
    }
`
export const ButtonDeleteBox = styled.button`
    width: 100px;
    height: 30px;

    font-weight: 800;
    font-size: 14px;

    cursor: pointer;

    color: #000000;
    background-color: #ffffff;

    &:hover{
        transition: 0.4s;
        background-color: #fff;
        color: #ff0000;
    }
`
export const InfPessoais = styled.article`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #fff;
`

export const InfoDescricaoEndereco = styled.article`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
`

export const InfRodape = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #0f0f0f;
`
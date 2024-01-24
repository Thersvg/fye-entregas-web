import styled from "styled-components";

/* export const ContainerPedido = styled.section`
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
` */

export const DivBody = styled.div`
    display: flex;
    width: 610px;
    justify-content: center;
    flex-direction: column;

    label{
        font-weight: 700;
    }

    p{
        font-weight: 400;
    }

`
export const ContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 19rem;
    background-color: #eeeeee;
    color: #000;
    border-radius: 15px;
    margin-top: 15px;
`

export const HeaderCard = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: center;

    label{
        margin-top: 5px;
    }
`
export const ContainerCard = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    label{
        margin-left: 5px;
        font-size: 14px;
    }
`
export const RodapeCard = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: space-between;
    overflow: hidden;

    label{
        margin-left: 5px;
        font-size: 14px;
    }

    button{
        width: 90px;
        height: 30px;
        font-size: 14px;
        font-weight: 700;
        background-color: transparent;
        cursor: pointer;
        color: #000;
        transition: 0.4s;

        &:hover{
            color: #df0000;
        }
    }

`

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 3px;
    height: 10rem;
    overflow: hidden;
    background-color: #eeeeee;
    color: #000;
    border-radius: 15px;

    label{
        margin-left: 5px;
        font-size: 14px;
    }

`

export const CardHistorico = styled.div`
    overflow-y: scroll;
    &::-webkit-scrollbar{
        background-color: #fff;
    }
`
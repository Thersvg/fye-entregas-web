import styled from "styled-components"

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
            color: #00610d;
        }
    }

`

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 3px;
    height: 12rem;
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
import styled from "styled-components";

export const DivBody = styled.div`
    display: flex;
    width: 300px;
    justify-content: center;
    flex-direction: column;

    p{
        font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
    height: auto; 
    width: 100%;

    p{
        font-size: 7px;
    }

    label{
        font-size: 0%;
    }

    footer{
        display: flex;
        flex-direction: row;
    }

    img{
        width: 10px !important;
        height: 10px !important;
    }
  }
   
`
export const ContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 16rem;
    background-color: var(--thema-fundo-principal);
    color: var(--thema-fonte-principal);
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 0px 5px 21px 0px rgba(0,0,0,0.1);

`

export const HeaderCard = styled.div`
    display: flex;
    width: 90%;
    height: 20px;
    justify-content: space-between;
    align-items: center;

    p{
        display: flex;
        align-items: center;
    }

    img{
        width: 15px;
        height: 15px;
        margin-left: 5px;
    }

`
export const ContainerCard = styled.div`
    display: flex;
    width: 90%;
    height: 60%;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
        width: 100%;
        height: auto;
    }

    img{
        width: 14px;
        height: 14px;
    }

    label{
        font-size: small;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    p{
        margin-left: 3px;
    }
`
export const RodapeCard = styled.div`
    display: flex;
    width: 90%;
    height: 15%;
    justify-content: space-between;
    overflow: hidden;

    footer{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;

        label{
        display: flex;
        flex-direction: row;
        font-size: small;

        img{
            width: 14px;
            height: 14px;
        }

        p{
        margin-left: 3px;
        }
    }
    }

    button{

        width: 20px;
        position: relative;
        height: 18px;
        font-size: 12px;
        background-color: transparent;
        cursor: pointer;
        color: var(--thema-fonte-principal);
        transition: 0.4s;

        img{
        width: 100%;
        height: 100%;
    }

    &:hover::before {
      content: "Pedido entregue";
      width: 200px;
      height: 20px;
      position: absolute;
      background-color: transparent;
      color: var(--thema-fonte-principal);
      padding: 5px;
      top: 0px;
      left: 100%;
      transform: translateX(-90%);
      z-index: 1;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
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
    background-color: var(--thema-fundo-principal);
    color: var(--thema-fonte-principal);
    border-radius: 15px;
    margin-top: 4px;
    box-shadow: 0px 5px 21px 0px rgba(0,0,0,0.1);
    gap: 10px;

    label{
        display: flex;
        align-items: center;
    }

    p{
        display: flex;
        align-items: center;
        margin-left: 3px;
    }

    img{
        width: 15px;
        height: 15px;
        margin-left: 5px;
    }

    h3{
        margin-left: 5px;
        font-size: 11px;
    }

`

export const CardHistorico = styled.div`
    overflow-y: scroll;
    &::-webkit-scrollbar{
        background-color: var(--thema-fundo-principal);
    }
`
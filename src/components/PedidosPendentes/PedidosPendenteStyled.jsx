import styled from "styled-components";

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
    background-color: var(--thema-fundo-secundario);
    color: var(--thema-fonte-principal);
    border-radius: 15px;
    margin-top: 20px;

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
        width: 25px;
        position: relative;
        height: 25px;
        font-size: 14px;
        font-weight: 700;
        background-color: transparent;
        cursor: pointer;
        color: var(--thema-fonte-principal);
        transition: 0.4s;
        margin-right: 10px;
        margin-top: 10px;

        img{
        width: 100%;
        height: 100%;
    }

    &:hover::before {
      content: "Excluir entrega";
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
    @media only screen and (max-width: 600px) {
    flex-direction: column; /* Alteração para coluna em telas pequenas */
    height: auto; /* Ajuste a altura conforme necessário */
  }
`

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 3px;
    height: 8rem;
    overflow: hidden;
    background-color: var(--thema-fundo-secundario);
    color: var(--thema-fonte-principal);
    border-radius: 15px;
    margin-top: 2px;

    label{
        margin-left: 5px;
        font-size: 14px;
    }

`

export const CardHistorico = styled.div`
    overflow-y: scroll;
    &::-webkit-scrollbar{
        background-color: var(--thema-fundo-principal);
    }
`
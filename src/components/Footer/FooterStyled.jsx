import styled from "styled-components"

export const ContainerFooter = styled.footer`
    background-color: var(--thema-fundo-secundario);
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    width: 100%;
    height: 40px;
    align-items: center;
    color: var(--thema-fonte-principal);

    position: fixed;
    bottom: 0;
    z-index: 1;

    h3{
        font-size: 14px;
    }

    button{
        width: 90px;
        position: relative;
        height: 40px;
        font-weight: 800;
        font-size: 16px;
        color: var(--thema-fundo-principal);
        background-color: var(--thema-principal);
        cursor: pointer;
        transition: 0.4s;
        border-radius: 5px;

        img{
            margin-top: 3px;
            width: 25px;
            height: 30px;
        }

/*         &:hover::before {
        content: "Criar entrega";
        width: 200px;
        height: 20px;
        position: absolute;
        background-color: transparent;
        color: #fff;
        padding: 5px;
        top: -80%;
        left: 100%;
        transform: translateX(-70%);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        }

        &:hover::before {
        opacity: 1;
        } */

        &:hover{
            color: var(--thema-fundo-principal);
            background-color: var(--thema-terciario); 
        }
    }

`
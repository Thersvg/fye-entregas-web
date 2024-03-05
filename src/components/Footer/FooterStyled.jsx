import styled from "styled-components"

export const ContainerFooter = styled.footer`
    background-color: var(--thema-fundo-secundario);
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 40px;

    position: fixed;
    bottom: 0;
    z-index: 1;

    @media only screen and (max-width: 600px) {
        div{
            display: flex;
            width: 100%;
        }
    } 

`
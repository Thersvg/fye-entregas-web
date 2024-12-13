import styled from "styled-components"

export const ButtonSpace = styled.button`
    background-color: var(--thema-principal);
    border: none;
    outline: none;
    padding: 5px;
    color: var(--thema-fundo-principal);
    transition:  all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    width: 100px;
    height: 35px;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover{
        background-color: var(--thema-terciario);
    }
`
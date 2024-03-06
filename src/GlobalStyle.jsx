import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

:root{
    --thema-principal: #03bb85;
    --thema-secundario: #04b3ba;
    --thema-terciario: #04b3ba;

    --thema-fundo-principal: #fff;
    --thema-fundo-secundario: #eeeeee;
    --thema-fundo-terciario: #dbdbdb;

    --thema-fonte-principal: #000;

    --thema-grandiente-principal: linear-gradient(90deg, rgba(3,187,133,1) 0%, rgba(4,179,186,1) 100%);

}

*{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    border: none;
}

body{
    width: 100%;
    height: 100vh;
    background-color:var(--thema-fundo-principal);
}
`
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

:root{
    --thema-principal: #243b55;
    --thema-secundario: #243b55;
    --thema-terciario: #4d75a3;

    --thema-fundo-principal: #fff;
    --thema-fundo-secundario: #eeeeee;
    --thema-fundo-terciario: #cccccc;

    --thema-fonte-principal: #000;

    --thema-grandiente-principal: linear-gradient(to right, #141e30, #243b55);

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
import styled from "styled-components"

export const AuthContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: var(--thema-grandiente-principal);

    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        div{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

        }

        footer{
            display: flex;
            flex-direction: column;
            width: 100%;

            justify-content: center;
            align-items: center;
            gap: 4rem;
            margin-top: 15px;
        }

    }

    @media only screen and (max-width: 768px) {
        form {
            width: 100%; /* Reduzindo a largura do formulário em telas menores */
        }
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--thema-fundo-principal);

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 250px;
            height: 100px;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 80%;
        display: flex;
        align-items: center;
    }
`

export const ErrorSpan = styled.div`
    display: flex;   
`
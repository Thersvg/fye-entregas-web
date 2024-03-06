import styled from "styled-components"

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    background: var(--thema-grandiente-principal);
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 500px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--thema-fundo-principal);

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

    }

    @media only screen and (max-width: 600px) {
        
        
        
        form {
            width: 50%; 
        }
    }

`
export const ErrorSpan = styled.div`
    display: flex;
    font-size: 12px;
`
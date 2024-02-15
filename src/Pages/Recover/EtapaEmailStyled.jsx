import styled from "styled-components";

export const InputEmail = styled.input`
    padding: 1rem;
    border-radius: 0;
    background: none;
    outline: none;
    border-bottom: 1px solid var(--thema-fonte-principal);
`
export const AuthContainerEmail = styled.div`
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
            justify-content: space-between;
            align-items: center;
        }
    }
`

export const SectionEmail = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--thema-fundo-principal);

    h1{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`
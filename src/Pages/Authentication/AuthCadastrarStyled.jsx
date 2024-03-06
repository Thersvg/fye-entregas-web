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
    height: 550px;
    padding: 40px;
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--thema-fundo-principal);

    h2{
        font-size: 1.3rem;
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
        width: 70%;
        height: 70%;
        display: flex;
        align-items: center;

        form{
            width: 100%;
            height: auto;
        }

        div{

            img{
                width: 180px;
                height: 80px;
            }
        }
    }

`
export const ErrorSpan = styled.div`
    display: flex;
    font-size: 12px;
`
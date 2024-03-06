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

    @media only screen and (max-width: 600px) {
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;

        form{
            width: 100%;
            height: 100%;
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
`
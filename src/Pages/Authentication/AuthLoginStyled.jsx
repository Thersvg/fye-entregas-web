import styled from "styled-components"

export const AuthContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: linear-gradient(to right, #141e30, #243b55);

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
            width: 100%;
            justify-content: center;
            margin-top: 15px;
            p{
               font-size : 13px;
               font-weight: 700px;
               color: #ff3333;
            }
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
    background-color: #fff;

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

`

export const ErrorSpan = styled.div`
    display: flex;   
`
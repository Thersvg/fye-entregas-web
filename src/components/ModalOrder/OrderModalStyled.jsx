import styled from "styled-components";

export const FormOrder = styled.form`
    display: flex;
    width: 500px;
    height: 400px;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--thema-fundo-terciario);
    padding: 20px;
    z-index: 1;
    border-radius: 15px;
    gap: 3px;
    align-items: flex-start;

    input{
        height: 60px;
        width: 100%;
        border-radius: 0;
        background: none;
        outline: none;
        border-bottom: 1px solid var(--thema-fonte-principal);
    }

    section{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    footer{
        display: flex;
        width: 100%;
        justify-content: space-between;

    button{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        margin-top: 10px;
        background-color: transparent;

        img{
        width: 100%;
        height: 100%;
    }

        &:hover{
            background-color: transparent;
        }
    }


}
`

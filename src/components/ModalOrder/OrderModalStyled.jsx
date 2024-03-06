import styled from "styled-components";

export const FormOrder = styled.form`
    display: flex;
    width: 450px;
    height: 450px;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--thema-fundo-principal);
    padding: 10px;
    z-index: 1;
    border-radius: 15px;
    gap: 5px;
    align-items: center;
    box-shadow: 0px 5px 21px 0px rgba(0,0,0,0.1);

    input{
        height: 60px;
        width: 80%;
        border-radius: 0;
        background: none;
        outline: none;
        border-bottom: 1px solid var(--thema-fonte-principal);
    }

    div {

    display: flex;
    width: 80%;

    label{
        font-size: medium;
    }

    }

    select{
       width: 80%;
       height: 30px;
       margin-top: 5px;
    }

    section{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    footer{
        display: flex;
        width: 90%;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

    button{
        width: 20px;
        height: 20px;
        background-color: transparent;
        cursor: pointer;

        img{
        width: 20px;
        height: 20px;
    }

        &:hover{
            background-color: transparent;
        }
    }
}
@media only screen and (max-width: 600px) {
        width: 70%; 
        height: auto; 

        input{
        height: 40px;
    }
    }
`

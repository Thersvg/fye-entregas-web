import styled from "styled-components"

export const ContainerFooter = styled.footer`
    background-color: #eeeeee;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    width: 100%;
    height: 40px;
    align-items: center;
    color: #000;

    position: fixed;
    bottom: 0;
    z-index: 1;

    button{
        width: 130px;
        height: 40px;
        font-weight: 800;
        font-size: 16px;
        color: #fff;
        background-color: #4b0082;
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            color: #4b0082;
            background-color: #fff; 
        }
    }

`
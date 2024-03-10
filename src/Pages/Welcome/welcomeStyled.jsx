import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`
export const EntryTop = styled.div`
    width: 100%;
    height: 10%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, rgba(3,187,133,1) 0%, rgba(4,179,186,1) 100%); 
    position: absolute;
    z-index: 1;
    top: 0;
`

export const ContainerContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 10%;
`

export const SubscribeContainer = styled.div`
    display: flex;
    background-color: #03bb85;
    width: 40%;
    height: 50%;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2%;
`
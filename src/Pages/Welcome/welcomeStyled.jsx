import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        img{
        }
    }
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
    background: linear-gradient(90deg, rgba(3,187,133,1) 0%, rgba(4,179,186,1) 100%); 
    opacity: 90%;
    width: 40%;
    height: 50%;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2%;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 60%; 
        padding: 5px;
        gap: 20px;

        h1{
            display: flex;
            text-align: center;
        }

        p{
            display: flex;
            text-align: center;
        }
    }
`
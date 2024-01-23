import styled from "styled-components";


export const ContainerProfile = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 88vh;
    overflow: hidden;
`

export const DadosEmpresaProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const PictureLogo = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    justify-content: center;
    align-items: center;

    img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 2px solid #fff;
        cursor: pointer;
    }
`
export const DadosPessoais = styled.div`
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 200px;

    label{
        font-size: 18px;
        font-weight: 800;
        color: #fff;
    }

    p{
        color: #fff; 
    }

    div{
        justify-content: center;
        padding: 20px;
        display: flex;
        background-color: #212121;
        flex-direction: column;
    }
`


export const ProfileDadosHistoricoPedidosProfile = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const ProfileAllPedidosEntregues = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #212121;
    overflow: hidden;

    div{
        overflow-y: scroll;
        display: flex;
        justify-content: center;

        &::-webkit-scrollbar{
        background-color: #212121;
    }
    }
`
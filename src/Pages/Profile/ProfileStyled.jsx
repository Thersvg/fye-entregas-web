import styled from "styled-components";


export const ContainerProfile = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height:  93.3vh;
    overflow: hidden;
    background-color: #fff;

`

export const DadosEmpresaProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
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
        cursor: pointer;
    }
`
export const DadosPessoais = styled.div`
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    height: 200px;
    background-color: #eeeeee;
    border-radius: 15px;

    label{
        font-size: 14px;
        font-weight: 700;
        color: #000;
    }

    p{
        color: #000; 
    }

    div{
        justify-content: center;
        padding: 20px;
        display: flex;
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
    align-items: center;
    background-color: #fff;

    /*     
    overflow-y: scroll;
    &::-webkit-scrollbar{
    background-color: #a5a5a5;
    } */
`
export const MsgRetorno = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
export const AltDados = styled.div`
    display: flex;
    width: 50%;

    div{
        display: flex;
        position: relative;
        top: -100%;
        justify-content: flex-end;
        width: 100%;

        button{
        width: 25px;
        height: 25px;
        cursor: pointer;

        img{
            width: 100%;
            height: 100%;
        }
    }

    }
`
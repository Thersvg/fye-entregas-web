import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:  auto;
    background-color: var(--thema-fundo-principal);

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

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
    flex-direction: column;
    width: 100%;
    height: 250px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }

    form{

        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;

        input[type="file"]{
            cursor: pointer;

            &::before{
            }
        }

        button{
            cursor: pointer;
            background-color: transparent;
            width: 30px;
            height: 30px;

            img{
                width: 60%;
                height: 60%;
            }

        }
    }
`
export const DadosPessoais = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
    height: 200px;
    background-color: var(--thema-fundo-secundario);
    border-radius: 15px;
    margin-bottom: 20px;

    label{
        font-size: small;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div{
        justify-content: center;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        img{
            width: 15px;
            height: 15px;
        }

        p{
            margin-left: 3px;
        }

        footer{
            display: flex;
            width: 100%;
            height: 20px;
            justify-content: flex-end;

            img{
                width: 20px;
                height: 20px; 
                cursor: pointer;
            }

        }
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: auto; 
        padding: 5px;
    }
`
export const ProfileAllPedidosEntregues = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const MsgRetorno = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    
`

export const HistoryOrdersProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    gap: 15px;
    height: auto;
    justify-content: center;
    padding: 5px;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color: var(--thema-principal);
    width: 100%;
    height: 50px;
    justify-content: center;
`
export const ContainerNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 100%;

    div{
        display: flex;
        flex-direction: wrap;
        align-items: center;
        height: 100%;

        p{
            margin-right: 10px;
            color: var(--thema-fundo-principal);
        }
    }
`
export const ImageLogo = styled.img`
    width: 120px;
    height: 80%;
    cursor: pointer;
`

export const BoasVindasLocalizacao = styled.div`
    display: flex;
    flex-direction: wrap;
    align-items: center;
    height: 100%;
    margin-right: 10px;

    h4{
        color: var(--thema-fundo-principal);
        
    }
`

export const ProfileLogoEmpresa = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 30px;

    a{
        height: 30px;
    }

`
export const ImagePerfilUser = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const Exit = styled.div`
    display: flex;
    margin-left: 10px;
    height: 100%;

    img{
        width: 30px;
        height: 23px;
        cursor: pointer;
    }

`
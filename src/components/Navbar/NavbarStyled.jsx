import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color: var(--thema-principal);
    width: 100%;
    height: 50px;
    justify-content: center;
    align-content: center;
`
export const ContainerNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;

    div{
        display: flex;
        flex-direction: wrap;
        align-items: center;
        height: 100%;

        @media only screen and (max-width: 600px) {
        
        div {
        justify-content: center;
        align-items: center;
        width: 100%; 
        }
        }
    }
`
export const ImageLogo = styled.img`
    width: 110px;
    cursor: pointer;
`

export const ProfileLogoEmpresa = styled.div`
    display: flex;
    align-items: center;
    height: 30%;
    width: 70%;

    a{
        height: 30px;
        width: 30px;
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
    height: 30%;
    width: 30%;

    img{
        width: 18px;
        height: 17px;
        cursor: pointer;
    }

`
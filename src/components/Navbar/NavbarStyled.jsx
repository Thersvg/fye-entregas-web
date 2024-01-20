import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color: #4b0082;
    width: 100%;
    height: 90px;
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

        p{
            margin-right: 10px;
            color: #fff;
        }
    }
`

export const ImageLogo = styled.img`
    width: 180px;
    height: 80%;
    cursor: pointer;
`
export const ImagePerfilUser = styled.img`
    color: #Fff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    cursor: pointer;
    border: 2px solid #fff;

    &:hover{
        transition: 0.4s;
        border: 2px solid #00ccff;
    }
`

export const BoasVindasLocalizacao = styled.div`
    display: flex;
    flex-direction: column;

    img{
        width: 20px;
        height: 19px;
        margin-right: 5px;
    }
`
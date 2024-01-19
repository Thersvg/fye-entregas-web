import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color: #4b0082;
    width: 100%;
    height: 90px;
    justify-content: center;
    position: relative;
    z-index: 1;
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
        border: 2px solid #d3d3d3;
    }
`
export const ContainerNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 90px;
`
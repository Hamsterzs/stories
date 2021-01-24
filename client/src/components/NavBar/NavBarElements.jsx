import styled from "styled-components"
import { ReactComponent as Arrow } from "../../images/Arrow.svg"

export const NavBar = styled.nav`
    background-color: #373A40;
    width: 100vw;
    height: 100px;
    margin: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    `
export const NavWrapper = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    `

export const Logo = styled.h1`
    color:#19D3DA;
    font-family:"Trocchi", "sans";
    letter-spacing: 4px;
    font-size: 2.7rem;
    margin: 0;
    font-weight: normal;
`

export const ArrowContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate( -17.5px , -36px)
`

export const ArrowStyled = styled(Arrow)`
    fill: white;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    top: 100%;
    cursor: pointer;
    transform: rotate(${({ toggle }) => toggle ? "90deg" : "-90deg"});
    transition: all .3s linear;
`

export const UserContainer = styled.div`
    width: 60px;
    height: 60px;
    background-color:${({ user }) => user.username ? "#19D3DA" : "#686D76"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const UserStyle = {
    width: "45px",
    height: "45px",
    fill: "white"
}

export const ExtendedNav = styled.div`
    width: 100vw;
    height: 45vh;
    background-color: #373A40; 
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(${({ toggle }) => toggle ? "100px" : "calc(-100% - 100px)"});
    transition: .5s;
`


import styled from "styled-components"
import { ReactComponent as Arrow } from "../../images/Arrow.svg"
import { ReactComponent as User } from "../../images/User.svg"

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
    @media (max-width:768px){
        height:110px;
    }
    `
export const NavWrapper = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media (max-width: 1024px) {
        width: 70vw;
    }
    @media (max-width: 768px) {
        width: 90vw;
    }
    `

export const Logo = styled.h1`
    color:#19D3DA;
    font-family:"Trocchi", "sans";
    letter-spacing: 4px;
    font-size: 2.8rem;
    margin: 0;
    margin-bottom: 3px;
    font-weight: normal;
    @media (max-width: 768px){
        font-size: 2.5rem;
    }
    @media (max-width: 650px){
        font-size: 2.2rem;
    }
    @media (max-width: 400px){
        font-size: 1.8rem;
    }
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
    @media (max-width: 768px){
        width: 30px;
        height: 30px;
    }
`

export const UserContainer = styled.div`
    width: 55px;
    height: 55px;
    background-color:${({ user }) => user.username ? "#19D3DA" : "#686D76"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0;
    cursor: pointer;
    @media (max-width: 768px){
        margin-right: 10%;
    }
    @media (max-width: 400px){
        width: 47px;
        height: 47px;
    }
`

export const UserStyled = styled(User)`
    width: 40px;
    height: 40px;
    fill: white;
    @media (max-width: 400px){
        width: 35px;
        height: 35px;
    }
`

export const ExtendedNav = styled.div`
    width: 100vw;
    height: 45vh;
    background-color: #373A40; 
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(${({ toggle }) => toggle ? "100px" : "calc(-100% - 100px)"});
    transition: .5s;
    @media (max-width: 350px){
        height: 60vh;
    }
`


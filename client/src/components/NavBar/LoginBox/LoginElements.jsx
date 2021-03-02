import styled from "styled-components"

export const LoginBox = styled.div`
    width: 400px;
    height: 350px;
    background-color: #686D76;
    border: 2px #19D3DA solid;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 450px){
        width: 300px;
        height: 250px;
    }
    @media (max-width: 350px){
        width: 250px;
        height: 200px;
    }
`

const buttonWidth = "50%"
const buttonHeight = "42px"

export const LoginButton = styled.button`
    cursor: pointer;
    width: ${buttonWidth};
    height: ${buttonHeight};
    background-color: white;
    border-radius: 7px;
    margin: 15px;
    border: none;
    font-size: 1.7rem;
`

export const Input = styled.input`
    width: ${buttonWidth};
    height: ${buttonHeight};
    background-color: white;
    border: none;
    font-size: 1.5rem;
    margin: 15px;
    border-radius:5px;
`

export const BackButton = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: white;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: #686D76;
    cursor: pointer;
`
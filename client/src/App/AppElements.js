import styled from "styled-components"

export const StoriesContainer = styled.div`
    width: 100vw; 
    height: 87vh; 
    position: absolute; 
    top: 100px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`
export const AddButton = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    right: 15vw;
    top: 5vh;
    border: solid 2px #19D3DA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: grey;
    cursor: pointer;
`
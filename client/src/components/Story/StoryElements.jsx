import styled from "styled-components"

export const StoryCard = styled.div`
    box-sizing: border-box;
    width: 50vw;
    max-height: 80%;
    background-color: #FFFFFF;
    border: solid #19D3DA 4px;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 0;
   
    @media (max-width: 1024px) {
        width: 70vw;
    }
    @media (max-width: 768px) {
        width: 90vw;
    }

`

export const Title = styled.div`
    text-align: center;
    font-size: 2rem;
    color: #19D3DA;
    font-weight: bold;
`

export const Paraghraph = styled.div`
    font-size: 1.5rem;
    width: 85%;
    height: 95%;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        border-radius: 5px;
        width: 10px;
    }
    &::-webkit-scrollbar-track {
	    background-color: #acacac;
        position: absolute;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, rgba(47,68,249,1) 0%, rgba(223,79,191,1) 100%);
        border-radius: 10px;
    }
`
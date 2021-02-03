import React from 'react'
import { StoryCard, Paraghraph, Title } from "./StoryElements"

const Story = ({ title, text }) => {
    return (
        <StoryCard>
            <Title>{title}</Title>
            <Paraghraph>{text}</Paraghraph>
        </StoryCard>
    )
}

export default Story

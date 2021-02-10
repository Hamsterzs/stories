import React, { useState, useContext } from 'react'
import { StoryCard, Paraghraph, Title } from "./StoryElements"
import { createStory, deleteStory } from "../../apiCalls"
import { GlobalContext } from "../../context"


const Story = ({ title, text, storyUser, id }) => {
    const [form, setForm] = useState({ title: "", story: "" })
    const { user } = useContext(GlobalContext)

    const deleteButton = user.username === storyUser ? <button onClick={() => deleteStory(id)}>Delete</button> : ""

    const render = title && text ? (
        <>
            {deleteButton}
            <Title>{title}</Title>
            <Paraghraph>{text}</Paraghraph>
        </>
    ) :
        (
            <>
                <input type="text" onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} />
                <textarea name="" id="" cols="30" rows="10" onChange={e => setForm({ ...form, story: e.target.value })} value={form.story}></textarea>
                <button onClick={() => createStory(form.title, form.story)}>Submit</button>
            </>
        )

    return (
        <StoryCard>
            {render}
        </StoryCard>
    )
}

export default Story

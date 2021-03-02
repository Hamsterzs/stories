import { useEffect, useContext, useState } from "react"
import { Story } from "../components"
import { GlobalContext } from "../context"
import { getStories, getUser } from "../apiCalls"

const AppLogic = () => {
    const { user, setUser, content, setContent } = useContext(GlobalContext)

    const [createToggle, setCreateToggle] = useState(false)

    useEffect(() => {
        const callGetUser = async () => {
            let response = await getUser()
            setUser(response?.data)
        }

        const setStories = async () => {
            let response = await getStories()
            console.log(response);
            setContent(response.data)
        }

        callGetUser()
        setStories()

    }, [setUser, setContent])

    const renderStories = () => {
        console.log(content);
        if (!content.length) return
        return content.map((story, index) => <Story title={story.title} text={story.story} storyUser={story.user} id={story._id} key={`Story${index}`}></Story>)
    }

    const createStoryView = () => {
        if (!createToggle) {
            const newStory = <Story></Story>
            setContent([newStory, ...content])
            setCreateToggle(true)
            return
        } else {
            console.log("in here");
            const newContent = content
            newContent.splice(0, 1)
            console.log(newContent);
            setContent(newContent)
            setCreateToggle(false)
        }
    }



    return { user, setUser, renderStories, createStoryView }
}

export default AppLogic
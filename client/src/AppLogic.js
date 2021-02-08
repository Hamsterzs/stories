import { useEffect, useContext, useState } from "react"
import { Story } from "./components"
import { GlobalContext } from "./context"

const AppLogic = () => {
    const { user, setUser, content, setContent } = useContext(GlobalContext)

    const [createToggle, setCreateToggle] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            let response = await (await fetch("/api/get-user")).json()

            if (response.user) {
                setUser(response.user)
                return
            } else {
                return
            }
        }

        const getStories = async () => {
            let response = await (await fetch("/api/stories")).json()
            console.log(response);
            if (response.stories.length > 0) {
                setContent(response.stories)
                return
            } else {
                return
            }
        }

        getUser()
        getStories()

    }, [setUser, setContent])

    const renderStories = () => {
        return content.map(story => <Story title={story.title} text={story.story} storyUser={story.user} id={story._id}></Story>)
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
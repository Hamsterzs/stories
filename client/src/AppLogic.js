import { useEffect, useContext } from "react"
import { GlobalContext } from "./context"
import { Story } from "./components"

const AppLogic = () => {
    const { user, setUser, content, setContent } = useContext(GlobalContext)

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

            if (response.length > 0) {
                setContent(response)
                return
            } else {
                return
            }
        }

        getUser()
        getStories()

    }, [setUser, setContent])

    const renderStories = () => {
        return content.map(story => <Story title={story.user} text={story.story}></Story>)
    }

    return { user, setUser, renderStories }
}

export default AppLogic
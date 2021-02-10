import { useState, useContext } from 'react';
import { GlobalContext } from "../../context";
import { getStories, getUserStories } from "../../apiCalls"

export const Logic = () => {
    const [toggle, setToggle] = useState(false)

    const { user, setContent } = useContext(GlobalContext)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    const homeFunction = async () => {
        const response = await getStories()
        setContent(response.data)
    }

    const userFunction = async () => {
        if (!user.username) changeToggle()
        else {
            const response = await getUserStories(user.username)
            console.log(response);
            setContent(response.data)
        }
        return
    }

    return { toggle, changeToggle, user, userFunction, homeFunction }
}

export default Logic
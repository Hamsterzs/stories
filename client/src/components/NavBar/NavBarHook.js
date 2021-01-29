import { useState, useContext } from 'react';
import { GlobalContext } from "../../context"

export const Logic = () => {
    const [toggle, setToggle] = useState(false)

    const [user] = useContext(GlobalContext)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    const userFunction = () => {
        if (!user.username) changeToggle()
        else console.log("not yet implemented")
        return
    }

    return { toggle, changeToggle, user, userFunction }
}

export default Logic
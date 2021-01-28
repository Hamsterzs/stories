import { useState, useContext } from 'react';
import { GlobalContext } from "../../context"

export const Logic = () => {
    const [toggle, setToggle] = useState(false)

    const [user] = useContext(GlobalContext)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    return { toggle, changeToggle, user }
}

export default Logic
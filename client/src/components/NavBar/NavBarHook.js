import { useState } from 'react';

export const Logic = () => {
    const [toggle, setToggle] = useState(false)

    const changeToggle = () => {
        console.log(toggle);
        setToggle(!toggle)
    }

    return { toggle, changeToggle }
}

export default Logic
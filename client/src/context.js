import { createContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [content, setContent] = useState([])

    return (
        <GlobalContext.Provider value={{ user, setUser, content, setContent }}>
            {children}
        </GlobalContext.Provider>
    )

}
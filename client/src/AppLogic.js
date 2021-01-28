import { useEffect, useContext } from "react"
import { GlobalContext } from "./context"

const AppLogic = () => {
    const [user, setUser] = useContext(GlobalContext)

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

        getUser()

    }, [setUser])

    return { user, setUser }
}

export default AppLogic
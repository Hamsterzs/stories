import { useEffect, useContext } from "react"
import { GlobalContext } from "./context"

export default () => {
    const [user, setUser] = useContext(GlobalContext)

    useEffect(() => {
        const getUser = async () => {
            let response = await (await fetch("/api/get-user")).json()
            console.log(response);

            if (response.user) {
                setUser(response.user)
                return
            } else {
                return
            }
        }

        getUser()

    }, [])

    return { user, setUser }
}

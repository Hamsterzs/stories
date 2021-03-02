import { useState, useContext } from 'react'
import { signUp, signIn, signOut } from "../../../apiCalls"
import { GlobalContext } from "../../../context"

const LoginLogic = () => {
    const [operation, setOperation] = useState("home")
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const { user, setUser } = useContext(GlobalContext)

    const authenticate = async () => {
        let response
        if (operation === "logIn") {
            response = await signIn(credentials.username, credentials.password)
        } else {
            response = await signUp(credentials.username, credentials.password)
        }
        if (response.user) {
            setUser(response.user)
        }
    }

    const logOut = async () => {
        await signOut()
        setUser({})
    }

    return { operation, setOperation, setCredentials, authenticate, credentials, logOut, user }

}

export default LoginLogic
import { useState, useContext } from 'react'
import { signUp, signIn, signOut } from "../../apiCalls"
import { GlobalContext } from "../../context"

const LoginLogic = () => {
    const [operation, setOperation] = useState("home")
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [user, setUser] = useContext(GlobalContext)

    const authenticate = async () => {
        let user
        if (operation === "logIn") {
            user = await signIn(credentials.username, credentials.password)
        } else {
            user = await signUp(credentials.username, credentials.password)
        }
    }

    const logOut = async (setUser) => {
        const response = await signOut()
    }

    return { operation, setOperation, setCredentials, authenticate, credentials, logOut, user }

}

export default LoginLogic
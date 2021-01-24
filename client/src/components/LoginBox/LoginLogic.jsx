import { useState } from 'react'
import { signUp, signIn } from "../../apiCalls"

const LoginLogic = () => {
    const [operation, setOperation] = useState("home")
    const [credentials, setCredentials] = useState({ username: "", password: "" })

    const authenticate = async () => {
        let user
        if (operation === "logIn") {
            user = await signIn(credentials.username, credentials.password)
        } else {
            user = await signUp(credentials.username, credentials.password)
        }
        console.log(user);
    }

    return { operation, setOperation, setCredentials, authenticate, credentials }

}

export default LoginLogic
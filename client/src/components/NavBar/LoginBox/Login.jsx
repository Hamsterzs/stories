import React from 'react'
import LoginLogic from "./LoginLogic"
import { LoginBox, LoginButton, Input, BackButton } from "./LoginElements"

const Login = () => {
    const { operation, setOperation, authenticate, setCredentials, credentials, logOut, user } = LoginLogic()

    const loginForm = {
        home: (
            <>
                <LoginButton onClick={() => setOperation("logIn")}>Log-in</LoginButton>
                <LoginButton onClick={() => setOperation("signUp")}>Sign-up</LoginButton>
            </>
        ),
        signUp: (
            <>
                <Input placeholder="username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
                <Input placeholder="password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                <LoginButton onClick={authenticate}>Sign-up</LoginButton>
                <BackButton onClick={() => setOperation("home")}>X</BackButton>
            </>
        ),
        logIn: (
            <>
                <Input placeholder="username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
                <Input placeholder="password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                <LoginButton onClick={authenticate}>Log-In</LoginButton>
                <BackButton onClick={() => setOperation("home")}>X</BackButton>
            </>
        ),
        logOut: (
            <LoginButton onClick={logOut}>Log-Out</LoginButton>
        )
    }

    return (
        <LoginBox>
            {user.username ? loginForm["logOut"] : loginForm[operation]}
        </LoginBox>
    )
}

export default Login

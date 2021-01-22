import React from 'react'
import { NavBar as NavBarS, NavWrapper, Logo, UserContainer, } from "./NavBarElements"
import { UserStyle, ExtendedNav, ArrowStyled, ArrowContainer } from "./NavBarElements"
import Login from "../LoginBox/Login"
import { ReactComponent as User } from "../../images/User.svg"
import NavBarHook from "./NavBarHook"

const NavBar = () => {
    const { toggle, changeToggle } = NavBarHook()

    return (
        <>
            <NavBarS>
                <NavWrapper>
                    <Logo>Stories</Logo>

                    <UserContainer>
                        <User style={UserStyle} />
                    </UserContainer>

                    <ArrowContainer>
                        <ArrowStyled toggle={toggle ? 1 : undefined} onClick={changeToggle} />
                    </ArrowContainer>
                </NavWrapper >
            </NavBarS>

            <ExtendedNav toggle={toggle ? 1 : undefined}>
                <Login />
            </ExtendedNav>

        </>
    )
}

export default NavBar

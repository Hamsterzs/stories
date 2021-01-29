import React from 'react'
import { NavBar as NavBarS, NavWrapper, Logo, UserContainer, UserStyled } from "./NavBarElements"
import { ExtendedNav, ArrowStyled, ArrowContainer } from "./NavBarElements"
import Login from "../LoginBox/Login"
import NavBarHook from "./NavBarHook"

const NavBar = () => {
    const { toggle, changeToggle, user, userFunction } = NavBarHook()

    return (
        <>
            <ExtendedNav toggle={toggle ? 1 : undefined}>
                <Login user={user} />
            </ExtendedNav>

            <NavBarS>
                <NavWrapper>
                    <Logo>Stories</Logo>

                    <UserContainer user={user} onClick={userFunction}>
                        <UserStyled />
                    </UserContainer>

                    <ArrowContainer>
                        <ArrowStyled toggle={toggle ? 1 : undefined} onClick={changeToggle} />
                    </ArrowContainer>
                </NavWrapper >
            </NavBarS>
        </>
    )
}

export default NavBar

import * as S from "./styles";
import { NavLink } from "react-router-dom";
import {IoMenu, IoClose} from "react-icons/io5";
import { useState } from "react";


export const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);

    //  console.log(isOpen);

    return (
        <S.NavbarContainer>
            <S.NavBarContent>
                <h1>Todo List</h1>
                <S.MenuMobile onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose/> : <IoMenu/>}
                </S.MenuMobile>
                <S.NavList $isOpen={isOpen}>
                    <S.NavItem>
                        <NavLink to="../" end onClick={() => setIsOpen(false)}>List Tasks</NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <NavLink to="../add-tasks" onClick={() => setIsOpen(false)}>Add Tasks</NavLink>
                    </S.NavItem>
                </S.NavList>
            </S.NavBarContent>
        </S.NavbarContainer>
    );
};
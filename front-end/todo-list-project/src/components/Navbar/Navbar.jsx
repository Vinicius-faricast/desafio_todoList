import * as S from "./styles";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.NavBarContent>
                <h1>Todo List</h1>
                <S.NavList>
                    <S.NavItem>
                        <NavLink to="/" end activeClassName="active">List Tasks</NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <NavLink to="/add-tasks">Add Tasks</NavLink>
                    </S.NavItem>
                </S.NavList>
            </S.NavBarContent>
        </S.NavbarContainer>
    );
};
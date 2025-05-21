import styled from "styled-components";

export const NavbarContainer = styled.header`
    background-color: var(--color-light);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
`;

export const NavBarContent = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1080px;
    max-width: 1080px;
    padding: 1rem 0;
`;

export const NavList = styled.ul`
    display: flex;
    border: 1px solid red;
    gap: 2rem;

`;

export const NavItem = styled.li`
    list-style: none;
`;

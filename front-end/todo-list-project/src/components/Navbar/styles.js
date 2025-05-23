import styled from "styled-components";

export const NavbarContainer = styled.header`
    background-color: var(--color-light);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
`;

export const MenuMobile = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
        font-size: 2rem;
        cursor: pointer;
    }
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
    gap: 2rem;
    
    @media screen and (max-width: 500px) {
        ${({isOpen}) => !isOpen
            ? "display: none"
            : `background: var(--color-light);
                padding: 1rem;
                flex-direction: column;
                position: absolute;
                font-size: 2rem;
                right: 0px;
                top: 3rem;`
            }
    }

`;

export const NavItem = styled.li`
    list-style: none;

    a{
        text-decoration: none;
        color: var(--color-secondary);
        font-weight: 600;

        &:hover{
            color: var(--color-primary);
            border-bottom: 1px solid var(--color-primary);
            transition:all .2s ease-in;
        }

        &.active{
            color: var(--color-alert);
            border-bottom: 1px solid var(--color-alert);
        }
    }
`;

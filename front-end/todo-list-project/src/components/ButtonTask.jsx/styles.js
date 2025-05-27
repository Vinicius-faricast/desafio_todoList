import styled from "styled-components";

export const ButtonTaskContainer = styled.button`
    border: 1px solid var(--color-primary);
    border-radius: .4rem;
<<<<<<< HEAD
    max-width: fit-content;
    
    background: transparent;
    cursor: pointer;

    transition: all .2s ease-in;
=======
    padding: .5rem 1rem;
    background: transparent;
>>>>>>> main

    ${props => props.$emphasis && `
        background-color: var(--color-alert);
        border: none;
    `}
<<<<<<< HEAD

    &:hover{

        background-color: var(--color-primary);
        
        ${props => props.$emphasis && `
            background-color:rgb(207, 42, 42);
        `}
    }
`;

export const ButtonTaskText = styled.p`
    display: flex;
    padding: .5rem 1rem;
    font-size: .8rem;
    color: var(--color-primary);
    transition: all .2s ease-in;

    &:hover{
        color: var(--color-light);
    }

    ${props => props.$emphasis && `color: var(--color-light)`}
=======
`;

export const ButtonTaskText = styled.p`
    font-size: .8rem;
    color: var(--color-primary);

        ${props => props.$emphasis && `color: var(--color-light)`}
>>>>>>> main
`;
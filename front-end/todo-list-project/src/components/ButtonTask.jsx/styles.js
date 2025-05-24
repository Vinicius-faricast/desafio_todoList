import styled from "styled-components";

export const ButtonTaskContainer = styled.button`
    border: 1px solid var(--color-primary);
    border-radius: .4rem;
    padding: .5rem 1rem;
    background: transparent;

    ${props => props.$emphasis && `
        background-color: var(--color-alert);
        border: none;
    `}
`;

export const ButtonTaskText = styled.p`
    font-size: .8rem;
    color: var(--color-primary);

        ${props => props.$emphasis && `color: var(--color-light)`}
`;
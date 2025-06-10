import styled from "styled-components";

export const ListTasksContainer = styled.div`
    max-width: 90%;
    margin: 1rem auto 0 auto;
    padding: 2rem 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 1rem;
    box-shadow: 1px 1px 4px var(--color-middle);
`

export const ListTasksTitle = styled.h1`
    margin-bottom: 1rem;
    color: var(--color-secondary);
    border-bottom: 1px solid var(--color-primary);
`

export const ListTasks = styled.ul`
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;

    @media screen and (max-width: 500px) {
        max-width: 100%;
    }
`


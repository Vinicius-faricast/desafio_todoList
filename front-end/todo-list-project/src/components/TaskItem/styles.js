import styled from "styled-components";

export const TaskItemContainer = styled.div`
    width: fit-content;
    border: 1px solid var(--color-middle);
    border-radius: 1rem;
    padding: 1rem;
`;

export const TaskContentContainer = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    border-bottom: 1px solid var(--color-alert);

`;

export const TaskTitle = styled.h2`
    color: var(--color-alert);
`;

export const TaskButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ResponsibleContent = styled.p`
    padding: .2rem 1.2rem;
    color: var(--color-middle);
    font-size: .8rem;
`;
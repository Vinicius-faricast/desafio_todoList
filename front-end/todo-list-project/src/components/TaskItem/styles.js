import styled from "styled-components";

export const TaskItemContainer = styled.div`
    
    border: 1px solid var(--color-middle);
    border-radius: 1rem;
    padding: 1rem;
`;

export const TaskContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem 1rem;
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
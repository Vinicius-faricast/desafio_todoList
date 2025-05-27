import {styled} from "styled-components";

export const FormTaskContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: end;
`;

export const FormTaskContent = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const FormTaskLabel = styled.label`
    font-size: .8rem;
    color: var( --color-middle);
    padding: .5rem 1rem;
`;

export const FormTaskInput = styled.input`
    border-radius: 1rem;
    border: 1px solid var(--color-middle);
    padding: .5rem 1rem;

    &:focus{
        outline: 1px solid var(--color-primary);
    }

`;
import {styled} from "styled-components";

export const ModalTaskContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalTaskContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;

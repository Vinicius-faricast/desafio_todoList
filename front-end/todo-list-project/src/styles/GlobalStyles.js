import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
        --color-background: #F4F4FF;
        --color-primary: #6246EA;
        --color-secondary: #121214;
        --color-light: #E1E1E6;
        --color-middle: #7C7C8A;
        --color-alert: #E45858;
    }

    html{
        scroll-behavior: smooth;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body{
        width: 100%;
        background-color: var(--color-background);
    }

    main{
        height: 90dvh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
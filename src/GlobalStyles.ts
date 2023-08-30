import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --background-light: #1D1C21;
        --background-dark: #131315;

        --text-light: #EBEBEB;
        --text-dark: #9E9E9E;

        --input-idle: #3A3842;
        --input-hover: #46444F;
        --input-active: #34323B;

        --accent-idle: #68B365;
        --accent-hover: #86CD82;
        --accent-active: #558853;

        --border: #2E2D35;

        scrollbar-color: var(--border) var(--background-light);
    }

    html, body, #root {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        color: var(--text-light);
        background-color: var(--background-light);
    }

    #root {
        display: grid;
    }

    ::-webkit-scrollbar {
        background: var(--background-light);
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--border);
        border-radius: 8px;
    }
`;

export default GlobalStyles;

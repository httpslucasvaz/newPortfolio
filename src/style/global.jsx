import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    html, body {
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: 'Poppins', 'sans-serif';
    -webkit-user-select: none;
    user-select: none;
    font-smooth: antialiased;

    }

    *::-webkit-scrollbar {
    width: 12px;
    }

    *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.secondary};
    }

    *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    }
`;

export default GlobalStyle;

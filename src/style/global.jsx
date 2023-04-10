import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    html, body {
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export default GlobalStyle;
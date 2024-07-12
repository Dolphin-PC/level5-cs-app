import { createGlobalStyle } from "styled-components";
import backgroundStar from "@/assets/images/background-star.png";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        color: white;
        background-image: url(${backgroundStar});
        background-size: contain;

    }


`;

export default GlobalStyle;

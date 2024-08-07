import { createGlobalStyle } from "styled-components";
import backgroundStar from "@/assets/images/background-star.png";

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Do Hyeon', sans-serif;
        color: white;
        background-image: url(${backgroundStar});
        background-size: contain;
    }

    a {
        text-decoration: none;
        color: white;
    }



`;

export default GlobalStyle;

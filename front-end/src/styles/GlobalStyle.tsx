import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.App {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 430px;

    height: calc(var(--vh, 1vh) * 100);
    font-family: "Gowun Dodum", sans-serif;
    }

input, button {
        background-color: transparent;
        border: none;
        outline: none;
        color: inherit;
    }

input {
    font-family: "Gowun Dodum", sans-serif;

}

button {
    font-family: "Gowun Dodum", sans-serif;
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

ol, ul, li {
    list-style: none;
}
`;

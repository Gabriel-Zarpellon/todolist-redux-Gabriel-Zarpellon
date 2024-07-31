import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

ul,
ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
  background-color: transparent;
}

input {
  border: none;
  background-color: transparent;
}

`;

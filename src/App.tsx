import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

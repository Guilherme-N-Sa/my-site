import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Hero
          name="Guilherme Niclewicz"
          title="Senior FullStack Developer"
          description="I build FullStack web applications, specializing in backend development and cloud computing. Graduated in Engineering with a Master's degree in Computational Mathematics."
        />
        <DetailedInfo />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

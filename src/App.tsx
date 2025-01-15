import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import DetailedInfo from './components/DetailedInfo/DetailedInfo';
import SocialBar from './components/SocialBar/SocialBar';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero
        name="Guilherme Niclewicz"
        title="Senior FullStack Developer"
        description="I build FullStack web applications, specializing in backend development and cloud computing. Graduated in Engineering with a Master's degree in Computational Mathematics."
      />
      <SocialBar />
      <DetailedInfo />
    </Layout>
  );
};

export default App; 
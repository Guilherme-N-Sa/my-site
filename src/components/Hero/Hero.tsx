import React from 'react';
import { HeroContainer } from './styles';
import { HeroProps } from './types';
import Navigation from '../Navigation/Navigation';

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  return (
    <HeroContainer>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <Navigation />
    </HeroContainer>
  );
};

export default Hero; 
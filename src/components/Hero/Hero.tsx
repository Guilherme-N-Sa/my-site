import React from 'react';
import { HeroContainer } from './styles';
import { HeroProps } from './types';
import Navigation from '../Navigation/Navigation';
import SocialBar from '../SocialBar/SocialBar';

export default function Hero({
  name,
  title,
  description,
  navigationItems,
  setIsChatOpen,
}: HeroProps) {
  return (
    <HeroContainer>
      <div>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Navigation items={navigationItems} setIsChatOpen={setIsChatOpen} />
      <SocialBar />
    </HeroContainer>
  );
}

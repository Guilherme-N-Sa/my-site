import React from "react";
import { HeroContainer } from "./styles";
import { HeroProps } from "./types";
import Navigation from "../Navigation/Navigation";
import SocialBar from "../SocialBar/SocialBar";

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  return (
    <HeroContainer>
      <div>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Navigation />
      <SocialBar />
    </HeroContainer>
  );
};

export default Hero;

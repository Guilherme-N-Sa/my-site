import React, { useState, useMemo } from "react";
import Hero from "../Hero/Hero";
import DetailedInfo from "../DetailedInfo/DetailedInfo";
import { MainContainer } from "./styles";
import profile from "../../constants/profile.json";
import sections from "../../constants/sections.json";

type Section = keyof typeof sections;

export default function Main() {
  const [currentSection, setCurrentSection] = useState<Section>("about");

  const navigationItems = useMemo(
    () => [
      {
        label: "About",
        href: "#about",
        onClick: () => setCurrentSection("about"),
      },
      {
        label: "Experience",
        href: "#experience",
        onClick: () => setCurrentSection("experience"),
      },
      {
        label: "Projects",
        href: "#projects",
        onClick: () => setCurrentSection("projects"),
      },
    ],
    []
  );

  return (
    <MainContainer>
      <Hero
        name={profile.name}
        title={profile.title}
        description={profile.description}
        navigationItems={navigationItems}
      />
      <DetailedInfo content={sections[currentSection]} isMarkdown={true} />
    </MainContainer>
  );
}

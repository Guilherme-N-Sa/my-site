import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import DetailedInfo from '../DetailedInfo/DetailedInfo';
import { MainContainer } from './styles';

const sections = {
  about: "I'm a Senior FullStack Developer with expertise in web applications, backend development, and cloud computing. My engineering background and Master's in Computational Mathematics allow me to tackle complex technical challenges effectively.",
  experience: "Over 8+ years of experience developing scalable applications using technologies like React, Node.js, and various cloud platforms. Led multiple successful projects and mentored junior developers.",
  projects: "Created various full-stack applications including e-commerce platforms, real-time analytics dashboards, and cloud-based solutions. Contributed to open-source projects and developed custom frameworks for improved development efficiency."
};

type Section = keyof typeof sections;

export default function Main() {
  const [currentSection, setCurrentSection] = useState<Section>('about');

  const navigationItems = [
    { label: 'About', href: '#about', onClick: () => setCurrentSection('about') },
    { label: 'Experience', href: '#experience', onClick: () => setCurrentSection('experience') },
    { label: 'Projects', href: '#projects', onClick: () => setCurrentSection('projects') },
  ];

  return (
    <MainContainer>
      <Hero
        name="Guilherme Niclewicz"
        title="Senior FullStack Developer"
        description="I build FullStack web applications, specializing in backend development and cloud computing. Graduated in Engineering with a Master's degree in Computational Mathematics."
        navigationItems={navigationItems}
      />
      <DetailedInfo content={sections[currentSection]} />
    </MainContainer>
  );
} 
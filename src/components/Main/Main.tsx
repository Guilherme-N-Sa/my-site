import { useState, useMemo } from 'react';
import Hero from '../Hero/Hero';
import DetailedInfo from '../DetailedInfo/DetailedInfo';
import { MainContainer } from './styles';
import profile from '../../constants/profile.json';
import sections from '../../constants/sections.json';

type Section = keyof typeof sections;

export default function Main() {
  const [currentSection, setCurrentSection] = useState<Section>('about');

  const navigationItems = useMemo(() => {
    const navigationItems = [];
    for (const key in sections) {
      navigationItems.push({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        href: `#${key}`,
        onClick: () => setCurrentSection(key as Section),
      });
    }
    return navigationItems;
  }, []);

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

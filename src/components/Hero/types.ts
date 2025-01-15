export interface HeroProps {
  name: string;
  title: string;
  description: string;
  navigationItems?: Array<{
    label: string;
    href: string;
    onClick?: () => void;
  }>;
} 
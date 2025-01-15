import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
}

export interface SocialBarProps {
  links?: SocialLink[];
} 
import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from 'react-icons/fa';
import { SocialContainer, IconLink } from './styles';
import { SocialBarProps, SocialLink } from './types';

const defaultLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: 'https://github.com/guilhermeniclewicz',
    label: 'GitHub Profile'
  },
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/guilhermeniclewicz',
    label: 'LinkedIn Profile'
  },
  {
    icon: FaMedium,
    url: 'https://medium.com/@guilhermeniclewicz',
    label: 'Medium Blog'
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com/guilhermeniclewicz',
    label: 'Instagram Profile'
  }
];

const SocialBar: React.FC<SocialBarProps> = ({ links = defaultLinks }) => {
  return (
    <SocialContainer>
      {links.map((link) => (
        <IconLink
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <link.icon />
        </IconLink>
      ))}
    </SocialContainer>
  );
};

export default SocialBar; 
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from 'react-icons/fa';
import { SocialContainer, IconLink } from './styles';
import { SocialBarProps, SocialLink } from './types';
import socialData from '../../constants/social.json';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
  instagram: FaInstagram,
};

const defaultLinks: SocialLink[] = socialData.socialLinks.map(link => ({
  icon: iconMap[link.platform as keyof typeof iconMap],
  url: link.url,
  label: link.label,
}));

export default function SocialBar({ links = defaultLinks }: SocialBarProps) {
  return (
    <SocialContainer>
      {links.map(link => (
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
}

import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from "react-icons/fa";
import { SocialContainer, IconLink } from "./styles";
import { SocialBarProps, SocialLink } from "./types";

const defaultLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: "https://github.com/Guilherme-N-Sa",
    label: "GitHub Profile",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/guinssa/",
    label: "LinkedIn Profile",
  },
  {
    icon: FaMedium,
    url: "https://medium.com/@guilhermeniclewicz",
    label: "Medium Blog",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/guilhermeniclewicz",
    label: "Instagram Profile",
  },
];

export default function SocialBar({ links = defaultLinks }: SocialBarProps) {
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
}

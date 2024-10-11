import SocialIcon from "./SocialIcon";
import styled from "styled-components";
import LinkedInIcon from "./Icons/LinkedIn";
import TwitterIcon from "./Icons/Twitter";
import InstagramIcon from "./Icons/Instagram";
import GitHubIcon from "./Icons/GitHub";
import MediumIcon from "./Icons/Medium";

const SocialBarWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

export default function SocialBar() {
  return (
    <SocialBarWrapper>
      <SocialIcon
        href="https://www.linkedin.com/in/guinssa/"
        label="LinkedIn"
        title="LinkedIn"
        icon={LinkedInIcon}
      />
      <SocialIcon
        href="https://www.instagram.com/guilhermeniclewicz/"
        label="Instagram"
        title="Instagram"
        icon={InstagramIcon}
      />
      <SocialIcon
        href="https://medium.com/@guilhermeniclewicz/"
        label="Medium"
        title="Medium"
        icon={MediumIcon}
      />
      <SocialIcon
        href="https://github.com/Guilherme-N-Sa"
        label="GitHub"
        title="GitHub"
        icon={GitHubIcon}
      />
    </SocialBarWrapper>
  );
}

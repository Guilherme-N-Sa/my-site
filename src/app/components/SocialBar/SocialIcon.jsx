import React from "react";
import styled from "styled-components";

// Styled Components
const ListItem = styled.li`
  font-size: 12px;
  flex-shrink: 0;
`;

const Link = styled.a`
  display: block;
  color: rgb(148, 163, 184);
  height: 30px;
  &:hover {
    color: #afbccc;
  }
`;

const IconWrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.2s ease-in-out;

  &:hover {
    height: 35px;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

const SocialIcon = ({ href, label, title, icon }) => {
  return (
    <ListItem>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${label} (opens in a new tab)`}
        title={title}
      >
        <IconWrapper>{icon}</IconWrapper>
      </Link>
    </ListItem>
  );
};

export default SocialIcon;

import React from 'react';
import styled from 'styled-components';

const SocialBarContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

const SocialBar: React.FC = () => {
  return (
    <SocialBarContainer>
      <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </SocialLink>
      <SocialLink href="mailto:your.email@example.com">
        Email
      </SocialLink>
    </SocialBarContainer>
  );
};

export default SocialBar; 
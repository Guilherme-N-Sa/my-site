import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.icons.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 50%;
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.icons.medium};
  }
`; 
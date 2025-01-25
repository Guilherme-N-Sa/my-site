import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DetailedChatWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => `${theme.colors.background.primary}40`};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text.dark};
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${appearAnimation} 1.5s ease-in-out;
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 450px;
    max-height: 95vh;
  }
`;

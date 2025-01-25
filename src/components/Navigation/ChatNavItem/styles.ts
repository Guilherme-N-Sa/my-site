import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
`;

export const StyledChatNavItem = styled.li`
  &.animate {
    animation: ${shake} 0.3s cubic-bezier(0.36, 0, 0.66, -0.56);
    animation-iteration-count: 2;
  }
`;

export const AiTag = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xsmall} !important;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text.dark} !important;
  margin-left: ${({ theme }) => theme.spacing.xsmall};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 0 7px;
  border-radius: 10px;
  transform: translateY(-5px);
`;

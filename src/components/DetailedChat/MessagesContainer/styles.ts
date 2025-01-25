import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.spacing.small};

  /* Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary}20;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightest}15;
    border-radius: 3px;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const MessageBubble = styled.div<{ sender: 'user' | 'bot' | 'typing' }>`
  max-width: 70%;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 12px;
  ${({ sender, theme }) => {
    if (sender === 'user') {
      return css`
        margin-left: auto;
        background-color: ${theme.colors.background.secondary};
        color: ${theme.colors.text.darkest};
      `;
    } else if (sender === 'bot') {
      return css`
        margin-right: auto;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.dark};
      `;
    } else if (sender === 'typing') {
      return css`
        margin-right: auto;
        margin-bottom: 0;
        color: ${theme.colors.text.primary};
        background-color: transparent;
        font-size: ${theme.typography.sizes.xsmall};
      `;
    }
  }}
`;

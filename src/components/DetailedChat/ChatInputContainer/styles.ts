import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background.primary}90;
  border-top: 1px solid ${({ theme }) => theme.colors.background.secondary}10;
`;

export const ChatInput = styled.textarea`
  flex: 1;
  min-height: 60px;
  max-height: 120px;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background.secondary}08;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.sizes.small};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  line-height: 1.4;
  resize: none;
  border: none;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary}90;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.background.secondary}12;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.secondary}5;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  align-self: flex-end;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background.secondary}15;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.small};
  transition: all 0.2s ease;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.background.secondary}25;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

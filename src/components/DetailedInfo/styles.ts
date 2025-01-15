import styled from 'styled-components';

export const DetailedInfoWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text.dark};
`; 
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xlarge};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.medium};
    gap: ${({ theme }) => theme.spacing.medium};
    overflow: auto;
    justify-content: start;
  }
`; 
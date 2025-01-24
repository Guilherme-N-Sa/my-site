import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.xlarge};
    gap: ${({ theme }) => theme.spacing.medium};
    overflow: auto;
    justify-content: start;
  }
`;

export const DetailedModal = styled.div`
  perspective: 3000px;
  z-index: 1;
  background-color: transparent;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 20px 0;
  }
`;

import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: ${({ theme }) => "0 " + theme.spacing.medium};

  * {
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.large};
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.small};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

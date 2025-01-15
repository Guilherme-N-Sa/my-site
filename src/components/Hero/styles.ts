import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  max-width: 600px;

  & > div {
    max-width: 95%;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
}

  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.small};

    @media (max-width: 768px) {
      font-size: calc(${({ theme }) => theme.typography.sizes.xlarge} * 0.8);
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};

    @media (max-width: 768px) {
      font-size: calc(${({ theme }) => theme.typography.sizes.large} * 0.9);
    }
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.small};
    color: ${({ theme }) => theme.colors.text.tertiary};
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    p {
      max-width: 100%;
    }
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

import styled from "styled-components";
import { RadialGradientProps } from "./types";

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.xlarge}`};
  height: 100vh;
  text-align: start;
  word-wrap: break-word;
  overflow: hidden;

  div {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const RadialGradient = styled.div<RadialGradientProps>`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `radial-gradient(600px at ${props.x}px ${props.y}px, ${props.theme.colors.primaryLight}, transparent 70%)`};
  z-index: 0;
`;

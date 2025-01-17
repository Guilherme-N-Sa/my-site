import styled from 'styled-components';
import { RadialGradientProps } from './types';

export const Wrapper = styled.div`
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
    padding: 0;
  }
`;

export const RadialGradient = styled.div<RadialGradientProps>`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: ${props =>
    `radial-gradient(400px at ${props.x}px ${props.y}px, ${props.theme.colors.primary}, transparent 40%)`};
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

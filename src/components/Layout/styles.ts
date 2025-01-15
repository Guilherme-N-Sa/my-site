import styled from 'styled-components';
import { RadialGradientProps } from './types';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 40px;
  height: 100vh;
  text-align: start;
  word-wrap: break-word;
  overflow: hidden;

  div {
    width: 100%;
  }
`;

export const GeneralInfo = styled.div`
  height: 100%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RadialGradient = styled.div<RadialGradientProps>`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `radial-gradient(500px at ${props.x}px ${props.y}px, #23046147, transparent 70%)`};
  z-index: 0;
`; 
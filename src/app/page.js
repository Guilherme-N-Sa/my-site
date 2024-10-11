"use client";

import SocialBar from "./components/SocialBar/SocialBar";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
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

const GeneralInfo = styled.div`
  height: 100%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Hero = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-weight: 500;
    margin-top: 10px;
  }

  h1 {
    font-size: 2.7rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
    color: rgb(148, 163, 184);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #8892b0;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-left: 20px;
    transition: padding-left 0.3s;
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 15px;
    height: 1px;
    background-color: #8892b0;
    transition: width 0.3s;
  }

  a:hover::before {
    width: 40px;
  }

  a:hover {
    color: #ffffff;
    padding-left: 45px;
  }
`;

// Radial Gradient Component
const RadialGradient = styled.div`
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

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Main>
      <RadialGradient x={mousePosition.x} y={mousePosition.y} />
      <GeneralInfo>
        <Hero>
          <h1>Guilherme Niclewicz</h1>
          <h3>Senior FullStack Developer</h3>
          <p>
            I build FullStack web applications, specializing in backend
            development and cloud computing. Graduated in Engineering with a
            Master's degree in Computational Mathematics.
          </p>
          <Nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </Nav>
        </Hero>
        <SocialBar />
      </GeneralInfo>
      <DetailedInfo />
    </Main>
  );
}

// Extra Component for Detailed Information Section
const DetailedInfoWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-top: 20px;
  color: #231e2d;
`;

// DetailedInfo Component Usage
function DetailedInfo() {
  return (
    <DetailedInfoWrapper>Detailed information goes here...</DetailedInfoWrapper>
  );
}

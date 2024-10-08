"use client";

import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 30px 40px;
  height: 100vh;
  text-align: start;
  word-wrap: break-word;

  div {
    width: 100%;
  }
`;

const GeneralInfo = styled.div`
  height: 100%;
  padding: 45px;

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
    color: rgb(148 163 184);
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

export default function Home() {
  return (
    <Main>
      <GeneralInfo>
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
              <a href="javascript:void(0)">About</a>
            </li>
            <li>
              <a href="javascript:void(0)">Experience</a>
            </li>
            <li>
              <a href="javascript:void(0)">Projects</a>
            </li>
          </ul>
        </Nav>
      </GeneralInfo>
      <div className="detailed-info">ds</div>
    </Main>
  );
}

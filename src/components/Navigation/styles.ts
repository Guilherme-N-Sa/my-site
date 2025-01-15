import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;

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
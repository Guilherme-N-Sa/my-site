import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.small};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin: ${({ theme }) => `${theme.spacing.small} 0`};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.medium};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.medium};
    transition: padding-left ${({ theme }) => theme.transitions.default};
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 15px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.secondary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  a:hover::before {
    width: 40px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    padding-left: 45px;
  }
`; 
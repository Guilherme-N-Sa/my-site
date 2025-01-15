import styled from 'styled-components';

export const DetailedInfoWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text.dark};
  min-height: 500px;
  max-height: 75vh;
  overflow-y: auto;
  z-index: 1;

  @media (max-width: 768px) {
    min-height: 600px;
    margin-top: ${({ theme }) => theme.spacing.large};
    padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.primary}20;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}90;
    border-radius: 3px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  /* Markdown Styling */
  .markdown-content {
    max-width: 900px;
    margin: 0 auto;
    font-size: 1.05rem;
    line-height: 1.7;
    padding-bottom: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
    }

    h1, h2, h3, h4, h5, h6 {
      margin-top: ${({ theme }) => theme.spacing.medium};
      margin-bottom: ${({ theme }) => theme.spacing.medium};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weights.bold};
      letter-spacing: -0.02em;

      &:first-child {
        margin-top: 0;
      }
    }

    h1 { 
      font-size: 2.5em;
      margin-bottom: ${({ theme }) => theme.spacing.large};
    }
    h2 { font-size: 2em; }
    h3 { 
      font-size: 1.75em;
      margin-bottom: ${({ theme }) => theme.spacing.large};
    }
    h4 { 
      font-size: 1.4em;
      color: ${({ theme }) => theme.colors.primary}dd;
    }

    p {
      margin-bottom: ${({ theme }) => theme.spacing.medium};
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.text.dark}ee;
      text-align: justify;
    }

    strong, b {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weights.bold};
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: all ${({ theme }) => theme.transitions.default};
      border-bottom: 1px solid transparent;

      &:hover {
        opacity: 0.9;
        border-bottom-color: ${({ theme }) => theme.colors.primary};
      }
    }

    code {
      background-color: ${({ theme }) => theme.colors.background.primary}15;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.95em;
    }

    pre {
      background-color: ${({ theme }) => theme.colors.background.primary}10;
      padding: ${({ theme }) => theme.spacing.medium};
      border-radius: 8px;
      overflow-x: auto;
      margin: ${({ theme }) => theme.spacing.medium} 0;

      code {
        background: none;
        padding: 0;
      }
    }

    blockquote {
      border-left: 4px solid ${({ theme }) => theme.colors.primary}40;
      padding: ${({ theme }) => theme.spacing.medium};
      margin: ${({ theme }) => theme.spacing.medium} 0;
      background-color: ${({ theme }) => theme.colors.background.primary}05;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: ${({ theme }) => theme.colors.text.dark}dd;
    }

    ul, ol {
      margin: ${({ theme }) => theme.spacing.small} 0 ${({ theme }) => theme.spacing.medium};
      padding-left: ${({ theme }) => theme.spacing.large};
    }

    li {
      margin-bottom: ${({ theme }) => theme.spacing.small};
      position: relative;
      padding-left: ${({ theme }) => theme.spacing.small};
      
      &::marker {
        color: ${({ theme }) => theme.colors.primary}90;
      }
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: ${({ theme }) => theme.spacing.medium} 0;
      box-shadow: 0 2px 8px ${({ theme }) => theme.colors.background.primary}15;
    }

    hr {
      border: none;
      height: 1px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary}00,
        ${({ theme }) => theme.colors.primary}40,
        ${({ theme }) => theme.colors.primary}00
      );
      margin: ${({ theme }) => theme.spacing.large} 0;
    }

    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: ${({ theme }) => theme.spacing.medium} 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary}20;

      th, td {
        padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
        text-align: left;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;
      }

      th {
        background-color: ${({ theme }) => theme.colors.primary}10;
        font-weight: ${({ theme }) => theme.typography.weights.bold};
        color: ${({ theme }) => theme.colors.primary};
      }

      tr:last-child td {
        border-bottom: none;
      }

      tr:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.background.primary}05;
      }
    }
  }
`; 
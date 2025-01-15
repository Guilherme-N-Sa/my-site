import styled from 'styled-components';

export const DetailedInfoWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text.dark};
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary}40;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}40;
    border-radius: 3px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary}80;
    }
  }

  /* |||||||||||||||| */
  /* Markdown Styling */
  /* |||||||||||||||| */
  .markdown-content {
    h1, h2, h3, h4, h5, h6 {
      margin-top: ${({ theme }) => theme.spacing.medium};
      margin-bottom: ${({ theme }) => theme.spacing.small};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weights.bold};
    }

    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }

    p {
      margin-bottom: ${({ theme }) => theme.spacing.small};
      line-height: 1.6;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: opacity ${({ theme }) => theme.transitions.default};

      &:hover {
        opacity: 0.8;
      }
    }

    code {
      background-color: ${({ theme }) => theme.colors.background.primary}20;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }

    pre {
      background-color: ${({ theme }) => theme.colors.background.primary}10;
      padding: ${({ theme }) => theme.spacing.small};
      border-radius: 4px;
      overflow-x: auto;
      margin: ${({ theme }) => theme.spacing.small} 0;

      code {
        background: none;
        padding: 0;
      }
    }

    blockquote {
      border-left: 4px solid ${({ theme }) => theme.colors.primary}40;
      padding-left: ${({ theme }) => theme.spacing.small};
      margin: ${({ theme }) => theme.spacing.small} 0;
      font-style: italic;
    }

    ul, ol {
      margin: ${({ theme }) => theme.spacing.small} 0;
      padding-left: ${({ theme }) => theme.spacing.medium};
    }

    li {
      margin-bottom: 4px;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin: ${({ theme }) => theme.spacing.small} 0;
    }

    hr {
      border: none;
      border-top: 1px solid ${({ theme }) => theme.colors.primary}20;
      margin: ${({ theme }) => theme.spacing.medium} 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${({ theme }) => theme.spacing.small} 0;

      th, td {
        border: 1px solid ${({ theme }) => theme.colors.primary}20;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: ${({ theme }) => theme.colors.primary}10;
      }

      tr:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.background.primary}05;
      }
    }
  }
`; 
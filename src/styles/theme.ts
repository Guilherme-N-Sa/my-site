export const theme = {
  colors: {
    primary: '#230461',
    primaryLight: '#23046147',
    dark: '#231e2d',
    darkest: '#000000',
    lightest: '#f0f0f0',
    text: {
      primary: '#FFFFFF',
      secondary: '#8892b0',
      tertiary: '#94A3B8',
      dark: '#231e2d',
      darkest: '#000000',
    },
    background: {
      primary: '#000000',
      secondary: '#f0f0f0',
    },
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    sizes: {
      xsmall: '0.7rem',
      small: '0.9rem',
      medium: '1rem',
      large: '1.4rem',
      xlarge: '2.7rem',
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xsmall: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    xlarge: '45px',
  },
  transitions: {
    default: '0.3s',
  },
  icons: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
} as const;

export type Theme = typeof theme;

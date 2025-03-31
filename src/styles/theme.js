export const theme = {
  colors: {
    primary: '#0066cc',
    secondary: '#4d9fff',
    background: {
      light: '#ffffff',
      dark: '#1a1a1a',
      glass: 'rgba(255, 255, 255, 0.9)',
      glassDark: 'rgba(26, 26, 26, 0.9)',
      gradient: 'linear-gradient(135deg, rgba(84, 185, 255, 0.2), rgba(128, 0, 128, 0.15))'
    },
    text: {
      primary: {
        light: '#333333',
        dark: '#ffffff'
      },
      secondary: {
        light: '#666666',
        dark: '#cccccc'
      }
    },
    accent: {
      light: 'rgba(0, 102, 204, 0.3)',
      dark: 'rgba(77, 159, 255, 0.3)'
    }
  },
  shadows: {
    light: '0 4px 20px rgba(0, 0, 0, 0.15)',
    dark: '0 4px 20px rgba(0, 0, 0, 0.35)',
    hover: {
      light: '0 4px 25px rgba(0, 102, 204, 0.4)',
      dark: '0 4px 25px rgba(77, 159, 255, 0.5)'
    }
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.5s ease'
  },
  typography: {
    fontFamily: "'Arial', sans-serif",
    fontSize: {
      h1: 'clamp(1.5rem, 3vw, 2.5rem)',
      h2: 'clamp(1.5rem, 3vw, 2.5rem)',
      h3: 'clamp(1.25rem, 2.5vw, 2rem)',
      body: 'clamp(0.9rem, 1.8vw, 1rem)'
    },
    fontWeight: {
      regular: 300,
      bold: 500
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem'
  },
  borderRadius: {
    sm: '5px',
    md: '10px',
    lg: '20px'
  },
  glassEffect: {
    light: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    dark: {
      background: 'rgba(26, 26, 26, 0.9)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  },
  hover: {
    transform: 'translateY(-2px)',
    glow: {
      light: '0 0 15px rgba(0, 102, 204, 0.4)',
      dark: '0 0 15px rgba(77, 159, 255, 0.5)'
    }
  }
};

// Common styled-components mixins
export const mixins = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  glassCard: (isDark) => `
    background: ${isDark ? theme.glassEffect.dark.background : theme.glassEffect.light.background};
    backdrop-filter: ${isDark ? theme.glassEffect.dark.backdropFilter : theme.glassEffect.light.backdropFilter};
    border: ${isDark ? theme.glassEffect.dark.border : theme.glassEffect.light.border};
    border-radius: ${theme.borderRadius.md};
    transition: ${theme.transitions.default};
    &:hover {
      transform: ${theme.hover.transform};
      box-shadow: ${isDark ? theme.hover.glow.dark : theme.hover.glow.light};
    }
  `,
  section: `
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    width: 100%;
    position: relative;
    overflow: hidden;
  `,
  container: `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  `
}; 
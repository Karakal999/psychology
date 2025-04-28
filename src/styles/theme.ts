import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#07575B', // Основной тёмно-бирюзовый
      light: '#66A5AD', // Светлый бирюзовый
      dark: '#003B46', // Тёмно-синий
    },
    secondary: {
      main: '#66A5AD', // Бирюзовый
      light: '#C4DFE6', // Светло-голубой
      dark: '#07575B', // Тёмно-бирюзовый
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F9FA',
    },
    text: {
      primary: '#003B46',
      secondary: '#07575B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#003B46',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#07575B',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#07575B',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#003B46',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 12px rgba(7, 87, 91, 0.2)',
          },
        },
        outlined: {
          borderColor: '#66A5AD',
          '&:hover': {
            borderColor: '#07575B',
            backgroundColor: 'rgba(7, 87, 91, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(7, 87, 91, 0.08)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(7, 87, 91, 0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#07575B',
          boxShadow: '0 2px 8px rgba(7, 87, 91, 0.15)',
        },
      },
    },
  },
}); 
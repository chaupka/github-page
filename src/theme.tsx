import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4c1501',
      contrastText: '#e3bfbf',
    },
    secondary: {
      main: '#a30f0f',
      contrastText: 'red',
    },
    text: {
      primary: '#4c1501',
      secondary: '#0a22a9',
    },
    background: {
      default: '#d5a5a5',
      paper: '#e3bfbf',
    }
  },
  typography: { button: {fontWeight: 'bold'}},
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '16px',
          textAlign: 'center',
          '@media (max-width:600px)': {
            width: '95%',  // 95% width on extra small screens
          },
          '@media (min-width:600px)': {
            width: '75%',  // 75% width on small screens and up
          },
          '@media (min-width:960px)': {
            width: '50%',  // 50% width on medium screens and up
          },
          '@media (min-width:1280px)': {
            width: '33%',  // 33% width on large screens and up
          },
        }
      }
    }
  }
  // Add more theme customizations here
});

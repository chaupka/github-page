import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4c1501',
      contrastText: '#e3bfbf',
    },
    secondary: {
      main: '#4511a7',
      contrastText: 'red',
    },
    text: {
      primary: '#2d1f1f',
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
        }
      }
    }
  }
  // Add more theme customizations here
});

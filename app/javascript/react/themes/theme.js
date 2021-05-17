import { createMuiTheme } from '@material-ui/core';
import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      margin: 'normal'
    }
  },
  overrides: {
    MuiDialog: {
      paper: {
        padding: '1.5rem'
      }
    },
    MuiButton: {
      label: {
        color: 'white'
      },
      outlined: {
        borderColor: 'white'
      }
    }
  },
  palette: {
    primary: {
      main: '#E41B23'
    },
    secondary: {
      main: orange[800]
    }
  }
});

export default theme;

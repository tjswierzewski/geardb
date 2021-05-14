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
    }
  },
  palette: {
    primary: {
      main: red[800]
    },
    secondary: {
      main: orange[800]
    }
  }
});

export default theme;

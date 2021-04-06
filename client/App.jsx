import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff99bb',
    },
    secondary: {
      main: '#64ffda',
    },
  },
});

const App = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Main />
      </ThemeProvider>
    </div>
  )
}

export default App;
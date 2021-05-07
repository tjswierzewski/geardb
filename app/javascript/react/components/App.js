import React from 'react';
import theme from '../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CaseContainer from './case/CaseContainer';
import GearContainer from './Electronic/GearContainer';
import Layout from './Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
          <Grid container>
            <Grid item xs={6}>
              <CaseContainer />
            </Grid>
            <Grid item xs={6}>
              <GearContainer />
            </Grid>
          </Grid>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

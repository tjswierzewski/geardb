import React, { useState } from 'react';
import theme from '../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CaseContainer from './case/CaseContainer';
import GearContainer from './electronic/GearContainer';
import Layout from './Layout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Grid container>
            <Grid item xs={6}>
              <CaseContainer selectedCase={selectedCase} setSelectedCase={setSelectedCase} />
            </Grid>
            <Grid item xs={6}>
              <GearContainer selectedCase={selectedCase} />
            </Grid>
          </Grid>
        </Layout>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;

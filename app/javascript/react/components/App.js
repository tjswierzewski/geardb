import React, { useState } from 'react';
import theme from '../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CaseContainer from './case/CaseContainer';
import GearContainer from './electronic/GearContainer';
import Layout from './Layout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TourContainer from './tour/TourContainer';

const App = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Grid container>
            <Grid item xs={4}>
              <TourContainer selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
            </Grid>
            <Grid item xs={4}>
              <CaseContainer
                selectedCase={selectedCase}
                setSelectedCase={setSelectedCase}
                selectedTour={selectedTour}
              />
            </Grid>
            <Grid item xs={4}>
              <GearContainer selectedCase={selectedCase} />
            </Grid>
          </Grid>
        </Layout>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;

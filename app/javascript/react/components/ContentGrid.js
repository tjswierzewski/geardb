import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import CaseContainer from './case/CaseContainer';
import GearContainer from './electronic/GearContainer';
import TourContainer from './tour/TourContainer';
import LandingPage from '../components/info/LandingPage';
import { UserContext } from './UserContext';

const ContentGrid = () => {
  const { user, setUser } = useContext(UserContext);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  if (user) {
    return (
      <Grid container>
        <Grid item xs={4}>
          <TourContainer
            selectedTour={selectedTour}
            setSelectedTour={setSelectedTour}
            currentUser={user}
            setUser={setUser}
          />
        </Grid>
        <Grid item xs={4}>
          <CaseContainer
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
            selectedTour={selectedTour}
            currentUser={user}
            setUser={setUser}
          />
        </Grid>
        <Grid item xs={4}>
          <GearContainer
            selectedCase={selectedCase}
            selectedTour={selectedTour}
            currentUser={user}
            setUser={setUser}
          />
        </Grid>
      </Grid>
    );
  }
  return <LandingPage />;
};

export default ContentGrid;

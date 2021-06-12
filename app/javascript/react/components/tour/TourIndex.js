import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import TourTile from './TourTile';

const useStyles = makeStyles((theme) => ({
  scrollList: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 250px)'
  }
}));

const TourIndex = ({ tours, selectedTour, setSelectedTour }) => {
  const classes = useStyles();
  const tourList = tours.map(({ id, name, artist, cases }) => {
    const handleSelect = () => {
      if (selectedTour === id) {
        setSelectedTour(null);
        return;
      }
      setSelectedTour(id);
    };
    const selected = selectedTour === id;
    return (
      <div key={id} onClick={handleSelect}>
        <TourTile id={id} name={name} artist={artist} selected={selected} cases={cases} />
      </div>
    );
  });
  return (
    <div>
      <Typography variant="h2">Tours</Typography>
      <Grid className={classes.scrollList}>{tourList}</Grid>
    </div>
  );
};

export default TourIndex;

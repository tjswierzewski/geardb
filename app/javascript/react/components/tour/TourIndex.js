import { Typography } from '@material-ui/core';
import React from 'react';
import TourTile from './TourTile';

const TourIndex = ({ tours, selectedTour, setSelectedTour }) => {
  const tourList = tours.map(({ id, name, artist }) => {
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
        <TourTile id={id} name={name} artist={artist} selected={selected} />
      </div>
    );
  });
  return (
    <div>
      <Typography variant="h2">Tours</Typography>
      {tourList}
    </div>
  );
};

export default TourIndex;

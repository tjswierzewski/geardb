import { Typography } from '@material-ui/core';
import React from 'react';
import TourTile from './TourTile';

const TourIndex = ({ tours }) => {
  const tourList = tours.map(({ id, name, artist }) => {
    return <TourTile key={id} name={name} artist={artist} />;
  });
  return (
    <div>
      <Typography variant="h2">Tours</Typography>
      {tourList}
    </div>
  );
};

export default TourIndex;

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
    '& p': {
      margin: 20
    }
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    backgroundColor: '#5fe39c'
  }
});

const TourTile = ({ name, artist }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.content}>
          <Typography variant="h5" component="p" display="inline">
            {name}
          </Typography>
          <Typography component="p" display="inline">
            {artist}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TourTile;

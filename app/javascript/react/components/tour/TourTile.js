import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import ItemTypes from '../../constants/ItemTypes';
import { useDrop } from 'react-dnd';
import postCasetoTour from '../../logic/PostCaseToTour';
import { caseInTour } from '../../logic/CaseInTour';

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
    justifyContent: 'center',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  selected: {
    backgroundColor: '#5fe39c'
  },
  over: {
    backgroundColor: '#abecc9'
  }
});

const TourTile = ({ id, name, artist, cases, selected }) => {
  const classes = useStyles();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.CASE,
    drop: (item) => postCasetoTour(item.id, { id }),
    canDrop: (item) => caseInTour(cases, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }));

  return (
    <div ref={drop}>
      <Card
        className={clsx(classes.root, {
          [classes.selected]: selected,
          [classes.over]: canDrop && isOver
        })}
        variant="outlined"
      >
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

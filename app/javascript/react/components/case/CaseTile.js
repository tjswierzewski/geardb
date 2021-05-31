import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemTypes from '../../constants/ItemTypes';
import { useDrop, useDrag } from 'react-dnd';
import postElectronictoCase from '../../logic/PostElectronicToCase';
import { electronicInCase } from '../../logic/ElectronicInCase';

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
  tile: {
    cursor: 'move',
    opacity: 1
  },
  dragging: {
    opacity: 0.5
  },
  over: {
    backgroundColor: '#abecc9'
  }
});
const CaseTile = ({ prefix, case_number, id, electronics, selected }) => {
  const ref = useRef(null);
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CASE,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.ELECTRONIC,
    drop: (item) => postElectronictoCase(item.id, { id }),
    canDrop: (item) => electronicInCase(electronics, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }));
  drag(drop(ref));
  return (
    <div ref={ref} className={clsx(classes.tile, { [classes.dragging]: isDragging })}>
      <Card
        className={clsx(classes.root, {
          [classes.selected]: selected,
          [classes.over]: canDrop && isOver
        })}
        variant="outlined"
      >
        <CardContent className={classes.content}>
          <Typography variant="h5" component="p" display="inline">
            {`${prefix}-${case_number}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseTile;

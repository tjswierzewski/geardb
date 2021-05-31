import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemTypes from '../../constants/ItemTypes';
import { useDrop, useDrag } from 'react-dnd';
import postElectronictoCase from '../../logic/PostElectronicToCase';

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
  }
});
const CaseTile = ({ prefix, case_number, id, selected }) => {
  const ref = useRef(null);
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CASE,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELECTRONIC,
    drop: (item) => postElectronictoCase(item.id, { id }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  drag(drop(ref));
  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <Card className={clsx(classes.root, { [classes.selected]: selected })} variant="outlined">
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

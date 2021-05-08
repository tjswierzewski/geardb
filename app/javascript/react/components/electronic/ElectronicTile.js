import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDrag } from 'react-dnd';
import ItemTypes from '../../constants/ItemTypes';

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
  }
});

const ElectronicTile = ({ id, name, model_number, barcode }) => {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELECTRONIC,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.content}>
          <Typography variant="h5" component="p" display="inline">
            {name}
          </Typography>
          <span></span>
          <Typography color="textSecondary" component="p" display="inline">
            {model_number}
          </Typography>
          <span></span>
          <Typography variant="body2" component="p" display="inline">
            {barcode}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ElectronicTile;

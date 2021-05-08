import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemTypes from '../../constants/ItemTypes';
import { useDrop } from 'react-dnd';
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
    justifyContent: 'center'
  },
  selected: {
    backgroundColor: '#5fe39c'
  }
});
const CaseTile = ({ prefix, case_number, id, selected }) => {
  const classes = useStyles();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELECTRONIC,
    drop: (item) => postElectronictoCase(item.id, { id }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  return (
    <div ref={drop}>
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

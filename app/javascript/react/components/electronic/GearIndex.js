import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ElectronicTile from './ElectronicTile';

const useStyles = makeStyles((theme) => ({
  scrollList: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 700
  }
}));

const GearIndex = ({ electronics }) => {
  const classes = useStyles();
  const electronicsList = electronics.map(({ id, name, model_number, barcode }) => {
    return (
      <ElectronicTile key={id} id={id} name={name} model_number={model_number} barcode={barcode} />
    );
  });

  return (
    <div>
      <Typography variant="h2"> Inventory </Typography>
      <Grid className={classes.scrollList}>{electronicsList}</Grid>
    </div>
  );
};

export default GearIndex;

import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ElectronicTile from './ElectronicTile';

const GearIndex = ({ electronics }) => {
  const electronicsList = electronics.map(({ id, name, model_number, barcode }) => {
    return (
      <ElectronicTile key={id} id={id} name={name} model_number={model_number} barcode={barcode} />
    );
  });

  return (
    <div>
      <Typography variant="h2"> Inventory </Typography>
      {electronicsList}
    </div>
  );
};

export default GearIndex;

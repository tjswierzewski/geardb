import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ElectronicTile from './ElectronicTile';

const GearIndex = () => {
  const [electronics, setElectronics] = useState([]);

  const fetchElectronics = async () => {
    try {
      const response = await fetch('/api/v1/electronics');
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setElectronics(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const electronicsList = electronics.map(({ id, name, model_number, barcode }) => {
    return <ElectronicTile key={id} name={name} model_number={model_number} barcode={barcode} />;
  });

  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <div>
      <Typography variant="h2"> Inventory </Typography>
      {electronicsList}
    </div>
  );
};

export default GearIndex;

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import GearForm from './GearForm';
import GearIndex from './GearIndex';

const GearContainer = () => {
  const [adding, setAdding] = useState(false);
  const [electronics, setElectronics] = useState([]);

  const changeAdding = () => {
    setAdding(!adding);
  };

  const addElectronic = (newElectronic) => {
    setElectronics([...electronics, newElectronic]);
  };

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

  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <div>
      {adding ? <GearForm addElectronic={addElectronic} /> : <GearIndex electronics={electronics} />}
      <Fab color="primary" aria-label="add" size="large" onClick={changeAdding}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default GearContainer;

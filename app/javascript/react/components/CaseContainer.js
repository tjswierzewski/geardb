import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import CaseForm from './CaseForm';
import CaseIndex from './CaseIndex';

const CaseContainer = () => {
  const [adding, setAdding] = useState(false);
  const [cases, setCases] = useState([]);

  const changeAdding = () => {
    setAdding(!adding);
  };

  const addCase = (newCase) => {
    setCases([...cases, newCase]);
  };

  const fetchCases = async () => {
    try {
      const response = await fetch('/api/v1/cases');
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setCases(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div>
      {adding ? <CaseForm addCase={addCase} /> : <CaseIndex cases={cases} />}
      <Fab color="primary" aria-label="add" size="large" onClick={changeAdding}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default CaseContainer;

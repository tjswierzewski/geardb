import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import TourIndex from './TourIndex';
import TourForm from './TourForm';

const TourContainer = ({ selectedTour, setSelectedTour }) => {
  const [adding, setAdding] = useState(false);
  const [tours, setTours] = useState([]);

  const addTour = (newTour) => {
    setTours([...tours, newTour]);
  };

  const changeAdding = () => {
    setAdding(!adding);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch('/api/v1/tours');
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setTours(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      {adding ? (
        <TourForm addTour={addTour} />
      ) : (
        <TourIndex tours={tours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
      )}
      <Fab color="primary" aria-label="add" size="large" onClick={changeAdding}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default TourContainer;

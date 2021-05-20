import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import TourIndex from './TourIndex';
import TourForm from './TourForm';

const TourContainer = ({ selectedTour, setSelectedTour, currentUser, setUser }) => {
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
      const response = await fetch('/api/v1/tours', {
        headers: {
          'access-token': currentUser.accessToken,
          'token-type': currentUser.tokenType,
          client: currentUser.client,
          expiry: currentUser.expiry,
          uid: currentUser.uid
        }
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setTours(responseBody.tours);
      const headers = response.headers;
      const user = {
        accessToken: headers.get('access-token'),
        tokenType: headers.get('token-type'),
        client: headers.get('client'),
        expiry: headers.get('expiry'),
        uid: headers.get('uid')
      };
      setUser(user);
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
        <TourForm addTour={addTour} currentUser={currentUser} />
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

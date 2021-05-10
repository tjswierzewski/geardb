import React, { useState, useEffect } from 'react';
import TourIndex from './TourIndex';

const TourContainer = () => {
  const [tours, setTours] = useState([]);

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
      <TourIndex tours={tours} />
    </div>
  );
};

export default TourContainer;

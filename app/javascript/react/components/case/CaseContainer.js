import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import CaseForm from './CaseForm';
import CaseIndex from './CaseIndex';

const CaseContainer = ({ selectedCase, setSelectedCase, selectedTour, currentUser, setUser }) => {
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
      const response = await fetch('/api/v1/cases', {
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
      setCases(responseBody);
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

  const fetchTourCases = async () => {
    try {
      const response = await fetch(`/api/v1/tours/${selectedTour}/contents`, {
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
      setCases(responseBody.cases);
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
    if (selectedTour === null) {
      fetchCases();
      return;
    }
    fetchTourCases();
  }, [selectedTour]);

  return (
    <div>
      {adding ? (
        <CaseForm addCase={addCase} />
      ) : (
        <CaseIndex cases={cases} setSelectedCase={setSelectedCase} selectedCase={selectedCase} />
      )}
      <Fab color="primary" aria-label="add" size="large" onClick={changeAdding}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default CaseContainer;

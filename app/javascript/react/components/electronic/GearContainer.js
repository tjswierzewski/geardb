import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import GearForm from './GearForm';
import GearIndex from './GearIndex';

const GearContainer = ({ selectedCase, selectedTour, currentUser, setUser }) => {
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
      const response = await fetch('/api/v1/electronics', {
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
      setElectronics(responseBody.electronics);
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

  const fetchCaseElectronics = async () => {
    try {
      const response = await fetch(`/api/v1/cases/${selectedCase}/contents`, {
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
      setElectronics(responseBody.electronics);
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

  const fetchTourElectronics = async () => {
    try {
      const response = await fetch(`/api/v1/tours/${selectedTour}/items`, {
        headers: {
          'access-token': user.accessToken,
          'token-type': user.tokenType,
          client: user.client,
          expiry: user.expiry,
          uid: user.uid
        }
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setElectronics(responseBody.electronics);
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
    if (!(selectedCase === null)) {
      fetchCaseElectronics();
      return;
    }
    if (!(selectedTour === null)) {
      fetchTourElectronics();
      return;
    }
    fetchElectronics();
  }, [selectedCase, selectedTour]);

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

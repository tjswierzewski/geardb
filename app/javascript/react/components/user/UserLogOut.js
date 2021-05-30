import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UserLogOut = () => {
  const { user, removeUser } = useContext(UserContext);
  const handleLogOut = async () => {
    const userPayLoad = {
      ['uid']: user.uid,
      ['client']: user.client,
      ['access-token']: user.accessToken
    };
    try {
      const response = await fetch('/api/v1/auth/sign_out', {
        credentials: 'same-origin',
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayLoad)
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      removeUser();
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
};

export default UserLogOut;

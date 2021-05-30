import React, { useMemo } from 'react';
import { createContext } from 'react';
import useUser from '../logic/useUser';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { user, setUser, removeUser } = useUser();
  const userValue = useMemo(() => {
    {
      user, setUser, removeUser;
    }
  }, [user, setUser, removeUser]);
  return (
    <UserContext.Provider value={{ user, setUser, removeUser }}>{children}</UserContext.Provider>
  );
};

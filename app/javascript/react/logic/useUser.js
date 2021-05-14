import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const userUser = JSON.parse(userString);
    return userUser;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const removeUser = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return {
    removeUser: removeUser,
    setUser: saveUser,
    user
  };
}

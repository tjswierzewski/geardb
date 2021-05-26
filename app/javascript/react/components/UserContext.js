import { createContext } from 'react';
import useUser from '../logic/useUser';

const { user, setUser, removeUser } = useUser();

const UserContext = createContext(user);

export default { UserContext, setUser, removeUser };

import { useContext } from 'react';
import AuthContext from '../contexts/auth';

type context = {
  loggedIn: boolean,
  login: (token: string) => void;
  logout: () => void;
};

const useAuth = () => useContext(AuthContext) as context;

export default useAuth;


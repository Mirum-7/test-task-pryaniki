import { ReactNode, useCallback, useMemo, useState } from 'react';
import AuthContext from '../contexts/auth';

function AuthProvider ({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

  const logout = useCallback(() => {
    setLoggedIn(false);
    localStorage.removeItem('token');
  }, []);

  const login = useCallback((data: string) => {
    setLoggedIn(true);
    localStorage.setItem('token', JSON.stringify(data));
  }, []);

  const values = useMemo(() => ({
    login,
    logout,
    loggedIn,
  }), [loggedIn]);


  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

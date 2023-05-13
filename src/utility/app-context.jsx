import React, { createContext, useContext, useState } from 'react';
import auth from './context';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(auth.user);
  const [authenticated, setAuthenticated] = useState(auth.isAuthenticated());

  const setUserInfo = (user) => {
    setUser(user);
  };

  const signIn = () => {
    const result = 'Hello';
    setAuthenticated(result);
    return result;
  };

  const signOut = () => {
    auth.signOut();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticated, signIn, signOut, setUserInfo }}
      {...props}
    />
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

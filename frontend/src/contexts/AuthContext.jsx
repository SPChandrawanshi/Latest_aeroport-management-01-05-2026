import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('aero_user')) || null;
    } catch {
      return null;
    }
  });

  const login = (userData, token) => {
    localStorage.setItem('aero_user', JSON.stringify(userData));
    localStorage.setItem('aero_token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('aero_user');
    localStorage.removeItem('aero_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;

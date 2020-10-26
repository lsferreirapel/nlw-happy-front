import React, { createContext, useEffect, useState } from 'react';
import { signInService } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storagedUser = localStorage.getItem('@nlw-happy-web:user');
    const storagedToken = localStorage.getItem('@nlw-happy-web:token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      setLoading(false);
    }
  }, []);

  async function signIn() {
    const response = await signInService();

    setUser(response.user);

    localStorage.setItem('@nlw-happy-web:user', JSON.stringify(response.user));
    localStorage.setItem('@nlw-happy-web:token', response.token);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, loading, user: user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

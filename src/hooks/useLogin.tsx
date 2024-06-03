import { useState } from 'react';


export const useLogin = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkPassword = (input: string) => {
    if (input === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  return { isAuthenticated, checkPassword };
};

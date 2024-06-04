import { useState } from 'react';


export const useLogin = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const [isWrongPassword, setIsWrongPassword] = useState(false);  

  const checkPassword = (input: string) => {
    if (input === process.env.REACT_APP_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setIsWrongPassword(true)
    }
  };

  return { isAuthenticated, isWrongPassword, checkPassword };
};

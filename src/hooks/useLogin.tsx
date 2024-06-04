import { useState } from 'react';


export const useLogin = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(process.env.REACT_APP_PASSWORD);
  

  const checkPassword = (input: string) => {
    if (input === process.env.REACT_APP_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  return { isAuthenticated, checkPassword };
};

import { useState } from 'react';
import './App.css';
import { Box, Button, Typography } from '@mui/material';

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const checkPassword = () => {
    if (password === 'password') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  if (!authenticated) {
    return (
      <Box>
        <Typography >Password Protected</Typography>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <Button onClick={checkPassword}>Submit</Button>
      </Box>
    );
  }

  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* Your actual app content */}
    </div>
  );

}

export default App;

import { useState } from 'react';
import './App.css';

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
      <div>
        <h2>Password Protected</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={checkPassword}>Submit</button>
      </div>
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

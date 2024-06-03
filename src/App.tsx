import './App.css';
import Login from './Login/Login';
import Page from './Page/Page';
import { useLogin } from './hooks/useLogin';

export default function App() {
  const { isAuthenticated, checkPassword } = useLogin();

  if (!isAuthenticated) {
    return <Login checkPassword={checkPassword} />
  }

  return (
    <Page />
  );
}


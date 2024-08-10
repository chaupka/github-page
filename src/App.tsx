import './App.css';
import Login from './Login/Login';
import Presentation from './Presentation/Presentation';
import { useLogin } from './hooks/useLogin';

export default function App() {
  const { isAuthenticated, isWrongPassword, checkPassword } = useLogin();

  // if (!isAuthenticated) {
  //   return <Login checkPassword={checkPassword} isWrongPassword={isWrongPassword} />
  // }

  return (
    <Presentation />
  );
}


import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Authenticate from "../components/Authenticate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/authenticate' element={<Authenticate />} />
    </Routes>
  );
};

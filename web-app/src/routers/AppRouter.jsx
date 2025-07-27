import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

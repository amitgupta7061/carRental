// components/ProtectedRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { carToken } = useContext(AppContext);

  return carToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

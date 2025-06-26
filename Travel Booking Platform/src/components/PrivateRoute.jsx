import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const PrivateRoute = ({ role, children }) => {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) return <Navigate to="/login" />;
  if (auth.role !== role) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;

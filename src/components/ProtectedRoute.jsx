import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Show loading spinner while checking auth
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user, send to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user exists, show the page
  return children;
};

export default ProtectedRoute;
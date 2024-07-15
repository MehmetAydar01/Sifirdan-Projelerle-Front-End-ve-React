import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  if (!user?.id && !JSON.parse(localStorage.getItem('user'))) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default PrivateRoute;

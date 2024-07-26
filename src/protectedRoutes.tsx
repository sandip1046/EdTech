// Protected route which ensure that user can only access the courses after login
//if the user once logged in then he can navigate to the courses page but if the user once did logOut then user can't able to navigate to Courses Page
import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

//   if it is loading then it will show Loading...
  if (loading) {
    return <div className={"flex justify-center items-center font-extrabold text-4xl "}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    // Redirect to login page and save the current path to navigate after login
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
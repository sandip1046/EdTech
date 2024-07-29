/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}
const ProtectedRouteFullstack: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const hasCompletedPurchase = async (): Promise<boolean> => {
        const response = await axios.get('/api/paypal/payment-status');
        return response.data.completed;
    };

    if (loading) {
        return <div className={"flex justify-center items-center font-extrabold text-4xl m-10"}>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
      }

    if (!user) {
        // Redirect to login page and save the current path to navigate after login
        return <Navigate to="/signin" state={{ from: location }} replace />;
      }

    if (!hasCompletedPurchase) {
        return <Navigate to="/payment" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRouteFullstack;
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
  } 
const ProtectedRouteFullstack:  React.FC<ProtectedRouteProps> = ({ children }) => {

    const hasCompletedPurchase = async (): Promise<boolean> => {
        const response = await axios.get('/api/paypal/payment-status');
        return response.data.completed;
      };

  if (!hasCompletedPurchase) {
    window.location.href = 'https://sandip-ed-tech.vercel.app/payment';
  }

  return <>{children}</>;
};

export default ProtectedRouteFullstack;
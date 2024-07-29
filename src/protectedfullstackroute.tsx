/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Route } from 'react-router-dom';

interface ProtectedRouteFullstackProps {
    path: string;
    element: React.ReactElement;
  }

const ProtectedRouteFullstack: React.FC<ProtectedRouteFullstackProps> = ({
    path,
    element,
}) => {

    const hasCompletedPurchase = async (): Promise<boolean> => {
        const response = await axios.get('/api/paypal/payment-status');
        return response.data.completed;
      };

  if (!hasCompletedPurchase) {
    window.location.href = 'https://sandip-ed-tech.vercel.app/payment';
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRouteFullstack;
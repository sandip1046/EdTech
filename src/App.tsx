import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from "./page/signup";
import { Login } from "./page/Login";
import { Landing } from './page/landing';
import { Courses } from './page/courses';
import { Payment } from './page/payment';
import { useEffect } from 'react';
import { analytics } from './firebaseAuth';
import { logEvent } from 'firebase/analytics';
import ProtectedRoute from './protectedRoutes';
import PayPalButton from './components/payment/payPalButton';
import ProtectedRouteFullstack from './protectedfullstackroute';
import Fullstack from './page/fullstack';


function App() {
  useEffect(() => {
    logEvent(analytics, 'notification_received');
  }, []);

  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
      <Route path="/payment" element={<Payment />} />
      <Route
            path="/payment"
            element={
              <ProtectedRouteFullstack>
                <Fullstack />
              </ProtectedRouteFullstack>
            }
          />
      <Route path="/paypal" element={<PayPalButton />} />
      
     </Routes>
     
     </BrowserRouter>
    
    </>
  )
}

export default App

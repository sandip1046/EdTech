import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from "./page/signup";
import { Login } from "./page/Login";
import { Landing } from './page/landing';
import { Courses } from './page/courses';
import { Payment } from './page/payment';
import Fullstack from './page/fullstack';
import { useEffect } from 'react';
import { analytics } from './firebaseAuth';
import { logEvent } from 'firebase/analytics';
import ProtectedRoute from './protectedRoutes';
import PayPalButton from './components/payment/payPalButton';
import ProtectedRouteFullstack from './protectedfullstackroute';


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
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <ProtectedRouteFullstack path="/fullstack" element={<Fullstack />} />
      </Routes>
      <Route path="/paypal" element={<PayPalButton />} />
      
     </Routes>
     
     </BrowserRouter>
    
    </>
  )
}

export default App

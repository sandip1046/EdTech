/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios"
import React from "react";
import { useNavigate } from "react-router-dom";



export const PayPalButton =() =>{
 
  const navigate = useNavigate();

    const handlePayment = async (e: any) => {
        e.preventDefault();
    
        try {
          const res = await axios.get('https://vercel.com/sandip-kumar-yadavs-projects/pay-pal-server/payment');
    
          if (res && res.data) {
            window.location.href = res.data.links[1].href;
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    



    const checkPaymentStatus = async () => {
      try {
          const urlParams = new URLSearchParams(window.location.search);
          const payerId = urlParams.get('PayerID');
          const paymentId = urlParams.get('paymentId');

          if (payerId && paymentId) {
              const res = await axios.get(`https://vercel.com/sandip-kumar-yadavs-projects/pay-pal-server/?PayerID=${payerId}&paymentId=${paymentId}`);

              if (res && res.data.success) {
                  alert("Payment successful!");
                  navigate('/fullstack');
              } else {
                  alert("Payment failed!");
              }
          }
      } catch (error) {
          console.error('Error:', error);
          alert("Payment failed!");
      }
  };

  // Call checkPaymentStatus when the component mounts
  React.useEffect(() => {
      checkPaymentStatus();
  }, []); //empty dependency means it will chancge in each mount
      return (
        <>
          <button onClick={handlePayment} className={"flex justify-center items-center rounded-md border-black bg-black border-1 text-white 		mx-5 p-2 h-10	w-2/12 hover:bg-gray-800 xl:mx-3 xl:w-2/12"}>Pay</button>
        </>
      );
    }

export default PayPalButton;
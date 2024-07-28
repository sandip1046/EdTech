/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState } from "react";
import PayPalButton from "./payPalButton";




export const PaymentCards = () => {


  return (
    <div className="flex items-center justify-center flex-wrap ">
      <div className="flex flex-col items-center   w-11/12 h-90  	p-2	">
        <div className={"font-bold text-4xl tracking-wider mb-5 mt-5 "}>Payment</div>
        <div className="flex flex-col items-center   bg-slate-100 rounded-md  w-8/12 sm:w-10/12 md:w-4/12  h-90 	border-slate-950 	shadow-2xl	mb-5 ">

          <div className="flex flex-col items-center justify-center  bg-slate-300 rounded-sm w-10/12	 h-100 	border-slate-950  m-5	p-2	lg:flex-row">


            <img src="/PAYPAL.png" alt="Hero Image" className={"	mr-2 h-10	"} />
            <div className={"font-semibold m-1"}>Pay with PayPal</div>
          
            <PayPalButton />
          </div>


          <div className="flex flex-col items-center justify-center  bg-slate-300 rounded-sm w-10/12	 h-100 	border-slate-950  m-5	p-2	lg:flex-row">
            <img src="/STRIPE.png" alt="Hero Image" className={"	mr-2 h-10	"} />
            <div className={"font-semibold m-1"}>Pay with Stripe</div>
            <button className="rounded-md border-black bg-black border-1 text-white 		mx-2 p-2 h-10	w-3/12 hover:bg-gray-800 xl:mx-3 xl:w-2/12">Pay</button>

          </div>

          <CoursePrice />
          {/* <div className="flex items-center justify-evenly  flex-col md:flex-row">
                        <div className="m-3 font-semibold text-emerald-900	"> Coupon</div>
                        <input type="text" className="flex flex-col items-center  bg-slate-200 rounded-sm w-10/12	 h-8	border-slate-950  m-5	p-5	"></input>
                    </div>
                    <button className="rounded-md border-black bg-black border-1 text-white mx-px		m-5 p-2 h-15	w-9/12 hover:bg-gray-800">Apply Coupon</button> */}

        </div>



      </div>
    </div>

  )
}

export const CoursePrice = () => {
  const initialPrice = 30.00; // Original course price
  const discountRate = 0.5; // 50% discount
  const couponCode = "EARLYBIRD"; // Example coupon code

  // State to hold the current price and the coupon code entered by the user
  const [price, setPrice] = useState(initialPrice);
  const [userCoupon, setUserCoupon] = useState('');

  // Function to apply the coupon
  const applyCoupon = () => {
    if (userCoupon === couponCode) {
      const discountedPrice = initialPrice - (initialPrice * discountRate);
      setPrice(discountedPrice);
    } else {
      alert('Invalid coupon code');
    }
  };

  const initiatePayment = async () => {
    try {

      const response = await fetch('https://vercel.com/sandip-kumar-yadavs-projects/pay-pal-server/paymentCoupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      });
      const data = await response.json();
      window.location.href = data.links.find((link: { rel: string; }) => link.rel === 'approval_url').href;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div >
      <h2 className="flex justify-center items-center m-1 font-semibold text-lg">Course Price: ${price.toFixed(2)}</h2>
      <div className="flex flex-col justify-center items-center ">
        <input className="my-2 p-2 w-11/12  sm:p-2  "
          type="text"
          placeholder="Enter coupon code"
          value={userCoupon}
          onChange={(e) => setUserCoupon(e.target.value)}
        />
        <button className={"border-gray-700 mb-3   bg-gray-200 p-2  hover:bg-slate-400 rounded-md font-medium "} onClick={applyCoupon}>Apply Coupon</button>
        <button className={"border-gray-700 mb-3   bg-gray-200 p-2  hover:bg-slate-400 rounded-md font-medium "} onClick={initiatePayment}>pay now</button>
      </div>

    </div>
  );
};

export default PaymentCards;



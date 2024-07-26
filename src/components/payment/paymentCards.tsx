/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState } from "react";
import PayPal from "./payPalPayment";


export const PaymentCards = () => {
    

    return (
        <div className="flex items-center justify-center flex-wrap ">
            <div className="flex flex-col items-center   w-11/12 h-90  	p-2	">
                <div className={"font-bold text-4xl tracking-wider mb-5 mt-5 "}>Payment</div>
                <div className="flex flex-col items-center   bg-slate-100 rounded-md  w-8/12 sm:w-10/12 md:w-4/12  h-90 	border-slate-950 	shadow-2xl	mb-5 ">

                    <div className="flex flex-col items-center justify-center  bg-slate-300 rounded-sm w-10/12	 h-100 	border-slate-950  m-5	p-2	sm:flex-row">

                        <PayPal />
                        {/* <img src="/PAYPAL.png" alt="Hero Image" className={"	mr-2 h-10	"} />
                        <div className={"font-semibold"}>Pay with PayPal</div>
                        <PayPalPayment amount="$30" onSuccess={handlePaymentSuccess} ></PayPalPayment>
                        <button className="flex justify-center items-center rounded-md border-black bg-black border-1 text-white 		mx-5 p-2 h-10	w-2/12 hover:bg-gray-800">PayPal</button> */}

                    </div>


                    <div className="flex flex-col items-center justify-center  bg-slate-300 rounded-sm w-10/12	 h-100 	border-slate-950  m-5	p-2	md:flex-row">
                        <img src="/STRIPE.png" alt="Hero Image" className={"	mr-2 h-10	"} />
                        <div className={"font-semibold"}>Pay with Stripe</div>
                        <button className="rounded-md border-black bg-black border-1 text-white 		mx-5 p-2 h-10	w-2/12 hover:bg-gray-800">Pay</button>

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
  
    return (
      <div >
        <h2 className="flex justify-center items-center m-1 font-semibold text-lg">Course Price: ${price.toFixed(2)}</h2>
        <div className="flex flex-col justify-center items-center ">
        <input className="mb-2 p-2  sm:p-2 sm:m-5" 
          type="text" 
          placeholder="Enter coupon code" 
          value={userCoupon} 
          onChange={(e) => setUserCoupon(e.target.value)} 
        />
        <button className={"border-gray-700 mb-3   bg-gray-200 p-2  hover:bg-slate-400 rounded-md font-medium "} onClick={applyCoupon}>Apply Coupon</button>
        </div>
    
      </div>
    );
  };

export default PaymentCards;



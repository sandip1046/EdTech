import  { useState } from 'react';

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
    <div>
      <h2>Course Price: ${price.toFixed(2)}</h2>
      <input 
        type="text" 
        placeholder="Enter coupon code" 
        value={userCoupon} 
        onChange={(e) => setUserCoupon(e.target.value)} 
      />
      <button onClick={applyCoupon}>Apply Coupon</button>
    </div>
  );
};

export default CoursePrice;

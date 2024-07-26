/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';

export default function PayPal() {
    const initialOptions: ReactPayPalScriptOptions = {
        clientId: "ARk3rK-7NlfgiS8zJrNPAe4lvQgfczBDYujOPwLY1f9qGNRIPUmBBQBICZ8R_c4nXaBvTi059vBvfnZj", 
        currency: "USD", //  currency
    };

    const fixedAmount = "30"; // Set your fixed amount

    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
                {/* payPalButtons will create the order and during creation if any error came then it will give error to the user */}
                <PayPalButtons
                    createOrder={(_data, actions) => {
                        if (actions.order) {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "USD", //  currency code
                                            value: fixedAmount, // Fixed amount to be charged
                                        },
                                    },
                                ],
                                intent: 'CAPTURE'
                            });
                        } else {
                            throw new Error("PayPal actions.order is undefined");
                        }
                    }}
                    // after completing payment it will redirect to the fullstack course page
                    onApprove={(_data, actions) => {
                        return (actions as any).order.capture().then(() => {
                            // Redirect the user to the course page after successful payment
                            window.location.href = "/fullstack";
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}



import { Footer } from "../components/landing/foot";
import { PaymentCards } from "../components/payment/paymentCards";
import NavPayment from "../components/payment/navPayment";



export function Payment (){
    return <div className={"grid grid-cols-layout  w-full h-screen"}>

        <div className={"h-2/12		"}><NavPayment /></div>
        <div className={"h-9/12	"}><PaymentCards /></div>
        <div className={"h-1/12	"}><Footer /></div>
       
       
        
    </div>
}
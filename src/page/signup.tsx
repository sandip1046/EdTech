import { Link } from "react-router-dom";
import { Quote } from "../components/auth/quote";
import { Sign } from "../components/auth/signup";

export function Signup(){
    return <div className="grid grid-rows-2 lg:grid-cols-2 ">

        <div>
        <Link to="/"  className="flex justify-center flex-col  font-bold text-2xl m-0.5 p-5 tracking-wider hover:text-slate-500	  ">EdTech</Link> 
            <Sign />
            </div>
        <div><Quote /></div>
       
    </div>
}
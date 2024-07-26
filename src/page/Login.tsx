import { Link } from "react-router-dom";
import { Quote } from "../components/auth/quote";
import { Authsignin } from "../components/auth/signin";

export function Login() {
    return <div >
         
        <div className="grid grid-rows-2 lg:grid-cols-2 ">

            <div>
            <Link to="/"  className="flex justify-center flex-col  font-bold text-2xl p-5 m-0.5 mt-1 tracking-wider hover:text-slate-500	  ">EdTech</Link> 
                <Authsignin />
                </div>
            <div><Quote /></div>



        </div>

    </div>

}
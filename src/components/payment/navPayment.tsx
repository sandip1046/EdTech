// navBar of the Payment page which contains EdTech nane and Course and by clicking this two user can navigate to the Landing pages and courses pages respectively

import { Link } from "react-router-dom";
import Logout from "../auth/logOut";
export const NavPayment = () => {
    return (
      <div className={"border-b border-slate-300 bg-slate-200 flex justify-between px-8 py-5"}>
        <Link to="/"  className="flex justify-center flex-col  font-bold text-2xl m-0.5 tracking-wider hover:text-slate-500	  ">EdTech</Link>{/* this link will route to Landing  page onclick  */}
        <div className={"flex flex-row justify-center items-center "}>
        <Link to="/courses"  className="flex justify-center flex-col font-semibold text-xl hover:text-slate-500 mx-2">Courses</Link>   {/* this link will route to sigin page onclick  */}
        <Logout />
        </div>
 

      </div>
    );
  };
  
  export default NavPayment;
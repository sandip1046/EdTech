// this is the navBar of the Landing page which contians the option to navigate to the Course Page and Login option by clicking which a user can navigate to the Login/SignIn page

import { Link } from "react-router-dom";
export const Nav = () => {
    return (
      <div className={"border-b border-slate-300 bg-slate-200 flex justify-between px-8 py-5 mb-3"}>
        
       <Link to="/"  className="flex justify-center flex-col text-cyan-500  font-bold text-2xl m-0.5 tracking-widertransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300	  ">EdTech</Link>
       
       <div className={"flex justify-evenly"}>
       <Link to="/courses"  className="flex justify-center flex-col font-semibold text-xl mx-2 hover:text-slate-500">Courses</Link>   {/* this link will route to sigin page onclick  */}
       <Link to="/signin"  className="flex justify-center flex-col font-semibold text-xl mx-2 hover:text-slate-500">LogIn</Link>   {/* this link will route to sigin page onclick  */}
       <Link to="/signup"  className="flex justify-center flex-col font-semibold text-xl mx-2 hover:text-slate-500">SignUp</Link>   {/* this link will route to sigin page onclick  */}
        </div>

      </div>
    );
  };
  
  export default Nav;
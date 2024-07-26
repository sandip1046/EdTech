// NavBar of the Fullstack course page this also contains option to logout
import { Link } from "react-router-dom";
import Logout from "../auth/logOut";
export const FullstackNav = () => {
    return (
      <div className={"border-b border-slate-300 bg-slate-200 flex justify-between px-8 py-5"}>
        
       {/* <div className="flex justify-center flex-col font-bold text-2xl hover:text-slate-500">EdTech</div> */}
       <Link to="/"  className="flex justify-center flex-col   font-bold text-2xl m-0.5 tracking-wider hover:text-slate-500	  ">EdTech</Link>
       
       <div className={"flex justify-evenly"}>
       <Link to="/courses"  className="flex justify-center flex-col  font-bold text-xl mx-2 hover:text-slate-500">Courses</Link>   {/* this link will route to sigin page onclick  */}
        <Logout />
        </div>

      </div>
    );
  };
  
  export default FullstackNav;
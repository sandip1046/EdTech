// this is course navbar

import { Link } from "react-router-dom";
import Logout from "../auth/logOut";
import ProtectedRouteFullstack from "../../protectedfullstackroute";
export const NavCourse = () => {
  return (
    <div className={"border-b border-slate-300 bg-slate-200 flex justify-between px-8 py-5"}>

      <Link to="/" className={"flex justify-center flex-col   font-bold text-2xl m-0.5 tracking-wider hover:text-slate-500	  "}>EdTech</Link>


      <div className={"flex justify-evenly items-center gap-1"}>
        <Link to="/courses" className={"flex justify-center flex-col text-cyan-500 font-bold text-xl mx-2 hover:text-slate-500"}>Courses</Link>   {/* this link will route to sigin page onclick  */}
        {/* <Link to="/fullstack"  className={"flex justify-center flex-col   font-bold text-2xl m-0.5 tracking-wider hover:text-slate-500	  "}>Full Stack</Link> */}


        <ProtectedRouteFullstack>
          <Link
            to="/fullstack"
            className={"flex justify-center flex-col font-bold text-xl m-0.5 tracking-wider hover:text-slate-500 "}
          >
            Full Stack
          </Link>
        </ProtectedRouteFullstack>
        
        <Logout />



      </div>

    </div>
  );
};

export default NavCourse;
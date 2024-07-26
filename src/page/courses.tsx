import { Cards } from "../components/course/courseCards";
import NavCourse from "../components/course/navCourse";
import { Footer } from "../components/landing/foot";

export function Courses (){
    return <div className={"grid grid-cols-layout  w-full h-screen"}>

        <div className={"h-2/12		"}><NavCourse /></div>
        <div className={"h-9/12	"}><Cards /></div>
        <div className={"h-1/12	"}><Footer /></div>
       
       
        
    </div>
}
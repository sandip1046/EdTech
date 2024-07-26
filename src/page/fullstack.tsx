// only  after completion of payment user will be redirected to the  this page

import FullstackCourse from "../components/fullstack/fullstackHero";
import FullstackNav from "../components/fullstack/fullstackNav";
import { Footer } from "../components/landing/foot";

export function Fullstack (){
    return <div className={"grid grid-cols-layout  w-full h-screen"}>

        <div className={"h-2/12	"}><FullstackNav /></div>
        <div className={"h-9/12	"}><FullstackCourse /></div>
        <div className={"h-1/12	"}><Footer /></div>
       
       
        
    </div>
}

export default Fullstack;
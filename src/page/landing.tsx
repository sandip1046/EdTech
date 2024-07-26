// landing page user will access this without signin 


import { Footer } from "../components/landing/foot";
import { Hero } from "../components/landing/heroLanding";
import { Nav } from "../components/landing/nav";


export function Landing (){

    
      
    return <div className={"grid grid-cols-layout  w-full h-screen"}>

        <div className={"h-2/12		"}><Nav /></div>
        <div className={"h-9/12	"}><Hero /></div>
        <div className={"h-1/12	"}><Footer /></div>
       
        
    </div>
}
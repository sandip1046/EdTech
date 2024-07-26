// course card that contains the details about the course like amount and duration
import { Link } from "react-router-dom";
export const Cards = () => {

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center  bg-slate-300 rounded-md  m-2	border-slate-950 w-7/12	p-2	h-9/12 shadow-2xl md:m-10 sm:w-5/12 md:w-4/12 lg:w-3/12">
                <img src="/fullstack.jpg" alt="Hero Image" className={"rounded-md w-10/12	mb-5 h-48	"} />
                <div className={"font-semibold text-xl"}>Full Stack Boot-Camp</div>
                <div className={"text-base"}>
                    <div>- 30 weeks</div>
                    <div>- $40</div>
                </div>
                <Link to="/payment"  className="flex justify-center items-center rounded-md border-black bg-black border-1 text-white mx-px		m-5 p-2 h-full	w-full hover:bg-gray-800">Enroll</Link>


            </div>

            
        </div>

    )
}

export default Cards;
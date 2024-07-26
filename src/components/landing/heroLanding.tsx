

export const Hero = () => {
    

  return (
    <div className={"flex flex-col justify-evenly lg:flex-row"}>
      <div className={"flex flex-col items-center mt-5 "}>
        <div className={"font-extrabold font-sans	line-clamp-4 text-6xl m-10 tracking-wider shadow-inner	"}>WEL COME</div>       
            <div className={"font-bold font-sans	 text-3xl	"}>TO THE E-LEARNING WORLD.</div>
        <div className={"font-semibold font-serif	 text-1xl	m-5 mt-10"}>“You don't understand anything until you learn it more than one way.”</div>
        <div className={"font-semibold font-serif	 text-1xl mb-2	"}>—Marvin Minsky.</div>
       <img src="/programmer.jpg" alt="Hero Image" className={"rounded-md	mt-5 w-5/12 h-5/12 shadow-2xl  lg:m-0"} />

        </div>
      <img src="/elearning.jpg" alt="Hero Image" className={"rounded-md	mt-5 shadow-2xl lg:m-0"} />
    </div>
  );
};

export default Hero;
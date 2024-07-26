import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={"border-t border-slate-300 bg-slate-200 flex flex-col items-center justify-centre px-8 py-7 mt-3"}>
      <div className={"font-bold text-lg"}>Contact us at <Link to={"edtech123456@edtech.com"} className={"text-sky-500	hover:text-violet-800	"} >support@edtech.com </Link> or follow us on social media</div>
      <div>Facebook | Twitter | <a href="https://www.linkedin.com/in/sandip-kumar-yadav-1046s" target="_blank" rel="noopener noreferrer" className="cursor-pointer">LinkedIn</a> | Instagram</div>
    </div>
  );
};

export default Footer;
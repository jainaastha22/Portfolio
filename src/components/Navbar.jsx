import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6 relative z-20">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-8 w-8"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-gray-800">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>;
}import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6 relative z-20">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-8 w-8"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-gray-800">
        <a 
          href="https://www.linkedin.com/in/aastha-jain22/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
            <FaLinkedin />
        </a>
        <a 
          href="https://github.com/jainaastha22" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/Aastha_019" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        </div>
    </nav>
  );
};

export default Navbar

export default Navbar

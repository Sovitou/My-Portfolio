import logo from "../Asset/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className=" flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className=" mx-10 text-2xl h-32 w-32" />
          </div>
          <div className="m-8 flex items-center justify-center gap-6 text-2xl">
            <FaLinkedin className="h-8 w-8" />
            <FaFacebook className="h-8 w-8" />
            <FaGithub className="h-8 w-8" />
            <FaTelegram className="h-8 w-8" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

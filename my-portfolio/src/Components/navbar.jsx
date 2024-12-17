import logo from "../Asset/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="border border-black">
      <nav className="flex items-center justify-between px-4 py-4">
        <div className="flex flex-shrink-0 items-center">
          <img
            src={logo}
            alt="logo"
            className="mx-4 h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32"
          />
        </div>
        <div className="m-4 flex flex-wrap items-center justify-center gap-4 text-xl sm:gap-6 md:gap-8">
          <a
            href="https://www.linkedin.com/in/khem-sovitou/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100038201165446&mibextid=JRoKGi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://github.com/Sovitou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://t.me/vitou404"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

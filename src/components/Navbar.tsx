import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="">
      <div className=" sm:px-8 px-3 sm:py-2 py-5 flex absolute top-0  justify-between items-center w-full ring-1 ring-cyan-900  bg-gray-950 bg-opacity-50 ">
        {/* logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="inline ml-2 h-6 mt-1 sm:h-8 sm:mt-0 rounded text-white"
          />
          <p className="text-white ml-4 font-bold text-xl">ChlorideOS</p>
        </div>
        {/* download button */}
        <div className="flex items-center">
          {/* <button>Premium</button> */}
          <a
            href="https://discord.com/invite/mNPwpRt97Q"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="mr-5 hover:text-blue-200  transition-all cursor-pointer"
            />
          </a>

          <Link
            to="prices"
            smooth={true}
            duration={500}
            className="hidden bg-lightBlue m-3 text-white px-5 py-1.5 rounded-3xl cursor-pointer transition-all hover:bg-blue-700 sm:block"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}

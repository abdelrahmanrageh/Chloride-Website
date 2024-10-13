// import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="">
      <div className=" sm:px-8 px-3 sm:py-2 py-5 flex fixed top-0 z-50 justify-between items-center w-full ring-1 ring-cyan-900  bg-gray-950 bg-opacity-50 backdrop-blur-md">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="inline ml-2 h-6 mt-1 sm:h-8 sm:mt-0 rounded text-white"
          />
          <p className="text-white ml-4 font-bold text-xl">ChlorideOS</p>
        </Link>
        {/* download button */}
        <div className="flex items-center">
          {/* <button>Premium</button> */}
          <a
            href="https://discord.gg/9ZCgxhaYV6"
            target="_blank"
            title="Join our Discord"
            rel="noreferrer noopener"
          >
            {/* <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="mr-5 hover:text-blue-200  transition-all cursor-pointer"
            /> */}
            <FaDiscord className="text-white h-8 w-8 mr-2 hover:text-blue-100  transition-all cursor-pointer" />
          </a>
        
          <Link
            to="/download"
            // smooth={true}
            // duration={500}
            className="hidden  bg-lightBlue m-3 text-white px-5 py-1.5 rounded-3xl cursor-pointer transition-all hover:bg-blue-700 sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 mb-1 mx-0 mr-2 inline-block"
              viewBox="0 0 640 512"
            >
              <path
                fill="white"
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
              />
            </svg>
            Download
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

// import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import { Link as scrollLink} from "react-scroll";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { FiExternalLink } from "react-icons/fi";
export default function Navbar() {
  const navigators = [
  
 

    {
      name: "About",
      to: "/#about",
    },
    {
      name: "Pricing",
      to: "/#prices",
    },
    {
      name: "FAQ",
      to: "/#faq",
    },
  ];
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="">
        <div className=" sm:px-8 px-3 sm:py-2 py-5 flex fixed top-0 z-50 justify-between items-center w-full  bg-opacity-50 backdrop-blur-md">
          {/* logo */}
          <Link to="/" className="flex items-center lg:w-64">
            <img
              src={logo}
              alt="logo"
              className="inline ml-2  h-10 sm:mt-0 rounded text-white"
            />
            <p className="text-white ml-2 font-bold text-2xl">AtomOS</p>
          </Link>
          <nav>
            {/* mobile menu  */}
            <button
              onClick={() => setNavbar(!navbar)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {navbar && (
              <div
                className=" w-full md:hidden md:w-auto absolute right-0 max-w-xs mr-3  backdrop-blur-xl mt-2"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-950/95 md:dark:bg-gray-900 dark:border-sky-950">
                  <li onClick={() => setNavbar(false)}>
                    <Link
                      to={"/"}
                      className={`block py-2 px-3 text-white rounded-lg md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${
                        location.pathname === "/" ? "bg-sky-500" : ""
                      }`}
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li onClick={() => setNavbar(false)}>
                    <Link
                      to={"/download"}
                      className={`block py-2 px-3 text-white rounded-lg md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${
                        location.pathname === "/download" ? "bg-sky-500" : ""
                      }`}
                      aria-current="page"
                    >
                      Downloads
                    </Link>
                  </li>
                  {navigators.map((nav, index) => (
                    <>
                      <li key={index} onClick={() => setNavbar(false)}>
                        <Link
                          to={nav.to}
                          className={`block py-2 px-3 text-white rounded-lg md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${
                            location.pathname === nav.to ? "bg-sky-500" : ""
                          }`}
                          aria-current="page"
                        >
                          {nav.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            )}
            {/* desktop */}
            <ul className=" lg:gap-12 gap-4 hidden md:flex">
              <li>
                <Link
                  className="hover:text-gray-300 transition-all"
                  to={"/download"}
                >
                  Downloads
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-gray-300 transition-all"
                  href={"/#about"}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-300 transition-all"
                  href={"/#prices"}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-300 transition-all"
                  href={"/#faq"}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:flex items-center hidden">
            {/* 
            <a
              href="https://discord.gg/9ZCgxhaYV6"
              target="_blank"
              title="Join our Discord"
              rel="noreferrer noopener"
            >
             
              <FaDiscord className="text-white h-8 w-8 mr-2 hover:text-blue-100  transition-all cursor-pointer" />
            </a> */}

            <Link
              to="/download"
              // smooth={true}
              // duration={500}
              className="hidden  bg-lightBlue m-3 text-white px-5 py-1.5 rounded-3xl cursor-pointer transition-all hover:bg-sky-500 sm:block"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mb-1 mx-0 mr-2 inline-block"
                viewBox="0 0 640 512"
              >
                <path
                  fill="white"
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                />
              </svg> */}
              Get Started For Free
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className="mt-[73px] flex w-full justify-center items-center md:hidden bg-gradient-to-r from-sky-600 to-violet-900">
        <Link
          to="https://atom-os.vercel.app/"
          // smooth={true}
          // duration={500}
          className=" items-center text-gray-300  transition-all cursor-pointer flex"
        >
          visit
          <span className="bg-gradient-to-r ml-2 flex items-center from-teal-300 to-sky-400   bg-clip-text text-transparent font-bold text-xl ">
            {" "}
            AtomOS
          </span>
          <FiExternalLink className="text-sky-400 inline ml-1 text-lg" />
        </Link>
      </div> */}
    </>
  );
}

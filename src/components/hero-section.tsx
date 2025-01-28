import GridBackground from "./GridBackground";
import desktop from "../assets/desktop.jpg";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";


export default function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full   pb-10 max-h-screen ">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-center mt-40 md:mt-60 text-5xl md:text-6xl font-semibold text-gray-200  px-5 ">
          It's Time To Change
        </h2>
        <h3 className="text-center  text-xl  text-gray-400 mb-10 px-5">
          It's time for a new Windows experience.
        </h3>
        <Link
          href="#prices"
          to="prices"
          smooth={true}
          className="bg-slate-900 max-w-[300px] mx-auto text-center block cursor-pointer text-white px-14 py-3 rounded-3xl transition-all mb-10"
        >
          Need More than this?
        </Link>
      </m.div>
      <div className="flex">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:flex flex-col items-center justify-start gap-4 me-4 hidden"
        >
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">70%</p>
            <p className="text-xs">Lower Ram Usage</p>
          </div>
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">50%</p>
            <p className="text-xs">Lower Cpu Usage</p>
          </div>
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">80%</p>
            <p className="text-xs">Lower Disk Usage</p>
          </div>
        </m.div>
        <m.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto h-48 -mb-12  md:h-80 sm:h-72 lg:h-[400px] 2xl:h-[500px]  rounded-xl"
          src={desktop}
          alt=""
        />
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:flex flex-col items-center justify-start gap-4 ms-4 hidden"
        >
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">Zero</p>
            <p className="text-xs">Bloatwares</p>
          </div>
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">+2.6k</p>
            <p className="text-xs">active users</p>
          </div>
          <div className="bg-slate-950 rounded-3xl text-3xl p-4 text-center aspect-square flex items-center justify-center flex-col max-w-[100px]">
            <p className="font-bold">+75k</p>
            <p className="text-xs">Downloads</p>
          </div>
        </m.div>
      </div>
      <GridBackground />
      {/* Gradient */}
      <div className="absolute inset-0 -z-10 flex  rounded-b-3xl bg-gradient-to-b from-slate-950 to-transparent">
        <svg
          className="md:blur-[150px]  blur-2xl mt-60 sm:blur-3xl z-0  scale-[2.5]  md:scale-[1.5] sm:-mb-60 lg:-mb-96 w-full"
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            className="fill-indigo-600 "
            d="M18.1,-25.7C24.7,-20.2,32.1,-16.5,33.9,-11C35.7,-5.5,32,1.9,28.7,8.5C25.5,15.2,22.7,21.3,17.9,26.7C13.2,32.1,6.6,36.8,-0.4,37.3C-7.4,37.9,-14.8,34.3,-20,29C-25.1,23.8,-28,16.9,-29.3,10.2C-30.5,3.5,-30.1,-3.1,-28.7,-9.9C-27.3,-16.7,-24.8,-23.8,-19.9,-29.8C-15,-35.8,-7.5,-40.7,-0.8,-39.6C5.8,-38.4,11.6,-31.1,18.1,-25.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
          ></path>{" "}
        </svg>
        <svg
          className="md:blur-[150px]  blur-2xl mt-60 sm:blur-3xl  z-0  scale-[2.5] opacity-80 md:scale-[1.5] sm:-mb-60 lg:-mb-96 w-full "
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            // fill="url(#sw-gradient)"
            className="fill-cyan-400 "
            d="M18.1,-25.7C24.7,-20.2,32.1,-16.5,33.9,-11C35.7,-5.5,32,1.9,28.7,8.5C25.5,15.2,22.7,21.3,17.9,26.7C13.2,32.1,6.6,36.8,-0.4,37.3C-7.4,37.9,-14.8,34.3,-20,29C-25.1,23.8,-28,16.9,-29.3,10.2C-30.5,3.5,-30.1,-3.1,-28.7,-9.9C-27.3,-16.7,-24.8,-23.8,-19.9,-29.8C-15,-35.8,-7.5,-40.7,-0.8,-39.6C5.8,-38.4,11.6,-31.1,18.1,-25.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            stroke="url(#sw-gradient)"
          ></path>{" "}
        </svg>
      </div>
    </div>
  );
}

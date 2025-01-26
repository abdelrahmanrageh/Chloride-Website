import React, { Children } from "react";
// import { Link } from "react-scroll";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";
function InfoSection({
  children,
  imageOneSrc,
}: {
  children: React.ReactNode;
  imageOneSrc: string;
}) {
  const childrenArray = Children.toArray(children);
  return (
    <>
      <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between ">
        {/* main text & button div */}
        <div className="flex items-start flex-col lg:max-w-md xl:max-w-lg">
          {childrenArray[0]}
          <div className="mt-2  text-lg text-gray-200 text-left lg:w-4/5 2xl:w-full">
            {childrenArray[1]}
          </div>

          {/*  button */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div
             className=" bg-sky-600  mt-10 flex items-center shadow-blueShadow cursor-pointer text-white px-14 py-3 rounded-3xl transition-all  hover:bg-sky-500"
            >
              <Link
                to="prices"
                smooth={true}
                duration={500}
                // className="bg-gradient-to-t from-sky-600 to-sky-400 mt-10 flex items-center shadow-blueShadow cursor-pointer text-white px-14 py-3 rounded-3xl transition-all  hover:bg-teal-500/50"
              >
                {childrenArray[2]}
              </Link>
            </div>
            {childrenArray[4]}
            {/* <p className='mb-20 text-gray-400 text-xs mt-2'>ChlorideOS v1.0 (300MB)</p> */}
          </m.div>
        </div>

        {/* images div */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="relative sm:p-5 flex flex-col items-start group"
        >
          <img
            className="max-h-96 shadow-lightBlueShadow rounded-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
            src={imageOneSrc}
            alt=""
          />
          <div className="absolute inset-4 border-4 rounded-xl translate-x-5 translate-y-5 -z-10 group-hover:translate-x-7 group-hover:translate-y-7 transition-all duration-300 border-sky-300"></div>
          {/* {childrenArray[3]} */}
        </m.div>

        {/* background gradient */}
        {/* <div
          className="absolute -right-0 top-0 -mt-40 -z-10 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[955/1078] w-[60rem] bg-gradient-to-tl from-violet-600 to-cyan-800 opacity-20 blur-3xl"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      </div>
    </>
  );
}

export default InfoSection;
